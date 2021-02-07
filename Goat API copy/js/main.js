//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let arrayRandom = Math.floor(Math.random() * 100)
  let pageRandom = Math.floor(Math.random() * 10)
  console.log(arrayRandom)
  console.log(pageRandom)

  const url = `https://picsum.photos/v2/list?page=${pageRandom}&limit=100`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data[arrayRandom])
        console.log(data[arrayRandom].download_url)

        document.querySelector('img').src = data[arrayRandom].download_url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
 }