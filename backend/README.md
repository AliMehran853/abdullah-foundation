# Abdullah Foundation — Backend (Node.js / Express)

Secure REST API for the Abdullah Foundation donation page. Integrates the
[Razorpay](https://razorpay.com) payment gateway with server-side order creation,
signature verification, and webhook confirmation.

## Stack

- **Node.js >= 18** (ESM)
- **Express 5**
- **Razorpay SDK**
- `helmet`, `cors`, `express-rate-limit`, `express-validator`
- Donation records persisted locally in `backend/data/donations.json` (gitignored,
  contains donor PII). Swap `src/store/donationStore.js` for a real database later
  without changing the API.

## Quick start

```bash
cd backend

# 1) Install dependencies
npm install

# 2) Create your environment file
cp .env.example .env

# 3) Fill .env with YOUR Razorpay credentials, then:
npm run dev        # nodemon on http://localhost:5000
```

The `.env` file is gitignored — it will NEVER be committed or pushed to GitHub.

## Get your Razorpay credentials

1. Create an account at https://dashboard.razorpay.com
2. **Test mode is enabled by default** — everything below stays in test mode
   until you choose to go live.
3. Go to **Settings → API Keys** → *Generate Key*.
4. Copy `Key ID` → `.env` → `RAZORPAY_KEY_ID`
5. Copy `Key Secret` → `.env` → `RAZORPAY_KEY_SECRET`
6. Configure the webhook:
   - **Settings → Webhooks → Add webhook**
   - URL: `https://<your-domain>/api/webhooks/razorpay`
     (in dev, use a tool like ngrok or localtunnel to expose your machine)
   - Events to subscribe: `payment.authorized`, `payment.failed`
   - Webhook Secret: any strong random string → `.env` → `RAZORPAY_WEBHOOK_SECRET`
7. Restart the backend. The log should say `Razorpay configured`.

Test cards for **test mode** (no real money moves):
`4111 1111 1111 1111` · any future expiry · any 3-digit CVV
UPI for testing: `success@razorpay`

## API endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/config/payment` | Public payment config (key_id, limits) for the checkout UI |
| POST | `/api/payments/create-order` | Validates donor data + creates a Razorpay order |
| POST | `/api/payments/verify` | Verifies the checkout signature and marks the donation PAID |
| POST | `/api/webhooks/razorpay` | Razorpay event notifications (raw body verified via HMAC) |

### Donation flow

```
Browser  ──POST /api/payments/create-order {amount,name,email,mobile,pan?}──▶  Backend
                                                                                │ validate
                                                                                │ orders.create()
Browser  ◀────────── {orderId, keyId, amountPaise, currency} ──────────────────┘
Browser  ── checkout.js modal ──▶  donor pays
Browser  ──POST /api/payments/verify {payment_id, order_id, signature} ────────▶  Backend
                                                                                │ HMAC verify
Donation marked PAID  ◀────────────────────────────────────────────────────────┘
Razorpay ──POST /api/webhooks/razorpay (payment.authorized) ────────────────────▶  Backend
                                                                                │ HMAC verify (raw body)
```

### Example request

```bash
curl -X POST http://localhost:5000/api/payments/create-order \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 500,
    "name": "Mohd Example",
    "email": "example@mail.com",
    "mobile": "9876543210",
    "pan": "ABCDE1234F"
  }'
```

## Security measures

- **Secrets only in `.env`** (gitignored). Only the public `key_id` leaves the server.
- **Input validation** on every endpoint (`express-validator`): amount range,
  email format, 10-digit Indian mobile, PAN format.
- **Rate limiting** per IP on order creation / verification.
- **HMAC-SHA256 signature verification** for both checkout callback and webhook
  (the webhook verifies against the **raw body** with the dedicated webhook secret).
- **CORS allowlist** restricted to origins in `CLIENT_ORIGIN`.
- **Helmet** security headers, hidden `x-powered-by`, central error handler that
  never leaks secrets, fail-fast startup in production when keys are missing.

## Available env variables

See `.env.example` for the full documented list:
`RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`,
`PORT`, `NODE_ENV`, `CLIENT_ORIGIN`, `MIN_DONATION_AMOUNT`, `MAX_DONATION_AMOUNT`.

## Frontend dev setup

The Vite dev server proxies `/api` → `http://localhost:5000`
(see `vite.config.js`). Start both:

```bash
# terminal 1
cd backend && npm run dev

# terminal 2 (project root)
npm install && npm run dev
```

Open http://localhost:5173 → the donation form is now live.