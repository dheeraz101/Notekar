const SW_CHANNEL = new URL(self.location.href).searchParams.get('channel') === 'beta' ? 'beta' : 'stable';
importScripts(SW_CHANNEL === 'beta' ? './releases/beta.js' : './releases/stable.js');

const SW_META = SW_CHANNEL === 'beta' ? globalThis.NOTEKAR_BETA_META : globalThis.NOTEKAR_META;
const CACHE_NAME = `notekar-${SW_CHANNEL}-cache-v${SW_META.version}`;
const APP_SHELL = [
  './',
  './index.html',
  './releases/stable.js',
  './releases/beta.js',
  './manifest.json',
  './favicon.ico',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-maskable-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './sw.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'GET_VERSION') {
    event.source.postMessage({
      type: 'VERSION_INFO',
      version: SW_META.version,
      channel: SW_CHANNEL
    });
    return;
  }
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = event.notification.data && event.notification.data.url ? event.notification.data.url : './';
  event.waitUntil(
    clients.matchAll({type:'window', includeUncontrolled:true}).then(async clientList => {
      const targetUrl = new URL(url, self.location.origin).toString();
      if (clientList.length) {
        const client = clientList[0];
        if ('navigate' in client) {
          await client.navigate(targetUrl);
          if ('focus' in client) return client.focus();
        }
        if ('focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(targetUrl);
    })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  const path = url.pathname || '/';
  const isDocument = event.request.mode === 'navigate' || path.endsWith('/') || path.endsWith('.html');
  const isDynamicData = path.endsWith('/health.json') || path.endsWith('/notification.json');
  const isStaticAsset = /\.(?:js|css|png|jpg|jpeg|svg|webp|ico|json|woff2?)$/i.test(path);

  if (url.searchParams.has('nk-refresh')) {
    const cleanUrl = new URL(event.request.url);
    cleanUrl.searchParams.delete('nk-refresh');
    const cleanHref = cleanUrl.toString();

    event.respondWith(
      fetch(cleanHref, {cache:'reload', credentials:'same-origin'}).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(cleanHref, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => caches.match(cleanHref))
    );
    return;
  }

  if (isDocument || isDynamicData) {
    event.respondWith(
      fetch(event.request, {cache:'no-store'}).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.ok) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse.clone()));
          }
          return networkResponse;
        }).catch(() => cachedResponse);
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
