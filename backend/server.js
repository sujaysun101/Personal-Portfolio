// Simple Express backend for newsletter subscriptions and notifications
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// In-memory store for demo (replace with DB in production)
const subscribers = [];

// Subscribe endpoint
app.post('/api/subscribe', (req, res) => {
  const { email, phone } = req.body;
  if (!email && !phone) {
    return res.status(400).json({ error: 'Email or phone required.' });
  }
  subscribers.push({ email, phone });
  res.json({ success: true });
});

// Notify all subscribers (stub)
app.post('/api/notify', (req, res) => {
  const { type, message, imageUrl, link } = req.body;
  // TODO: Integrate with email/SMS service
  // For each subscriber, send personalized message (with image/link for email, just message/link for SMS)
  // This is a stub for demonstration
  console.log('Notify:', { type, message, imageUrl, link });
  res.json({ success: true, notified: subscribers.length });
});

// Simple proxy helper that expects the following env vars per provider:
//   GENKIT_API_URL, GENKIT_API_KEY
//   GEMINI_API_URL, GEMINI_API_KEY
// Each proxy will forward the incoming JSON body to the configured provider URL
// and return the provider's raw response. This keeps API keys server-side.
const ensureFetch = () => {
  if (typeof fetch === 'function') return fetch;
  try {
    // Node >=18 provides global fetch; if not available, we can't proxy without an extra dependency.
    // Return null so handlers can return a helpful error.
    return null;
  } catch (e) {
    return null;
  }
};

app.post('/api/genkit', async (req, res) => {
  const apiUrl = process.env.GENKIT_API_URL;
  const apiKey = process.env.GENKIT_API_KEY;
  if (!apiUrl || !apiKey) {
    return res.status(500).json({ error: 'Genkit not configured on the server. Set GENKIT_API_URL and GENKIT_API_KEY.' });
  }
  const _fetch = ensureFetch();
  if (!_fetch) return res.status(500).json({ error: 'Server fetch() unavailable. Run on Node >= 18 or install a fetch polyfill.' });

  try {
    const providerResp = await _fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(req.body),
    });

    const text = await providerResp.text();
    // Try to parse JSON, otherwise return text
    try {
      const json = JSON.parse(text);
      return res.status(providerResp.status).json(json);
    } catch (_) {
      res.status(providerResp.status).send(text);
    }
  } catch (err) {
    console.error('Genkit proxy error', err);
    res.status(502).json({ error: 'Genkit proxy error', details: String(err) });
  }
});

app.post('/api/gemini', async (req, res) => {
  const apiUrl = process.env.GEMINI_API_URL;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiUrl || !apiKey) {
    return res.status(500).json({ error: 'Gemini not configured on the server. Set GEMINI_API_URL and GEMINI_API_KEY.' });
  }
  const _fetch = ensureFetch();
  if (!_fetch) return res.status(500).json({ error: 'Server fetch() unavailable. Run on Node >= 18 or install a fetch polyfill.' });

  try {
    const providerResp = await _fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(req.body),
    });

    const text = await providerResp.text();
    try {
      const json = JSON.parse(text);
      return res.status(providerResp.status).json(json);
    } catch (_) {
      res.status(providerResp.status).send(text);
    }
  } catch (err) {
    console.error('Gemini proxy error', err);
    res.status(502).json({ error: 'Gemini proxy error', details: String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
