//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getFact)
document.querySelector('button').addEventListener('click', getQuoteStyle)

function getFact(){

  const url = 'https://api.kanye.rest'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerText = data.quote
        console.log(data);

      })
      .catch(err => {
          console.log(`error ${err}`)
      });


}

function getQuoteStyle(){
  document.querySelector('h2').classList.add('quoteStyle')
}
