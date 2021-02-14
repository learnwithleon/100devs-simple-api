
document.querySelector('button').addEventListener('click', getTicker)

function getTicker(){
  let tickerSymbol = document.querySelector('input').value
  const urlA = 'https://cloud.iexapis.com/stable/stock/'
  const urlB = '/quote?token='
  const api_key = config.IEX_API_KEY
  
  
  fetch(`${urlA}${tickerSymbol}${urlB}${api_key}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.getElementById("companyName").innerHTML = data.companyName
        document.getElementById("latestPrice").innerHTML = `$ ${data.latestPrice}`
        document.getElementById("previousClose").innerHTML = `$ ${data.previousClose}`
        document.getElementById("change").innerHTML = `$ ${data.change}`
        document.getElementById("previousVolume").innerHTML = data.previousVolume
        document.getElementById("avgTotalVolume").innerHTML = data.avgTotalVolume

        document.getElementById("marketCap").innerHTML = data.marketCap
        document.getElementById("peRatio").innerHTML = data.peRatio
        document.getElementById("week52High").innerHTML = `$ ${data.week52High}`
        document.getElementById("week52Low").innerHTML = `$ ${data.week52Low}`

        //equation below converts ytdChange to percentage rounded to two decimal places
        document.getElementById("ytdChange").innerHTML = ` ${Math.round(data.ytdChange * 10000 + Number.EPSILON) / 100}%`
        //Save console data to check for errors
        console.log(data);
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("Please enter a valid ticker symbol")
      });
}
