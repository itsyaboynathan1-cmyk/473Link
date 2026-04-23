import { spawn } from 'child_process';
import assert from 'assert/strict';
import fs from 'fs';
import path from 'path';
import { once } from 'events';

const projectDir = path.resolve(new URL('..', import.meta.url).pathname);
const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;
const reportFile = path.join(projectDir, 'tests', 'test-report.json');
const adminPasscode = 'test-passcode';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url) {
  for (let index = 0; index < 50; index += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {}
    await delay(200);
  }
  throw new Error('Server did not start in time.');
}

const runtimeFile = path.join(projectDir, 'data', 'runtime.json');
fs.writeFileSync(runtimeFile, JSON.stringify({
  settings: { showStarterListings: true },
  users: [],
  bookings: [],
  payments: [],
  businessListings: []
}, null, 2));

const server = spawn('node', ['server.js'], {
  cwd: projectDir,
  env: { ...process.env, PORT: String(port), ADMIN_PASSCODE: adminPasscode },
  stdio: ['ignore', 'pipe', 'pipe']
});

let logs = '';
server.stdout.on('data', (chunk) => {
  logs += chunk.toString();
});
server.stderr.on('data', (chunk) => {
  logs += chunk.toString();
});

const checks = [];

try {
  await waitForServer(`${baseUrl}/api/health`);

  const config = await fetch(`${baseUrl}/api/config`).then((res) => res.json());
  assert.equal(config.authEnabled, true);
  checks.push('Config exposes built-in auth support.');

  const home = await fetch(`${baseUrl}/`).then((res) => res.text());
  assert(home.includes('id="authModal"'));
  assert(home.includes('openLoginButton'));
  checks.push('Home page includes login and signup UI.');

  const signupResponse = await fetch(`${baseUrl}/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Asha Noel',
      email: 'asha@example.com',
      password: 'password123',
      phone: '(473) 555-2222',
      parish: "St. George's",
      accountType: 'business'
    })
  });
  const signupData = await signupResponse.json();
  assert.equal(signupResponse.status, 201);
  assert.ok(signupData.token);
  checks.push('User signup returns a session token.');

  const authHeaders = { 'x-auth-token': signupData.token, 'Content-Type': 'application/json' };

  const me = await fetch(`${baseUrl}/api/auth/me`, { headers: { 'x-auth-token': signupData.token } }).then((res) => res.json());
  assert.equal(me.user.email, 'asha@example.com');
  checks.push('Authenticated profile lookup works.');

  const bookingResponse = await fetch(`${baseUrl}/api/bookings`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({
      serviceId: 'plumbing-nutmeg',
      serviceName: 'Nutmeg Plumbing Pro',
      providerName: 'Nutmeg Plumbing Pro',
      category: 'Plumbing',
      parish: "St. George's",
      date: '2026-04-10',
      time: '10:00',
      customerName: 'Asha Noel',
      customerPhone: '(473) 555-2222',
      customerEmail: 'asha@example.com',
      address: 'Grand Anse',
      notes: 'Need a fast fix',
      paymentChoice: 'later',
      amountDueNow: 0,
      amountRemaining: 140
    })
  });
  const bookingData = await bookingResponse.json();
  assert.equal(bookingResponse.status, 201);
  assert.equal(bookingData.booking.userId, signupData.user.id);
  checks.push('Bookings are stored against the signed-in user.');

  const myBookings = await fetch(`${baseUrl}/api/my/bookings`, {
    headers: { 'x-auth-token': signupData.token }
  }).then((res) => res.json());
  assert.equal(myBookings.bookings.length, 1);
  checks.push('Signed-in users can fetch their own booking history.');

  const listingResponse = await fetch(`${baseUrl}/api/business-listings`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({
      businessName: 'Noel Plumbing Services',
      businessPhone: '(473) 555-2222',
      category: 'Plumbing',
      parish: "St. George's",
      summary: 'Fast plumbing repairs for homes and rentals.'
    })
  });
  const listingData = await listingResponse.json();
  assert.equal(listingResponse.status, 201);
  assert.equal(listingData.listing.userId, signupData.user.id);
  checks.push('Business listing submissions now require and use the signed-in account.');

  const adminLoginResponse = await fetch(`${baseUrl}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ passcode: adminPasscode })
  });
  const adminLoginData = await adminLoginResponse.json();
  assert.equal(adminLoginResponse.status, 200);
  const adminHeaders = { 'x-admin-token': adminLoginData.token, 'Content-Type': 'application/json' };

  const approveResponse = await fetch(`${baseUrl}/api/admin/listings/${listingData.listing.id}/action`, {
    method: 'POST',
    headers: adminHeaders,
    body: JSON.stringify({ action: 'approve' })
  });
  assert.equal(approveResponse.status, 200);
  checks.push('Admin approval still works with auth-enabled listings.');

  fs.writeFileSync(reportFile, JSON.stringify({
    passed: true,
    checkedAt: new Date().toISOString(),
    checks
  }, null, 2));
} catch (error) {
  fs.writeFileSync(reportFile, JSON.stringify({
    passed: false,
    checkedAt: new Date().toISOString(),
    checks,
    error: error.message,
    logs
  }, null, 2));
  console.error(error);
  process.exitCode = 1;
} finally {
  server.kill('SIGTERM');
  await once(server, 'exit').catch(() => {});
}
