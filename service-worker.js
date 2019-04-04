if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/service-worker.js')
        .then(function() {
            console.log('Service Worker Registered');
        });
}
const cacheName = 'moriartty';
let filesToCache = [
    '/',
    '/index.html',
    '/index_mobile.html',
    '/js/bootstrap.min.js',
    '/js/jquery.min.js',
    '/js/moriarty.js',
    '/js/source.js',
    '/js/template.min.js',
    '/js/utils.js',
    // 'css/bootstrap.min.css',
    // 'css/bootstrap-theme.min.css',
    // 'css/responsive.css',
    // 'css/responsive_mobile.css',
    // 'css/style.css',
    // 'images/background.png',
    // 'images/github.svg',
    // 'images/ic_launcher.png',
    // 'images/others-honor.svg',
    // 'images/school-honor.svg',
    // 'images/section-title-avatar.png',
    // 'images/slider-0.png',
    // 'images/slider-1.png',
    // 'images/slider-2.png',
    // 'images/slider-3.png',
    // 'images/slider-4.png',
    // 'images/slider-5.png',
    // 'images/steam.svg',
    // 'images/wechat.png',
    // 'images/WechatIMG1.jpeg',
    // 'images/work-honor.svg',
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