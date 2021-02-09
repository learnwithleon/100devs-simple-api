//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const url = 'https://www.scorebat.com/video-api/v1/'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.length)

        let selection = Math.floor(Math.random()*data.length)
        document.getElementById('team1').innerText = data[selection].title
        document.getElementById('highlight').innerHTML = data[selection].embed
        console.log(selection)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}