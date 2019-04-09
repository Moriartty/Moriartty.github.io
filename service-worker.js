if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/service-worker.js')
        .then(function() {
            console.log('Service Worker Registered');
        });
}
const cacheName = 'eat-what';
let filesToCache = [
    'eat-what/',
    'eat-what/index.html',
    'eat-what/manifest.json',
    'eat-what/static/js/jquery.min.js',
    'eat-what/static/js/awardRotate.js',
    'eat-what/static/images/delete.png',
    'eat-what/static/images/start.png',
    'eat-what/static/images/logo.png',
    'eat-what/static/css/style.css',
    'eat-what/static/build/flexible_css.debug.js',
    'eat-what/static/build/flexible.debug.js',
    'eat-what/static/build/makegrid.debug.js'
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