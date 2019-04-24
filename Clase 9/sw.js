console.log(this)
console.log(self) //Equals

/**
 * Los eventos de un worker vienen con dos metodos adicionales:
 * -    waitUntil
 * -    respondWith
 * Ambos necesitan como contenido una promesa.
 */


//Se dispara cuando el worker se manda a registrar
self.addEventListener("install",e=>{
    console.log(e)
    e.waitUntil(
        caches.open("uno") //Devuelve una promesa. Abro particion
        .then(cache =>{
            cache.addAll([//localhost/JavaScript/JavaScriptEducacionIT/Clase%209/
                "/JavaScript/JavaScriptEducacionIT/Clase%209/", // "/"
                "/JavaScript/JavaScriptEducacionIT/Clase%209/script.js",// "/script.js"
                "/JavaScript/JavaScriptEducacionIT/Clase%209/style.css" // "/style.css"
            ])
        })
    )
    self.skipWaiting();
})

self.addEventListener("activate",e=>{
    //El metodo claim del objeto client sirve para reclamar al navegador.
    //Worker toma acceso del navegador sin tener que esperar a la proxima carga de pagina
    console.log("Se activo")
    clients.claim()
})


//Se dispara por cada request que se haga desde el cliente
self.addEventListener("fetch",e=>{
    console.log("ASD")
    console.log(e)
    e.respondWith(
        //El metodo match del Cache no falla, es decfir que no configurar un .catch para esa promesa esta de mas
        //Si res == undefined, no habia nada en esa URL.
        caches.match(e.request)
        .then(res=>{
           /* if(res){
                return res;
            }else{
                fetch(e.request)
            }*/

            //O res || fetch(e.request)
            return res ? res : fetch(e.request)
        })
    )

})














