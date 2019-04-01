/**
 *  Tipos de datos
 * 
 *  - Primitivos
 *      String : "", '', ``
 *      Number : -3, 3.44, 9
 *      Boolean : true, false
 *      undefined : Variable sin valor o funcion sin retorno
 *      NULL
 * 
 *  - Objetos
 *      Object : {}
 *      Array : []
 *      Function
 *      Date
 */

//Pasar por valor
 var a = 1
 var b = a
 b = 2

 // Pasar por referencia
 var c = {x:1}
 var d = c
 d.x = 20
 
//Template String, ventajas de ``

 var texto = `<head>
 <meta charset="utf-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <title>Page Title</title>
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <link rel="stylesheet" type="text/css" media="screen" href="main.css">
 <script src="script.js"></script>
</head>`

var title = "Hola"
var interpolacionVar = `<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" media="screen" href="main.css">
<script src="script.js"></script>
</head>`

/**
 * 
 *  Var - redeclaracion 
 *  Var - reasignacion
 *  Var - no tienen scope (salvo en functions)
 */

var a = 1
var a = 10
a = 50
if(true){
    var j = 9
}
//Sigue existiendo j, es global.

/**
 *  Let - no admite redeclaracion
 *  Let - reasignacion
 *  Let - Si tienen scopes de bloque
 */

let i = 15
//let c = 14; (No se puede)
i = 16

if(true){
    let cc = 20
}
//No se puede acceder a cc fuera del bloque if


/**
 *  Const - no admite redeclaracion
 *  Const - no admite reasignacion
 *  Const - Si tienen scopes de bloque
 *  Const - Parcialmente constante. Si son primitivos no se pueden cambiar, si son objetos se puede cambiar sus valores internos
 *  .. por lo que pierde un poco su poder de "constante"
 */

 const constante = 15
 // const constante = 10; (No se puede)
 // constante = 30; (No se puede)

 const ccc = {x:1}
 ccc.x = 20

 /** 
  * typeof retorna el tipo de dato.. medio pelo. typeof null retorna object por ej
  * typeof object
  * typeof ""
  */

/**
 * APIs WEB
 * https://developer.mozilla.org/es/docs/Web/API
 */

/**
 * window (lo que contiene todo) - Objeto global
 * ej las variables var
 * no las let o const
 * no hace falta hacer mencion de window. ej alert y no window.alert o las variables, funciones, etc
 * 
 * API Web -> BOM (Browser Object Model)
 * 
 * API para ir para atras en el navegador, para adelante, etc https://developer.mozilla.org/es/docs/Web/API/History
 * 
 * Y asi
 * 
 */

 /**
  * Alto y Ancho
  * innerHeight, innerWidth
  * outerHeight, outerWidth
  * Ancho y alto de pagina (solo html) y de ventana, total
  */


/**
 * location para redireccionar
 * location = www.google.com.ar
 * window.history.back() (volver)
 * history.forward() (avanzar) etc
 */


/** DOM (Otra API Web - Document Object Model)
 * document (se encuentra dentro de window y contiene todo el html en formato JSON)
 * document.getElementBy...
 * document.querySelector
 * document.querySelector("section:nth-child(3) > input:checked") 
*/



/**
 * Imprimir por consola
 * console.dir(Z) => Muestra Z en consola pero si Z presenta formato de objeto
 * .. lo muestra como objeto
 */

 /**
  * Cada vez que se hace un cambio en el DOM (En el contenido interno de una etiqueta, su id, su clase)
  * generan una secuencia en el navegador que vuelven a disparar las etapas de layout y paint
  * h1.innerText = "Lorem ipsum"
  */


  //Crear elementos nuevos de DOM
  let p = document.createElement("p")
  p.innerText = "Lorem ipsum"
  //Ya esta instanciado pero no esta en el DOM aun

  // Agregar elementos al DOM
  // Target.appendChild(Nodo)
  let body = document.querySelector("body");
  body.appendChild(p); //Siempre va a ir al final de ese elemento
  //Target.insertBefore(NuevoNodo,NodoReferencia)
  //Remover elementos
  //body.removeChild(p); 

  let div = document.querySelector("div")
  //div.appendChild(p) Los elementos no se copian de lugar sino que se mueven por refencia en el DOM
  // O sea que 'p' quedaria solo agregado a div y no a body.

  //Clonar un elemento
  let copia = p.cloneNode(true)
  div.appendChild(copia)


  let ul = document.querySelector("ul")
/*
  for (let i = 0; i < 5; i++) {
      let li = document.createElement("li")
      li.innerText = `Item ${i}`
      ul.append(li)      
  }
*/
  // Poco perfomante. Cada vez que se agrega un item al DOM se activa el relayout y repainting
  
  // DocumentFragment Es como una etiqueta HTML. Los puedo agrupar todos en èl y despues hacer el append al DOM.

let f = document.createDocumentFragment()
for (let i = 0; i < 5; i++) {
    let li = document.createElement("li")
    li.innerText = `Item ${i}`
    f.append(li)      
}

ul.appendChild(f) //Ahora es solo una modificacion de DOM en vez de 5. Es mas performante.

// Una vez que se usa appendChild f queda vacio de nuevo. Se puede reutilizar el mismo fragmento


//Eventos

let boton = document.querySelector("button")
//boton.onclick = sayHi; Forma vieja, muy utilizada, no correcta
//boton.onclick = sayBye; Reemplaza al anterior

function sayHi(){
    console.log("Hi")
}
function sayBye(){
    console.log("Bye")
}


//Forma correcta, permite agregar varios listeners
boton.addEventListener("click", sayHi)
boton.addEventListener("click", sayBye)

//Con funcion anonima
boton.addEventListener("click", function(){
    console.log("A")
})

//Funcion anonima a funcion lambda
// function(){} === ()=>{}

boton.addEventListener("click",()=>{
    console.log("Lambda Funct")
})