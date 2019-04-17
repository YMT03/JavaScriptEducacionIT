/**
 * webpack-dev-server
 * 
 * npm i -D webpack-dev-server
 * 
 * npm run dev // porque asi lo setee en package.json
 * 
 * Webpack
 * Paquetes: webpack webpack-cli webpack-dev-server
 * config: webpack.config.js
 * 
 * css loader -> npm i -D css-loader style-loader
 * 
 * style-loader -> carga el css en el DOM (head)
 * 
 * Puedo sacar el style-loader y usar el mini css extract para que me quede en un archivo aparte
 * 
 * Y mini css extract -> npm i -D mini-css-extract-plugin (Para que no quede inyectado todo el css en el head y genere un .css)
 * 
 * BABEL: Transpilador. Paso ES6 a versiones mas viejas y compatibles con los navegadores.
 * Paquetes: @babel/core babel-loader @babel/preset-env * 
 * config: .babelrc
 */


//////////////////////////////////////////////////////////////////////////////////////////////////////////


//Patron Modulo
//Van a window
var a = 1 // == window.a = 1
function foo(){}// == var foo = function foo(){}

function main(){
    let b = 1
    function intfoo(){}
}

main();

//Tambien queda en window

//Patron Modulo.
/*
(function(window){
    let c = 1
    function foog(){

    }
    window.document//Hago algo


    function Persona(){
        // pseudo "Namespace"
        window.Persona = Persona
    }

})(window/** Parametros de la funcion );
*/
//O

//Revelador
/** 
var Persona = (function(){
    
    function P(){}
    return P
})();
*/

//Singleton

(function(){

    let instance

    function Persona(){
        if(!instance)
            return instance
        else{
            this.id = Math.random()
            instance = this
        }
        
    }
    let a = new Persona()
    let b = new Persona()

    console.log(a,b)

})();
