//Modelo Clasico

function Persona(n,e){
    this.nombre = n
    this.edad = e
    Persona.prototype.saludo = ()=>{
        console.log("Hola")
    }
}

let juan = new Persona("Juan",29)

function Empleado(sueldo,nombre,edad){
    this.sueldo = sueldo

    //Persona() No. this se va a window
    //new Persona() Tampoco
    //Composicion
    Persona.apply(this,[nombre,edad])


    Empleado.prototype.trabajar = ()=>console.log("Trabajando..")
}

//Herencia
//Subclass.prototype = Object.create(SuperClass.prototype)
Empleado.prototype = Object.create(Persona.prototype)

let carlos = new Empleado(100,"Carlos",66)

function Programador(lenguaje,sueldo,nombre,edad){
    this.lenguaje = lenguaje
    Empleado.apply(this,[sueldo,nombre,edad])
    Programador.prototype.programar = ()=>{
        console.log("Programando")
    }
}
Programador.prototype = Object.create(Empleado.prototype)

let yo = new Programador("JS",500,"Nacho",24)