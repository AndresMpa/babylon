// Nombre del cache
const nombreCache = 'apv-cache'; // Nombre del cache...
const assets = [
    '/',
    '/index.html',
          "purpose": "any maskable"
    '/error.html',
    '/js/app.js',
    '/css/bootstrap.css',
    '/css/styles.css'
];


"purpose": "any maskable"


// console.log(self);

// Instalar el service Worker, no se puede utilizar window, por lo tanto se utiliza self
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');

    e.waitUntil(

        // Buen lugar para cachear - 
        caches.open(nombreCache)
            .then( cache => { // Esta función es asincrona...
                console.log('cacheando...');
                cache.addAll(assets);
            })
    );

    // Revisar en App (Chrome) en Firefox en Almacenamiento

});

// Activar el service worker...
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    // Actualizar la PWA //
    e.waitUntil(
        caches.keys()
            .then(keys => {
                console.log(keys); 

                return Promise.all(keys
                        .filter(key => key !== nombreCache)
                        .map(key => caches.delete(key)) // borrar los demas
                    )
            })
    )
});

// Fetch events para el CSS, HTML, imagenes JS, y hasta llamados a fetch..
self.addEventListener('fetch', e => {
    console.log('Fetch.. ', e);

    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache || fetch(e.request);
            })
            .catch( () => caches.match('/error.html'))
    );
});

// Al tener este fetch, un nombre de app, y una página de inicio, ya podremos agregar nuestra PWA a la página de inicio...


// clICK EN LOS 3 PUNTOS

//  More Tools -> Remote Devices y escribir.

// http://127.0.0.1:5500/index.html

// Presionar Open.
