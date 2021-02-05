document.querySelector('#questionButton').addEventListener('click', getFetch)
document.querySelector('#answerButton').addEventListener('click', showAnswer)

function getFetch(){
  // const choice = document.querySelector('input').value
  const url = 'https://opentdb.com/api.php?amount=10'


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#questionHeader').innerText = data.results[0].question
        // document.querySelector('#answerHeader').innerText = data.results[0].correct_answer
        answer = data.results[0].correct_answer
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function showAnswer() {
  document.querySelector('#answerHeader').innerText = answer
}

// Weird stuff happening with the quotes in some of the questions.