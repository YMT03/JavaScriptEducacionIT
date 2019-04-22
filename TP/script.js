let response = fetch("https://restcountries.eu/rest/v2/all",{
});

let form = document.querySelector("form")
form.addEventListener("submit",e=>{
    fetch("https://restcountries.eu/rest/v2/all").then(data=>data.json()).then(data=>console.dir(data))
})


window.addEventListener("load",e=>{
    let paises = new Array
    let response = fetch("https://restcountries.eu/rest/v2/all").then(data=>data.json()).then(data=>{
    })
})