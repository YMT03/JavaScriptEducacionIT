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