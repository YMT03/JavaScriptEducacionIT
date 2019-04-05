/*
    A partir dej EJ 2.
    1. Modificar el callback del click de cada link para que la URL refleje la posicion actual
    2. Usar el evento de hashchange para detectar cambios en el historial y recargar el contenido
        .. que corresponda
    3. El programa tiene que ser capaz de en la primer carga de la pag, mostrar el contenido que corresponda  
*/

let nav = document.querySelector("nav")
let main = document.querySelector("main")

for (let index = 0; index < nav.children.length; index++) {
  nav.children[index].addEventListener("click",e=>{
    e.preventDefault()
    e.stopPropagation()
    window.location.hash = nav.children[index].innerText
    ajaxRequest(e.target.href)
  })
}

if(location.hash){
  ajaxRequest(`${location.hash.substr(1)}.html`)
}

window.addEventListener("hashchange",e=>{
  if(location.hash)
    ajaxRequest(`${location.hash.split("#")[1]}.html`)
})

window.addEventListener("load",e=>{
  
})


function ajaxRequest(url){
  let xhr = new XMLHttpRequest
  xhr.open("GET",url)
  xhr.send()
  xhr.addEventListener("load",e=>{
    e.stopPropagation()
    main.innerHTML = e.target.response
  })    
}


