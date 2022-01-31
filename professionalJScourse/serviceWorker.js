const VERSION = "v1";

const precache = async () => {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    "/",
    "/style.css",
    "/index.html",
    "/assent/js.png",
    "/assent/ts.png",
    "/assent/BigBuckBunny.mp4",
    "/src/plugins/AutoPlay.js",
    "/src/MediaPlayer.js",
    "/src/player.js",
  ]);
};

const cachedResponse = async (request) => {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);

  return response || fetch(request);
};

const updateCache = async (request) => {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response)
};

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  event.respondWith(cachedResponse(request));
  event.waitUntil(updateCache(request));
});
