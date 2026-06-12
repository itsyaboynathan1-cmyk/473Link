473Link Premium Mobile + Preview-Ready Upgrade

Replace these files in your GitHub-connected project folder:

1. server.js -> main project folder
2. package.json -> main project folder
3. package-lock.json -> main project folder
4. public/app.js -> public folder
5. public/styles.css -> public folder
6. public/index.html -> public folder
7. public/manifest.json -> public folder
8. public/sw.js -> public folder
9. public/pwa-install.js -> public folder

Do NOT replace:
- data/
- node_modules/
- .git/

Railway temporary email setting:
Add this variable in Railway while you wait for your card/domain:

AUTH_EMAIL_MODE=preview

Keep these variables too:
RESEND_API_KEY=your key
RESEND_FROM_EMAIL=onboarding@resend.dev

Preview mode lets people test signup without Resend sending real email. The verification code appears in the app.

After replacing files locally:
npm install
npm start

Test locally:
1. Signup works in preview mode
2. Login as nathan@grenadamarine.com
3. Admin controls show only for nathan@grenadamarine.com
4. Logo upload works
5. Banner upload works
6. App looks good on phone/mobile view
7. Install button appears where supported

After testing:
git status
git add .
git commit -m "Premium mobile preview-ready update"
git push

Then Railway will redeploy live.
