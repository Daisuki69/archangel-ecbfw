// This satisfies Chrome's strict PWA requirements
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => new Response('App is offline'))
  );
});