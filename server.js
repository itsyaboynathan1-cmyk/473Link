import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';
import crypto from 'crypto';
import { Resend } from 'resend';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');
const uploadsDir = path.join(publicDir, 'uploads');
const dataDir = path.join(__dirname, 'data');
const runtimeFile = path.join(dataDir, 'runtime.json');
const port = Number(process.env.PORT || 3000);

const paymentMode = process.env.PAYMENT_MODE || 'mock';
const paymentProviderName = process.env.PAYMENT_PROVIDER_NAME || (paymentMode === 'live_link' ? 'Hosted checkout' : 'Founding partner mode');
const paymentUrlTemplate = process.env.PAYMENT_URL_TEMPLATE || '';
const adminPasscode = process.env.ADMIN_PASSCODE || '473admin';
const adminEmail = String(process.env.ADMIN_EMAIL || 'nathan@grenadamarine.com').trim().toLowerCase();
const requestedAuthEmailMode = String(process.env.AUTH_EMAIL_MODE || '').trim().toLowerCase();
const resendApiKey = String(process.env.RESEND_API_KEY || '').trim();
const resendFromEmail = String(process.env.RESEND_FROM_EMAIL || '').trim();
const resendFromName = String(process.env.RESEND_FROM_NAME || '473Link').trim() || '473Link';
const resendReplyTo = String(process.env.RESEND_REPLY_TO || '').trim();
const resendClient = resendApiKey ? new Resend(resendApiKey) : null;
const authEmailMode = requestedAuthEmailMode || (resendClient && resendFromEmail ? 'resend' : 'preview');
const adminSessions = new Set();
const userSessions = new Map();
const starterProviderCount = 8;
const starterServiceIds = [
  'marine-bluewater',
  'plumbing-nutmeg',
  'cleaning-harbour',
  'coolbreeze-ac',
  'glow-up-beauty',
  'green-hills-yard',
  'island-electric',
  'tech-link-support'
];

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const MIME = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=UTF-8'
};


function saveBase64Image(value, prefix = 'image') {
  const input = String(value || '').trim();
  if (!input) return '';
  if (input.startsWith('/uploads/') || input.startsWith('http://') || input.startsWith('https://') || input.startsWith('images/')) {
    return input;
  }

  const match = input.match(/^data:(image\/(?:png|jpe?g|webp|gif|svg\+xml));base64,([\s\S]+)$/i);
  if (!match) return '';

  const mime = match[1].toLowerCase();
  const extension = mime.includes('jpeg') ? 'jpg' : mime.includes('svg') ? 'svg' : mime.split('/')[1];
  const safePrefix = String(prefix || 'image').replace(/[^a-z0-9_-]/gi, '').toLowerCase() || 'image';
  const filename = `${safePrefix}-${Date.now()}-${crypto.randomBytes(4).toString('hex')}.${extension}`;
  const filePath = path.join(uploadsDir, filename);

  fs.writeFileSync(filePath, Buffer.from(match[2], 'base64'));
  return `/uploads/${filename}`;
}

function runtimeDefaults() {
  return {
    settings: {
      showStarterListings: false,
      hiddenStarterIds: []
    },
    users: [],
    bookings: [],
    payments: [],
    businessListings: []
  };
}

