//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let input = document.querySelector('input')
let name = document.querySelector('h2')
let instructions = document.querySelector('h3')
let img = document.querySelector('img')
document.querySelector('button').addEventListener('click', get)

function get(){
  let drink
  if(input.innerText.includes(' ')){
    drink = input.value.split(' ').join('+')
  }else{
    drink = input.value
  }
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks[0])
        img.src = data.drinks[0].strDrinkThumb
        instructions.innerText += ' ' + data.drinks[0].strInstructions
        name.innerText = data.drinks[0].strDrink
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
