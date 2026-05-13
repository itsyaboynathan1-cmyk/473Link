const STARTER_SERVICES = [
  {
    id: 'marine-bluewater',
    source: 'starter',
    name: 'Blue Water Boat Care',
    category: 'Marine',
    parish: "St. George's",
    mediaClass: 'media-marine',
    rating: 4.9,
    reviews: 128,
    responseMinutes: 12,
    sameDay: true,
    verified: true,
    featured: true,
    startingPrice: 220,
    deposit: 75,
    depositPercent: 35,
    summary: 'Dockside detailing, hull wash, and quick boat care for private and charter vessels.',
    services: ['Hull wash', 'Engine bay tidy', 'Battery check', 'Dockside visit'],
    coverage: ['Port Louis', 'Prickly Bay', 'True Blue', 'Hog Island'],
    hours: 'Mon-Sat · 7:00 AM-6:00 PM',
    about: 'A premium marine profile for marinas, charter operators, and owners who want fast response and transparent pricing.',
    tags: ['Same day', 'Verified', 'Waterfront']
  },
  {
    id: 'plumbing-nutmeg',
    source: 'starter',
    name: 'Nutmeg Plumbing Pro',
    category: 'Plumbing',
    parish: "St. George's",
    mediaClass: 'media-home',
    rating: 4.8,
    reviews: 94,
    responseMinutes: 18,
    sameDay: true,
    verified: true,
    featured: false,
    startingPrice: 140,
    deposit: 50,
    depositPercent: 35,
    summary: 'Leak repair, pump installs, and water system fixes for homes, rentals, and villas.',
    services: ['Leak repair', 'Pump install', 'Water heater service'],
    coverage: ['Grand Anse', 'Lance Aux Epines', 'Calivigny', 'Woburn'],
    hours: 'Daily · 8:00 AM-7:00 PM',
    about: 'A strong everyday category that solves a problem customers already search for in WhatsApp groups.',
    tags: ['Emergency', 'Trusted', 'Homes']
  },
  {
    id: 'cleaning-harbour',
    source: 'starter',
    name: 'Harbour Fresh Cleaning',
    category: 'Cleaning',
    parish: 'St. Andrew',
    mediaClass: 'media-clean',
    rating: 4.7,
    reviews: 81,
    responseMinutes: 26,
    sameDay: false,
    verified: true,
    featured: false,
    startingPrice: 110,
    deposit: 35,
    depositPercent: 30,
    summary: 'Move-out cleans, short-stay turnover, and deep cleaning for homes and guest properties.',
    services: ['Deep clean', 'Turnover clean', 'Move-out clean'],
    coverage: ['Grenville', 'Soubise', 'La Fillette', 'Crochu'],
    hours: 'Mon-Sat · 8:00 AM-5:30 PM',
    about: 'Ideal for repeat bookings from property managers and homeowners who need reliable scheduling.',
    tags: ['Property care', 'Turnover', 'Repeatable']
  },
  {
    id: 'coolbreeze-ac',
    source: 'starter',
    name: 'Cool Breeze AC & Refrigeration',
    category: 'AC & Appliances',
    parish: 'St. David',
    mediaClass: 'media-cooling',
    rating: 4.9,
    reviews: 110,
    responseMinutes: 22,
    sameDay: true,
    verified: true,
    featured: false,
    startingPrice: 180,
    deposit: 60,
    depositPercent: 35,
    summary: 'AC servicing, cold-room support, and appliance diagnostics for homes and businesses.',
    services: ['AC service', 'Gas top-up', 'Cold-room check'],
    coverage: ['Westerhall', 'Morne Jaloux', 'Egmont', 'Calliste'],
    hours: 'Mon-Sat · 9:00 AM-6:00 PM',
    about: 'A high-value service type where deposit collection reduces no-shows and wasted callouts.',
    tags: ['High demand', 'Cooling', 'Commercial']
  },
  {
    id: 'glow-up-beauty',
    source: 'starter',
    name: 'Glow Up Beauty Mobile',
    category: 'Beauty',
    parish: "St. George's",
    mediaClass: 'media-beauty',
    rating: 4.9,
    reviews: 156,
    responseMinutes: 14,
    sameDay: false,
    verified: true,
    featured: false,
    startingPrice: 95,
    deposit: 30,
    depositPercent: 30,
    summary: 'Book makeup, hair styling, and event-ready beauty appointments from one clean mobile flow.',
    services: ['Makeup', 'Hair styling', 'Bridal trial'],
    coverage: ['Grand Anse', 'Morne Rouge', 'Magazine Beach', 'The Carenage'],
    hours: 'Daily · 10:00 AM-8:00 PM',
    about: 'Lifestyle and beauty categories broaden the market while keeping the experience consistent for customers.',
    tags: ['Mobile', 'Events', 'Bridal']
  },
  {
    id: 'green-hills-yard',
    source: 'starter',
    name: 'Green Hills Yard Crew',
    category: 'Landscaping',
    parish: 'St. Mark',
    mediaClass: 'media-outdoor',
    rating: 4.6,
    reviews: 48,
    responseMinutes: 43,
    sameDay: false,
    verified: true,
    featured: false,
    startingPrice: 160,
    deposit: 40,
    depositPercent: 25,
    summary: 'Garden cleanups, hedge trimming, and overgrowth clearing for homes and guest houses.',
    services: ['Grass cut', 'Trim & tidy', 'Haul away'],
    coverage: ['Victoria', 'Belmont', 'River Sallee', 'Sauteurs'],
    hours: 'Mon-Sat · 7:30 AM-5:30 PM',
    about: 'Useful for larger scheduled jobs where customers need a clear quote and an easy booking deposit.',
    tags: ['Outdoor', 'Seasonal', 'Property care']
  },
  {
    id: 'island-electric',
    source: 'starter',
    name: 'Island Electric Response',
    category: 'Electrical',
    parish: 'St. Patrick',
    mediaClass: 'media-power',
    rating: 4.8,
    reviews: 67,
    responseMinutes: 31,
    sameDay: true,
    verified: true,
    featured: false,
    startingPrice: 170,
    deposit: 55,
    depositPercent: 30,
    summary: 'Outlet repairs, breaker issues, and light commercial electrical support.',
    services: ['Fault check', 'Outlet repair', 'Lighting install'],
    coverage: ['Sauteurs', 'Tivoli', 'Levera', 'Bathway'],
    hours: 'Mon-Fri · 8:00 AM-5:00 PM',
    about: 'Electrical service is one of the easiest business categories to monetize with urgent callout demand.',
    tags: ['Urgent', 'Commercial', 'Repairs']
  },
  {
    id: 'tech-link-support',
    source: 'starter',
    name: 'Tech Link Home Support',
    category: 'Tech Help',
    parish: 'Carriacou',
    mediaClass: 'media-tech',
    rating: 4.7,
    reviews: 36,
    responseMinutes: 38,
    sameDay: false,
    verified: true,
    featured: false,
    startingPrice: 130,
    deposit: 40,
    depositPercent: 30,
    summary: 'Wi-Fi setup, printer fixes, and smart TV troubleshooting for homes and small offices.',
    services: ['Wi-Fi setup', 'Printer fix', 'TV setup'],
    coverage: ['Hillsborough', 'Windward', 'L’Esterre'],
    hours: 'Mon-Sat · 9:00 AM-5:00 PM',
    about: 'A modern category that shows the platform can support both trades and smaller service calls.',
    tags: ['Home tech', 'Small office', 'Setup help']
  }
];

const FIXED_PARISHES = [
  "St. George's",
  "St. David",
  "St. Andrew",
  "St. Patrick",
  "St. Mark",
  "St. John",
  "Carriacou",
  "Petite Martinique"
];

const CATEGORY_MEDIA = {
  Marine: 'media-marine',
  Plumbing: 'media-home',
  Cleaning: 'media-clean',
  'AC & Appliances': 'media-cooling',
  Beauty: 'media-beauty',
  Landscaping: 'media-outdoor',
  Electrical: 'media-power',
  'Tech Help': 'media-tech',
  'Restaurants & Food': 'media-food',
  'Bars & Nightlife': 'media-nightlife',
  'Shopping & Retail': 'media-retail',
  'Auto Services': 'media-auto',
  'Auto Parts': 'media-auto',
  'Home Services': 'media-home',
  'Cooling & AC': 'media-cooling',
  'Beauty & Wellness': 'media-beauty',
  Construction: 'media-outdoor',
  'Tech & IT': 'media-tech',
  'Events & Entertainment': 'media-nightlife',
  'Health & Fitness': 'media-beauty',
  Transportation: 'media-auto',
  'Tours & Travel': 'media-marine',
  'Professional Services': 'media-tech',
  Other: 'media-custom'
};

const STARTER_CONTACTS = {
  'marine-bluewater': '(473) 444-2100',
  'plumbing-nutmeg': '(473) 415-6110',
  'cleaning-harbour': '(473) 416-2288',
  'coolbreeze-ac': '(473) 420-7799',
  'glow-up-beauty': '(473) 405-1188',
  'green-hills-yard': '(473) 442-6641',
  'island-electric': '(473) 417-5080',
  'tech-link-support': '(473) 443-9012'
};

const ADMIN_EMAIL = 'nathan@grenadamarine.com';

const STORAGE = {
  favorites: 'link473-favorites',
  receipt: 'link473-receipt',
  adminToken: 'link473-admin-token',
  userToken: 'link473-user-token'
};

const state = {
  config: {
    appName: '473Link',
    tagline: 'Connect people, businesses, and opportunities.',
    paymentMode: 'mock',
    paymentProviderName: 'Demo checkout',
    showStarterListings: false,
    hiddenStarterIds: []
  },
  services: [...STARTER_SERVICES],
  customListings: [],
  filters: {
    search: '',
    category: 'all',
    parish: 'all',
    sort: 'recommended',
    sameDay: false
  },
  favorites: new Set(JSON.parse(localStorage.getItem(STORAGE.favorites) || '[]')),
  bookings: [],
  receipt: JSON.parse(localStorage.getItem(STORAGE.receipt) || 'null'),
  adminToken: localStorage.getItem(STORAGE.adminToken) || '',
  userToken: localStorage.getItem(STORAGE.userToken) || '',
  user: null,
  authMode: 'login',
  authVerification: {
    email: '',
    previewCode: '',
    mode: 'preview'
  },
  dashboard: null,
  selectedService: null,
  pendingBooking: null
};

