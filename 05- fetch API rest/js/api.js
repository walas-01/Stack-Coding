
class API{
  constructor(apiKey){
    this.apiKey = apiKey
  }
  
  async obtenerListaCryptoAPI(){
    try{
      const res = await fetch(`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${apiKey}`)
      const data = await res.json()
      const coinList = data.Data

      console.log(coinList)

      let cleanCoinList = []

      coinList.forEach((coin,i) => {
        if(i%100===0){
          cleanCoinList.push(coin)
        }
      });
      
      console.log(cleanCoinList)

    }catch(err){
      console.log(err)
    }
  }


  async obtenerCambio(){

  }
}

// https://min-api.cryptocompare.com/data/all/coinlist
// https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,BTC,EUR