// Evento window.addEventListener("load") == al ready del jquery
// El evento de que window se termino de cargar. Permitia poner el script en el head..

let btn = document.querySelector("button")
btn.addEventListener("click", e=>{
  console.log("Click del boton")
  e.stopPropagation() /*Para parar la propagacion de eventos. 
  ..sin esto ademas ejecutaria el console log del body*/
})

let body = document.querySelector("body")
// let body = document.body El body se encuentra en document. No hace falta utilizar el QuerySelector, mas performante.

body.addEventListener("click", e=>{
  console.log("Click del body")
})

// Todos los events envian por defecto el objeto Evento -> e
// Mantiene informacion sobre el evento. Ej caso del mouse, coordenadas, etc. 
// En caso de propagacion el atributo target del evento es el mismo. El que disparo el evento inicial.

btn.addEventListener("click",e=>{
  let nuevoBoton = document.createElement("button")
  nuevoBoton.innerText = "Nuevo Boton"
  nuevoBoton.id = "nuevo"
  document.body.appendChild(nuevoBoton)
})


// Asignarle eventos a elementos dinamicos

// Interceptando evento del boton dinamico. No se le puede cargar el eventListener como con los otros botones
// porque cuando lo busca JS todavia no esta instanciado. Se agrega el evento a un elemento superior y se intercepta el evento con la propagacion

document.body.addEventListener("click",e=>{
  console.log(e.target) // Imprime elemento que disparo el evento
  if(e.target.id == "nuevo"){
    console.log("Evento del boton dinamico")
  }
})


/**
 * Comportamientos predeterminados 
 * 
 * <a>: Click => Redirige a su href
 * <form>: Submit => Redirige a su action
 * Drag&Drop: Dropear algo en el navegador => Abre eso. Ej un archivo cualquiera.
 * 
 */

 // Interceptando esos comportamientos
 // <a>

 let a = document.querySelector("a")
 a.addEventListener("click",e=>{
   e.preventDefault()
 })


/**
 * *** Los botones de formulario no llevan click ***
 * 
 * El evento del formulario es submit
 */

let form = document.querySelector("form")
form.addEventListener("submit", e=>{
  e.preventDefault()
  e.stopPropagation()
  console.dir(e.target)
  
  let input = e.target[0].value
  console.log(input)

})

/**
 * Otros eventos de formularios
 * focus: Se dispara cuando se le da atencion a una etiqueta. (Como cuando vas a escribir en un input text)
 * blur: Se dispara cuando se le deja de dar atencion a una etiqueta. (Ej cuando ingresas un nombre y pasas al siguiente ya te dice que ese nombre existe, hace validacion por blur)
 * keyup/keydown: Se dispara cuando la tecla se suelta o se presiona respectivamente. 
 * keypress: Deprecado 
 */


//Para ir validando a medida que se escribe
 let input = document.querySelector("input")
input.addEventListener("keyup",e=>{
  e.stopPropagation()
  console.log(e.target.value)
  //Validacion
})



/**
 * AJAX: Asyncronous Javascript And XML
 * API Web -> XHR: XMLHttpRequest
 */



 //EJ

 console.log()
 console.log()
 console.log()
 console.log()
 //sincronica() // Tarda 30''
 console.log()
 console.log()
 console.log()
/**
 * Se van a ir ejecutando las funciones hasta que llega a la sincronica, bloqueando el flujo y el html
 * En caso de ser asincronica en vez de ir al Stack, va al 'Stack de las APIs Web', liberando el Stack
 * de Javascript, siguiendo ejecutando los console.log
 *  
 */

 
//http://latentflip.com/loupe/
// Para verlo. Stack y Web APIs


 // Otros no bloqueantes
 setTimeout(()=>{
   console.log("Primero")
 },3000)
 console.log("asd")
 setTimeout(()=>{
   console.log("Segundo")
 },1500)
 console.log("asd")

 //En caso de ser millones y millones. Por mas que el setTimeout este listo va a tener que esperar que 
 // no haya ninguna otra ejecucion. Hasta que el stack este totalmente vacio. Por lo que no quiere decir que 
 // lo va a ejecutar a los tantos o cada tanto segundos, tanto settimeout como interval, porque si hay mas sentencias antes
 // puede tardar mas
 for (let index = 0; index < 50000; index++) {
   console.log("Hola")
   
 }


 //setInterval()



 //Incluso en este caso el console log pasa primero
setTimeout(()=>{
  console.log("Time out")
},0)
console.log("ConsoleLog")

//http://latentflip.com/loupe/
// Para verlo. Stack y Web APIs


