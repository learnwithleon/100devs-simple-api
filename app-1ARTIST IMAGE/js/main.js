//Music Artist Image

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://itunes.apple.com/search?term='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.results[0].artistName    
                
           document.querySelector('img').src = data.results[0].artworkUrl100
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}results