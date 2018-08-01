var cacheName = 'app-shell-cache-v1';
var filesToCache = ['/','/index.html', '/restaurant.html', '/js/main.js', 'css/main.css', 'imgs/icon.png'];


self.addEventListener('install', function(event){
  event.waitUntil(
    caches.waitUntil(
      caches.open(cacheName).then(function(cache){
        return cache.addAll(filesToCache);
      }).then(function(){
        return self.skipWaiting();
      })
    )
  );
});
self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.open('app-shell-cache-v1').then(function(cache) {
      return fetch(event.request).then(function(response){
        cache.put(event.request, response.clone());
        return response;
      });
    })
  );
});
