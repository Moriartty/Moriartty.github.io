if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/service-worker.js')
        .then(function() {
            console.log('Service Worker Registered');
        });
}
const cacheName = 'eat-what';
let filesToCache = [
    '/',
    '/index.html',
    // 'service-worker.js',
    'manifest.json',
    'static/js/jquery.min.js',
    'static/js/awardRotate.js',
    'static/images/delete.png',
    'static/images/start.png',
    'static/images/logo.jpg',
    'static/css/style.css',
    'static/build/flexible_css.debug.js',
    'static/build/flexible.debug.js',
    'static/build/makegrid.debug.js'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                console.log('[ServiceWorker] Removing old cache', key);
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});