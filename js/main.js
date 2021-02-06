//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const text = document.querySelector('input').value
  const url = 'https://api.funtranslations.com/translate/yoda.json?text='+text

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data.contents.translated
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}