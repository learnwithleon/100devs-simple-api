document.querySelector('button').addEventListener('click', getQuote)

function getQuote(){
const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes/"

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector("h2").innerText = data[0].quote
      document.querySelector("h3").innerText = data[0].author

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

  }
