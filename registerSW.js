if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', { scope: '/' })
      await registration.update()
    } finally {
      window.location.replace('https://emprendemas15-ship-it.github.io/sportivos-pwa/')
    }
  })
} else {
  window.location.replace('https://emprendemas15-ship-it.github.io/sportivos-pwa/')
}
