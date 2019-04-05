let xhr = new XMLHttpRequest

/**
 * La propiedad readyState de un objeto XHR nos indica en que estado se encuentra el pedido
 * 
 * 0 - Inicializado
 * 1 - Objeto configurado
 * 2 - Headers (de peticion y respuesta) fueron enviados y recibidos
 * 3 - Descargando informacion
 * 4 - Pedido finalizado 
 * 
 * En el nivel 2 se chequea para aplicar seguridad informatica
 * Se puede verificar los headers para ver que servidor lo envia, en que lenguaje, tamaño del archivo, etc
**/

//XHR.open(metodo String, url String [, tipo Boolean]) -> Configuracion

/**
 * GET
 * POST
 * PUT
 * DELETE
 * PATCH
 * HEADERS
 * OPTIONS
 */

xhr.addEventListener("readystatechange",()=>{
  console.log(`XHR -> Nuevo estado: ${xhr.readyState}`)
  if(xhr.readyState==4){
    //console.log(xhr.response)
  }

  if(xhr.readyState==2){
    let headers = xhr.getAllResponseHeaders()
    console.log(headers)
    let tipo = xhr.getResponseHeader("content-type")
    console.log(tipo)

    if(tipo!="image/jpg"){
      //xhr.abort() //Detengo todo
    }
  }
})

//O en vez del == 4

xhr.addEventListener("load",()=>{
  
  //En realidad tendria que chequear el estado

  switch(xhr.status){
    case 200:
      //console.log(xhr.response)
      let p = document.createElement("p")
      p.innerText = xhr.response
      document.body.appendChild(p)
      break;
    case 404:
      console.log("El archivo no existe")
      break;
    case 500:
      console.log("Error en el servidor")
      break;
  }

})

xhr.open("GET","info.txt")

//hxr.send([params String]) => 
xhr.send()

/**
 * CORS : Cross Origin Resource Sharing
 */

 /** Server
  * Ubicacion: IP(127.0.0.1) / URL(localhost)
  * Document Root: C:/xampp/htdocs (Apache por defecto). E:/www (Nuestro caso)
  * 
  */


  /**
   * status y statusText. Es el estado. Ej OK : 200
   * https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
   * 
   */



   /** Historial
    * 
    * HASH (No es API Web)
    * window.hash
    * location.hash = "contacto". Propiedad que agrega "contacto" en este caso. Al final de la URL
    * .. sin redirigir.
    * Y hashchange es un evento que se dispara cuando cambia el hash
    * 
    * Continuacion en Ejercicio 3.
    * 
    * History (API Web)
    * https://caniuse.com/ Pag para ver API Webs soportadas o no por los dif navegadores
    */

 
    window.addEventListener("hashchange",e=>{
      console.log("Cambio")
    })
