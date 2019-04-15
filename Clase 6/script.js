//Orientacion a Objetos

//Paradigma de Prototipos {No existen las clases}. El lenguaje esta basado en objetos
//Todos los objetos tienen prototipo y se encuentra en la propiedad __proto__
//Un objeto va a intentar acceder a una propiedad en su interior y si no la encuentra, puede bajar
//.. tantos prototipos como se encuentren en su cadena hasta encontrarla o arrojar error
//Dos objetos van a ser hermanos si comparten el mismo prototipo


//Funciones : Tienen ambito(scope) y contexto. Global+Local+Closure

//Scope: Es el alcance que tiene una funcion para llegar a una variable
var a = 1
function foo(){
    var b = 1
}

function external(x){
    console.log(x)
    return function internal(y){
        console.log(y)
    }
}

let result = external(10)
//Garbage Collector: Algoritmo de limpieza de variables
result(20)
//Explicacion de Closure..


//Contexto: Es el objeto que ocntiene a esa funcion y esta en la referencia "this"

function xxxx(){
    console.log(this)
}

let obj = {
    x  : 1,
    fn : function(){
        console.log(this)
        setTimeout(function(){ //Aca cambia el 'this'
            console.log(this)
        },0)
        setTimeout(()=>{ //Contexto (This) no cambia.
            console.log(this)
        },0)
    }
}
obj.fn()



function ctx(a,b){
    console.log("Parametros: ", a,b)
    console.log("Contexto: ", this)
    console.log("*******************************")
}
ctx(1,2)

//Call- Apply - Bind

//ctx.call()//Para pasar nuevo contexto
ctx.call({})//Ahora mi 'this' es {}

ctx.call({contexto:"call"},10,20)

ctx.apply({contexto:"apply"},[10,20]) //similar, parametros se pasan en un array

ctx.bind() //Devuelve la definicion de la funcion para ejecutarla en otro momento con el contexto pasado
let x = ctx.bind({contexto:"bind"})
x()


function foo(a){
    console.log(a)
}

//document.addEventListener("click",foo)

document.addEventListener("click",foo.bind(null,2))


//new : Ejecuta la funcion que tiene al lado pero le redefine su contexto con un objeto nuevo.
//      al finalizar la funcion retorna ese objeto nuevo.


function test(){

}

new test()

/**
 * Seria hacer
 * let nuevo = {}
 * test.call(nuevo)
 * return nuevo
*/

let nuevo = new test()

function test2(){
    this.a = true
}

let nuevo2 = new test2

console.clear()
//Funciones constructoras, empiezan con Mayuscula

function Persona(nombre,edad){
    //Atributos publicos
    this.nombre = nombre
    this.edad = edad

    //Atributo privado
    let n = nombre // Encapsulamiento, es como si n fuera privada

    //Metodo publico de instancia
    this.saludo = function(){
        console.log(n)
    }

    //this.saludo = ()=> console.log("Hola") no perfomante
    //Persona.prototype.saludo = ()=>console.log(`Hola, soy ${this.nombre}`) no funca. se mantiene el contexto asique this.nombre no cambia
    //Metodo publico de prototipo
    Persona.prototype.saludo = function(){console.log(`Hola, soy ${n}`)}
}
let juan = new Persona("Juan", 30)

// El prototipo de un objeto generado por 'new' es siempre la propiedad prototype de esa funcion

// juan.__proto__ === Persona.prototype

Persona.prototype.a = true

//'a' no esta en juan pero si lo contiene. va a ir bjaando por los prototipos hasta encontrarlo o tirar error

console.log("Juan.a : " + juan.a)

let ana = new Persona("Ana",31)

let aa = ()=>{}
//new aa() rompe. arrow function no son constructores

