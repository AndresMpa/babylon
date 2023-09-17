const VERSION = "v1";

const precache = async () => {
  const cache = await caches.open(VERSION);
  return cache.addAll([]);
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
