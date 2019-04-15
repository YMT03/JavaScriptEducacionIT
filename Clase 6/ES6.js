//ECMAScript6

//class : Un tipo especial de funcion sin hoisting
class Persona {

    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludo(){
        console.log("Hola")
    }

}

class Empleado extends Persona{
    
    constructor(nombre,edad,sueldo){
        super(nombre,edad)
        this.sueldo = sueldo
    }
    
    trabajar(){
        console.log("Trabajando")
    }    

}


let juan = new Empleado("Juan",38,2000)