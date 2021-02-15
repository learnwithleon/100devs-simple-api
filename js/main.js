//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/'+choice
  const ronSays = document.querySelector('h3')
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        ronSays.innerText = ''
        if(data.length > 0){
          data.forEach(quote => ronSays.innerText += `${quote}\n\n`)
        }else{
          ronSays.innerText = `Ron has nothing to say about ${choice}.`
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
