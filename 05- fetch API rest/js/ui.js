class Interfaz{

  async agregarCryptos(){
    const cryptoList = await apiObject.obtenerListaCryptoAPI() // had to use await
    const select = document.querySelector("#inCrypto")

    for (const [key, values] of Object.entries(cryptoList.Data)) {

      if(values.Id %50 == 0){
        const option = document.createElement('option') 
        option.innerText = values.CoinName
        option.value =  values.Symbol

        select.appendChild(option)
      }
    }
  }

  crearMensaje(data){
    const messageContainer = document.querySelector(".message-container")

    const html = `<div class="message">
                    <h3>Resultados</h3>
                    <p>El precio de ${Object.keys(data)[0]} es de: ${Object.values(data)[0]}</p>
                  </div>`

    messageContainer.innerHTML = html

  }
}

/*
  <div class="message">
    <h3>Resultados</h3>
    <p>El precio de CACA a moneda ARG es de: $ 0.5</p>
  </div>
*/

/* 
  <select class="input-Crypto input" name="inCrypto" id="inCrypto">
    <option value="">- Seleccionar CryptoCoin -</option>
    <option value="">caca</option>
    <option value="caca">caca</option>
    <option value="caca">caca</option>
  </select>
*/