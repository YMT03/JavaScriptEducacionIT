//Patron de Publicacion y Subscripcion
/*
class Orden{
    enviarMail(){
        let m = new Mailer
        m.enviarMail()
    }
    guardarOrden(){
        //fetch
        console.log("Orden guardada")
        this.enviarMail()
    }
}

class Mailer{
    enviarMail(){
        //.. Envio de mail
        console.log("Mail enviado..")
    }
}

//Hay otras clases que tambiene van a trabajar con mails.

class Usuario{
    registrar(){
        console.log("Se ha registrado un usuario")
        this.enviarMail()
    }
    enviarMail(){
        let mailer = new Mailer
        mailer.enviarMail()
    }
    resetearPassword(){
        let mailer = new Mailer
        mailer.enviarMail()
    }
}
*/
//Hay que desacoplar. Por ej Mailer puede cambiar de nombre, o su metodo. Etc y muchas clases dependen de ella

//Proxy = Es un objeto centralizado al cual el resto del programa tiene acceso
//y guarda subscripciones con nombre callbacks y emite publicaciones

let pubsub = {
    temas : {},
    //sub : function(tema String, callback Function)
    sub : function(tema, callback){
        //Se fija en tema a ver si ya existe el tema
        //Si no lo hay lo crea. Cada tema nuevo creado dentro del objeto temas es un array y cada item del array es un callback
    },
    //pub : function(tema string, data Any)
    pub: function(tema, data){
        //Se fija en temas a ver si existe un tema creado con ese nombre. Si no lo hay no hace nada. 
        //Si existe, recorre el array de callbacks, ejecutando cada uno y pasandoles como primer parametro data
    }

}




class Orden{
    guardarOrden(){
        //fetch
        console.log("Orden guardada")
        
    }
}

class Mailer{
    enviarMail(){
        //.. Envio de mail
        console.log("Mail enviado..")
    }
}

//Hay otras clases que tambiene van a trabajar con mails.

class Usuario{
    registrar(){
        console.log("Se ha registrado un usuario")
        this.enviarMail()
    }
    enviarMail(){
        let mailer = new Mailer
        mailer.enviarMail()
    }
    resetearPassword(){
        let mailer = new Mailer
        mailer.enviarMail()
    }
}

















let m = new Mailer
pubsub.sub("enviarMail", m.enviarMail)
let usuario = new Usuario
usuario.registrar()
usuario.resetearPassword()
