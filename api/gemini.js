// Vercel serverless function to proxy requests to Google Gemini (Vertex AI)
// Reads GEMINI_API_URL and GEMINI_API_KEY from environment variables.
// Deploy this to Vercel (or Netlify functions) and set the env vars in the provider UI.

import { GoogleAuth } from 'google-auth-library';

// Simple in-memory rate limiter (per-IP). For serverless, consider using a
// durable store (Redis) for production. This limiter is best-effort.
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 20; // max requests per window per IP
const ipBuckets = new Map();

async function getAccessToken() {
  // If GEMINI_SA_KEY_PATH or GEMINI_SA_KEY_JSON is set, use service account flow
  const keyPath = process.env.GEMINI_SA_KEY_PATH;
  const keyJson = process.env.GEMINI_SA_KEY_JSON;
  if (!keyPath && !keyJson) return null;

  const auth = new GoogleAuth({
    ...(keyPath ? { keyFilename: keyPath } : {}),
    credentials: keyJson ? JSON.parse(keyJson) : undefined,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });
  const client = await auth.getClient();
  const token = await client.getAccessToken();
  return token && (token.token || token);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const apiUrl = process.env.GEMINI_API_URL;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiUrl || (!apiKey && !process.env.GEMINI_SA_KEY_PATH && !process.env.GEMINI_SA_KEY_JSON)) {
    return res.status(500).json({ error: 'Gemini not configured. Set GEMINI_API_URL and GEMINI_API_KEY or service account env vars.' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const bucket = ipBuckets.get(ip) || { count: 0, start: now };
  if (now - bucket.start > RATE_LIMIT_WINDOW_MS) {
    bucket.count = 0;
    bucket.start = now;
  }
  bucket.count += 1;
  ipBuckets.set(ip, bucket);
  if (bucket.count > RATE_LIMIT_MAX) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }

  // Basic input validation
  const body = req.body || {};
  if (!body.prompt && !body.instances && !body.input && !body.messages) {
    return res.status(400).json({ error: 'Request must include prompt, instances, input, or messages' });
  }

  try {
  console.debug('[api/gemini] Incoming request body:', JSON.stringify(req.body).slice(0, 1000));
    // Prefer service-account access token if available
    const saToken = await getAccessToken();
    const bearer = saToken || apiKey;
  console.debug('[api/gemini] Using bearer token source:', saToken ? 'service-account' : (apiKey ? 'api-key' : 'none'));

    const providerRes = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearer}`,
      },
      body: JSON.stringify(req.body),
    });

    const text = await providerRes.text();
    try {
      const json = JSON.parse(text);
      return res.status(providerRes.status).json(json);
    } catch (e) {
      return res.status(providerRes.status).send(text);
    }
  } catch (err) {
    console.error('Gemini proxy error', err);
    return res.status(502).json({ error: 'Gemini proxy error', details: String(err) });
  }
}
