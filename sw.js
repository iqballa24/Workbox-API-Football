importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox){
    workbox.precaching.precacheAndRoute([
        { url: '/', revision: '1' },
        { url: '/index.html', revision: '1' },
        { url: '/nav.html', revision: '1' },
        { url: '/detail.html', revision: '1' },
        { url: '/manifest.json', revision: '1' },
        { url: '/pages/home.html', revision: '1' },
        { url: '/pages/club.html', revision: '1' },
        { url: '/pages/topScorers.html', revision: '1' },
        { url: '/pages/favourite.html', revision: '1' },
        { url: '/src/css/materialize.min.css', revision: '1' },
        { url: '/src/js/view/materialize.min.js', revision: '1' },
        { url: '/src/js/view/nav.js', revision: '1' },
        { url: '/src/js/view/main.js', revision: '1' },
        { url: '/src/js/fav.js', revision: '1' },
        { url: '/src/js/detail.js', revision: '1' },
        { url: '/src/js/api.js', revision: '1' },
        { url: '/src/js/data/app.js', revision: '1' },
        { url: '/src/js/data/db.js', revision: '1' },
        { url: '/src/js/data/idb.js', revision: '1' },
        { url: '/src/js/component/favTeams.js', revision: '1' },
        { url: '/src/js/component/standing.js', revision: '1' },
        { url: '/src/js/component/teams.js', revision: '1' },
        { url: '/src/js/component/topScorer.js', revision: '1' },
        { url: '/src/images/EPL.png', revision: '1' },
        { url: '/src/images/logo.gif', revision: '1' },
        { url: '/src/images/icons/icon-72x72.png', revision: '1' },
        { url: '/src/images/icons/icon-96x96.png', revision: '1' },
        { url: '/src/images/icons/icon-128x128.png', revision: '1' },
        { url: '/src/images/icons/icon-144x144.png', revision: '1' },
        { url: '/src/images/icons/icon-152x152.png', revision: '1' },
        { url: '/src/images/icons/icon-192x192.png', revision: '1' },
        { url: '/src/images/icons/icon-384x384.png', revision: '1' },
        { url: '/src/images/icons/icon-512x512.png', revision: '1' },
    ]);

    workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/v2/'),
        workbox.strategies.staleWhileRevalidate()
    );

    workbox.routing.registerRoute(
        new RegExp('/pages/'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'pages',
        })
    );

    workbox.routing.registerRoute(
        /.*(?:png|gif|jpg|jpeg|svg)$/,
        workbox.strategies.cacheFirst({
            cacheName: 'image',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200]
                }),
                new workbox.expiration.Plugin({
                    maxEntries: 100,
                    maxAgeSeconds: 30 * 24 * 60 * 60,
                }),
            ]
        })
    );

    workbox.routing.registerRoute(
        /\.(?:js)$/,
        workbox.strategies.cacheFirst({
            cacheName: 'js',
        })
    );

}else
    console.log(`Workbox gagal dimuat`);


self.addEventListener('push', event => {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    const options = {
        body: body,
        icon: 'src/images/EPL.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});