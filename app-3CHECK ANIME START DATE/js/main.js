//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://api.jikan.moe/v3/search/anime?q='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.results[0].start_date
        document.querySelector('img').src = data.results[0].image_url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}