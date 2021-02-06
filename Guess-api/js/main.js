//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://www.anapioficeandfire.com/api/characters/'
  let mySelector = ''
  let myValues = 'female'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if(myValues === choice) {
          document.querySelector('h3').innerText = "You guessed correctly"
        }else {
          document.querySelector('h3').innerText = "You guessed wrong"
        }
        mySelector = document.querySelector('h2').innerText = data[6].aliases
        console.log(typeof(choice))
        console.log(typeof(myValues))
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });



}
