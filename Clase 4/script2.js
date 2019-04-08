let drop = document.querySelector("#drop")
let input = document.querySelector("input")

//El evento change se dispara cuando un input/select cambia su valor
input.addEventListener("change",e=>{
  handleFiles(e.target.files)
})


//
drop.addEventListener("dragenter",e=>{
  e.preventDefault()
  console.log("Estoy adentro del dropzone. Dropzoneado")
})
drop.addEventListener("dragleave",e=>{
  e.preventDefault()
  console.log("Estoy afuera del dropzone")
})
drop.addEventListener("dragover",e=>{
  e.preventDefault()
  console.log("Estoy encima del dropzone")
})
drop.addEventListener("drop",e=>{
  e.preventDefault()
  //console.log("Me dropearon")
  //console.dir(e)
  handleFiles(e.dataTransfer.files)
})

document.body.addEventListener("drop",e=>{
  e.preventDefault()
})


function handleFiles(files){
  console.log(files)
  let xhr = new XMLHttpRequest
  //xhr.open("GET","url.com?nombre=Horacio")
  //xhr.open("GET", "url.com?archivo=" + files) Nop.Get. Parametros por URL.-> Limite de espacio
  //xhr.send("nombre=Horacio")
  //Content Type
  //xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
  //application/x-www-form-urlencoded. Incluido en GET. No en POST. Entonces aquellos que en post se envia
  // parametros del estilo parametro=valor&parametro2=valor etc. Por lo general no se manda asi por post
  // se suele mandar JSON
  //xhr.send({nombre:"horacio"}) //application/json
  //Otros archivos. Como sonido, archivo, imagen, lo que se puede agarrar con un input
  //multipart/form-data
  //xhr.setRequestHeader("content-type", "multipart/form-data")

  //API FormData: Agarra un elemento form del DOM y le extrae todos los valores de sus inputs
  // o crea un elemento FormData vacio y manualmente se le pueden agregar valores

  //Creo un FormData vacio. Itero por los archivos que me mandan y le agrego los archivos. KEY-VALUE
  let data = new FormData

  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    data.append(`file-${index}`, file)    
  }
  
  xhr.open("POST", "archivos.php")
  xhr.send(data)
  //De la misma forma para pdfs, excell, etc


  //xhr (AJAX) es solo una interfaz de descarga
  //XHRU - Otra API XMLHttpRequestUpload pero los eventos se disparan cuando se suben cosas
  // ENtonces un evento "progress" de un XHRU serviria para determinar el progreso de subida y demas

  //xhr tiene la propiedad upload. La cual viene con su propio xhru

  xhr.upload.addEventListener("progress",e=>{
    let percentage = (e.loaded/e.total)*100
    console.log(percentage)
  })


}