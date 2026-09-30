const V = "fuel-v1";
const SHELL = [
  "./", "./index.html", "./stations.js", "./verdict.js", "./manifest.json",
  "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== V && k !== "tiles").map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// тайлы копятся бесконечно, поэтому кэш подрезается; потолок высокий,
// чтобы вернувшийся человек не ходил за подложкой в сеть заново
async function tile(req) {
  const c = await caches.open("tiles");
  const hit = await c.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) {
    c.put(req, res.clone());
    c.keys().then(ks => { for (const k of ks.slice(0, ks.length - 2000)) c.delete(k); });
  }
  return res;
}

self.addEventListener("fetch", e => {
  const { request } = e;
  if (request.method !== "GET") return;
  if (/tile\.openstreetmap\.org/.test(request.url)) return e.respondWith(tile(request));
  if (/telegram\.org/.test(request.url)) return;

  // свои файлы берём из сети и обновляем кэш; кэш — только запасной путь офлайн
  if (new URL(request.url).origin === location.origin)
    return e.respondWith(
      fetch(request).then(res => {
        if (res.ok) caches.open(V).then(c => c.put(request, res.clone()));
        return res;
      }).catch(() => caches.match(request))
    );

  e.respondWith(caches.match(request).then(hit => hit || fetch(request)));
});
