//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = "https://api.giphy.com/v1/gifs/random?&api_key=oos4LWxAdHMWOy7nHQzUa34QsciJ4qdy&limit=5"


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.data)
        console.log(data.data.embed_url)
        console.log(data.data.username)
        document.querySelector('img').src = data.data.image_original_url
        document.querySelector('h3').innerText = data.data.username
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
 }