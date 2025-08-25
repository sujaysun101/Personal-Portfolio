Security and Secrets
====================

This project uses serverless functions to proxy requests to Google Gemini. Do NOT commit credentials to the repository.

If you accidentally committed a secret (for example, `.env`), take these steps immediately:

1. Revoke and rotate the exposed credential in the provider console (Google Cloud IAM/API Keys).
2. Remove the secret from the repo history:
   - `git rm --cached .env`
   - `echo ".env" >> .gitignore`
   - `git commit -m "Remove .env and ignore"`
   - Optionally use `git filter-repo` or `BFG Repo-Cleaner` to scrub the secret from history.
3. Add the new secret to your hosting provider's secret manager (Vercel/Netlify) and do not commit it.

Local development
-----------------
Copy `.env.example` to `.env.local` and fill in the values. Do not commit `.env.local`.
