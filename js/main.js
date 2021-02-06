
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://api.kanye.rest/'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.quote)
        let kanyeTalk = data.quote 
        document.querySelector('h2').innerText = kanyeTalk
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}