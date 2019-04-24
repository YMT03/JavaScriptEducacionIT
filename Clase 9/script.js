//Persistencia de datos en el navegador

//Storage API

/**
 * Solo almacena Strings. Si se almacena un Objecto ej {} queda almacenado como Object object
 * Por lo tanto se puede utilizar JSON.stringify(Object) para convertir objecto a string.
 * Luego cuando se lo obtiene se utiliza JSON.parse() para conjvertir un string a json
 * Storage..setItem(k,v) => Guarda un valor asociado a una key.
 * Storage.getItem(k) => Obtiene el valor de esa key.
 * Storage.removeItem(k) => Borra el valor asociado a la key.
 * Store.clear() => Borra todo el storage.
 */


 /**
  * Storage
  * 
  * sessionStorage: Va a permanecer hasta que la ventana se cierre (pestaña/tab)
  * 
  * localStorage: Permanece hasta que:
  *     - El usuario borre su cache
  *     - El dev borre el cache
  *     - El navegador se quede sin memoria
  * 
  * Cookies
  * 
  * DB Embebida
  * IndexedDb -  WebSQL
  * 
  * Cache, guarda todo el contenido del archivo, no relacionado a una key sino a una URL
  * Cache Storage 
  * Application Cache
  * 
  * ServiceWorker API: Es una interfaz de tipo proxy que se para entre cada request y response del cliente al servidor
  * Son ajenos al dominio que los registra y siguen ejecutandose siempre que el navegador tenga un proceso en el background
  * Los workers tienen que volver a pedir su cuerpo cada 24 hs
  * navigator.serviceWorker
  * 
  */

  if("serviceWorker" in navigator){
      navigator.serviceWorker.register("sw.js")
      .then(()=>console.log("Se registro del worker"))
      .catch(e=>console.log(e))
  }




