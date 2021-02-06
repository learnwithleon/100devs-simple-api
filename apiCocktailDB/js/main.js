//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

/*
function getDrink() {
  let inputVal = document
    .querySelector("input")
    .value.replace(/(^\s+|\s+$)/g, "");
*/

document.querySelector('button').addEventListener('click', showDrink)
let timeoutID;

function showDrink() {
  let drink = document.querySelector("input").value.replace(' ', '');
  let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink


  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data.drinks[0]);
      if (data.drinks == null) {
        document.querySelector("h2").innerText = data.drinks[0].strDrink
        document.querySelector("img").src = data.drinks[0].strDrinkThumb
        document.querySelector("h3").innerText = data.drinks[0].strInstructions
      } else {
        let num = data.drinks.length;
        console.log(num);
        let random = Math.floor(Math.random() * num);
        console.log(random);
        let drinkName = data.drinks[random].strDrink;
        let drinkThumb = data.drinks[random].strDrinkThumb;
        let drinkInst = data.drinks[random].strInstructions;
        document.querySelector("img").src = drinkThumb;
        document.querySelector("h2").innerText = drinkName;
        document.querySelector("h3").innerText = drinkInst;
        timeoutID = setTimeout(search, 5000);
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
// function myStopFunction() {
//   clearTimeout(timeoutID);
// }