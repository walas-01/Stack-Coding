
//* const ui
const apiObject = new API("cd6ab6e341aec38f27e86a9023cb94c424f3419f009f43686bb32d5af98c536d")
const ui = new Interfaz()


// ----------------------- START

ui.agregarCryptos()

// ------------------------------------------------------------- EventListeners

const form = document.querySelector(".form")
form.addEventListener('submit',async(event)=>{
  event.preventDefault()

  if(form.children[0].value !== "" && form.children[1].value !== ""){

    const data = await apiObject.obtenerCambioAPI(form.children[0].value,form.children[1].value)
    
    ui.crearMensaje(data)

  }else{
    console.log("[Form]: he-he-hell nah")
    alert("Seleccione Moneda y CryptoMoneda validos")
  }

})
