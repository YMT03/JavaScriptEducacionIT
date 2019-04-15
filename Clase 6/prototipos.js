//Modelo de Prototipos

let persona = {
    saludo:()=>{console.log("Hola")}
}

//simil new Persona()
let juan = Object.create(persona,{
    edad:{
        value:30,
        writable:false, //Sobrescribible
        configurable:false, //Eliminable
        enumerable:false //Iterable
    }
})
//juan.edad = 30
let ana = Object.create(persona,{
    nombre:{
        value: "Ana"
    }
})
//ana.nombre = "Ana"

/*
let empleado = {
    trabajar:()=>console.log("Trabajo muy duro.. como un esclavo")
}
*/

let empleado = Object.create(persona,{
    trabajar:{
        value:()=>console.log("Trabajo muy duro.. como un esclavo")
    }
})

let carlos = Object.create(empleado,{
    sueldo: {
        value:1
    }
})