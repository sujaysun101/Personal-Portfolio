# Newsletter/Notification Backend

## Features
- Subscribe users by email or phone
- Notify all subscribers of updates (stub: logs to console)
- Ready for integration with email/SMS providers

## Usage
1. Install dependencies:
   ```bash
   npm install express cors body-parser
   ```
2. Start the server:
   ```bash
   node server.js
   ```
3. Endpoints:
   - `POST /api/subscribe` `{ email, phone }`
   - `POST /api/notify` `{ type, message, imageUrl, link }`

## Next Steps
- Integrate with SendGrid/Mailgun for email
- Integrate with Twilio for SMS
- Replace in-memory store with a database for production
