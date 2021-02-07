document.querySelector('button').addEventListener('click', getAdvice)

function getAdvice(){
//const inputVal = document.querySelector('input').value
const url = "https://api.adviceslip.com/advice"
//+ inputVal

fetch(url)
.then(res => res.json())
.then(data => {
  //console.log(data)
  //let adviceId = data.slip[0].id
  //let adviceText = data.slip[0].advice

  document.querySelector('h1').innerText = data.slip.id
  document.querySelector('h2').innerText = data.slip.advice
})
.catch(err => {
  console.log(`error ${err}`)
});
}
