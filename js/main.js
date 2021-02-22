document.querySelector('img').addEventListener('click', getQuote)



function getQuote(){
  fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let quote = data.quote
      document.querySelector('h2').innerText = quote + ' 🌊'
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}

  setTimeout(function(){
    document.getElementById("kanye_skinhead").play();
    console.log('song is playing')
  }, 9000)
