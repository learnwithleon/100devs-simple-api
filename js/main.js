//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data)
        document.querySelector('h2').innerText = data.setup
        document.querySelector('h3').innerText = data.punchline
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
