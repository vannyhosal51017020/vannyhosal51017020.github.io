const CACHE_NAME = "pwebmovie";
var urlsToCache = [
  "/",
  "/js/tmdb.js",
  "/js/materialize.min.js",
  "/js/init.js",
  "/js/api.js",
  "/css/materialize.min.css"
  "/img/bioskop1080.jpg",
  "/img/bioskop720.jpg",
  "/img/bioskop480.jpg",
  "/css/style.css",
  "/manifest.json,"
];
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {

    })
})

self.addEventListener("fetch", function(event){
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME})
      .then (function (response) {
        if (response) {
          console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
          return response;
        }

        console.log("ServiceWorker: Memuat aset dari server: ", event.request.url);
        return fetch (event.request);
      })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map (function (cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
