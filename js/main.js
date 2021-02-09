document.querySelector('#greetingButton').addEventListener('click', getChar)
let foURL = ""
let bbName = ""



function getChar(){
  const bbURL = 'https://breakingbadapi.com/api/character/random'
  fetch(bbURL)
    .then(res=> res.json())
    .then(data => {
      console.log(data[0])
      let bbName = data[0].name
      document.querySelector('img').src = (data[0].img)

      })

      const quoteURL = 'http://api.quotable.io/random'
      fetch(quoteURL)
      .then(res=>res.json())
      .then(data =>{
        document.querySelector('h2').innerText = data.content

      })
        .catch(err => {console.log(`error ${err}`)
      })
  }
