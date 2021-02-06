//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://api.tronalddump.io/random/quote' 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.tags
        document.querySelector('h3').innerText = data.value
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
