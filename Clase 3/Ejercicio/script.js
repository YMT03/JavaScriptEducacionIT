/**
 * 1. Crear 2 archivos de texto
 * 2. Agarrar los 2 botones
 * 3. Asignarles un evento de click a c/u
 * 4. El callback del click de cada boton tiene que ir a buscar el archivo que le corresponde por AJAX
 * 5. Cuando el pedido termine, se tiene que ver el contenido del mismo dentro de la etiqueta main
 */

 let nav = document.querySelector("nav")
 let boton1 = nav.children[0]
 let boton2 = nav.children[1]
 let xhr = new XMLHttpRequest
 let main = document.querySelector("main")

 boton1.addEventListener("click",e=>{
   e.stopPropagation()
   xhr.open("GET","texto1.txt")
   xhr.send()
 })
 boton2.addEventListener("click",e=>{
  e.stopPropagation()
  xhr.open("GET","texto2.txt")
  xhr.send()   
 })

 xhr.addEventListener("load",e=>{
   e.stopPropagation()
   switch(xhr.status){
     case 200:
      let p = document.createElement("p")
      p.innerText = xhr.response
      main.appendChild(p)
      break;
   }
 })