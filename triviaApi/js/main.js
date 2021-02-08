
document.querySelector('#question').addEventListener('click', question)

function question(){
  fetch('https://opentdb.com/api.php?amount=40&category=18')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('p').innerText = ''
      document.querySelector('img').src = ''
      let random = Math.floor(Math.random()*41)
      let newQuestion = data.results[random].question
      let correctAnswer = data.results[random].correct_answer
      document.querySelector('h1').innerText = newQuestion
      document.querySelector('#answer').addEventListener('click', answer =>{
        document.querySelector('p').innerText = correctAnswer
        getGif()
      })
    })
    .catch(err => {
      console.log(`err ${err}`)
    })
}

let apiKey = 'v7JJFLu9ajLhAWZf2wDCl2mjOFwijONU'
let url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
function getGif(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let random = Math.floor(Math.random()*51)
        let gif = data.data[random].images.downsized.url
        document.querySelector('img').src = gif
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
