//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getState)
function getState() {
  let stateChoice = document.querySelector('input').value
fetch(`https://api.covidtracking.com/v1/states/`+stateChoice+`/current.json`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
   document.querySelector(".cases").innerText = data.positive
    document.querySelector(".deaths").innerText = data.death
    document.querySelector(".recommendation").innerText = "Please wear a mask"

  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}
