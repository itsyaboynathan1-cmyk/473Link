const CACHE_NAME = '473link-shell-v7';
const APP_SHELL = [
  '/',
  '/index.html',
  '/styles.css?v=7',
  '/app.js?v=7',
  '/pwa-install.js?v=7',
  '/manifest.json?v=7',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL).catch(() => null)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.pathname.startsWith('/api/')) return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone()).catch(() => null);
      return response;
    } catch {
      const cached = await caches.match(request);
      return cached || caches.match('/index.html');
    }
  })());
});
