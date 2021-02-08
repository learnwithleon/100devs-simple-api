document.querySelector('button').addEventListener('click', pokemon)
function pokemon(){
  let input = document.querySelector('input').value
  let url = 'https://pokeapi.co/api/v2/pokemon/'+ input;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let img = data.sprites.front_default
      let name = data.name
      // document.querySelector('img').src = img
      document.querySelector('h3').innerText = name
      getGif(name)
    })
    .catch(err => {
      console.log(`err ${err}`)
    })
  document.querySelector('input').value = '';
}

function getGif(pokemonName){
  let name = pokemonName
  let apiKey = 'v7JJFLu9ajLhAWZf2wDCl2mjOFwijONU'
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${name}`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    // let random = Math.floor(Math.random()*51)
    let gif = data.data[0].images.downsized.url
    document.querySelector('img').src = gif
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
