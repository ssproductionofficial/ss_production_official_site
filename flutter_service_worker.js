'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5b05356c9c37201758e981bb0e2b1e97",
"assets/AssetManifest.bin.json": "0e5142791c41b9dc1241f940ab37de83",
"assets/AssetManifest.json": "c0a9ae7929988c06a6ac7aadada7e638",
"assets/assets/animation/animation404.json": "b82c17e16b53bd949500edd5cbda96b2",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/images/aboutUsLogo.png": "6b7afa00458db2e2783aeb5e2f61b4c3",
"assets/assets/images/aboutUsPolygon.png": "98b34d0e9c419b68b4b95d24ce677c25",
"assets/assets/images/appDevIcon.png": "51b9fd5cf8f34e5332b6eabf33e897ff",
"assets/assets/images/backendIcon.png": "c5140dc33d35ed765a8d5e877de23c70",
"assets/assets/images/blogLogo.png": "f5346e71fa93040aa3deaae7d5e98ed2",
"assets/assets/images/c1.jpeg": "786b15dbc0cc11a25022e50f12f16495",
"assets/assets/images/c10.jpeg": "c2363bb4e6f41804598efef3db739ae7",
"assets/assets/images/c11.jpeg": "f4679833aab5411c0197aa4a9f183d4e",
"assets/assets/images/c12.jpeg": "e1f032262e8462754a91ebff97521283",
"assets/assets/images/c13.png": "17b0f4926a5976dba47241d9fa2d671d",
"assets/assets/images/c14.png": "695f1e226be0ff8a5a40762c56763eb3",
"assets/assets/images/c15.png": "33278fe92307dfd1ee05711a59f700bf",
"assets/assets/images/c16.png": "8e81660334752b746e2149710d094591",
"assets/assets/images/c17.png": "f1d0b73ef96fcf6d0e9e727f7f95801d",
"assets/assets/images/c2.jpeg": "a68d6de32c211ee87f15882012935281",
"assets/assets/images/c3.jpeg": "12df44003c664c6895d95299923e9ae3",
"assets/assets/images/c4.jpeg": "1e3c8450fdc7819b87307cbd9fa06adf",
"assets/assets/images/c5.jpeg": "9ae809bf7f772fcffc541d38c2c647e9",
"assets/assets/images/c6.jpeg": "eb6f7829fc3894cb02fa5919f907eb5c",
"assets/assets/images/c7.jpeg": "a0bb07f85979c550ba420b8af715aa3f",
"assets/assets/images/c8.jpeg": "2b07770925fc483454e935b6b364afbe",
"assets/assets/images/c9.jpeg": "027b734dd9b89409ce8a0f22925667e8",
"assets/assets/images/designIcon.png": "d22608023abde6773dc06da4a5f4565d",
"assets/assets/images/editingIcon.png": "d44bf4caa661343898fbc0520555508c",
"assets/assets/images/emailIcon.png": "12f9f2364d9af4d37f6f7dc6588abbd6",
"assets/assets/images/facebookIcon.png": "4eefb3a1203ba325155d1ac661b9e8dc",
"assets/assets/images/homeLogo.png": "8e19f9022084456d5e723063bef9f439",
"assets/assets/images/instagramIcon.png": "df99065eb02cba5d47854a6dc0ad04cb",
"assets/assets/images/mainLogo.png": "7480568cba924b0f639bdb1f2eb045c9",
"assets/assets/images/marketIcon.png": "0f6691ae914d2ec8afbcfbfdc90d0f4b",
"assets/assets/images/officeIcon.png": "6f2dc3f8d65ab93c266abe14b222d324",
"assets/assets/images/pakFlag.jpg": "1dbf774ef926dc8a16356b4a90f35ff9",
"assets/assets/images/pic1.jpg": "7377eadd754beeb07fcbe3df55d8195c",
"assets/assets/images/pic2.jpg": "46279f51bdbb9de1bf9503e4f567c942",
"assets/assets/images/pic3.jpg": "14da05151958321a44d4a67abf32360e",
"assets/assets/images/pic4.jpg": "49dceaa3a4ef4fb6f0a147f0911cca6f",
"assets/assets/images/portfolioLogo.png": "f7aac8dab1fe145a20b94225bc481c0a",
"assets/assets/images/seoIcon.png": "8b4823a811d4b0d54649a31cda31357a",
"assets/assets/images/ssProIcon.png": "e5322be990ccedeba9ff361222fcf450",
"assets/assets/images/teamIntro.png": "0baf759b8c72c30fdaa010e3339fe50e",
"assets/assets/images/teamLogo.png": "cd22d87a8e1afa6ecada6040ec5f0b8e",
"assets/assets/images/twitterIcon.png": "d706e4e52df885edaf623a1be7be92ce",
"assets/assets/images/uiIcon.png": "4363b565724cf6781e68bb2b6f35ab64",
"assets/assets/images/webDevIcon.png": "36454e4d62b872741876332314668bb2",
"assets/assets/images/youtubeIcon.png": "1de0e6f0e4e8323d12ca66205081c137",
"assets/assets/svg/aboutusSvg.svg": "7fef5bf7021a2fccb34f1ebda6ba1ded",
"assets/assets/svg/blogSvg.svg": "3a4997b3f06c865632ba775ef5e41f91",
"assets/assets/svg/homeSvg.svg": "b0912156b4e047146114d6847dee66e9",
"assets/assets/svg/menuSvg.svg": "24f282364076287d72d1a655adbdd26b",
"assets/assets/svg/messageSvg.svg": "956003c5c4e8313fbaa85c6d1b7e14ee",
"assets/assets/svg/portfolioSvg.svg": "f175fbce1eb3a81b0cf9fe2926f4e69f",
"assets/assets/svg/teamSvg.svg": "bb71d40a6e911739076d7840b1b51700",
"assets/assets/svg/upwardSvg.svg": "1210e7a17d36f1aec50b907424e00b91",
"assets/FontManifest.json": "be8b34aacf7d249f9ee9ced32425f343",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "9ed3f93beeda2dd841a3065a4f906390",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "163e91637c00151d0c1015498b5e8f21",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "566610c0ef5a8802940cf4d69ff74e78",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "efab9e1984d5dcaaec3bfcc17619c323",
"/": "efab9e1984d5dcaaec3bfcc17619c323",
"main.dart.js": "113a1515d3f31d277ef03de129bd26f5",
"manifest.json": "59e5c2a4c450269cfd7069e5309a8d77",
"version.json": "27bef5186efa04a08261721f4466189b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