const els = {
  searchInput: document.querySelector('#searchInput'),
  searchButton: document.querySelector('#searchButton'),
  heroStats: document.querySelector('#heroStats'),
  miniFeatured: document.querySelector('#miniFeatured'),
  featuredBusinesses: document.querySelector('#featuredBusinesses'),
  categoryChips: document.querySelector('#categoryChips'),
  parishFilter: document.querySelector('#parishFilter'),
  sortFilter: document.querySelector('#sortFilter'),
  sameDayFilter: document.querySelector('#sameDayFilter'),
  resetFilters: document.querySelector('#resetFilters'),
  resultsLabel: document.querySelector('#resultsLabel'),
  servicesGrid: document.querySelector('#servicesGrid'),
  bookingsList: document.querySelector('#bookingsList'),
  receiptPreview: document.querySelector('#receiptPreview'),
  clearLocalButton: document.querySelector('#clearLocalButton'),
  paymentModeBadge: document.querySelector('#paymentModeBadge'),
  dashboardLocked: document.querySelector('#dashboardLocked'),
  dashboardContent: document.querySelector('#dashboardContent'),
  dashboardMetrics: document.querySelector('#dashboardMetrics'),
  dashboardBookingRows: document.querySelector('#dashboardBookingRows'),
  reviewQueueRows: document.querySelector('#reviewQueueRows'),
  approvedListingRows: document.querySelector('#approvedListingRows'),
  rejectedListingRows: document.querySelector('#rejectedListingRows'),
  starterListingRows: document.querySelector('#starterListingRows'),
  adminLoginForm: document.querySelector('#adminLoginForm'),
  starterListingsToggle: document.querySelector('#starterListingsToggle'),
  resetPlatformButton: document.querySelector('#resetPlatformButton'),
  adminLogoutButton: document.querySelector('#adminLogoutButton'),
  modalBackdrop: document.querySelector('#modalBackdrop'),
  detailsDrawer: document.querySelector('#detailsDrawer'),
  detailsContent: document.querySelector('#detailsContent'),
  bookingModal: document.querySelector('#bookingModal'),
  bookingForm: document.querySelector('#bookingForm'),
  bookingMeta: document.querySelector('#bookingMeta'),
  bookingGuidance: document.querySelector('#bookingGuidance'),
  paymentChoiceGroup: document.querySelector('#paymentChoiceGroup'),
  paymentChoiceHint: document.querySelector('#paymentChoiceHint'),
  depositChoiceCard: document.querySelector('#depositChoiceCard'),
  laterChoiceCard: document.querySelector('#laterChoiceCard'),
  depositChoiceTitle: document.querySelector('#depositChoiceTitle'),
  depositChoiceText: document.querySelector('#depositChoiceText'),
  laterChoiceTitle: document.querySelector('#laterChoiceTitle'),
  laterChoiceText: document.querySelector('#laterChoiceText'),
  amountDueNowLabel: document.querySelector('#amountDueNowLabel'),
  amountDueNow: document.querySelector('#amountDueNow'),
  amountRemainingLabel: document.querySelector('#amountRemainingLabel'),
  amountRemaining: document.querySelector('#amountRemaining'),
  bookingSummaryNote: document.querySelector('#bookingSummaryNote'),
  bookingSubmitButton: document.querySelector('#bookingSubmitButton'),
  paymentModal: document.querySelector('#paymentModal'),
  paymentSummary: document.querySelector('#paymentSummary'),
  paymentModeText: document.querySelector('#paymentModeText'),
  mockPaymentForm: document.querySelector('#mockPaymentForm'),
  liveCheckoutButton: document.querySelector('#liveCheckoutButton'),
  businessModal: document.querySelector('#businessModal'),
  businessForm: document.querySelector('#businessForm'),
  businessCategory: document.querySelector('#businessCategory'),
  businessParish: document.querySelector('#businessParish'),
  startingPriceInput: document.querySelector('#startingPrice'),
  depositPreset: document.querySelector('#depositPreset'),
  depositCustomWrap: document.querySelector('#depositCustomWrap'),
  depositCustomPercent: document.querySelector('#depositCustomPercent'),
  depositHelperText: document.querySelector('#depositHelperText'),
  openBusinessModal: document.querySelector('#openBusinessModal'),
  businessPitchButton: document.querySelector('#businessPitchButton'),
  authControls: document.querySelector('#authControls'),
  accountChip: document.querySelector('#accountChip'),
  accountChipName: document.querySelector('#accountChipName'),
  accountChipMeta: document.querySelector('#accountChipMeta'),
  logoutButton: document.querySelector('#logoutButton'),
  openLoginButton: document.querySelector('#openLoginButton'),
  openSignupButton: document.querySelector('#openSignupButton'),
  accountPanel: document.querySelector('#accountPanel'),
  accountPanelTitle: document.querySelector('#accountPanelTitle'),
  accountPanelCopy: document.querySelector('#accountPanelCopy'),
  accountPanelPrimary: document.querySelector('#accountPanelPrimary'),
  accountPanelSecondary: document.querySelector('#accountPanelSecondary'),
  authModal: document.querySelector('#authModal'),
  authForm: document.querySelector('#authForm'),
  authCredentialsGrid: document.querySelector('#authCredentialsGrid'),
  authTitle: document.querySelector('#authTitle'),
  authSubtitle: document.querySelector('#authSubtitle'),
  authHint: document.querySelector('#authHint'),
  authSubmitButton: document.querySelector('#authSubmitButton'),
  authModeLogin: document.querySelector('#authModeLogin'),
  authModeSignup: document.querySelector('#authModeSignup'),
  authName: document.querySelector('#authName'),
  authEmail: document.querySelector('#authEmail'),
  authPassword: document.querySelector('#authPassword'),
  authPhone: document.querySelector('#authPhone'),
  authParish: document.querySelector('#authParish'),
  authAccountType: document.querySelector('#authAccountType'),
  authVerifyPanel: document.querySelector('#authVerifyPanel'),
  authVerificationCode: document.querySelector('#authVerificationCode'),
  authVerificationPreview: document.querySelector('#authVerificationPreview'),
  authResendButton: document.querySelector('#authResendButton'),
  authSignupOnly: Array.from(document.querySelectorAll('.auth-signup-only')),
  toastRegion: document.querySelector('#toastRegion')
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-AG', {
    style: 'currency',
    currency: 'XCD',
    maximumFractionDigits: 2
  }).format(Number(value || 0));
}


function formatStartsFrom(value) {
  return Number(value || 0) > 0 ? formatCurrency(value) : 'Quote after request';
}

function getDepositPercent(service) {
  const directPercent = Number(service?.depositPercent || 0);
  if (directPercent > 0) return Math.min(90, Math.max(0, directPercent));
  const startingPrice = Number(service?.startingPrice || 0);
  const legacyDeposit = Number(service?.deposit || 0);
  if (startingPrice > 0 && legacyDeposit > 0) {
    return Math.min(90, Math.max(0, Math.round((legacyDeposit / startingPrice) * 100)));
  }
  return 0;
}

function getDepositAmount(service) {
  const startingPrice = Number(service?.startingPrice || 0);
  const depositPercent = getDepositPercent(service);
  if (startingPrice > 0 && depositPercent > 0) {
    return Math.round(((startingPrice * depositPercent) / 100) * 100) / 100;
  }
  return Number(service?.deposit || 0);
}

function formatDepositValue(service) {
  const depositPercent = getDepositPercent(service);
  return depositPercent > 0 ? `${depositPercent}% deposit` : 'No deposit required';
}

function getDepositExample(startingPrice, depositPercent) {
  const base = Number(startingPrice || 0);
  const percent = Number(depositPercent || 0);
  if (base <= 0 || percent <= 0) return 'Customers can still send a request first and you can confirm the price later.';
  const amount = Math.round(((base * percent) / 100) * 100) / 100;
  return `Example: a ${percent}% deposit on ${formatCurrency(base)} would ask the customer to pay ${formatCurrency(amount)} up front.`;
}

function getPricingSupportCopy(service) {
  const start = Number(service?.startingPrice || 0);
  const depositPercent = getDepositPercent(service);
  const depositAmount = getDepositAmount(service);

  if (depositPercent > 0 && start > 0) {
    return `Send the request first or reserve with a ${depositPercent}% deposit (${formatCurrency(depositAmount)}) based on the starting call-out price of ${formatCurrency(start)}.`;
  }
  if (start > 0) {
    return `This provider usually starts from ${formatCurrency(start)} and confirms the final price after reviewing the request.`;
  }
  return 'This provider confirms pricing after reviewing the job details. No payment is required to send the request.';
}

function getBookingAmounts(service, choice) {
  const startingPrice = Number(service?.startingPrice || 0);
  const depositAmount = getDepositAmount(service);
  if (choice === 'deposit' && depositAmount > 0) {
    return {
      dueNow: depositAmount,
      remaining: Math.max(startingPrice - depositAmount, 0)
    };
  }
  return {
    dueNow: 0,
    remaining: startingPrice
  };
}

function syncBookingChoices(service) {
  const startingPrice = Number(service?.startingPrice || 0);
  const depositPercent = getDepositPercent(service);
  const depositAmount = getDepositAmount(service);
  const hasDeposit = depositPercent > 0 && depositAmount > 0;

  els.bookingGuidance.textContent = hasDeposit
    ? `You can send the request now with no payment, or pay the provider's ${depositPercent}% deposit if you want to reserve the slot right away.`
    : 'Send your request now. No payment is needed until the provider reviews the job.';
  els.depositChoiceCard.classList.toggle('hidden', !hasDeposit);

  if (hasDeposit) {
    els.paymentChoiceHint.textContent = 'Request-first is the default. Choose the deposit option only if you want to pay the provider’s standard reservation amount now.';
    els.depositChoiceTitle.textContent = `Pay ${depositPercent}% deposit now`;
    els.depositChoiceText.textContent = startingPrice > depositAmount
      ? `${formatCurrency(depositAmount)} is due now. The rest starts from ${formatCurrency(Math.max(startingPrice - depositAmount, 0))} after the provider confirms the job.`
      : `${formatCurrency(depositAmount)} is due now to reserve the booking.`;
    els.laterChoiceTitle.textContent = 'Send request first';
    els.laterChoiceText.textContent = startingPrice > 0
      ? `No payment now. Final pricing usually starts from ${formatCurrency(startingPrice)}.`
      : 'No payment now. The provider will review the request and confirm pricing with you.';
    const laterInput = els.bookingForm.querySelector('input[name="paymentChoice"][value="later"]');
    if (laterInput) laterInput.checked = true;
  } else {
    els.paymentChoiceHint.textContent = 'No payment is required to send this request.';
    els.laterChoiceTitle.textContent = 'Send booking request';
    els.laterChoiceText.textContent = startingPrice > 0
      ? `No payment now. Pricing usually starts from ${formatCurrency(startingPrice)} and is confirmed directly with the provider.`
      : 'No payment is required at this step.';
    const laterInput = els.bookingForm.querySelector('input[name="paymentChoice"][value="later"]');
    if (laterInput) laterInput.checked = true;
  }
}

function digitsOnly(value) {
  return String(value || '').replace(/\D/g, '');
}

function getServicePhone(service) {
  return String(service?.phone || STARTER_CONTACTS[service?.id] || '').trim();
}

function toDialablePhone(phone) {
  let digits = digitsOnly(phone);
  if (!digits) return '';
  if (digits.length === 7) digits = `1473${digits}`;
  if (digits.length === 10 && digits.startsWith('473')) digits = `1${digits}`;
  return digits;
}

function getCallHref(service) {
  const dialable = toDialablePhone(getServicePhone(service));
  return dialable ? `tel:+${dialable}` : '';
}

function getWhatsAppHref(service) {
  const dialable = toDialablePhone(getServicePhone(service));
  if (!dialable) return '';
  const message = `Hi, I found ${service.name} on 473Link and I want to learn more about your business.`;
  return `https://wa.me/${dialable}?text=${encodeURIComponent(message)}`;
}

