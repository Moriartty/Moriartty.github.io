if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/service-worker.js')
        .then(function() {
            console.log('Service Worker Registered');
        });
}
const cacheName = 'eat-what';
let filesToCache = [
    'Eat-What/',
    'Eat-What/index.html',
    'Eat-What/manifest.json',
    'Eat-What/static/js/jquery.min.js',
    'Eat-What/static/js/awardRotate.js',
    'Eat-What/static/images/delete.png',
    'Eat-What/static/images/start.png',
    'Eat-What/static/images/logo.jpg'
    'Eat-What/static/css/style.css',
    'Eat-What/static/build/flexible_css.debug.js',
    'Eat-What/static/build/flexible.debug.js',
    'Eat-What/static/build/makegrid.debug.js'
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