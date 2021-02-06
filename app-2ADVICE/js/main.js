//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  const url = 'https://api.adviceslip.com/advice'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.slip.advice
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}