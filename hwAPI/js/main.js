document.querySelector('.shark').addEventListener('click', getDeals)

function getDeals(){
  fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      data.forEach(object => document.querySelector('.deals').innerHTML += `<li><img src="${object.thumb}"> ${object.title} price: ${object.salePrice}, saves ${Number(object.savings).toFixed(0)}%</li>`)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}