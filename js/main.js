
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.setup === undefined) {
          document.querySelector('h2').innerText = data.joke
          document.querySelector('h3').innerText = ""
        } else {
        document.querySelector('h2').innerText = data.setup
        document.querySelector('h3').innerText = data.delivery
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  }
  
  
