// ============================================================
//  Service Worker — همیار دانش‌آموز
//  کش کردن فایل‌ها برای کار آفلاین
// ============================================================

const CACHE_NAME = 'hamyar-arabic-v1';
const ASSETS = [
    './',
    './index.html',
    './voice.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// نصب: کش کردن فایل‌ها
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(ASSETS).catch(function(err) {
                console.log('بعضی فایل‌ها کش نشدند:', err);
            });
        })
    );
    self.skipWaiting();
});

// فعال‌سازی: پاک کردن کش‌های قدیمی
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(
                keys.filter(function(k) { return k !== CACHE_NAME; })
                    .map(function(k) { return caches.delete(k); })
            );
        })
    );
    self.clients.claim();
});

// درخواست‌ها: از کش بخوان، اگر نبود از شبکه
self.addEventListener('fetch', function(event) {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(function(cached) {
            return cached || fetch(event.request).then(function(response) {
                if (response && response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then(function(cache) {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            }).catch(function() {
                return caches.match('./index.html');
            });
        })
    );
});