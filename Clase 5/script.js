//Promise + XHR = Fetch

//Fetch para hacer pedidos tipo XHR pero implementando la API de Promesas

let url = "https://jsonplaceholder.typicode.com"
let promise = fetch(`${url}/users`)
console.dir(promise)
// No hace falta pedir el metodo GET, no hace falta el send, no hace falta el evento, ni el open
// Siempre tiene un status[pending-resolved-rejected] y un valor


/**
 *      Fetch               =>      Promise     =>      Response
 *      Promise             =>      .then().catch()
 *      {Promise}           =>      return. Si esta dentro de una funcion la retorno
 *      [Promise,Promise]   =>      return Promise.all([])
 */

 /*
 promise.then(valor=>{})
 promise.catch(error=>{})
 promise.then(()=>{}).catch(()=>{})
*/

//promise.then(value=>console.dir(value.json()))

/*promise
.then(value=> {
    return value.json()
})
.then(value=>{
    console.log(value)
})
.catch(error=>{})
*/

//
let a = function(item){
    return item*2
}

let b = item =>{return item*2}
let c = item => item*2

//Por lo tanto

/**
promise
.then(value=>value.json())
.then(value=>{
    let id = value[7].id //8
    return fetch(`${url}/posts?userId=${id}`)
})
.then(value=>value.json())
.then(value=>console.dir(value))
.catch(e=>{console.log(e)})
*/


/** 
fetch(`${url}/users`)
.then(value=>value.json())
.then(value=>fetch(`${url}/posts?userId=${value[7].id}`))
.then(value=>value.json())
.then(value=>{
    let array = []
    value.forEach(post => {
        array.push(fetch(`${url}/comments?postId=${post.id}`))
    })
    return Promise.all(array)
})
.then(value=>{
    let array = []
    value.forEach(response=>{
        array.push(response.json())
    })
    return Promise.all(array)
})
.then(value=>{
    console.log(value)
})
.catch(e=>{console.log(e)})
*/


/////////////////////////////////////////////////////////////////////////////////


/**
 * Bucles
 * forEach((e,i)=>{}) \\ Sentencia ej no se puede var a = array.forEach(). Le paso un callback
 * map((e,i)=>{})     \\ Expresion let a = array.map() si se puede. El iterador map siempre retorna un
 *                    \\ array de la misma longitud del target
 * reduce()
 * filter()
 * sort()
 * 
 * 
 */


 //Ej map

 let list = [1,2,3]
 console.log(list)
 let newList = list.map((e,i)=>{
     return e+1
 })
 console.log(newList)


 //Por lo tanto volviendo a lo anterior podriamos hacer


fetch(`${url}/users`)
.then(value=>value.json())
.then(value=>fetch(`${url}/posts?userId=${value[7].id}`))
.then(value=>value.json())
.then(value=>Promise.all(value.map(post => fetch(`${url}/comments?postId=${post.id}`))))
.then(value=>Promise.all(value.map(response=>response.json())))
.then(value=>console.log(value))
.catch(e=>{console.log(e)})



//Geolocation = navigator.geolocation.getCurrentPosition()

//Nominatim (Una API Web de Geolocalization)

//ReverseGeocoding  https://nominatim.openstreetmap.org/reverse

/**
 * Pedir la ubicacion con la API de Geolocation
 * Ecnontrar la ubicacion la latitud y longitud y usar esos valores
 * para completar la URL
 * Hacer un pedido por fetch a la URL completar
 * Con la respuesta de fetch, mostrar la ubicacion en el DOM
 * 
 */


let geo = "https://nominatim.openstreetmap.org/reverse?format=json"


navigator.geolocation.getCurrentPosition(r=>{return fetch(`${geo}&lat=${r.coords.latitude}&lon=${r.coords.longitude}`)
.then(value=>value.json()
.then(value=>{
    let p = document.createElement("p")
    p.innerText = value.address.neighbourhood
    document.body.appendChild(p)})
.catch(error=>console.log(e)))})



//fetch POST
//http://d939c04d.ngrok.io/ servidor temporal API Rest

/*
fetch("http://d939c04d.ngrok.io/usuarios",{
    method : "POST",
    headers : {
        "content-type":"application/json"
    },
    body : JSON.stringify({nombre:"Horacio", edad:1000})
})
*/

//PUT REEMPLAZA
fetch("http://d939c04d.ngrok.io/usuarios/2",{
    method : "PUT",
    headers : {
        "content-type":"application/json"
    },
    body : JSON.stringify({nombre:"Pepe", edad:17})
})

//PATCH - EDITA
fetch("http://d939c04d.ngrok.io/usuarios/2",{
    method : "PATCH",
    headers : {
        "content-type":"application/json"
    },
    body : JSON.stringify({nombre:"Jose"})
})

//DELETE
fetch("http://d939c04d.ngrok.io/usuarios/2",{
    method : "DELETE"
})

//////////////////////////////////////////////////////////////////////////////////////////
/**
 * CORS
 * Access-Control-Allow-Origin: Es el header encargado de determinar quien tiene acceso a que recurso
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Origin: mipagin.com
 * Access-Control-Allow-Origin: localhost
 *
 * JSONP : JSON con Padding (json con relleno)
 * 
 * ej https://jsonplaceholder.typicode.com tiene soporte para JSONP
 */


 //Tengo que dejar definida la funcion para atraparla con el JSONP
 function handleUsers (respuesta){
     console.log("JSONP: ")
     console.log(respuesta)
 }
 fetch("https://jsonplaceholder.typicode.com/users")
 .then(res=>{/*console.log(res)*/ throw new Error /* Simulo error en API Web */})
 .catch(err=>{
     //Especie de emulacion de AJAX. es ASync. No siempre se llama callback el parametro
     let script = document.createElement("script")
     script.src = "https://jsonplaceholder.typicode.com/users?callback=handleUsers"
     document.body.appendChild(script)
 })

