
const prefix = 'two-view-assets:' + self.registration.scope + ':';
const key = prefix + "2b5dbe64873fae56";
const files = ["./assets/index-7hNrvrPp.js","./assets/index-QX4cJWTK.css","./assets/worker-RvB6zYmz.js","./index.html"];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(key).then(cache=>cache.addAll(files)));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(name=>name.startsWith(prefix)&&name!==key).map(name=>caches.delete(name)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||!request.url.startsWith(self.registration.scope))return;
  if(request.mode==='navigate'){
    event.respondWith(fetch(request).catch(()=>caches.open(key).then(cache=>cache.match('./index.html'))));
    return;
  }
  event.respondWith(caches.open(key).then(cache=>cache.match(request).then(response=>response||fetch(request))));
});
