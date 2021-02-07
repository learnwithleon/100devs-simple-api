document.querySelector('button').addEventListener('click', getFetch)
//
function getFetch(){
  const inputValue = document.querySelector('#poke1').value
  const url = 'http://pokeapi.co/api/v2/pokemon/' + inputValue

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let value = document.querySelector('h2').innerText = data.id
      document.querySelector('#img').src = data.sprites.front_shiny

      fetch(`http://numbersapi.com/${data.id}/trivia?json`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          document.querySelector('h3').innerText = data.text
        })
        .catch(err =>{
          console.log(`error ${err}`)
        })
    })
    .catch(err =>{
      console.log(`error ${err}`)
    })
}
