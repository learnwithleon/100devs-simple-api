
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
        getGif(correctAnswer)
      })
    })
    .catch(err => {
      console.log(`err ${err}`)
    })
}

function getGif(triviaAnswer){
  let name = triviaAnswer
  let apiKey = 'v7JJFLu9ajLhAWZf2wDCl2mjOFwijONU'
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${name}`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let gif = data.data[0].images.downsized.url
    document.querySelector('img').src = gif
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
