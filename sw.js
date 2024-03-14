
let cache_name = 'NotSpotifyOfflineCatche-0.2.6'
let urls_to_cache = [
    '/',
    `/muzac/3 O'Clock Things.mp3`,
    `/muzac/2085.mp3`,
    `/muzac/BANG!.mp3`,
    `/muzac/Bummerland.mp3`,
    `/muzac/Burn The House Down.mp3`,
    `/muzac/Christmas in June.mp3`,
    `/muzac/I Aint Worried.mp3`,
    `/muzac/I Won't.mp3`,
    `/muzac/I'm Gonna Kill Santa Claus.mp3`,
    `/muzac/Inertia.mp3`,
    `/muzac/Maybe Man.mp3`,
    `/muzac/OK Overture.mp3`,
    `/muzac/Ordinaryish People.mp3`,
    `/muzac/Steve's Going To London.mp3`,
    `/muzac/Touchy Feely Fool.mp3`,
    `/muzac/Way Less Sad.mp3`,
    `/muzac/World's Smallest Violin.mp3`,
    `/muzac/Yes Im A Mess.mp3`,
    `/muzac/Cruel Summer.mp3`,
    `/tw.js`,
    `/fa.js`,

]
self.addEventListener('install', (e) => {
    // Extend the promise time by delaying the resolve with setTimeout
    e.waitUntil(new Promise((resolve, reject) => {
        setTimeout(() => {
            caches.open(cache_name).then((cache) => {
                return cache.addAll(urls_to_cache)
            }).then(() => {
                // Resolve the promise after the specified delay
                resolve();
            }).catch((error) => {
                // Reject the promise if there's an error
                reject(error);
            });
        }, 5000); // 5000 milliseconds (5 seconds) delay
    }));
});