function createId(prefix) {
  return `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}


function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(String(password), salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  if (!stored || !stored.includes(':')) return false;
  const [salt, expected] = String(stored).split(':');
  const actual = crypto.scryptSync(String(password), salt, 64).toString('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(actual, 'hex'), Buffer.from(expected, 'hex'));
  } catch {
    return false;
  }
}

function sanitiseUser(user = {}) {
  return {
    id: String(user.id || ''),
    name: String(user.name || ''),
    email: String(user.email || ''),
    phone: String(user.phone || ''),
    parish: String(user.parish || ''),
    accountType: String(user.accountType || 'customer'),
    isVerified: Boolean(user.isVerified),
    createdAt: String(user.createdAt || '')
  };
}

function generateVerificationCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function verificationExpiry(minutes = 15) {
  return new Date(Date.now() + minutes * 60 * 1000).toISOString();
}

function buildVerificationDelivery(user) {
  const payload = {
    mode: authEmailMode,
    email: String(user.email || ''),
    expiresAt: user.verificationExpiresAt || verificationExpiry()
  };
  if (authEmailMode === 'preview') {
    payload.previewCode = String(user.verificationCode || '');
  }
  return payload;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildVerificationEmailHtml(user) {
  const code = escapeHtml(String(user.verificationCode || ''));
  const name = escapeHtml(String(user.name || 'there'));
  const expiry = escapeHtml(String(user.verificationExpiresAt || ''));
  return `
    <div style="font-family:Inter,Arial,sans-serif;background:#f5f7fb;padding:24px;color:#07111d;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:18px;padding:32px;border:1px solid #e8edf4;">
        <div style="font-size:24px;font-weight:800;margin-bottom:12px;color:#d61f26;">473Link</div>
        <p style="margin:0 0 12px;font-size:16px;">Hi ${name},</p>
        <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Use this verification code to finish creating your 473Link account.</p>
        <div style="margin:24px 0;padding:20px;border-radius:16px;background:#07111d;color:#ffffff;text-align:center;">
          <div style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;opacity:.75;margin-bottom:8px;">Verification code</div>
          <div style="font-size:36px;font-weight:800;letter-spacing:.2em;">${code}</div>
        </div>
        <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#44556b;">This code expires at ${expiry}.</p>
        <p style="margin:0;font-size:14px;line-height:1.6;color:#44556b;">If you didn’t request this, you can ignore this email.</p>
      </div>
    </div>
  `;
}

async function deliverVerificationEmail(user) {
  const delivery = buildVerificationDelivery(user);
  if (authEmailMode !== 'resend') return delivery;
  if (!resendClient || !resendFromEmail) {
    throw new Error('Resend email delivery is not configured. Add RESEND_API_KEY and RESEND_FROM_EMAIL.');
  }
  const from = resendFromEmail.includes('<') ? resendFromEmail : `${resendFromName} <${resendFromEmail}>`;
  const emailPayload = {
    from,
    to: [String(user.email || '').trim()],
    subject: 'Your 473Link verification code',
    html: buildVerificationEmailHtml(user)
  };
  if (resendReplyTo) emailPayload.replyTo = resendReplyTo;
  const { data, error } = await resendClient.emails.send(emailPayload);
  if (error) {
    const message = typeof error === 'string' ? error : (error.message || 'Unable to send verification email.');
    throw new Error(message);
  }
  return {
    ...delivery,
    emailId: data?.id || ''
  };
}

function createUserFromBody(body = {}) {
  const user = {
    id: String(body.id || createId('USR')),
    name: String(body.name || '').trim(),
    email: String(body.email || '').trim().toLowerCase(),
    passwordHash: String(body.passwordHash || ''),
    phone: String(body.phone || '').trim(),
    parish: String(body.parish || '').trim(),
    accountType: ['customer', 'business'].includes(String(body.accountType || 'customer')) ? String(body.accountType || 'customer') : 'customer',
    isVerified: toBoolean(body.isVerified),
    verificationCode: String(body.verificationCode || ''),
    verificationExpiresAt: body.verificationExpiresAt ? String(body.verificationExpiresAt) : null,
    createdAt: String(body.createdAt || new Date().toISOString())
  };
  return user;
}

function toArray(value, fallback = []) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }
  if (typeof value === 'string') {
    return value.split(',').map((item) => item.trim()).filter(Boolean);
  }
  return fallback;
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function clampPercent(value, fallback = 0) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(90, Math.max(0, parsed));
}

function deriveDepositPercent(entry = {}) {
  const directPercent = Number(entry.depositPercent);
  if (Number.isFinite(directPercent) && directPercent > 0) {
    return clampPercent(directPercent, 0);
  }
  const startingPrice = Math.max(0, toNumber(entry.startingPrice, 0));
  const legacyDeposit = Math.max(0, toNumber(entry.deposit, 0));
  if (startingPrice > 0 && legacyDeposit > 0) {
    return clampPercent(Math.round((legacyDeposit / startingPrice) * 100), 0);
  }
  return 0;
}

function deriveDepositAmount(startingPrice, depositPercent) {
  const amount = (Math.max(0, toNumber(startingPrice, 0)) * clampPercent(depositPercent, 0)) / 100;
  return Math.round(amount * 100) / 100;
}

function toBoolean(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value === 1;
  if (typeof value === 'string') {
    return ['true', '1', 'yes', 'on'].includes(value.trim().toLowerCase());
  }
  return false;
}

function formatToday() {
  return new Date().toISOString().slice(0, 10);
}

function createListingFromLegacyLead(lead = {}) {
  return {
    id: createId('LST'),
    ownerName: String(lead.ownerName || ''),
    businessName: String(lead.businessName || ''),
    businessPhone: String(lead.businessPhone || ''),
    email: String(lead.email || ''),
    category: String(lead.category || 'General'),
    parish: String(lead.parish || "St. George's"),
    summary: String(lead.note || 'Submitted from the older business interest form.'),
    services: [String(lead.category || 'General service')],
    coverage: [String(lead.parish || "St. George's")],
    hours: 'Hours shared after approval',
    responseMinutes: 30,
    startingPrice: 0,
    deposit: 0,
    depositPercent: 0,
    sameDay: false,
    plan: 'starter',
    website: '',
    note: String(lead.note || ''),
    status: 'pending',
    featured: false,
    verified: false,
    createdAt: String(lead.createdAt || new Date().toISOString()),
    reviewedAt: null,
    approvedAt: null
  };
}

function normaliseRuntime(raw) {
  const defaults = runtimeDefaults();
  const parsed = raw && typeof raw === 'object' ? raw : {};
  const businessListings = Array.isArray(parsed.businessListings)
    ? parsed.businessListings.map((listing) => {
        const startingPrice = Math.max(0, toNumber(listing.startingPrice, 0));
        const depositPercent = deriveDepositPercent(listing);
        return {
          id: String(listing.id || createId('LST')),
          ownerName: String(listing.ownerName || ''),
          businessName: String(listing.businessName || ''),
          businessPhone: String(listing.businessPhone || ''),
          email: String(listing.email || ''),
          category: String(listing.category || 'General'),
          parish: String(listing.parish || "St. George's"),
          summary: String(listing.summary || ''),
          services: toArray(listing.services, [String(listing.category || 'General service')]),
          coverage: toArray(listing.coverage, [String(listing.parish || "St. George's")]),
          hours: String(listing.hours || 'Hours shared after approval'),
          responseMinutes: Math.max(5, toNumber(listing.responseMinutes, 30)),
          startingPrice,
          deposit: startingPrice > 0 && depositPercent > 0
            ? deriveDepositAmount(startingPrice, depositPercent)
            : Math.max(0, toNumber(listing.deposit, 0)),
          depositPercent,
          sameDay: toBoolean(listing.sameDay),
          plan: ['starter', 'growth'].includes(String(listing.plan || 'starter')) ? String(listing.plan || 'starter') : 'starter',
          website: String(listing.website || ''),
          logo: String(listing.logo || ''),
          banner: String(listing.banner || ''),
          note: String(listing.note || ''),
          status: ['pending', 'approved', 'rejected'].includes(String(listing.status || 'pending')) ? String(listing.status || 'pending') : 'pending',
          featured: toBoolean(listing.featured),
          verified: toBoolean(listing.verified),
          createdAt: String(listing.createdAt || new Date().toISOString()),
          reviewedAt: listing.reviewedAt ? String(listing.reviewedAt) : null,
          approvedAt: listing.approvedAt ? String(listing.approvedAt) : null
        };
      })
    : [];

  const migratedListings = Array.isArray(parsed.businessLeads) && !businessListings.length
    ? parsed.businessLeads.map((lead) => createListingFromLegacyLead(lead))
    : [];

  const users = Array.isArray(parsed.users)
    ? parsed.users
        .map((entry) => createUserFromBody({
          ...entry,
          passwordHash: String(entry.passwordHash || ''),
          isVerified: typeof entry.isVerified === 'boolean' ? entry.isVerified : true,
          verificationCode: String(entry.verificationCode || ''),
          verificationExpiresAt: entry.verificationExpiresAt ? String(entry.verificationExpiresAt) : null
        }))
        .filter((entry) => entry.email && entry.passwordHash)
    : [];

  const bookings = Array.isArray(parsed.bookings)
    ? parsed.bookings.map((booking) => ({
        ...booking,
        userId: booking.userId ? String(booking.userId) : null
      }))
    : [];

  return {
    settings: {
      showStarterListings: parsed.settings && typeof parsed.settings === 'object' && typeof parsed.settings.showStarterListings === 'boolean'
        ? parsed.settings.showStarterListings
        : defaults.settings.showStarterListings,
      hiddenStarterIds: parsed.settings && typeof parsed.settings === 'object' && Array.isArray(parsed.settings.hiddenStarterIds)
        ? parsed.settings.hiddenStarterIds.map((item) => String(item)).filter((item) => starterServiceIds.includes(item))
        : []
    },
    users,
    bookings,
    payments: Array.isArray(parsed.payments) ? parsed.payments : [],
    businessListings: businessListings.length ? businessListings : migratedListings
  };
}

function getRuntime() {
  if (!fs.existsSync(runtimeFile)) {
    return runtimeDefaults();
  }
  try {
    const raw = fs.readFileSync(runtimeFile, 'utf8');
    return normaliseRuntime(JSON.parse(raw));
  } catch {
    return runtimeDefaults();
  }
}

function saveRuntime(runtime) {
  fs.writeFileSync(runtimeFile, JSON.stringify(normaliseRuntime(runtime), null, 2));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => {
      const body = Buffer.concat(chunks).toString('utf8');
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error('Invalid JSON body.'));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload, null, 2);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=UTF-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store'
  });
  res.end(body);
}

function sendFile(res, filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const body = fs.readFileSync(filePath);
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Content-Length': body.length,
      'Cache-Control': 'no-store'
    });
    res.end(body);
  } catch {
    sendJson(res, 404, { error: 'Not found.' });
  }
}

function interpolatePaymentUrl(template, booking) {
  return template
    .replaceAll('{bookingId}', encodeURIComponent(booking.id))
    .replaceAll('{amount}', encodeURIComponent(String(booking.amountDueNow)))
    .replaceAll('{email}', encodeURIComponent(booking.customerEmail || ''))
    .replaceAll('{name}', encodeURIComponent(booking.customerName || ''));
}

function buildSummary(runtime) {
  const totalLeads = runtime.bookings.length;
  const pendingListings = runtime.businessListings.filter((listing) => listing.status === 'pending').length;
  const approvedListings = runtime.businessListings.filter((listing) => listing.status === 'approved').length;
  const depositsCollected = runtime.payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
  const sameDayJobs = runtime.bookings.filter((booking) => booking.date === formatToday()).length;

  return {
    totalLeads,
    pendingListings,
    approvedListings,
    depositsCollected,
    sameDayJobs,
    activeProviders: approvedListings + (runtime.settings.showStarterListings ? Math.max(starterProviderCount - ((runtime.settings.hiddenStarterIds || []).length), 0) : 0)
  };
}

function sortListings(listings) {
  return [...listings].sort((a, b) => {
    if (Number(b.featured) !== Number(a.featured)) return Number(b.featured) - Number(a.featured);
    if (Number(b.verified) !== Number(a.verified)) return Number(b.verified) - Number(a.verified);
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
}

function buildAdminDashboard(runtime) {
  const latestBookings = [...runtime.bookings]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 8);
  const pendingBusinessListings = sortListings(runtime.businessListings.filter((listing) => listing.status === 'pending')).slice(0, 20);
  const approvedBusinessListings = sortListings(runtime.businessListings.filter((listing) => listing.status === 'approved')).slice(0, 20);
  const rejectedBusinessListings = sortListings(runtime.businessListings.filter((listing) => listing.status === 'rejected')).slice(0, 10);

  return {
    ...buildSummary(runtime),
    latestBookings,
    pendingBusinessListings,
    approvedBusinessListings,
    rejectedBusinessListings,
    settings: runtime.settings
  };
}

function requireAdmin(req, res) {
  const token = String(req.headers['x-admin-token'] || '');
  if (!token || !adminSessions.has(token)) {
    sendJson(res, 401, { error: 'Admin login required.' });
    return null;
  }
  return token;
}

function requireUser(req, res) {
  const token = String(req.headers['x-auth-token'] || '');
  const userId = token ? userSessions.get(token) : '';
  if (!token || !userId) {
    sendJson(res, 401, { error: 'Please log in to continue.' });
    return null;
  }
  const runtime = getRuntime();
  const user = runtime.users.find((entry) => entry.id === userId);
  if (!user) {
    userSessions.delete(token);
    sendJson(res, 401, { error: 'Your session has expired. Please log in again.' });
    return null;
  }
  return { token, user, runtime };
}

function createListingFromBody(body = {}, mode = 'full') {
  const base = {
    ownerName: String(body.ownerName || '').trim(),
    businessName: String(body.businessName || '').trim(),
    businessPhone: String(body.businessPhone || '').trim(),
    email: String(body.email || '').trim(),
    category: String(body.category || '').trim(),
    parish: String(body.parish || '').trim(),
    summary: String(body.summary || '').trim(),
    services: toArray(body.services),
    coverage: toArray(body.coverage),
    hours: String(body.hours || '').trim(),
    responseMinutes: Math.max(5, toNumber(body.responseMinutes, 30)),
    startingPrice: Math.max(0, toNumber(body.startingPrice, 0)),
    deposit: Math.max(0, toNumber(body.deposit, 0)),
    depositPercent: clampPercent(body.depositPercent, deriveDepositPercent(body)),
    sameDay: toBoolean(body.sameDay),
    plan: ['starter', 'growth'].includes(String(body.plan || 'starter')) ? String(body.plan || 'starter') : 'starter',
    website: String(body.website || '').trim(),
    logo: String(body.logo || '').trim(),
    banner: String(body.banner || '').trim(),
    note: String(body.note || '').trim()
  };

  if (mode === 'legacy') {
    base.summary = base.summary || base.note || 'Submitted from the older business interest form.';
    base.services = base.services.length ? base.services : [base.category || 'General service'];
    base.coverage = base.coverage.length ? base.coverage : [base.parish || "St. George's"];
    base.hours = base.hours || 'Hours shared after approval';
  }

  const required = mode === 'legacy'
    ? ['ownerName', 'businessName', 'businessPhone', 'category', 'parish']
    : ['ownerName', 'businessName', 'businessPhone', 'category', 'parish', 'summary'];

  const missing = required.filter((field) => {
    const value = base[field];
    if (typeof value === 'number') return !Number.isFinite(value);
    return !value;
  });

  if (!base.services.length) base.services = [base.category || 'General service'];
  if (!base.coverage.length) base.coverage = [base.parish || "St. George's"];
  if (!base.hours) base.hours = 'Hours shared after approval';
  if (base.startingPrice <= 0) {
    base.depositPercent = 0;
    base.deposit = 0;
  } else {
    base.depositPercent = clampPercent(base.depositPercent, 0);
    base.deposit = base.depositPercent > 0 ? deriveDepositAmount(base.startingPrice, base.depositPercent) : 0;
  }

  if (missing.length) {
    return { error: `Missing required fields: ${missing.join(', ')}` };
  }

  return {
    listing: {
      id: createId('LST'),
      ...base,
      status: 'pending',
      featured: false,
      verified: false,
      createdAt: new Date().toISOString(),
      reviewedAt: null,
      approvedAt: null
    }
  };
}

const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(reqUrl.pathname);

  if (pathname === '/api/health' && req.method === 'GET') {
    return sendJson(res, 200, {
      ok: true,
      appName: '473Link',
      paymentMode,
      paymentProviderName,
      timestamp: new Date().toISOString()
    });
  }

  if (pathname === '/api/config' && req.method === 'GET') {
    const runtime = getRuntime();
    return sendJson(res, 200, {
      appName: '473Link',
      tagline: 'Connect Grenada through people, businesses, and opportunities.',
      currency: 'XCD',
      paymentMode,
      paymentProviderName,
      supportEmail: 'hello@473link.app',
      showStarterListings: runtime.settings.showStarterListings,
      hiddenStarterIds: runtime.settings.hiddenStarterIds || [],
      authEnabled: true,
      adminEmail,
      authEmailMode,
      authEmailConfigured: authEmailMode === 'resend'
    });
  }


  if (pathname === '/api/auth/signup' && req.method === 'POST') {
    try {
      const body = await readBody(req);
      const name = String(body.name || '').trim();
      const email = String(body.email || '').trim().toLowerCase();
      const password = String(body.password || '');
      const phone = String(body.phone || '').trim();
      const parish = String(body.parish || '').trim();
      const accountType = ['customer', 'business'].includes(String(body.accountType || 'customer')) ? String(body.accountType || 'customer') : 'customer';

      if (!name || !email || !password || password.length < 8 || !phone || !parish) {
        return sendJson(res, 400, { error: 'Name, email, password, phone, and parish are required. Password must be at least 8 characters.' });
      }

      const runtime = getRuntime();
      const exists = runtime.users.find((entry) => entry.email === email);
      if (exists) {
        if (!exists.isVerified) {
          exists.verificationCode = generateVerificationCode();
          exists.verificationExpiresAt = verificationExpiry();
          saveRuntime(runtime);
          const delivery = await deliverVerificationEmail(exists);
          return sendJson(res, 200, {
            ok: true,
            requiresVerification: true,
            email,
            delivery,
            message: authEmailMode === 'resend'
              ? 'This account is waiting for email verification. Check your inbox for the new code.'
              : 'This account is waiting for email verification. Use the new code to finish setup.'
          });
        }
        return sendJson(res, 409, { error: 'An account with that email already exists.' });
      }

      const user = createUserFromBody({
        name,
        email,
        passwordHash: hashPassword(password),
        phone,
        parish,
        accountType,
        isVerified: false,
        verificationCode: generateVerificationCode(),
        verificationExpiresAt: verificationExpiry()
      });

      runtime.users.push(user);
      saveRuntime(runtime);
      const delivery = await deliverVerificationEmail(user);

      return sendJson(res, 201, {
        ok: true,
        requiresVerification: true,
        email,
        delivery,
        message: authEmailMode === 'resend'
          ? 'Account created. Check your email for a verification code.'
          : 'Account created. Verify your email to continue.'
      });
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Unable to create account.' });
    }
  }

  if (pathname === '/api/auth/verify-email' && req.method === 'POST') {
    try {
      const body = await readBody(req);
      const email = String(body.email || '').trim().toLowerCase();
      const code = String(body.code || '').trim();
      if (!email || !code) {
        return sendJson(res, 400, { error: 'Email and verification code are required.' });
      }
      const runtime = getRuntime();
      const user = runtime.users.find((entry) => entry.email === email);
      if (!user) {
        return sendJson(res, 404, { error: 'We could not find that account.' });
      }
      if (user.isVerified) {
        const token = createId('AUT');
        userSessions.set(token, user.id);
        return sendJson(res, 200, { token, user: sanitiseUser(user), alreadyVerified: true });
      }
      if (!user.verificationCode || user.verificationCode !== code) {
        return sendJson(res, 400, { error: 'That verification code is not correct.' });
      }
      if (!user.verificationExpiresAt || Number.isNaN(new Date(user.verificationExpiresAt).getTime()) || new Date(user.verificationExpiresAt) < new Date()) {
        return sendJson(res, 400, { error: 'That verification code has expired. Request a new one.' });
      }
      user.isVerified = true;
      user.verificationCode = '';
      user.verificationExpiresAt = null;
      saveRuntime(runtime);
      const token = createId('AUT');
      userSessions.set(token, user.id);
      return sendJson(res, 200, { token, user: sanitiseUser(user), message: 'Email verified. You are now signed in.' });
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Unable to verify email.' });
    }
  }

  if (pathname === '/api/auth/resend-verification' && req.method === 'POST') {
    try {
      const body = await readBody(req);
      const email = String(body.email || '').trim().toLowerCase();
      if (!email) {
        return sendJson(res, 400, { error: 'Email is required.' });
      }
      const runtime = getRuntime();
      const user = runtime.users.find((entry) => entry.email === email);
      if (!user) {
        return sendJson(res, 404, { error: 'We could not find that account.' });
      }
      if (user.isVerified) {
        return sendJson(res, 200, { ok: true, alreadyVerified: true, message: 'That email is already verified.' });
      }
      user.verificationCode = generateVerificationCode();
      user.verificationExpiresAt = verificationExpiry();
      saveRuntime(runtime);
      const delivery = await deliverVerificationEmail(user);
      return sendJson(res, 200, {
        ok: true,
        email,
        delivery,
        message: authEmailMode === 'resend' ? 'A new verification code was sent to your email.' : 'A new verification code is ready.'
      });
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Unable to resend verification code.' });
    }
  }

  if (pathname === '/api/auth/login' && req.method === 'POST') {
    try {
      const body = await readBody(req);
      const email = String(body.email || '').trim().toLowerCase();
      const password = String(body.password || '');
      const runtime = getRuntime();
      const user = runtime.users.find((entry) => entry.email === email);
      if (!user || !verifyPassword(password, user.passwordHash)) {
        return sendJson(res, 401, { error: 'Incorrect email or password.' });
      }
      if (!user.isVerified) {
        if (!user.verificationCode || !user.verificationExpiresAt || new Date(user.verificationExpiresAt) < new Date()) {
          user.verificationCode = generateVerificationCode();
          user.verificationExpiresAt = verificationExpiry();
          saveRuntime(runtime);
        }
        const delivery = await deliverVerificationEmail(user);
        return sendJson(res, 403, {
          error: 'Please verify your email before logging in.',
          requiresVerification: true,
          email,
          delivery
        });
      }
      const token = createId('AUT');
      userSessions.set(token, user.id);
      return sendJson(res, 200, { token, user: sanitiseUser(user) });
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Unable to log in.' });
    }
  }

  if (pathname === '/api/auth/me' && req.method === 'GET') {
    const auth = requireUser(req, res);
    if (!auth) return;
    return sendJson(res, 200, { user: sanitiseUser(auth.user) });
  }

  if (pathname === '/api/auth/logout' && req.method === 'POST') {
    const token = String(req.headers['x-auth-token'] || '');
    if (token) userSessions.delete(token);
    return sendJson(res, 200, { ok: true });
  }

  if (pathname === '/api/my/bookings' && req.method === 'GET') {
    const auth = requireUser(req, res);
    if (!auth) return;
    const bookings = [...auth.runtime.bookings]
      .filter((entry) => entry.userId === auth.user.id)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return sendJson(res, 200, { bookings });
  }

  if (pathname === '/api/dashboard' && req.method === 'GET') {
    return sendJson(res, 200, buildSummary(getRuntime()));
  }

  if (pathname === '/api/public-listings' && req.method === 'GET') {
    const runtime = getRuntime();
    const listings = sortListings(runtime.businessListings.filter((listing) => listing.status === 'approved'));
    return sendJson(res, 200, { listings });
  }

  if (pathname === '/api/bookings' && req.method === 'POST') {
    const auth = requireUser(req, res);
    if (!auth) return;
    try {
      const body = await readBody(req);
      const required = ['serviceId', 'serviceName', 'providerName', 'date', 'time', 'customerName', 'customerPhone', 'address', 'paymentChoice'];
      const missing = required.filter((field) => !body[field]);
      if (missing.length) {
        return sendJson(res, 400, { error: `Missing required fields: ${missing.join(', ')}` });
      }
      const runtime = auth.runtime;
      const booking = {
        userId: auth.user.id,
        id: createId('BK'),
        serviceId: String(body.serviceId),
        serviceName: String(body.serviceName),
        providerName: String(body.providerName),
        category: String(body.category || ''),
        parish: String(body.parish || ''),
        date: String(body.date),
        time: String(body.time),
        customerName: String(body.customerName),
        customerPhone: String(body.customerPhone),
        customerEmail: String(body.customerEmail || ''),
        address: String(body.address),
        notes: String(body.notes || ''),
        paymentChoice: String(body.paymentChoice),
        amountDueNow: Number(body.amountDueNow || 0),
        amountRemaining: Number(body.amountRemaining || 0),
        status: Number(body.amountDueNow || 0) > 0 ? 'Awaiting payment' : 'Requested',
        createdAt: new Date().toISOString()
      };
      runtime.bookings.push(booking);
      saveRuntime(runtime);
      return sendJson(res, 201, { booking });
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Unable to save booking.' });
    }
  }

  if (pathname === '/api/mock-payment' && req.method === 'POST') {
    try {
      const body = await readBody(req);
      const runtime = getRuntime();
      const booking = runtime.bookings.find((item) => item.id === body.bookingId);
      if (!booking) return sendJson(res, 404, { error: 'Booking not found.' });
      const amount = Number(body.amount || booking.amountDueNow || 0);
      if (!amount) return sendJson(res, 400, { error: 'Amount is required.' });
      booking.status = 'Deposit paid';
      const payment = {
        id: createId('PAY'),
        bookingId: booking.id,
        amount,
        currency: 'XCD',
        cardLast4: String(body.cardLast4 || '4242'),
        type: 'mock_card',
        createdAt: new Date().toISOString()
      };
      runtime.payments.push(payment);
      saveRuntime(runtime);
      return sendJson(res, 201, { booking, payment });
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Unable to process mock payment.' });
    }
  }

  if (pathname === '/api/create-checkout' && req.method === 'POST') {
    try {
      const body = await readBody(req);
      const runtime = getRuntime();
      const booking = runtime.bookings.find((item) => item.id === body.bookingId);
      if (!booking) return sendJson(res, 404, { error: 'Booking not found.' });
      if (paymentMode !== 'live_link' || !paymentUrlTemplate) {
        return sendJson(res, 200, { mode: 'mock' });
      }
      return sendJson(res, 200, {
        mode: 'live_link',
        providerName: paymentProviderName,
        url: interpolatePaymentUrl(paymentUrlTemplate, booking)
      });
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Unable to prepare checkout.' });
    }
  }

  if ((pathname === '/api/business-listings' || pathname === '/api/business-interest') && req.method === 'POST') {
    const auth = requireUser(req, res);
    if (!auth) return;
    try {
      const body = await readBody(req);
      const enrichedBody = {
        ...body,
        logo: saveBase64Image(body.logo, 'logo'),
        banner: saveBase64Image(body.banner, 'banner'),
        ownerName: body.ownerName || auth.user.name,
        email: body.email || auth.user.email,
        businessPhone: body.businessPhone || auth.user.phone,
        parish: body.parish || auth.user.parish
      };
      const { listing, error } = createListingFromBody(enrichedBody, pathname === '/api/business-interest' ? 'legacy' : 'full');
      if (error) return sendJson(res, 400, { error });
      listing.userId = auth.user.id;
      const runtime = auth.runtime;
      runtime.businessListings.push(listing);
      saveRuntime(runtime);
      return sendJson(res, 201, { listing });
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Unable to save business listing.' });
    }
  }

  if (pathname === '/api/admin/login' && req.method === 'POST') {
    const auth = requireUser(req, res);
    if (!auth) return;
    try {
      const body = await readBody(req);
      if (String(auth.user.email || '').trim().toLowerCase() !== adminEmail) {
        return sendJson(res, 403, { error: 'Admin access is restricted to the approved admin account.' });
      }
      // Admin access is tied to the signed-in account email. The old passcode is no longer required.
      const token = createId('ADM');
      adminSessions.add(token);
      return sendJson(res, 200, { token });
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Unable to log in.' });
    }
  }

  if (pathname === '/api/admin/logout' && req.method === 'POST') {
    const token = String(req.headers['x-admin-token'] || '');
    if (token) adminSessions.delete(token);
    return sendJson(res, 200, { ok: true });
  }

  if (pathname === '/api/admin/dashboard' && req.method === 'GET') {
    if (!requireAdmin(req, res)) return;
    return sendJson(res, 200, buildAdminDashboard(getRuntime()));
  }

  if (pathname === '/api/admin/settings' && req.method === 'PATCH') {
    if (!requireAdmin(req, res)) return;
    try {
      const body = await readBody(req);
      const runtime = getRuntime();
      if (typeof body.showStarterListings === 'boolean') {
        runtime.settings.showStarterListings = body.showStarterListings;
      }
      if (Array.isArray(body.hiddenStarterIds)) {
        runtime.settings.hiddenStarterIds = body.hiddenStarterIds.map((item) => String(item)).filter((item) => starterServiceIds.includes(item));
      }
      if (typeof body.showStarterListings !== 'boolean' && !Array.isArray(body.hiddenStarterIds)) {
        return sendJson(res, 400, { error: 'Send showStarterListings and/or hiddenStarterIds.' });
      }
      saveRuntime(runtime);
      return sendJson(res, 200, { settings: runtime.settings });
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Unable to update settings.' });
    }
  }

  if (pathname === '/api/admin/reset' && req.method === 'POST') {
    if (!requireAdmin(req, res)) return;
    const existingUsers = getRuntime().users;
    const fresh = runtimeDefaults();
    fresh.users = existingUsers;
    saveRuntime(fresh);
    return sendJson(res, 200, { ok: true });
  }


  const starterActionMatch = pathname.match(/^\/api\/admin\/starter-services\/([^/]+)\/action$/);
  if (starterActionMatch && req.method === 'POST') {
    if (!requireAdmin(req, res)) return;
    try {
      const starterId = starterActionMatch[1];
      if (!starterServiceIds.includes(starterId)) return sendJson(res, 404, { error: 'Starter service not found.' });
      const body = await readBody(req);
      const action = String(body.action || '').trim();
      const runtime = getRuntime();
      const hidden = new Set(runtime.settings.hiddenStarterIds || []);
      if (action === 'hide') hidden.add(starterId);
      else if (action === 'restore') hidden.delete(starterId);
      else return sendJson(res, 400, { error: 'Unsupported action.' });
      runtime.settings.hiddenStarterIds = [...hidden];
      saveRuntime(runtime);
      return sendJson(res, 200, { ok: true, dashboard: buildAdminDashboard(getRuntime()) });
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Unable to update starter service.' });
    }
  }

  const adminActionMatch = pathname.match(/^\/api\/admin\/listings\/([^/]+)\/action$/);
  if (adminActionMatch && req.method === 'POST') {
    if (!requireAdmin(req, res)) return;
    try {
      const listingId = adminActionMatch[1];
      const body = await readBody(req);
      const runtime = getRuntime();
      const listing = runtime.businessListings.find((item) => item.id === listingId);
      if (!listing) return sendJson(res, 404, { error: 'Listing not found.' });

      const action = String(body.action || '').trim();
      if (!action) return sendJson(res, 400, { error: 'Action is required.' });

      if (action === 'approve') {
        listing.status = 'approved';
        listing.verified = typeof body.verified === 'boolean' ? body.verified : true;
        listing.reviewedAt = new Date().toISOString();
        listing.approvedAt = listing.approvedAt || listing.reviewedAt;
      } else if (action === 'reject') {
        listing.status = 'rejected';
        listing.featured = false;
        listing.reviewedAt = new Date().toISOString();
      } else if (action === 'restore') {
        listing.status = 'pending';
        listing.reviewedAt = new Date().toISOString();
      } else if (action === 'toggle_featured') {
        if (listing.status !== 'approved') return sendJson(res, 400, { error: 'Only approved listings can be featured.' });
        listing.featured = !listing.featured;
        listing.reviewedAt = new Date().toISOString();
      } else if (action === 'toggle_verified') {
        if (listing.status !== 'approved') return sendJson(res, 400, { error: 'Only approved listings can be verified.' });
        listing.verified = !listing.verified;
        listing.reviewedAt = new Date().toISOString();
      } else if (action === 'delete') {
        runtime.businessListings = runtime.businessListings.filter((item) => item.id !== listingId);
      } else {
        return sendJson(res, 400, { error: 'Unsupported action.' });
      }

      saveRuntime(runtime);
      return sendJson(res, 200, { ok: true, dashboard: buildAdminDashboard(getRuntime()) });
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Unable to update listing.' });
    }
  }

  if (pathname.startsWith('/api/')) {
    return sendJson(res, 404, { error: 'API route not found.' });
  }

  const safePath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.join(publicDir, safePath);
  if (filePath.startsWith(publicDir) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return sendFile(res, filePath);
  }

  return sendJson(res, 404, { error: 'Not found.' });
});

server.listen(port, () => {
  console.log(`473Link running on http://localhost:${port}`);
});
