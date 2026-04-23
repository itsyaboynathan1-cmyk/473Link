# 473Link updated app

This package includes a darker, more premium 473Link web app refresh with:

- renamed branding from Link473 to 473Link
- homepage copy focused on discovery, visibility, and opportunities
- a darker visual system for a more premium feel
- starter listings turned off by default
- real approved business listings seeded into runtime data, including Haji Auto
- business onboarding copy aligned with founding partner outreach

## Run locally

```bash
npm install
npm start
```

Open:

```bash
http://localhost:3000
```

## Notes

- Public assets now live in `public/` and runtime data is in `data/runtime.json`.
- Operator dashboard default passcode is still `473admin` until you change it.
- Booking and payment logic still exists under the hood, but the public-facing experience now emphasizes discovery and business visibility first.


## Email verification with Resend

To send real verification codes by email, add these Railway variables:

- `RESEND_API_KEY` = your Resend API key
- `RESEND_FROM_EMAIL` = a verified sender like `verify@yourdomain.com`
- `RESEND_FROM_NAME` = optional, defaults to `473Link`
- `RESEND_REPLY_TO` = optional support address

If `RESEND_API_KEY` and `RESEND_FROM_EMAIL` are both present, the app sends real emails through Resend. If they are missing, the app falls back to preview mode so you can still test locally.
