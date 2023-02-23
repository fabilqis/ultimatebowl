import { precacheAndRoute } from 'workbox-precaching';

// Do precaching

// if (process.env.NODE_ENV === 'production') {
// }

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed');
});
