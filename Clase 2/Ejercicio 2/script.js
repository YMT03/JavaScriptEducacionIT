/**
 * *** Los botones de formulario no llevan click ***
 * 
 * El evento del formulario es submit
 */

let form = document.querySelector("form")
form.addEventListener("submit", e=>{
  e.preventDefault()
  e.stopPropagation()
  
  let comentario = document.createElement("p")
  let row = document.createElement("li")
  let eliminar = document.createElement("button")
  let comentarios = document.querySelector("ul")
  comentario.innerText = `Nombre: ${e.target[0].value} Comentario: ${e.target[1].value}`
  eliminar.innerText = "x"

  comentario.appendChild(eliminar)
  row.appendChild(comentario)
  comentarios.appendChild(row)

  eliminar.addEventListener("click",e=>{
    e.stopPropagation()
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
  })
})

/**
 * Ejercicio
 * El evento submit ya esta configurado en las lineas anteriores solo
 * falta agarrar el valor de cada input/textarea, crear un UI que se vea como:
 * <li>
 *    <p> Nombre: <valor ingresado por el usuario></p>
 *    <p> Comentario: <valor ingresado por el usuario></p>
 *    <button>x</button>
 * </li>
 * 
 * Cada vez que alguien le de click al boton de cada item, 
 * el comentario se tiene que eliminar de la lista
 * 
 */







