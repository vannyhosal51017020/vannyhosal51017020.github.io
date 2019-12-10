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
];
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {

    })
})
