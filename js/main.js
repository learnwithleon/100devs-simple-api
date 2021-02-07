
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://api.quotable.io/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.content
        document.querySelector('h3').innerText = data.author
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}