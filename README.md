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
