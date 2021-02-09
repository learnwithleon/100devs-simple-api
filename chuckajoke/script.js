document.querySelector('button').addEventListener('click', chuckajoke)

function chuckajoke() {
  const url = 'https://api.chucknorris.io/jokes/random'

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.value
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}

