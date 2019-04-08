// Images https://www.pexels.com/
let xhr = new XMLHttpRequest
xhr.open("get","dog.jpg")
//xhr.responseType = String - Encodea la respuesta en el formato especificado
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
xhr.responseType = "blob"
let p = document.querySelector("p")
let progressBar = document.querySelector("progress")
let youtubeLoader = document.querySelector(".youtube-loader")


xhr.addEventListener("readystatechange",e=>{

  switch(e.target.readyState){
    case 2:
      progressBar.classList.toggle("hidden")
      youtubeLoader.style.opacity = "1"
      
      break;
    case 3:
      break;
  }
})

// Evento Estado 3
xhr.addEventListener("progress",e=>{
  //console.log("Descargando")
  //console.dir(e)

  /**
   * 
   * Event.lengthComputable => Boolean - Determina si el header content-length esta presente
   * 
   * Event.loaded => Number - La cantidad de bytes descargados hasta el momento
   * 
   * Event.total => Number - La cantidad total de bytes del archivo
   * 
   */

   if(e.lengthComputable){

    let percentage = (e.loaded/e.total)*100

    //Cambiando el progreso en el p
    p.innerText = `Vas ${Math.round(percentage)} % de descarga`

    //Cambiando el progreso en la etiqueta progress
    console.log(percentage)
    progressBar.value = percentage

    //Otra barra de progreso
    youtubeLoader.style.width = percentage + "%"

    /**
     * Redondeo
     * Math.round() => .5 hace redondea para arriba, sino para abajo
     * Math.floor() => Redondea para abajo
     * Math.ceil() => Redondea para arriba
     * Numer.toFixed(M) => Muestra la cantidad M de decimales de un numero
     * 
     */

   }else{

    // No se cuanto falta
    
   }


})

xhr.addEventListener("load",e=>{
  console.log("Se termino el pedido")
  p.innerText = ""
  progressBar.classList.toggle("hidden")
  youtubeLoader.style.width = ""

  console.log(e.target)
  
  //APIs Web para traducir el String (ilegible de imagenes, archivos, etc cuando no son JSON, HTML, Texto) de response
  // Blob - File - MediaSource/MediaStream - ArrayBuffer

  //API de URL: Dentro de otras cosas, puede extrar una URL de un Blob

  let url = URL.createObjectURL(e.target.response)
  // Las URL generadas por la API de URL no son compartibles, son temporales del dominio 
  console.log(url)

  let img = document.createElement("img")
  img.src = url
  img.style.width = "100%"
  document.body.appendChild(img)

  let a = document.createElement("a")
  a.href = url
  //Uno lo descarga otro lo abre en otra pestaña
  a.download = "unvalor"  // o a.target = "_blank"
  a.click()
  


})
xhr.send()