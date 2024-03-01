
class API{
  constructor(apiKey){
    this.apiKey = apiKey
  }
  
  async obtenerListaCryptoAPI(){
    try{
      const res = await fetch(`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`)
      const data = await res.json()
      return data
    }catch(err){
      console.log(err)
    }
  }


  async obtenerCambioAPI(moneda,crypto){
    try{
      const url =  `https://min-api.cryptocompare.com/data/price?fsym=${form.children[0].value}&tsyms=${form.children[1].value}`

      const res = await fetch(url)
      const data = await res.json()

      return data
    }catch(err){
      console.log(err)
    }
  }
}

// https://min-api.cryptocompare.com/data/all/coinlist
// https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,BTC,EUR