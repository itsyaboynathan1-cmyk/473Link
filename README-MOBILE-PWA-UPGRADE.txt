473Link mobile-first PWA upgrade

Replace these files in the app folder you are running:

1. server.js -> main project folder
2. public/app.js -> public/app.js
3. public/styles.css -> public/styles.css
4. public/index.html -> public/index.html
5. public/manifest.json -> public/manifest.json
6. public/sw.js -> public/sw.js
7. public/pwa-install.js -> public/pwa-install.js

Then run:

npm install
npm start

What this upgrade includes:
- mobile-first visual polish for cards, hero, profile drawer, and admin tables
- installable PWA manifest and service worker improvements
- install prompt button support where supported by the browser
- logo and banner drag/drop support retained
- admin navigation hidden from public/non-admin users
- admin backend login requires an authenticated user whose email is nathan@grenadamarine.com
- Resend email verification support retained

Railway variables to keep:
RESEND_API_KEY
RESEND_FROM_EMAIL
ADMIN_PASSCODE

Recommended additional Railway variable:
ADMIN_EMAIL=nathan@grenadamarine.com
