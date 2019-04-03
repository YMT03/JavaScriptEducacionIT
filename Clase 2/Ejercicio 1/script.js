/**
 * Crear un mensaje en pantalla que le pregunte al usuario si quiere salir
 * de la navegacion a partir de un <a> div y dos botones para aceptar o cancelar la operacion.
 * Si se hace click en cancelar, se borra todo el mensaje en pantalla,
 * si se hace click en aceptar se redirige al usuario a la URL del link
 */

let goto = document.querySelector("a")
goto.addEventListener("click",e=>{
  e.stopPropagation()
  e.preventDefault()

  let text = document.createElement("p")
  text.innerText = "Seguro desea ir a google?"

  let confirm = document.createElement("button")
  confirm.id = "confirm"
  confirm.innerText = "Si"
  
  let cancel = document.createElement("button")
  cancel.id = "cancel"
  cancel.innerText = "Cancelar"

  let container = document.createElement("div")
  container.id = "contenedor"

  confirm.addEventListener("click", e=>{
    window.location = "http://www.google.com.ar"
  })

  cancel.addEventListener("click", e=>{
    e.stopPropagation()
    document.body.removeChild(container)
  })

  container.appendChild(text)
  container.appendChild(confirm)
  container.appendChild(cancel)
  document.body.appendChild(container)
  
})