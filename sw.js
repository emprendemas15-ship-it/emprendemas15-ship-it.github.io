self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    await self.clients.claim()
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
    await Promise.all(clients.map(async (client) => {
      const url = new URL(client.url)
      if (url.origin === self.location.origin && (url.pathname === '/' || url.pathname === '/index.html')) {
        await client.navigate('/sportivos-pwa/')
      }
    }))
    await self.registration.unregister()
  })())
})
