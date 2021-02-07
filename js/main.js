 document.querySelector('#question').addEventListener('click', getFetch)
 document.querySelector('#answer').addEventListener('click', showAnswer)
//
 let answer = ""

 function getFetch(){

  const url = 'https://opentdb.com/api.php?amount=10'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = data.results[0].question
        // document.querySelector('h2').innerText = data.results[0].correct_answer
        answer = data.results[0].correct_answer

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

 }
 function showAnswer(){
   document.querySelector('h2').innerText = answer
 }
