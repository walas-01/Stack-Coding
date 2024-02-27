const form = document.querySelector('.sect-left')


// -------------------------------------------------------------- [EventListeners]

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    const inputOrigen = document.querySelector('#inOrigen').value
    const inputGenero = document.querySelector('#inGenero').value
    const inputCantidad = Number(document.querySelector('#inCantidad').value)

    //const listaNombres = new ListaNombres(inputOrigen,inputGenero,inputCantidad)
    //console.log(listaNombres)

    conectarAPI()
})

// -------------------------------------------------------------- Classes

class ListaNombres {
    constructor(origen,genero,cantidad ){
        this.origen = origen
        this.genero = genero
        this.cantidad = cantidad
    }
}

// -------------------------------------------------------------- methods

async function conectarAPI(){
    
    fetch('https://uinames.com/api/') // get data
        .then(response => response.json()) // make it a json object
        .then(data => console.log(data)) // use it
} 