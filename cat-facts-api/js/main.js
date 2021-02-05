// https://alexwohlbruck.github.io/cat-facts/
document.querySelector('.cat').addEventListener('click', getCatFact)
document.querySelector('.dog').addEventListener('click', getDogFact)


function getCatFact() {
  const url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1'

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.querySelector('.fact').innerText = data.text
      document.querySelector('.fact').classList.remove('royalblue_bg')
      document.querySelector('.fact').classList.add('seagreen_bg')
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}

function getDogFact() {
  const url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1'

  fetch(url)
  .then(res => res.json())
  .then(data => {
    document.querySelector('.fact').innerText = data.text
    document.querySelector('.fact').classList.remove('seagreen_bg')
    document.querySelector('.fact').classList.add('royalblue_bg')
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}
