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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-20b89f30323405ae2817.js"
  },
  {
    "url": "framework-74adaf5887ce1f16aa36.js"
  },
  {
    "url": "app-1c9d1a110c0acbcb35a5.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-899b57472c2de292f6e9.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a5620e43ffc558b8961bae85a9e05e1b"
  },
  {
    "url": "styles.998bc6011594b5f16de2.css"
  },
  {
    "url": "static/webfonts/s/dosis/v18/HhyJU5sn9vOmLxNkIwRSjTVNWLEJN7Ml2xME.woff2"
  },
  {
    "url": "styles-7d4153d260c0197f0043.js"
  },
  {
    "url": "350e73ee-f7b690e60fff4fab68e9.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-122c7adb029b4ba0d234.js"
  },
  {
    "url": "component---src-pages-404-js-8331627f6ddf1f9e2e9b.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "e8fcae2296c6f0bb10e9ba6b0be6be23"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "e9383580f92d4eacd6a204fc7c0ac2ea"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "8330ba6089dd60bf4f00d6ef5dbbaa13"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "d9792d7ea16194e9d136c2aa30a31458"
  },
  {
    "url": "polyfill-64742d1bff844b746df5.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "c7047792c6f91b88e0d9abc0cd819e92"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9dc69f4f9e90c2f8cdf33ebe9fe26e9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        console.error(
          `The offline shell (${offlineShell}) was not found ` +
            `while attempting to serve a response for ${pathname}`
        )

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response)
            )
          } else {
            return fetch(event.request)
          }
        })
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})
