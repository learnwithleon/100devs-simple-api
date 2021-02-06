//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://www.breakingbadapi.com/api/quote/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.quote)
        document.querySelector('h3').innerText = data[0].quote
        document.querySelector('h2').innerText = data[0].author
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

