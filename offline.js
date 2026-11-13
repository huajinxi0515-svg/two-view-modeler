const prefix='two-view-assets:'+self.registration.scope+':';
const key=prefix+'single-9a4c8ad60cbe2cab';
self.addEventListener('install',event=>event.waitUntil(caches.open(key).then(cache=>cache.add('./index.html')).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(prefix)&&k!==key).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',event=>{if(event.data==='version')event.ports[0]?.postMessage(key)});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||!req.url.startsWith(self.registration.scope)||req.mode!=='navigate')return;
 event.respondWith(fetch(req,{cache:'no-store'}).catch(()=>caches.open(key).then(cache=>cache.match('./index.html'))));
});