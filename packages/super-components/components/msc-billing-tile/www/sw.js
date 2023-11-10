/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "9aa9e1ae5b05e7ad2c1b74057b24d791"
  },
  {
    "url": "build/index.esm.js",
    "revision": "b937fc0c72271d72bf48e455e031c136"
  },
  {
    "url": "build/p-0a1a809b.js"
  },
  {
    "url": "build/p-0e861a27.js"
  },
  {
    "url": "build/p-1ad5c23d.entry.js"
  },
  {
    "url": "build/p-41450366.js"
  },
  {
    "url": "build/p-48cf48b2.js"
  },
  {
    "url": "build/p-4c5084c0.js"
  },
  {
    "url": "build/p-66c318e1.js"
  },
  {
    "url": "build/p-96a862f6.js"
  },
  {
    "url": "build/p-99c5f10a.js"
  },
  {
    "url": "build/p-9e5873cc.js"
  },
  {
    "url": "build/p-bde0247f.js"
  },
  {
    "url": "build/p-c58c6dfe.js"
  },
  {
    "url": "build/p-e6e525bd.js"
  },
  {
    "url": "mockServiceWorker.js",
    "revision": "a09fcdbcfad20cbc41c8b14044a156dc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
