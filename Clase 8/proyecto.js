(function(){
    
    let i ; let j ;
    
    class Componente {
        
        constructor(tipo,id=null,target="body"){
            this.tipo = tipo
            this.id = id
            this.target = target
            this.componente = document.createElement(tipo)
            this.componente.id = id
            this.agregarComponente(this.target)
        }

        agregarComponente(target){
            document.querySelector(target).appendChild(this.componente)
        }

        on(evento,callback){
            this.componente.addEventListener(evento,callback)
        }
        
    }

    class Listado extends Componente {
        constructor(id,target){
            super("ul",id,target)
            if (j) return j;
            this.items = []
            j = this
        }

        agregarItem(item){
            this.items.push(item)
            let l = new Componente("li",`item-${this.items.indexOf(item)}`,"#"+this.id)
            l.componente.innerText = item
            return l
        }

    }
    
    
    class Sidebar extends Componente {
        constructor(id,target){
            super("aside",id,target)
            if (i) return i;
            this.listado = new Componente("ul","sidebar-listado")
            this.items = []
            this.componente.appendChild(this.listado.componente)
            i = this
        }
        
        agregarVisitado(data){
            let li = new Componente("li",`item-${this.items.length}`)
            li.componente.innerText = data
            this.componente.appendChild(li.componente)
        }
    }
    
    class Ajax {
        get(url,format="json",callback=console.log,getParams={}){
            let params = ""
            let parsedParams = Object.keys(getParams)
            let count = parsedParams.length
            parsedParams.forEach((key,i)=>{
                if (i+1 == count) return ;
                params = params + key + "=" + getParams[key]
            })
            url = params ? url + params : url
            fetch(url)
            .then(res=>res[format]())
            .then(res=>callback(res))
        }
    }

    window.Sidebar = Sidebar
    window.Componente = Componente
    window.Ajax = Ajax
    window.Listado = Listado

    let ajax = new Ajax
    let l = new Listado("listado")
    let item = l.agregarItem("pikachu")
    item.on("click",()=>{
        ajax.get(`https://pokeapi.co/api/v2/pokemon/${item.componente.innerText}`)
    })    

})(window,document)