//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
  document.querySelector('button').addEventListener('click', getFetch)
 function getFetch() {
 // const choice = document.querySelector('input').value
  const url = `https://api.coindesk.com/v1/bpi/currentprice.json`


 fetch(url)
     .then(res => res.json())
     .then(data => {
       console.log(data)
       const price = data.bpi.USD.rate
       document.querySelector('h2').innerText = price
       document.querySelector('h3').innerText = data.disclaimer
       document.querySelector('p').innerText = `As of ${data.time.updated}`
       console.log(price)
     })
     .catch(err => {
       console.log(`error ${err}`)
     })
 }
// fetch("https://coinmarketcapzakutynskyv1.p.rapidapi.com/getCryptocurrenciesList", {
// 	"method": "POST",
// 	"headers": {
// 		"x-rapidapi-key": "b4057817c1msh275725535a596cep128eb5jsncbe0e4d46892",
// 		"x-rapidapi-host": "CoinMarketCapzakutynskyV1.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
