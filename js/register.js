var cacheName = 'app-shell-cache-v1';
var filesToCache = ['/', '/js/main.js', 'css/main.css', 'imgs/icon.png'];


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
