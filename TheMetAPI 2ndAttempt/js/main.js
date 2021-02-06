//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const painting = document.querySelector('input').value
  const url = "https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&q="+painting
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let numberOfObject = data.total
      
      document.querySelector('h2').innerText = numberOfObject
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}