function renderContactActions(service) {
  const phone = getServicePhone(service);
  const callHref = getCallHref(service);
  const whatsappHref = getWhatsAppHref(service);
  if (!phone && !service.website) return '';
  const profileHref = service.website
    ? (service.website.startsWith('http') ? service.website : (service.website.startsWith('@') ? `https://instagram.com/${service.website.slice(1)}` : `https://${service.website}`))
    : '';
  return `
    <div class="contact-actions">
      ${callHref ? `<a class="ghost-button contact-action" href="${callHref}">Call ${escapeHtml(phone)}</a>` : ''}
      ${whatsappHref ? `<a class="primary-button contact-action" href="${whatsappHref}" target="_blank" rel="noreferrer">WhatsApp</a>` : ''}
      ${profileHref ? `<a class="ghost-button contact-action" href="${escapeHtml(profileHref)}" target="_blank" rel="noreferrer">View profile</a>` : ''}
    </div>
  `;
}

function formatDate(value) {
  if (!value) return 'TBD';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat('en-GD', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}

function saveLocalState() {
  localStorage.setItem(STORAGE.favorites, JSON.stringify([...state.favorites]));
  localStorage.setItem(STORAGE.receipt, JSON.stringify(state.receipt));
  if (state.adminToken) {
    localStorage.setItem(STORAGE.adminToken, state.adminToken);
  } else {
    localStorage.removeItem(STORAGE.adminToken);
  }
  if (state.userToken) {
    localStorage.setItem(STORAGE.userToken, state.userToken);
  } else {
    localStorage.removeItem(STORAGE.userToken);
  }
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  els.toastRegion.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function openSurface(element) {
  els.modalBackdrop.classList.remove('hidden');
  element.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeSurface(element) {
  element.classList.add('hidden');
  const open = [els.detailsDrawer, els.bookingModal, els.paymentModal, els.businessModal, els.authModal].some((surface) => !surface.classList.contains('hidden'));
  if (!open) {
    els.modalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function closeAllSurfaces() {
  [els.detailsDrawer, els.bookingModal, els.paymentModal, els.businessModal, els.authModal].forEach((surface) => surface.classList.add('hidden'));
  els.modalBackdrop.classList.add('hidden');
  document.body.style.overflow = '';
}

function getStatusBadgeClass(status) {
  if (status === 'Deposit paid') return 'badge badge--paid';
  if (status === 'Awaiting payment') return 'badge badge--pending';
  return 'badge badge--requested';
}

function toArray(value) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  if (typeof value === 'string') return value.split(',').map((item) => item.trim()).filter(Boolean);
  return [];
}

function getCategoryMediaClass(category) {
  return CATEGORY_MEDIA[category] || 'media-custom';
}

function listingToService(listing) {
  return {
    id: `listing-${listing.id}`,
    source: 'listing',
    listingId: listing.id,
    name: listing.businessName,
    category: listing.category,
    parish: listing.parish,
    mediaClass: getCategoryMediaClass(listing.category),
    logo: listing.logo || '',
    banner: listing.banner || '',
    rating: 0,
    reviews: 0,
    responseMinutes: Number(listing.responseMinutes || 30),
    sameDay: Boolean(listing.sameDay),
    verified: Boolean(listing.verified),
    featured: Boolean(listing.featured),
    startingPrice: Number(listing.startingPrice || 0),
    deposit: Number(listing.deposit || 0),
    depositPercent: Number(listing.depositPercent || 0),
    phone: listing.businessPhone || '',
    website: listing.website || '',
    summary: listing.summary || `${listing.businessName} is now live on 473Link.`,
    services: toArray(listing.services).length ? toArray(listing.services) : [listing.category],
    coverage: toArray(listing.coverage).length ? toArray(listing.coverage) : [listing.parish],
    hours: listing.hours || 'Hours shared after approval',
    about: listing.note || listing.summary || `${listing.businessName} is a newly approved 473Link business.`,
    tags: [listing.featured ? 'Featured' : 'New listing', listing.verified ? 'Verified' : 'Approved', listing.plan === 'growth' ? 'Premium plan' : listing.plan === 'founding' ? 'Founding Partner' : 'Basic plan']
  };
}

function getVisibleStarterServices() {
  const hiddenIds = new Set(state.config.hiddenStarterIds || []);
  return STARTER_SERVICES.filter((service) => !hiddenIds.has(service.id));
}

function setServices() {
  const approvedListings = state.customListings.map((listing) => listingToService(listing));
  state.services = [
    ...(state.config.showStarterListings ? getVisibleStarterServices() : []),
    ...approvedListings
  ];
}

function getCatalogForForms() {
  const catalog = [...getVisibleStarterServices(), ...state.customListings.map((listing) => listingToService(listing))];
  return catalog.length ? catalog : getVisibleStarterServices();
}


function normalisePhone(value) {
  const trimmed = String(value || '').trim();
  if (!trimmed) return '';
  const digits = trimmed.replace(/\D/g, '');
  if (digits.length === 7) return `(473) ${digits.slice(0, 3)}-${digits.slice(3)}`;
  if (digits.length >= 10 && digits.endsWith(digits.slice(-7))) {
    const local = digits.slice(-7);
    return `(473) ${local.slice(0, 3)}-${local.slice(3)}`;
  }
  return trimmed;
}

function setVerificationState(email = '', delivery = null) {
  state.authVerification = {
    email: String(email || '').trim().toLowerCase(),
    previewCode: String(delivery?.previewCode || ''),
    mode: String(delivery?.mode || 'preview')
  };
}

function clearVerificationState() {
  state.authVerification = { email: '', previewCode: '', mode: 'preview' };
  if (els.authVerificationCode) els.authVerificationCode.value = '';
}


function isAdminUser() {
  return Boolean(state.user && String(state.user.email || '').trim().toLowerCase() === ADMIN_EMAIL);
}

function syncAdminVisibility() {
  const adminAllowed = isAdminUser();

  if (els.dashboardLocked) {
    els.dashboardLocked.classList.toggle('hidden', adminAllowed && Boolean(state.adminToken));
    if (!adminAllowed) {
      els.dashboardLocked.innerHTML = `
        <div class="empty-state card">
          <strong>Admin area is private.</strong>
          <p class="muted">Admin tools are only available to the approved 473Link admin account.</p>
        </div>
      `;
    }
  }

  if (els.adminLoginForm) {
    els.adminLoginForm.classList.toggle('hidden', !adminAllowed || Boolean(state.adminToken));
  }

  if (els.dashboardContent && !adminAllowed) {
    els.dashboardContent.classList.add('hidden');
  }

  const adminLinks = document.querySelectorAll('[href="#admin"], [href="#dashboard"], [data-admin-link], .admin-nav, .operator-link');
  adminLinks.forEach((node) => node.classList.toggle('hidden', !adminAllowed));
}

function ensureUploadUi() {
  if (!els.businessForm || els.businessForm.dataset.uploadReady === 'true') return;

  const logoField = els.businessForm.querySelector('[name="logo"]');
  if (!logoField) return;

  logoField.type = 'hidden';
  logoField.id = logoField.id || 'logoInput';

  const logoBlock = document.createElement('div');
  logoBlock.className = 'upload-field';
  logoBlock.innerHTML = `
    <label>Logo</label>
    <div id="logoDropZone" class="drop-zone" tabindex="0">
      <strong>Drop logo here</strong>
      <span>or click to choose an image</span>
      <div class="drop-zone__preview"></div>
    </div>
  `;
  const logoLabel = logoField.closest('label') || logoField.parentElement;
  if (logoLabel) logoLabel.replaceWith(logoBlock);
  logoBlock.appendChild(logoField);

  const bannerInput = document.createElement('input');
  bannerInput.type = 'hidden';
  bannerInput.name = 'banner';
  bannerInput.id = 'bannerInput';

  const bannerBlock = document.createElement('div');
  bannerBlock.className = 'upload-field';
  bannerBlock.innerHTML = `
    <label>Banner photo</label>
    <div id="bannerDropZone" class="drop-zone drop-zone--banner" tabindex="0">
      <strong>Drop banner photo here</strong>
      <span>or click to choose a wide image</span>
      <div class="drop-zone__preview"></div>
    </div>
  `;
  bannerBlock.appendChild(bannerInput);
  logoBlock.insertAdjacentElement('afterend', bannerBlock);

  setupImageDropZone('logoDropZone', logoField, 'Logo selected');
  setupImageDropZone('bannerDropZone', bannerInput, 'Banner selected');

  const style = document.createElement('style');
  style.textContent = `
    .drop-zone {
      border: 2px dashed rgba(255,255,255,.25);
      border-radius: 18px;
      padding: 1rem;
      min-height: 120px;
      display: grid;
      place-items: center;
      gap: .35rem;
      text-align: center;
      cursor: pointer;
      background: rgba(255,255,255,.05);
      color: inherit;
    }
    .drop-zone.dragging {
      border-color: #22c55e;
      background: rgba(34,197,94,.12);
    }
    .drop-zone span { color: rgba(255,255,255,.65); font-size: .9rem; }
    .drop-zone__preview img {
      max-width: 100%;
      max-height: 140px;
      border-radius: 14px;
      object-fit: cover;
      display: block;
      margin-top: .5rem;
    }
    .drop-zone--banner .drop-zone__preview img {
      max-height: 190px;
      aspect-ratio: 16 / 7;
      width: min(100%, 520px);
    }
    .service-card__media.has-banner,
    .provider-hero.has-banner {
      background-size: cover;
      background-position: center;
      position: relative;
      overflow: hidden;
    }
    .service-card__media.has-banner::before,
    .provider-hero.has-banner::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(120deg, rgba(4,11,20,.82), rgba(4,11,20,.35));
      z-index: 0;
    }
    .service-card__media.has-banner > *,
    .provider-hero.has-banner > * {
      position: relative;
      z-index: 1;
    }
  `;
  document.head.appendChild(style);

  els.businessForm.dataset.uploadReady = 'true';
}

function setupImageDropZone(dropId, input, labelText) {
  const drop = document.getElementById(dropId);
  if (!drop || !input) return;

  const chooseFile = () => {
    const picker = document.createElement('input');
    picker.type = 'file';
    picker.accept = 'image/png,image/jpeg,image/webp,image/gif,image/svg+xml';
    picker.addEventListener('change', () => {
      if (picker.files?.[0]) readImageFile(picker.files[0], drop, input, labelText);
    });
    picker.click();
  };

  drop.addEventListener('click', chooseFile);
  drop.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      chooseFile();
    }
  });
  drop.addEventListener('dragover', (event) => {
    event.preventDefault();
    drop.classList.add('dragging');
  });
  drop.addEventListener('dragleave', () => drop.classList.remove('dragging'));
  drop.addEventListener('drop', (event) => {
    event.preventDefault();
    drop.classList.remove('dragging');
    const file = event.dataTransfer?.files?.[0];
    if (file) readImageFile(file, drop, input, labelText);
  });
}

function readImageFile(file, drop, input, labelText) {
  if (!file.type.startsWith('image/')) {
    showToast('Please choose an image file.', 'error');
    return;
  }
  if (file.size > 4 * 1024 * 1024) {
    showToast('Please choose an image under 4 MB.', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    input.value = String(reader.result || '');
    const preview = drop.querySelector('.drop-zone__preview');
    if (preview) preview.innerHTML = `<img src="${escapeHtml(input.value)}" alt="${escapeHtml(labelText)}">`;
    const title = drop.querySelector('strong');
    if (title) title.textContent = labelText;
    showToast(`${labelText}.`);
  };
  reader.readAsDataURL(file);
}


function renderVerificationPreview() {
  if (!els.authVerificationPreview) return;
  const previewCode = state.authVerification.previewCode;
  const isPreview = state.authVerification.mode === 'preview' && previewCode;
  els.authVerificationPreview.classList.toggle('hidden', !isPreview);
  if (isPreview) {
    els.authVerificationPreview.innerHTML = `<strong>Verification preview</strong><p class="section-hint">Email sending is not configured yet, so use code <strong>${escapeHtml(previewCode)}</strong> to continue.</p>`;
  } else {
    els.authVerificationPreview.innerHTML = '';
  }
}

function updateAuthUi() {
  const loggedIn = Boolean(state.user);
  els.authControls?.classList.toggle('hidden', loggedIn);
  els.accountChip?.classList.toggle('hidden', !loggedIn);

  if (loggedIn) {
    const firstName = String(state.user.name || state.user.email || 'Member').trim().split(/\s+/)[0];
    els.accountChipName.textContent = firstName;
    const meta = [];
    if (state.user.accountType === 'business') meta.push('Business');
    else meta.push('Customer');
    if (state.user.parish) meta.push(state.user.parish);
    els.accountChipMeta.textContent = meta.join(' · ');

    els.accountPanelTitle.textContent = `Welcome back, ${firstName}`;
    els.accountPanelCopy.textContent = state.user.accountType === 'business'
      ? 'You can submit your business, manage your profile, and be first in line for launch updates.'
      : 'Your account is ready to save businesses, follow opportunities, and join the early network.';
    els.accountPanelPrimary.textContent = 'Explore businesses';
    els.accountPanelSecondary.textContent = 'List a business';
  } else {
    els.accountPanelTitle.textContent = 'Create an account to join 473Link early';
    els.accountPanelCopy.textContent = 'Sign in once to save your profile, follow businesses, and apply as a founding partner.';
    els.accountPanelPrimary.textContent = 'Log in';
    els.accountPanelSecondary.textContent = 'Sign up';
  }

  els.clearLocalButton.textContent = loggedIn ? 'Refresh activity' : 'Sign in to view';
  syncAdminVisibility();
}

function syncAuthMode() {
  const isSignup = state.authMode === 'signup';
  const isVerify = state.authMode === 'verify';

  els.authTitle.textContent = isVerify
    ? 'Verify your email'
    : isSignup
      ? 'Create your 473Link account'
      : 'Log in to 473Link';

  els.authSubtitle.textContent = isVerify
    ? 'Use the 6-digit code we sent to finish setting up your account.'
    : isSignup
      ? 'Create one account for discovery, partner onboarding, and launch updates.'
      : 'Use one account for business onboarding and early access.';

  els.authHint.textContent = isVerify
    ? `We need to confirm ${state.authVerification.email || 'your email'} before you can continue.`
    : isSignup
      ? 'Business owners can sign up once, then apply with pre-filled contact details.'
      : 'Log in to save your profile and apply as a business.';

  els.authSubmitButton.textContent = isVerify ? 'Verify email' : (isSignup ? 'Create account' : 'Log in');
  els.authModeLogin.classList.toggle('active', !isSignup && !isVerify);
  els.authModeSignup.classList.toggle('active', isSignup);
  els.authModeLogin.disabled = isVerify;
  els.authModeSignup.disabled = isVerify;
  els.authCredentialsGrid?.classList.toggle('hidden', isVerify);
  els.authVerifyPanel?.classList.toggle('hidden', !isVerify);
  els.authSignupOnly.forEach((node) => node.classList.toggle('hidden', !isSignup || isVerify));

  const passwordRequired = !isVerify;
  if (passwordRequired) els.authPassword?.setAttribute('required', 'required');
  else els.authPassword?.removeAttribute('required');

  [els.authName, els.authPhone, els.authParish, els.authAccountType].forEach((field) => {
    if (!field) return;
    if (isSignup && !isVerify) field.setAttribute('required', 'required');
    else field.removeAttribute('required');
  });

  if (els.authVerificationCode) {
    if (isVerify) els.authVerificationCode.setAttribute('required', 'required');
    else els.authVerificationCode.removeAttribute('required');
  }

  renderVerificationPreview();
}

function openAuth(mode = 'login', verification = null) {
  state.authMode = mode;
  if (mode !== 'verify') clearVerificationState();
  if (verification) setVerificationState(verification.email, verification.delivery);
  syncAuthMode();
  openSurface(els.authModal);
}

function prefillFormsFromUser() {
  if (!state.user) return;
  const bookingName = els.bookingForm?.querySelector('input[name="customerName"]');
  const bookingPhone = els.bookingForm?.querySelector('input[name="customerPhone"]');
  const bookingEmail = els.bookingForm?.querySelector('input[name="customerEmail"]');
  if (bookingName && !bookingName.value) bookingName.value = state.user.name || '';
  if (bookingPhone && !bookingPhone.value) bookingPhone.value = normalisePhone(state.user.phone || '');
  if (bookingEmail && !bookingEmail.value) bookingEmail.value = state.user.email || '';

  const ownerName = els.businessForm?.querySelector('input[name="ownerName"]');
  const phone = els.businessForm?.querySelector('input[name="businessPhone"]');
  const email = els.businessForm?.querySelector('input[name="email"]');
  const parish = els.businessForm?.querySelector('select[name="parish"]');
  if (ownerName && !ownerName.value) ownerName.value = state.user.name || '';
  if (phone && !phone.value) phone.value = normalisePhone(state.user.phone || '');
  if (email && !email.value) email.value = state.user.email || '';
  if (parish && !parish.value && state.user.parish) parish.value = state.user.parish;
}

async function fetchMyBookings() {
  if (!state.userToken) {
    state.bookings = [];
    renderBookings();
    return;
  }
  try {
    const response = await fetch('/api/my/bookings', {
      headers: { 'x-auth-token': state.userToken }
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to load your bookings.');
    state.bookings = Array.isArray(data.bookings) ? data.bookings : [];
    renderBookings();
  } catch (error) {
    if (/session|login|auth/i.test(error.message)) {
      await handleLogout(false);
    } else {
      showToast(error.message, 'error');
    }
  }
}

async function restoreUserSession() {
  if (!state.userToken) {
    state.user = null;
    updateAuthUi();
    renderBookings();
    return;
  }
  try {
    const response = await fetch('/api/auth/me', {
      headers: { 'x-auth-token': state.userToken }
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to restore session.');
    state.user = data.user;
    saveLocalState();
    updateAuthUi();
    prefillFormsFromUser();
    await fetchMyBookings();
    if (isAdminUser()) await unlockAdminDashboard(false);
    else syncAdminVisibility();
  } catch {
    state.user = null;
    state.userToken = '';
    saveLocalState();
    updateAuthUi();
    renderBookings();
  }
}

function requireUser(message = 'Please log in to continue.') {
  if (state.user) return true;
  showToast(message, 'error');
  openAuth('login');
  return false;
}

async function handleLogout(showMessage = true) {
  try {
    if (state.userToken) {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'x-auth-token': state.userToken }
      });
    }
  } catch {
    // ignore
  }
  state.userToken = '';
  state.user = null;
  state.adminToken = '';
  state.dashboard = null;
  state.bookings = [];
  clearVerificationState();
  saveLocalState();
  updateAuthUi();
  renderBookings();
  if (showMessage) showToast('You have been logged out.');
}

async function submitAuthForm(event) {
  event.preventDefault();
  const button = els.authSubmitButton;
  const originalText = button.textContent;
  const isSignup = state.authMode === 'signup';
  const isVerify = state.authMode === 'verify';

  button.disabled = true;
  button.textContent = isVerify ? 'Verifying…' : (isSignup ? 'Creating account…' : 'Logging in…');

  try {
    if (isVerify) {
      const response = await fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: state.authVerification.email || String(els.authEmail?.value || '').trim(),
          code: String(els.authVerificationCode?.value || '').trim()
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to verify email.');
      state.user = data.user;
      state.userToken = data.token;
      saveLocalState();
      els.authForm.reset();
      clearVerificationState();
      closeSurface(els.authModal);
      updateAuthUi();
      prefillFormsFromUser();
      await fetchMyBookings();
      if (state.adminToken && isAdminUser()) await fetchAdminDashboard();
      showToast(data.message || 'Email verified. You are now signed in.');
      return;
    }

    const formData = new FormData(els.authForm);
    const payload = {
      name: formData.get('name'),
      email: String(formData.get('email') || '').trim(),
      password: String(formData.get('password') || ''),
      phone: formData.get('phone'),
      parish: formData.get('parish'),
      accountType: formData.get('accountType')
    };

    const response = await fetch(isSignup ? '/api/auth/signup' : '/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok) {
      if (data.requiresVerification) {
        setVerificationState(data.email || payload.email, data.delivery);
        state.authMode = 'verify';
        syncAuthMode();
      }
      throw new Error(data.error || 'Unable to continue.');
    }

    if (data.requiresVerification) {
      setVerificationState(data.email || payload.email, data.delivery);
      state.authMode = 'verify';
      syncAuthMode();
      showToast(data.message || 'Check your email for a verification code.');
      return;
    }

    state.user = data.user;
    state.userToken = data.token;
    saveLocalState();
    els.authForm.reset();
    closeSurface(els.authModal);
    updateAuthUi();
    prefillFormsFromUser();
    await fetchMyBookings();
    if (isAdminUser()) await unlockAdminDashboard(false);
    else syncAdminVisibility();
    showToast(isSignup ? 'Account created. You are now signed in.' : 'Welcome back.');
  } catch (error) {
    if (/verify/i.test(error.message) && state.authVerification.email) {
      state.authMode = 'verify';
      syncAuthMode();
    } else if (/log in|session|account/i.test(error.message)) {
      openAuth('login');
    }
    showToast(error.message, 'error');
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

async function resendVerificationCode() {
  const email = state.authVerification.email || String(els.authEmail?.value || '').trim();
  if (!email) {
    showToast('Enter your email first.', 'error');
    return;
  }
  const button = els.authResendButton;
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = 'Sending…';
  try {
    const response = await fetch('/api/auth/resend-verification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to resend code.');
    setVerificationState(email, data.delivery);
    state.authMode = 'verify';
    syncAuthMode();
    showToast(data.message || 'A new verification code is ready.');
  } catch (error) {
    showToast(error.message, 'error');
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

function buildHeroStats() {

  const services = state.services;
  if (!services.length) {
    els.heroStats.innerHTML = `
      <div class="stat-card"><span class="metric-label">Providers</span><strong>0</strong></div>
      <div class="stat-card"><span class="metric-label">Categories</span><strong>0</strong></div>
      <div class="stat-card"><span class="metric-label">Approved</span><strong>0</strong></div>
      <div class="stat-card"><span class="metric-label">Same-day ready</span><strong>0</strong></div>
    `;
    return;
  }

  const ratedServices = services.filter((item) => item.reviews > 0);
  const averageRating = ratedServices.length
    ? (ratedServices.reduce((sum, item) => sum + item.rating, 0) / ratedServices.length).toFixed(1)
    : 'New';
  const sameDayCount = services.filter((item) => item.sameDay).length;
  const approvedCount = services.filter((item) => item.source === 'listing').length;

  els.heroStats.innerHTML = `
    <div class="stat-card"><span class="metric-label">Providers</span><strong>${services.length}</strong></div>
    <div class="stat-card"><span class="metric-label">Categories</span><strong>${new Set(services.map((item) => item.category)).size}</strong></div>
    <div class="stat-card"><span class="metric-label">Approved listings</span><strong>${approvedCount}</strong></div>
    <div class="stat-card"><span class="metric-label">Same-day ready</span><strong>${sameDayCount}</strong></div>
  `;

  if (averageRating !== 'New') {
    const ratingCard = els.heroStats.querySelector('.stat-card:nth-child(3)');
    if (ratingCard) {
      ratingCard.innerHTML = `<span class="metric-label">Avg rating</span><strong>${averageRating}★</strong>`;
    }
  }
}

function buildMiniFeatured() {
  const featured = state.services.find((item) => item.featured) || state.services[0];
  if (!featured) {
    els.miniFeatured.innerHTML = `
      <strong>No approved providers yet</strong>
      <p class="muted">Submit a business listing and approve it from the operator dashboard to go live.</p>
    `;
    return;
  }

  els.miniFeatured.innerHTML = `
    <strong>${escapeHtml(featured.name)}</strong>
    <p class="muted">${escapeHtml(featured.summary)}</p>
    <div class="provider-tags">
      <span>${formatDepositValue(featured)}</span>
      <span>${featured.responseMinutes} min response</span>
      <span>${escapeHtml(featured.parish)}</span>
    </div>
  `;
}

function populateFilters() {
  const catalog = getCatalogForForms();
 const fixedCategories = [
  "Auto Services",
  "Marine",
  "Restaurants & Food",
  "Bars & Nightlife",
  "Shopping & Retail",
  "Home Services",
  "Cleaning",
  "Cooling & AC",
  "Beauty & Wellness",
  "Construction",
  "Electrical",
  "Plumbing",
  "Tech & IT",
  "Events & Entertainment",
  "Health & Fitness",
  "Transportation",
  "Tours & Travel",
  "Professional Services",
  "Other"
];

const dynamicCategories = [...new Set(catalog.map((item) => item.category))];

const categories = [
  'all',
  ...new Set([...fixedCategories, ...dynamicCategories])
];
  const parishes = ['all', ...new Set([...FIXED_PARISHES, ...catalog.map((item) => item.parish).filter(Boolean)])];

  if (!categories.includes(state.filters.category)) state.filters.category = 'all';
  if (!parishes.includes(state.filters.parish)) state.filters.parish = 'all';

  els.categoryChips.innerHTML = categories
    .map((category) => `
      <button type="button" class="chip ${state.filters.category === category ? 'active' : ''}" data-category="${escapeHtml(category)}">
        ${category === 'all' ? 'All categories' : escapeHtml(category)}
      </button>
    `)
    .join('');

  els.parishFilter.innerHTML = parishes
    .map((parish) => `<option value="${escapeHtml(parish)}">${parish === 'all' ? 'All parishes' : escapeHtml(parish)}</option>`)
    .join('');
  els.parishFilter.value = state.filters.parish;
  els.sortFilter.value = state.filters.sort;
  els.sameDayFilter.checked = state.filters.sameDay;

  els.businessCategory.innerHTML = categories
    .filter((category) => category !== 'all')
    .map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`)
    .join('');
  els.businessParish.innerHTML = parishes
    .filter((parish) => parish !== 'all')
    .map((parish) => `<option value="${escapeHtml(parish)}">${escapeHtml(parish)}</option>`)
    .join('');
}

function getFilteredServices() {
  const search = state.filters.search.trim().toLowerCase();
  let filtered = state.services.filter((service) => {
    if (state.filters.category !== 'all' && service.category !== state.filters.category) return false;
    if (state.filters.parish !== 'all' && service.parish !== state.filters.parish) return false;
    if (state.filters.sameDay && !service.sameDay) return false;
    if (!search) return true;
    const haystack = [service.name, service.category, service.parish, service.summary, ...service.services, ...service.coverage, ...service.tags].join(' ').toLowerCase();
    return haystack.includes(search);
  });

  filtered = filtered.sort((a, b) => {
    if (state.filters.sort === 'rating') return (b.rating || 0) - (a.rating || 0);
    if (state.filters.sort === 'price') return (a.startingPrice || 0) - (b.startingPrice || 0);
    if (state.filters.sort === 'response') return (a.responseMinutes || 999) - (b.responseMinutes || 999);
    const score = (item) => {
      const ratingScore = item.reviews > 0 ? item.rating * 10 : 38;
      return ratingScore + Number(item.sameDay) * 16 + Number(item.verified) * 10 + Number(item.featured) * 12 - item.responseMinutes * 0.25;
    };
    return score(b) - score(a);
  });

  return filtered;
}

function findService(id) {
  return state.services.find((item) => item.id === id);
}

function toggleFavorite(serviceId) {
  if (state.favorites.has(serviceId)) {
    state.favorites.delete(serviceId);
    showToast('Removed from saved services.');
  } else {
    state.favorites.add(serviceId);
    showToast('Saved for later.');
  }
  saveLocalState();
  renderServices();
  if (state.selectedService?.id === serviceId) renderDetails(serviceId);
}

function buildMetaLine(service) {
  if (service.reviews > 0) return `${service.rating.toFixed(1)}★ · ${service.reviews} reviews`;
  return service.verified ? 'New on 473Link · Approved listing' : 'New on 473Link';
}


function renderRatingStars(service) {
  const rating = Number(service.rating || 0);
  if (!rating) return '<span class="rating rating--new">New listing</span>';
  const rounded = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, index) => index < rounded ? '★' : '☆').join('');
  return `<span class="rating" aria-label="${escapeHtml(rating.toFixed(1))} out of 5 stars">${stars} <strong>${escapeHtml(rating.toFixed(1))}</strong></span>`;
}

function renderPartnerBadges(service, compact = false) {
  const badges = [];
  if (service.featured) badges.push('<span class="premium-badge premium-badge--featured">★ Featured Partner</span>');
  if (service.verified) badges.push('<span class="premium-badge premium-badge--verified">✓ Verified</span>');
  if (service.tags?.includes('Founding Partner') || service.plan === 'founding') {
    badges.push('<span class="premium-badge premium-badge--founding">Founding Partner</span>');
  }
  if (!badges.length && !compact) badges.push(`<span class="premium-badge">${escapeHtml(service.category)}</span>`);
  return badges.join('');
}

function renderServiceCard(service, options = {}) {
  const saved = state.favorites.has(service.id);
  const featured = Boolean(service.featured);
  const compact = Boolean(options.compact);
  return `
    <article class="service-card card ${featured ? 'service-card--featured' : ''} ${compact ? 'service-card--compact' : ''}">
      <div class="service-card__media ${service.mediaClass} ${service.banner ? 'has-banner' : ''}" ${service.banner ? `style="background-image: url('${escapeHtml(service.banner)}')"` : ''}>
        <div class="service-card__topline">
          <span class="status-pill">${escapeHtml(service.category)}</span>
          ${featured ? '<span class="featured-ribbon">Featured</span>' : ''}
        </div>
        <button type="button" class="icon-button" data-action="favorite" data-service-id="${escapeHtml(service.id)}" aria-label="Save service">
          ${saved ? '♥' : '♡'}
        </button>
      </div>
      <div class="service-card__body">
        <div class="service-card__identity">
          ${service.logo ? `<img src="${escapeHtml(service.logo)}" class="service-logo service-logo--floating" alt="${escapeHtml(service.name)} logo" onerror="this.remove()">` : `<div class="service-logo service-logo--fallback">${escapeHtml(service.name.slice(0, 1).toUpperCase())}</div>`}
          <div>
            <h3>${escapeHtml(service.name)}</h3>
            <p class="muted">${escapeHtml(service.parish)} · ${escapeHtml(service.category)}</p>
          </div>
        </div>
        <div class="featured-badge-row">${renderPartnerBadges(service, compact)}</div>
        <p>${escapeHtml(service.summary)}</p>
        <div class="service-card__meta">
          <span>${renderRatingStars(service)}</span>
          <span>${service.responseMinutes} min reply</span>
          <span>${service.sameDay ? 'Fast response' : 'Profile live'}</span>
        </div>
        <div class="service-card__price">
          <div>
            <span class="metric-label">Starting from</span>
            <strong>${formatStartsFrom(service.startingPrice)}</strong>
          </div>
          <div>
            <span class="metric-label">Visibility</span>
            <strong>${featured ? 'Top placement' : (service.verified ? 'Verified' : 'Standard')}</strong>
          </div>
        </div>
        <div class="service-card__actions">
          <button type="button" class="ghost-button" data-action="details" data-service-id="${escapeHtml(service.id)}">View profile</button>
          <button type="button" class="primary-button" data-action="details" data-service-id="${escapeHtml(service.id)}">Contact</button>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedBusinesses() {
  if (!els.featuredBusinesses) return;
  const featured = state.services.filter((service) => service.featured);
  if (!featured.length) {
    els.featuredBusinesses.innerHTML = `
      <div class="empty-state card featured-empty">
        <strong>No featured businesses yet.</strong>
        <p class="muted">Feature approved businesses from the admin dashboard to place them here.</p>
      </div>
    `;
    return;
  }
  els.featuredBusinesses.innerHTML = featured
    .slice(0, 8)
    .map((service) => renderServiceCard(service, { compact: true }))
    .join('');
}

function renderServices() {
  const filtered = getFilteredServices();
  els.resultsLabel.textContent = `${filtered.length} business${filtered.length === 1 ? '' : 'es'} found`;
  renderFeaturedBusinesses();

  if (!filtered.length) {
    els.servicesGrid.innerHTML = `
      <div class="empty-state card">
        <strong>No businesses match those filters yet.</strong>
        <p class="muted">Try a broader search, add more approved partners, or submit the first business in this category.</p>
        <button type="button" class="primary-button" data-action="open-business">Join as a business</button>
      </div>
    `;
    return;
  }

  els.servicesGrid.innerHTML = filtered
    .map((service) => renderServiceCard(service))
    .join('');
}

function renderDetails(serviceId) {
  const service = findService(serviceId);
  if (!service) return;
  state.selectedService = service;
  const favoriteLabel = state.favorites.has(service.id) ? 'Saved ♥' : 'Save service';
  const providerLabel = service.verified ? 'Verified provider' : 'Approved provider';
  els.detailsContent.innerHTML = `
    <div class="provider-hero ${service.mediaClass} ${service.banner ? 'has-banner' : ''}" ${service.banner ? `style="background-image: url(\'${escapeHtml(service.banner)}\')"` : ''}>
      ${service.logo ? `<img src="${escapeHtml(service.logo)}" class="service-logo service-logo--large" alt="${escapeHtml(service.name)} logo">` : ''}
      <div>
        <span class="status-pill">${providerLabel}</span>
        <h2 id="drawerTitle">${escapeHtml(service.name)}</h2>
        <p>${escapeHtml(service.summary)}</p>
        <div class="provider-tags">
          <span>${escapeHtml(buildMetaLine(service))}</span>
          <span>${service.responseMinutes} min average reply</span>
          <span>${escapeHtml(service.parish)}</span>
        </div>
      </div>
    </div>
    <div class="provider-section">
      <h3>About this provider</h3>
      <p>${escapeHtml(service.about)}</p>
      ${renderContactActions(service)}
    </div>
    <div class="provider-section">
      <h3>Services included</h3>
      <div class="provider-tags">${service.services.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>
    </div>
    <div class="provider-section">
      <h3>Coverage and hours</h3>
      <div class="provider-tags"><span>${escapeHtml(service.hours)}</span>${service.coverage.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>
    </div>
    <div class="provider-section card" style="padding:1rem;">
      <div class="service-card__price">
        <div>
          <span class="metric-label">Starting from</span>
          <strong>${formatStartsFrom(service.startingPrice)}</strong>
        </div>
        <div>
          <span class="metric-label">Launch status</span>
          <strong>${service.featured ? 'Featured partner' : 'Approved profile'}</strong>
        </div>
      </div>
      <p class="muted">Use the contact actions above to call, message, or open this business profile directly from 473Link.</p>
      <div class="provider-cta">
        <button type="button" class="ghost-button" data-action="favorite" data-service-id="${escapeHtml(service.id)}">${favoriteLabel}</button>
      </div>
    </div>
  `;
}

function openDetails(serviceId) {
  renderDetails(serviceId);
  openSurface(els.detailsDrawer);
}

function updateBookingSummary() {
  const service = state.selectedService;
  if (!service) return;
  const choice = els.bookingForm.querySelector('input[name="paymentChoice"]:checked')?.value || 'later';
  const amounts = getBookingAmounts(service, choice);

  if (amounts.dueNow > 0) {
    els.amountDueNowLabel.textContent = 'Due today';
    els.amountRemainingLabel.textContent = 'Estimated later';
    els.amountDueNow.textContent = formatCurrency(amounts.dueNow);
    els.amountRemaining.textContent = amounts.remaining > 0 ? formatCurrency(amounts.remaining) : 'Nothing else due';
    els.bookingSummaryNote.textContent = amounts.remaining > 0
      ? 'You are only paying the booking deposit right now. The provider confirms the final balance after reviewing the job.'
      : 'This payment confirms the booking.';
    els.bookingSubmitButton.textContent = `Continue to ${formatCurrency(amounts.dueNow)} deposit`;
  } else {
    els.amountDueNowLabel.textContent = 'Today';
    els.amountRemainingLabel.textContent = 'After provider review';
    els.amountDueNow.textContent = 'No payment now';
    els.amountRemaining.textContent = amounts.remaining > 0 ? `Starts ${formatCurrency(amounts.remaining)}` : 'Quote after review';
    els.bookingSummaryNote.textContent = amounts.remaining > 0
      ? 'Your request is sent now. The provider can confirm the final price with you before any payment is collected.'
      : 'The provider will review the request and message you with pricing before any payment is taken.';
    els.bookingSubmitButton.textContent = 'Send booking request';
  }
}

function openBooking(serviceId) {
  if (!requireUser('Log in to send booking requests.')) return;
  const service = findService(serviceId);
  if (!service) return;
  state.selectedService = service;
  els.bookingMeta.textContent = `${service.category} · ${service.parish}`;
  els.bookingForm.reset();
  prefillFormsFromUser();
  const dateInput = els.bookingForm.querySelector('input[name="date"]');
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.min = new Date().toISOString().slice(0, 10);
  dateInput.value = tomorrow.toISOString().slice(0, 10);
  els.bookingForm.querySelector('input[name="time"]').value = '10:00';
  syncBookingChoices(service);
  updateBookingSummary();
  closeSurface(els.detailsDrawer);
  openSurface(els.bookingModal);
}

async function submitBooking(event) {
  event.preventDefault();
  const service = state.selectedService;
  if (!service) return;
  const originalText = els.bookingSubmitButton.textContent;
  els.bookingSubmitButton.disabled = true;
  els.bookingSubmitButton.textContent = 'Saving booking…';

  try {
    const formData = new FormData(els.bookingForm);
    const rawChoice = String(formData.get('paymentChoice') || 'later');
    const choice = rawChoice === 'deposit' && getDepositAmount(service) > 0 ? 'deposit' : 'later';
    const amounts = getBookingAmounts(service, choice);

    const payload = {
      serviceId: service.id,
      serviceName: service.name,
      providerName: service.name,
      category: service.category,
      parish: service.parish,
      date: formData.get('date'),
      time: formData.get('time'),
      customerName: formData.get('customerName'),
      customerPhone: formData.get('customerPhone'),
      customerEmail: formData.get('customerEmail'),
      address: formData.get('address'),
      notes: formData.get('notes'),
      paymentChoice: choice,
      amountDueNow: amounts.dueNow,
      amountRemaining: amounts.remaining
    };

    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(state.userToken ? { 'x-auth-token': state.userToken } : {})
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to save booking.');

    const booking = data.booking;
    state.bookings = [booking, ...state.bookings.filter((item) => item.id !== booking.id)];
    renderBookings();

    if (booking.amountDueNow > 0) {
      state.pendingBooking = booking;
      closeSurface(els.bookingModal);
      openPaymentModal(booking);
    } else {
      closeAllSurfaces();
      showToast('Booking request sent. The provider can confirm the final price with you directly.');
    }

    if (state.adminToken) {
      await fetchAdminDashboard();
    }
  } catch (error) {
    if (/log in|session|expired|account/i.test(error.message)) {
      openAuth('login');
    }
    showToast(error.message, 'error');
  } finally {
    els.bookingSubmitButton.disabled = false;
    els.bookingSubmitButton.textContent = originalText;
    updateBookingSummary();
  }
}

function openPaymentModal(booking) {
  state.pendingBooking = booking;
  els.paymentSummary.innerHTML = `
    <div class="payment-summary__row">
      <div>
        <span class="metric-label">Booking</span>
        <strong>${escapeHtml(booking.serviceName)}</strong>
      </div>
      <span class="badge badge--pending">${escapeHtml(booking.status)}</span>
    </div>
    <div class="payment-summary__row">
      <span>${formatDate(booking.date)} at ${escapeHtml(booking.time)}</span>
      <span>${escapeHtml(booking.customerName)}</span>
    </div>
    <div class="payment-summary__row">
      <span>Due now ${formatCurrency(booking.amountDueNow)}</span>
      <span>Remaining ${formatCurrency(booking.amountRemaining)}</span>
    </div>
    <div class="payment-summary__row">
      <span>${escapeHtml(booking.id)}</span>
      <span>${escapeHtml(state.config.paymentProviderName)}</span>
    </div>
  `;

  if (state.config.paymentMode === 'live_link') {
    els.paymentModeText.textContent = `Live checkout via ${state.config.paymentProviderName}`;
    els.liveCheckoutButton.classList.remove('hidden');
    els.mockPaymentForm.classList.add('hidden');
  } else {
    els.paymentModeText.textContent = 'Secure demo checkout';
    els.mockPaymentForm.classList.remove('hidden');
    els.liveCheckoutButton.classList.add('hidden');
  }
  openSurface(els.paymentModal);
}

function updateBookingLocally(booking, payment) {
  state.bookings = state.bookings.map((item) => (item.id === booking.id ? { ...item, ...booking } : item));
  state.receipt = {
    bookingId: booking.id,
    serviceName: booking.serviceName,
    customerName: booking.customerName,
    date: booking.date,
    time: booking.time,
    amount: payment.amount,
    currency: payment.currency || 'XCD',
    reference: payment.id || payment.reference || 'REF',
    paidAt: payment.createdAt || new Date().toISOString()
  };
  saveLocalState();
  renderBookings();
  renderReceipt();
}

async function submitMockPayment(event) {
  event.preventDefault();
  if (!state.pendingBooking) return;
  const formData = new FormData(els.mockPaymentForm);
  const cardholderName = String(formData.get('cardholderName') || '').trim();
  const cardNumber = String(formData.get('cardNumber') || '').replace(/\D/g, '');
  const expiry = String(formData.get('expiry') || '').trim();
  const cvc = String(formData.get('cvc') || '').trim();

  if (!cardholderName || cardNumber.length < 16 || !/^\d{2}\/\d{2}$/.test(expiry) || !/^\d{3,4}$/.test(cvc)) {
    showToast('Enter complete card details to continue.', 'error');
    return;
  }

  const submitButton = els.mockPaymentForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Processing payment…';

  try {
    const response = await fetch('/api/mock-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        bookingId: state.pendingBooking.id,
        amount: state.pendingBooking.amountDueNow,
        cardLast4: cardNumber.slice(-4)
      })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Payment failed.');
    updateBookingLocally(data.booking, data.payment);
    closeAllSurfaces();
    showToast(`Payment received for ${state.pendingBooking.serviceName}.`);
    if (state.adminToken) {
      await fetchAdminDashboard();
    }
  } catch (error) {
    showToast(error.message, 'error');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Pay securely';
  }
}

async function startLiveCheckout() {
  if (!state.pendingBooking) return;
  els.liveCheckoutButton.disabled = true;
  els.liveCheckoutButton.textContent = 'Preparing checkout…';
  try {
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookingId: state.pendingBooking.id })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to prepare checkout.');
    if (data.mode !== 'live_link' || !data.url) {
      showToast('Live payment link is not configured, using secure demo checkout instead.');
      state.config.paymentMode = 'mock';
      openPaymentModal(state.pendingBooking);
      return;
    }
    window.location.href = data.url;
  } catch (error) {
    showToast(error.message, 'error');
  } finally {
    els.liveCheckoutButton.disabled = false;
    els.liveCheckoutButton.textContent = 'Continue to live checkout';
  }
}

function renderBookings() {
  if (!state.user) {
    els.bookingsList.innerHTML = `
      <div class="empty-state">
        <strong>Log in to see your bookings.</strong>
        <p class="muted">Your requests, payment status, and future receipts will appear here once you are signed in.</p>
        <button type="button" class="primary-button" data-action="open-auth">Log in</button>
      </div>
    `;
    return;
  }

  if (!state.bookings.length) {
    els.bookingsList.innerHTML = `
      <div class="empty-state">
        <strong>No bookings yet for ${escapeHtml(state.user.name || 'your account')}.</strong>
        <p class="muted">Book a provider and the request will appear here with payment status.</p>
      </div>
    `;
    return;
  }

  const bookings = [...state.bookings].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  els.bookingsList.innerHTML = bookings
    .map((booking) => `
      <article class="booking-item">
        <div class="booking-item__top">
          <div>
            <h4>${escapeHtml(booking.serviceName)}</h4>
            <p class="muted">${escapeHtml(booking.customerName)} · ${formatDate(booking.date)} at ${escapeHtml(booking.time)}</p>
          </div>
          <span class="${getStatusBadgeClass(booking.status)}">${escapeHtml(booking.status)}</span>
        </div>
        <div class="booking-meta">
          <span>${escapeHtml(booking.id)}</span>
          <span>Due now ${formatCurrency(booking.amountDueNow)}</span>
          <span>Remaining ${formatCurrency(booking.amountRemaining)}</span>
        </div>
      </article>
    `)
    .join('');
}

function renderReceipt() {
  if (!state.receipt) {
    els.receiptPreview.className = 'receipt receipt--empty';
    els.receiptPreview.textContent = 'Make a booking to generate a receipt.';
    return;
  }

  els.receiptPreview.className = 'receipt';
  els.receiptPreview.innerHTML = `
    <div class="receipt__top">
      <div>
        <h4>Deposit receipt</h4>
        <p class="muted">${escapeHtml(state.receipt.reference)}</p>
      </div>
      <span class="badge badge--paid">Paid</span>
    </div>
    <div>
      <strong>${escapeHtml(state.receipt.serviceName)}</strong>
      <p class="muted">${escapeHtml(state.receipt.customerName)}</p>
    </div>
    <div class="payment-summary__row">
      <span>${formatDate(state.receipt.date)}</span>
      <span>${escapeHtml(state.receipt.time)}</span>
    </div>
    <div class="payment-summary__row">
      <span>Amount ${formatCurrency(state.receipt.amount)}</span>
      <span>${escapeHtml(state.receipt.currency)}</span>
    </div>
    <div>
      <p class="muted">Paid on ${formatDate(state.receipt.paidAt)}</p>
    </div>
  `;
}

function renderDashboardLocked() {
  els.dashboardLocked.classList.remove('hidden');
  els.dashboardContent.classList.add('hidden');
}

function getListingPlanLabel(plan) {
  if (plan === 'growth' || plan === 'premium') return 'Premium';
  if (plan === 'founding') return 'Founding Partner';
  return 'Basic';
}

function isStarterHidden(starterId) {
  const hiddenIds = state.dashboard?.settings?.hiddenStarterIds || state.config.hiddenStarterIds || [];
  return hiddenIds.includes(starterId);
}

function renderDashboard() {
  if (!state.dashboard) {
    renderDashboardLocked();
    return;
  }

  els.dashboardLocked.classList.add('hidden');
  els.dashboardContent.classList.remove('hidden');
  els.starterListingsToggle.checked = Boolean(state.dashboard.settings?.showStarterListings);

  els.dashboardMetrics.innerHTML = `
    <div class="metric-card card"><span class="metric-label">Customer leads</span><strong>${state.dashboard.totalLeads}</strong></div>
    <div class="metric-card card"><span class="metric-label">Pending listings</span><strong>${state.dashboard.pendingListings}</strong></div>
    <div class="metric-card card"><span class="metric-label">Approved listings</span><strong>${state.dashboard.approvedListings}</strong></div>
    <div class="metric-card card"><span class="metric-label">Active providers</span><strong>${state.dashboard.activeProviders}</strong></div>
    <div class="metric-card card"><span class="metric-label">Deposits collected</span><strong>${formatCurrency(state.dashboard.depositsCollected)}</strong></div>
  `;

  const bookingRows = state.dashboard.latestBookings || [];
  els.dashboardBookingRows.innerHTML = bookingRows.length
    ? bookingRows
        .map((booking) => `
          <tr>
            <td data-label="Service">${escapeHtml(booking.serviceName)}</td>
            <td data-label="Customer">${escapeHtml(booking.customerName)}</td>
            <td data-label="When">${formatDate(booking.date)} · ${escapeHtml(booking.time)}</td>
            <td data-label="Status"><span class="${getStatusBadgeClass(booking.status)}">${escapeHtml(booking.status)}</span></td>
            <td data-label="Due now">${formatCurrency(booking.amountDueNow)}</td>
          </tr>
        `)
        .join('')
    : '<tr><td colspan="5" class="muted">No booking activity yet.</td></tr>';

  const pendingRows = state.dashboard.pendingBusinessListings || [];
  els.reviewQueueRows.innerHTML = pendingRows.length
    ? pendingRows
        .map((listing) => `
          <tr>
            <td data-label="Business">
              <strong>${escapeHtml(listing.businessName)}</strong>
              <div class="table-note">${escapeHtml(listing.ownerName)} · ${escapeHtml(listing.businessPhone)}</div>
            </td>
            <td data-label="Listing">
              <div>${escapeHtml(listing.category)} · ${escapeHtml(listing.parish)}</div>
              <div class="table-note">${escapeHtml(listing.summary)}</div>
            </td>
            <td data-label="Plan">
              <span class="table-status table-status--pending">${escapeHtml(getListingPlanLabel(listing.plan))}</span>
              <div class="table-note">Starts ${formatStartsFrom(listing.startingPrice)}</div>
            </td>
            <td data-label="Actions">
              <div class="table-actions">
                <button type="button" class="table-action" data-admin-action="approve" data-listing-id="${escapeHtml(listing.id)}">Approve</button>
                <button type="button" class="table-action" data-admin-action="reject" data-listing-id="${escapeHtml(listing.id)}">Reject</button>
                <button type="button" class="table-action" data-admin-action="delete" data-listing-id="${escapeHtml(listing.id)}">Delete</button>
              </div>
            </td>
          </tr>
        `)
        .join('')
    : '<tr><td colspan="4" class="muted">No pending listings right now.</td></tr>';

  const approvedRows = state.dashboard.approvedBusinessListings || [];
  els.approvedListingRows.innerHTML = approvedRows.length
    ? approvedRows
        .map((listing) => `
          <tr>
            <td data-label="Business">
              <strong>${escapeHtml(listing.businessName)}</strong>
              <div class="table-note">${escapeHtml(listing.category)} · ${escapeHtml(listing.parish)}</div>
            </td>
            <td data-label="Status">
              <div class="table-actions">
                <span class="table-status ${listing.featured ? 'table-status--featured' : ''}">${listing.featured ? 'Featured' : 'Standard'}</span>
                <span class="table-status ${listing.verified ? 'table-status--verified' : ''}">${listing.verified ? 'Verified' : 'Approved'}</span>
              </div>
            </td>
            <td data-label="Price">
              <div>${formatStartsFrom(listing.startingPrice)}</div>
              <div class="table-note">${escapeHtml(getListingPlanLabel(listing.plan))}</div>
            </td>
            <td data-label="Actions">
              <div class="table-actions">
                <button type="button" class="table-action" data-admin-action="toggle_featured" data-listing-id="${escapeHtml(listing.id)}">${listing.featured ? 'Unfeature' : 'Feature'}</button>
                <button type="button" class="table-action" data-admin-action="toggle_verified" data-listing-id="${escapeHtml(listing.id)}">${listing.verified ? 'Unverify' : 'Verify'}</button>
                <button type="button" class="table-action" data-admin-action="delete" data-listing-id="${escapeHtml(listing.id)}">Delete</button>
              </div>
            </td>
          </tr>
        `)
        .join('')
    : '<tr><td colspan="4" class="muted">No approved listings yet.</td></tr>';

  const starterRows = STARTER_SERVICES;
  els.starterListingRows.innerHTML = starterRows.length
    ? starterRows.map((service) => {
        const hidden = isStarterHidden(service.id);
        return `
          <tr>
            <td data-label="Business">
              <strong>${escapeHtml(service.name)}</strong>
              <div class="table-note">Starter demo business</div>
            </td>
            <td data-label="Category">
              <div>${escapeHtml(service.category)}</div>
              <div class="table-note">${escapeHtml(service.parish)}</div>
            </td>
            <td data-label="Status">
              <span class="table-status ${hidden ? '' : 'table-status--featured'}">${hidden ? 'Removed from public view' : 'Visible in starter mode'}</span>
            </td>
            <td data-label="Actions">
              <div class="table-actions">
                <button type="button" class="table-action" data-starter-action="${hidden ? 'restore' : 'hide'}" data-starter-id="${escapeHtml(service.id)}">${hidden ? 'Restore' : 'Remove'}</button>
              </div>
            </td>
          </tr>
        `;
      }).join('')
    : '<tr><td colspan="4" class="muted">No starter services configured.</td></tr>';

  const rejectedRows = state.dashboard.rejectedBusinessListings || [];
  els.rejectedListingRows.innerHTML = rejectedRows.length
    ? rejectedRows
        .map((listing) => `
          <tr>
            <td data-label="Business">
              <strong>${escapeHtml(listing.businessName)}</strong>
              <div class="table-note">${escapeHtml(listing.category)} · ${escapeHtml(listing.parish)}</div>
            </td>
            <td data-label="Reason">
              <span class="table-status table-status--rejected">Rejected</span>
              <div class="table-note">${escapeHtml(listing.note || listing.summary || 'No extra context provided.')}</div>
            </td>
            <td data-label="Updated">${formatDate(listing.reviewedAt || listing.createdAt)}</td>
            <td data-label="Actions">
              <div class="table-actions">
                <button type="button" class="table-action" data-admin-action="restore" data-listing-id="${escapeHtml(listing.id)}">Restore</button>
                <button type="button" class="table-action" data-admin-action="delete" data-listing-id="${escapeHtml(listing.id)}">Delete</button>
              </div>
            </td>
          </tr>
        `)
        .join('')
    : '<tr><td colspan="4" class="muted">No rejected listings yet.</td></tr>';
}

async function fetchConfig() {
  try {
    const response = await fetch('/api/config');
    const data = await response.json();
    if (response.ok) state.config = { ...state.config, ...data, hiddenStarterIds: Array.isArray(data.hiddenStarterIds) ? data.hiddenStarterIds : (state.config.hiddenStarterIds || []) };
  } catch {
    // keep fallback config
  }
  els.paymentModeBadge.textContent = state.config.showStarterListings ? 'Discovery mode live' : 'Founding partner mode';
}

async function refreshCatalog() {
  try {
    const response = await fetch('/api/public-listings');
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to fetch listings.');
    state.customListings = Array.isArray(data.listings) ? data.listings : [];
  } catch {
    state.customListings = [];
  }
  setServices();
  buildHeroStats();
  buildMiniFeatured();
  populateFilters();
  renderServices();
}

async function fetchAdminDashboard() {
  if (!isAdminUser()) {
    state.adminToken = '';
    state.dashboard = null;
    saveLocalState();
    syncAdminVisibility();
    return;
  }
  if (!state.adminToken) {
    state.dashboard = null;
    renderDashboardLocked();
    return;
  }
  try {
    const response = await fetch('/api/admin/dashboard', {
      headers: { 'x-admin-token': state.adminToken }
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to fetch admin dashboard.');
    state.dashboard = data;
    state.config.showStarterListings = Boolean(data.settings?.showStarterListings);
    state.config.hiddenStarterIds = Array.isArray(data.settings?.hiddenStarterIds) ? data.settings.hiddenStarterIds : [];
    setServices();
    populateFilters();
    renderServices();
    renderDashboard();
  } catch (error) {
    state.adminToken = '';
    state.dashboard = null;
    saveLocalState();
    renderDashboardLocked();
    if (error.message && !/required/i.test(error.message)) {
      showToast(error.message, 'error');
    }
  }
}

function getSelectedDepositPercent() {
  if (!els.depositPreset) return 0;
  if (els.depositPreset.value === 'custom') {
    return Math.max(0, Math.min(90, Number(els.depositCustomPercent?.value || 0)));
  }
  return Math.max(0, Math.min(90, Number(els.depositPreset.value || 0)));
}

function updateBusinessPricingControls() {
  if (!els.depositPreset || !els.depositCustomWrap || !els.depositHelperText) return;
  const showCustom = els.depositPreset.value === 'custom';
  els.depositCustomWrap.classList.toggle('hidden', !showCustom);
  const startingPrice = Number(els.startingPriceInput?.value || 0);
  const depositPercent = getSelectedDepositPercent();
  els.depositHelperText.textContent = getDepositExample(startingPrice, depositPercent);
}

async function submitBusinessListing(event) {
  event.preventDefault();
  if (!requireUser('Create an account to submit a business listing.')) return;
  const formData = new FormData(els.businessForm);
  const depositPercent = getSelectedDepositPercent();
  const payload = {
    ownerName: formData.get('ownerName'),
    businessName: formData.get('businessName'),
    businessPhone: formData.get('businessPhone'),
    email: formData.get('email'),
    logo: formData.get('logo'),
    banner: formData.get('banner'),
    category: formData.get('category'),
    parish: formData.get('parish'),
    website: formData.get('website'),
    responseMinutes: Number(formData.get('responseMinutes') || 30),
    sameDay: formData.get('sameDay') === 'on',
    summary: formData.get('summary'),
    services: formData.get('services'),
    coverage: formData.get('coverage'),
    hours: formData.get('hours'),
    startingPrice: Number(formData.get('startingPrice') || 0),
    depositPercent,
    plan: formData.get('plan'),
    note: formData.get('note')
  };

  const button = els.businessForm.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Submitting…';
  try {
    const response = await fetch('/api/business-listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(state.userToken ? { 'x-auth-token': state.userToken } : {})
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to save your listing.');
    closeAllSurfaces();
    els.businessForm.reset();
    updateBusinessPricingControls();
    showToast('Listing submitted. It will stay private until approved.');
    if (state.adminToken) {
      await fetchAdminDashboard();
    }
  } catch (error) {
    if (/log in|session|account/i.test(error.message)) {
      openAuth('login');
    }
    showToast(error.message, 'error');
  } finally {
    button.disabled = false;
    button.textContent = 'Send application';
  }
}

async function clearLocalPreview() {
  if (!state.user) {
    openAuth('login');
    return;
  }
  await fetchMyBookings();
  showToast('Bookings refreshed.');
}

async function unlockAdminDashboard(showMessage = false) {
  if (!isAdminUser() || !state.userToken) return false;
  try {
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': state.userToken
      },
      body: JSON.stringify({ email: state.user?.email || '' })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to unlock dashboard.');
    state.adminToken = data.token;
    saveLocalState();
    await fetchAdminDashboard();
    if (showMessage) showToast('Admin dashboard unlocked.');
    return true;
  } catch (error) {
    state.adminToken = '';
    saveLocalState();
    renderDashboardLocked();
    if (showMessage) showToast(error.message, 'error');
    return false;
  }
}

async function submitAdminLogin(event) {
  event.preventDefault();
  await unlockAdminDashboard(true);
}


async function lockDashboard() {
  try {
    await fetch('/api/admin/logout', {
      method: 'POST',
      headers: state.adminToken ? { 'x-admin-token': state.adminToken } : {}
    });
  } catch {
    // ignore logout transport issues
  }
  state.adminToken = '';
  state.dashboard = null;
  saveLocalState();
  renderDashboardLocked();
  showToast('Dashboard locked.');
}

async function updateStarterListingsSetting() {
  if (!state.adminToken) return;
  const nextValue = els.starterListingsToggle.checked;
  try {
    const response = await fetch('/api/admin/settings', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-token': state.adminToken
      },
      body: JSON.stringify({ showStarterListings: nextValue })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to update starter listings.');
    state.config.showStarterListings = data.settings.showStarterListings;
    state.config.hiddenStarterIds = Array.isArray(data.settings.hiddenStarterIds) ? data.settings.hiddenStarterIds : [];
    await refreshCatalog();
    await fetchAdminDashboard();
    showToast(nextValue ? 'Starter listings are visible again.' : 'Starter listings are now hidden.');
  } catch (error) {
    els.starterListingsToggle.checked = !nextValue;
    showToast(error.message, 'error');
  }
}

async function performAdminAction(listingId, action) {
  if (!state.adminToken || !listingId || !action) return;
  try {
    const response = await fetch(`/api/admin/listings/${encodeURIComponent(listingId)}/action`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-token': state.adminToken
      },
      body: JSON.stringify({ action })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to update listing.');
    state.dashboard = data.dashboard || state.dashboard;
    state.config.hiddenStarterIds = Array.isArray(data.dashboard?.settings?.hiddenStarterIds) ? data.dashboard.settings.hiddenStarterIds : (state.config.hiddenStarterIds || []);
    renderDashboard();
    await refreshCatalog();
    showToast('Listing updated.');
  } catch (error) {
    showToast(error.message, 'error');
  }
}


async function performStarterAction(starterId, action) {
  if (!state.adminToken || !starterId || !action) return;
  try {
    const response = await fetch(`/api/admin/starter-services/${encodeURIComponent(starterId)}/action`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-token': state.adminToken
      },
      body: JSON.stringify({ action })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to update starter business.');
    state.dashboard = data.dashboard || state.dashboard;
    state.config.hiddenStarterIds = Array.isArray(data.dashboard?.settings?.hiddenStarterIds) ? data.dashboard.settings.hiddenStarterIds : [];
    renderDashboard();
    await refreshCatalog();
    showToast(action === 'hide' ? 'Starter business removed from public view.' : 'Starter business restored.');
  } catch (error) {
    showToast(error.message, 'error');
  }
}

async function resetPlatformData() {
  if (!state.adminToken) return;
  const confirmed = window.confirm('This will clear saved bookings, payments, and submitted listings. Continue?');
  if (!confirmed) return;
  try {
    const response = await fetch('/api/admin/reset', {
      method: 'POST',
      headers: { 'x-admin-token': state.adminToken }
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to reset platform data.');
    state.bookings = [];
    state.receipt = null;
    saveLocalState();
    renderBookings();
    renderReceipt();
    await refreshCatalog();
    await fetchAdminDashboard();
    showToast('Platform data reset.');
  } catch (error) {
    showToast(error.message, 'error');
  }
}

function wirePaymentInputs() {
  const numberInput = els.mockPaymentForm.querySelector('input[name="cardNumber"]');
  const expiryInput = els.mockPaymentForm.querySelector('input[name="expiry"]');
  const cvcInput = els.mockPaymentForm.querySelector('input[name="cvc"]');

  numberInput.addEventListener('input', () => {
    const digits = numberInput.value.replace(/\D/g, '').slice(0, 16);
    numberInput.value = digits.replace(/(.{4})/g, '$1 ').trim();
  });

  expiryInput.addEventListener('input', () => {
    const digits = expiryInput.value.replace(/\D/g, '').slice(0, 4);
    expiryInput.value = digits.length >= 3 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
  });

  cvcInput.addEventListener('input', () => {
    cvcInput.value = cvcInput.value.replace(/\D/g, '').slice(0, 4);
  });
}

function bindEvents() {
  els.searchButton.addEventListener('click', () => {
    state.filters.search = els.searchInput.value;
    renderServices();
  });

  els.searchInput.addEventListener('input', () => {
    state.filters.search = els.searchInput.value;
    renderServices();
  });

  els.categoryChips.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    state.filters.category = button.dataset.category;
    populateFilters();
    renderServices();
  });

  els.parishFilter.addEventListener('change', (event) => {
    state.filters.parish = event.target.value;
    renderServices();
  });

  els.sortFilter.addEventListener('change', (event) => {
    state.filters.sort = event.target.value;
    renderServices();
  });

  els.sameDayFilter.addEventListener('change', (event) => {
    state.filters.sameDay = event.target.checked;
    renderServices();
  });

  els.resetFilters.addEventListener('click', () => {
    state.filters = { search: '', category: 'all', parish: 'all', sort: 'recommended', sameDay: false };
    els.searchInput.value = '';
    populateFilters();
    renderServices();
  });

  els.servicesGrid.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    const serviceId = button.dataset.serviceId;
    if (action === 'details') openDetails(serviceId);
    if (action === 'book') openBooking(serviceId);
    if (action === 'favorite') toggleFavorite(serviceId);
    if (action === 'open-business') {
      if (!requireUser('Create an account to submit a business listing.')) return;
      prefillFormsFromUser();
      openSurface(els.businessModal);
    }
  });

  els.detailsContent.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    const serviceId = button.dataset.serviceId;
    if (action === 'book') openBooking(serviceId);
    if (action === 'favorite') toggleFavorite(serviceId);
    if (action === 'open-business') {
      if (!requireUser('Create an account to submit a business listing.')) return;
      prefillFormsFromUser();
      openSurface(els.businessModal);
    }
  });

  document.body.addEventListener('click', (event) => {
    const targetId = event.target.getAttribute('data-close');
    if (!targetId) return;
    const surface = document.getElementById(targetId);
    if (surface) closeSurface(surface);
  });

  els.bookingsList.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action="open-auth"]');
    if (!button) return;
    openAuth('login');
  });

  els.openLoginButton?.addEventListener('click', () => openAuth('login'));
  els.openSignupButton?.addEventListener('click', () => openAuth('signup'));
  els.accountPanelPrimary?.addEventListener('click', () => {
    if (state.user) {
      document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    openAuth('login');
  });
  els.accountPanelSecondary?.addEventListener('click', () => {
    if (state.user) {
      prefillFormsFromUser();
      openSurface(els.businessModal);
      return;
    }
    openAuth('signup');
  });
  els.logoutButton?.addEventListener('click', async () => {
    await handleLogout();
    closeAllSurfaces();
  });
  els.authModeLogin?.addEventListener('click', () => {
    state.authMode = 'login';
    syncAuthMode();
  });
  els.authModeSignup?.addEventListener('click', () => {
    state.authMode = 'signup';
    syncAuthMode();
  });
  els.authForm?.addEventListener('submit', submitAuthForm);
  els.authResendButton?.addEventListener('click', resendVerificationCode);

  els.modalBackdrop.addEventListener('click', closeAllSurfaces);
  els.bookingForm.addEventListener('submit', submitBooking);
  els.bookingForm.addEventListener('change', (event) => {
    if (event.target.name === 'paymentChoice') updateBookingSummary();
  });

  els.mockPaymentForm.addEventListener('submit', submitMockPayment);
  els.liveCheckoutButton.addEventListener('click', startLiveCheckout);
  els.businessForm.addEventListener('submit', submitBusinessListing);
  els.depositPreset?.addEventListener('change', updateBusinessPricingControls);
  els.depositCustomPercent?.addEventListener('input', updateBusinessPricingControls);
  els.startingPriceInput?.addEventListener('input', updateBusinessPricingControls);
  els.openBusinessModal.addEventListener('click', () => {
    if (!requireUser('Create an account to submit a business listing.')) return;
    prefillFormsFromUser();
    openSurface(els.businessModal);
  });
  els.businessPitchButton.addEventListener('click', () => {
    if (!requireUser('Create an account to submit a business listing.')) return;
    prefillFormsFromUser();
    openSurface(els.businessModal);
  });
  els.clearLocalButton.addEventListener('click', clearLocalPreview);
  els.adminLoginForm.addEventListener('submit', submitAdminLogin);
  els.starterListingsToggle.addEventListener('change', updateStarterListingsSetting);
  els.adminLogoutButton.addEventListener('click', lockDashboard);
  els.resetPlatformButton.addEventListener('click', resetPlatformData);

  els.dashboardContent.addEventListener('click', (event) => {
    const starterButton = event.target.closest('[data-starter-action]');
    if (starterButton) {
      performStarterAction(starterButton.dataset.starterId, starterButton.dataset.starterAction);
      return;
    }
    const button = event.target.closest('[data-admin-action]');
    if (!button) return;
    performAdminAction(button.dataset.listingId, button.dataset.adminAction);
  });

  wirePaymentInputs();
}

async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  const isLocalPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname);
  try {
    if (isLocalPreview) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
      return;
    }
    await navigator.serviceWorker.register('/sw.js?v=6');
  } catch {
    // ignore in local previews
  }
}

async function init() {
  renderReceipt();
  renderDashboardLocked();
  bindEvents();
  syncAuthMode();
  updateAuthUi();
  renderBookings();
  updateBusinessPricingControls();
  ensureUploadUi();
  await fetchConfig();
  await refreshCatalog();
  await restoreUserSession();
  if (isAdminUser() && !state.adminToken) {
    await unlockAdminDashboard(false);
  } else if (state.adminToken) {
    await fetchAdminDashboard();
  } else {
    syncAdminVisibility();
  }
  await registerServiceWorker();
}

init();
