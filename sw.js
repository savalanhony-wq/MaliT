/* sw.js — کش آفلاین؛ با هر نسخه نام کش را عوض کنید */
const C='mali-v14050830f';
const FILES=['./', './index.html', './personal.html', './tankhah.html', './manifest.webmanifest', './css/theme.css', './css/icons.css', './css/personal.css', './css/tankhah.css', './js/version.js', './js/bridge.js', './js/xlsx.js', './js/personal.js', './js/tankhah.js', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
 e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
