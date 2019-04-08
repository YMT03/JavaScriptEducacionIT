/**
 * REST APIs (Representational State Transfer)
 * Interfaz contenida en un servidor. Que me da una capa de aplicacion que puedo consumir
 * que mapea directamente con uno o varios recursos.
 * 
 * dominio.com/usuarios 
 *  GET => Array con todos los usuarios que estan en la base de datos
 *  POST => Creo un nuevo Usuario
 *  DELETE => Borro todos los usuarios
 * dominio.com/usuarios?id=1 => Object
 * dominio.com/usuarios/nombre => Listado de nombres de usuarios
 * 
 * 
 * Fake Online REST API for Testing and Prototyping 
 * https://jsonplaceholder.typicode.com
 * 
 */


 let url = "https://jsonplaceholder.typicode.com"
 let xhr = new XMLHttpRequest
 xhr.open("GET",`${url}/users`)
 xhr.responseType = "json"
 xhr.addEventListener("load",e=>{
     if(xhr.status == 200){
         /* Si no especifico el responseType
        console.log(e.target.response) //Trae todo como String
        console.log(typeof e.target.response) //Que tipo de dato es?
        console.log(JSON.parse(xhr.response)) //Transforma un String a Object
        //JSON.stringify(Object) Transforma un Object a String
        */
       console.log(e.target.response)
     }
 })
 xhr.send()


 /**
  * typeof ""                   "string" 
  * typeof 1                    "number"
  * typeof true                 "boolean"
  * typeof undefined            "undefined"
  * typeof function(){}         "function"
  * typeof null                 "object"
  * typeof []                   "object"
  * typeof {}                   "object"
  */

/**
 * {TRUE/ANY} o {FALSE/NULL/undefined/0/""}
 * Array.isArray(M) => Boolean - Determina si M es o no Array
 */



