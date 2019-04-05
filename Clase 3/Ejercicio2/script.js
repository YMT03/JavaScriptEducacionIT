/*
        1) Agarrar todos los links
        2) Asignarles un click 
        3) Cancelar el comportamiento por default
        4) Pedir por ajax el archivo que le corresponde
        5) Mostrarlo dentro del main
*/

let nav = document.querySelector("nav")
let main = document.querySelector("main")

for (let index = 0; index < nav.children.length; index++) {
  nav.children[index].addEventListener("click",e=>{
    e.preventDefault()
    e.stopPropagation()
    ajaxRequest(e.target.href)
  })
}

// O con bucle forEach
/*
nav.children.forEach(element => {
  element.addEventListener("click",e=>{
    e.preventDefault()
    e.stopPropagation()
    ajaxRequest(element.href)
  })
});
*/

function ajaxRequest(url){
  let xhr = new XMLHttpRequest
  xhr.open("GET",url)
  xhr.send()
  xhr.addEventListener("load",e=>{
    e.stopPropagation()
    main.innerHTML = e.target.response
  })    
}