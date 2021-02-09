//Merc API

document.querySelector('button').addEventListener('click', runQuotes)

function runQuotes() {

  let url = 'https://finalspaceapi.com/api/v0/quote/'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let random = Math.floor(Math.random() * 52)

        console.log(data)
        console.log(data[random].quote);

        document.querySelector('h2').innerText = data[random].by
        document.querySelector('img').src = data[random].image
        document.querySelector('h3').innerText = data[random].quote


      })
      .catch(err => {
          console.log(`error ${err}`)
      })
}
