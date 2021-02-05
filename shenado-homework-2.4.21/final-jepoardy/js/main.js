//Example fetch using pokemonapi.co
document.querySelector('#q').addEventListener('click', getQuestion)
document.querySelector('#a').addEventListener('click', showAnswer)


const sb = document.querySelector('#cat-choice')

let finalCat = getCat()


function getCat() {
    let thisCat = ''
    if (sb.value === '1') {
        let thisCat = '936'
        return thisCat
    } else if (sb.value === '2') {
       let thisCat = '42'
       return thisCat
    } else if (sb.value === '') {
       return 
    } 
}

function getQuestion(){
    console.log(sb.value)
  console.log(finalCat)
  let url = `http://jservice.io/api/category?id=${finalCat}`
  let min = 1
  let max = 55
  let num = Math.round(Math.random() * (max - min)) + min

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          document.querySelector('#question').innerText = data.clues[num].question
          document.querySelector('h3').innerText = data.title
          answer = data.clues[num].answer
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      
}
function showAnswer(){
  document.querySelector('#answer').innerText = answer
}