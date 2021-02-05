//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#cockTail').addEventListener('click', getDrink)
document.querySelector("#gin").addEventListener("click", getGin);
document.querySelector("#vod").addEventListener("click", getVod);
document.querySelector("#cof").addEventListener("click", getCof);
document.querySelector("#marg").addEventListener("click", getMarg);
document.querySelector("#tea").addEventListener("click", getTea);

function getDrink() {
    let drinkChoice = document.querySelector('input').value
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkChoice

    fetch(url)
    .then(res => res.json()) //Parse response as JSON
    .then(data => {
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('#cat').innerText = data.drinks[0].strCategory
        document.querySelector("#glass").innerText = data.drinks[0].strGlass;
        document.querySelector("#instructions").innerText = data.drinks[0].strInstructions;
        document.querySelector("#ingredient1").innerText = data.drinks[0].strIngredient1;
        document.querySelector("#ingredient2").innerText = data.drinks[0].strIngredient2;
        document.querySelector("#ingredient3").innerText = data.drinks[0].strIngredient3;
        document.querySelector("#ingredient4").innerText = data.drinks[0].strIngredient4;
        document.querySelector("#shots1").innerText = data.drinks[0].strMeasure1;
        document.querySelector("#shots2").innerText = data.drinks[0].strMeasure2;
        document.querySelector("#shots3").innerText = data.drinks[0].strMeasure3;
        document.querySelector("#shots4").innerText = data.drinks[0].strMeasure4;
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
function getGin() {
    let drinkChoiceGin = document.querySelector('#gin').value
    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+drinkChoiceGin

    fetch(url)
    .then(res => res.json())
    .then(data => {
        document.querySelector("h2").innerText = data.drinks[0].strDrink;
        document.querySelector("img").src = data.drinks[0].strDrinkThumb;
        document.querySelector("#cat").innerText = data.drinks[0].strCategory;
        document.querySelector("#glass").innerText = data.drinks[0].strGlass;
        document.querySelector("#instructions").innerText = data.drinks[0].strInstructions;
        document.querySelector("#ingredient1").innerText = data.drinks[0].strIngredient1;
        document.querySelector("#ingredient2").innerText = data.drinks[0].strIngredient2;
        document.querySelector("#ingredient3").innerText = data.drinks[0].strIngredient3;
        document.querySelector("#ingredient4").innerText = data.drinks[0].strIngredient4;
        document.querySelector("#shots1").innerText = data.drinks[0].strMeasure1;
        document.querySelector("#shots2").innerText = data.drinks[0].strMeasure2;
        document.querySelector("#shots3").innerText = data.drinks[0].strMeasure3;
        document.querySelector("#shots4").innerText = data.drinks[0].strMeasure4;
    })
}
function getVod() {
  let drinkChoiceVod = document.querySelector("#vod").value;
  let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkChoiceVod;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("h2").innerText = data.drinks[19].strDrink
      document.querySelector("img").src = data.drinks[19].strDrinkThumb;
      document.querySelector("#cat").innerText = data.drinks[19].strCategory;
      document.querySelector("#glass").innerText = data.drinks[19].strGlass;
      document.querySelector("#instructions").innerText = data.drinks[19].strInstructions;
      document.querySelector("#ingredient1").innerText = data.drinks[19].strIngredient1;
      document.querySelector("#ingredient2").innerText = data.drinks[19].strIngredient2;
      document.querySelector("#ingredient3").innerText = data.drinks[19].strIngredient3;
      document.querySelector("#ingredient4").innerText = data.drinks[19].strIngredient4;
      document.querySelector("#shots1").innerText = data.drinks[19].strMeasure1;
      document.querySelector("#shots2").innerText = data.drinks[19].strMeasure2;
      document.querySelector("#shots3").innerText = data.drinks[19].strMeasure3;
      document.querySelector("#shots4").innerText = data.drinks[19].strMeasure4;
    });
}
function getCof() {
  let drinkChoiceCof = document.querySelector("#cof").value;
  let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkChoiceCof;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("h2").innerText = data.drinks[12].strDrink;
      document.querySelector("img").src = data.drinks[12].strDrinkThumb;
      document.querySelector("#cat").innerText = data.drinks[12].strCategory;
      document.querySelector("#glass").innerText = data.drinks[12].strGlass;
      document.querySelector("#instructions").innerText = data.drinks[12].strInstructions;
      document.querySelector("#ingredient1").innerText = data.drinks[12].strIngredient1;
      document.querySelector("#ingredient2").innerText = data.drinks[12].strIngredient2;
      document.querySelector("#ingredient3").innerText = data.drinks[12].strIngredient3;
      document.querySelector("#ingredient4").innerText = data.drinks[12].strIngredient4;
      document.querySelector("#shots1").innerText = data.drinks[12].strMeasure1;
      document.querySelector("#shots2").innerText = data.drinks[12].strMeasure2;
      document.querySelector("#shots3").innerText = data.drinks[12].strMeasure3;
      document.querySelector("#shots4").innerText = data.drinks[12].strMeasure4;
    });
}
function getMarg() {
  let drinkChoiceMarg = document.querySelector("#marg").value;
  let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkChoiceMarg;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("h2").innerText = data.drinks[1].strDrink;
      document.querySelector("img").src = data.drinks[1].strDrinkThumb;
      document.querySelector("#cat").innerText = data.drinks[1].strCategory;
      document.querySelector("#glass").innerText = data.drinks[1].strGlass;
      document.querySelector("#instructions").innerText = data.drinks[1].strInstructions;
      document.querySelector("#ingredient1").innerText = data.drinks[1].strIngredient1;
      document.querySelector("#ingredient2").innerText = data.drinks[1].strIngredient2;
      document.querySelector("#ingredient3").innerText = data.drinks[1].strIngredient3;
      document.querySelector("#ingredient4").innerText = data.drinks[1].strIngredient4;
      document.querySelector("#shots1").innerText = data.drinks[1].strMeasure1;
      document.querySelector("#shots2").innerText = data.drinks[1].strMeasure2;
      document.querySelector("#shots3").innerText = data.drinks[1].strMeasure3;
      document.querySelector("#shots4").innerText = data.drinks[1].strMeasure4;
    });
}
function getTea() {
  let drinkChoiceTea = document.querySelector("#tea").value;
  let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkChoiceTea;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("h2").innerText = data.drinks[18].strDrink;
      document.querySelector("img").src = data.drinks[18].strDrinkThumb;
      document.querySelector("#cat").innerText = data.drinks[18].strCategory;
      document.querySelector("#glass").innerText = data.drinks[18].strGlass;
      document.querySelector("#instructions").innerText = data.drinks[18].strInstructions;
      document.querySelector("#ingredient1").innerText = data.drinks[18].strIngredient1;
      document.querySelector("#ingredient2").innerText = data.drinks[18].strIngredient2;
      document.querySelector("#ingredient3").innerText = data.drinks[18].strIngredient3;
      document.querySelector("#ingredient4").innerText = data.drinks[18].strIngredient4;
      document.querySelector("#shots1").innerText = data.drinks[18].strMeasure1;
      document.querySelector("#shots2").innerText = data.drinks[18].strMeasure2;
      document.querySelector("#shots3").innerText = data.drinks[18].strMeasure3;
      document.querySelector("#shots4").innerText = data.drinks[18].strMeasure4;
    });
}
//drinks
//Gin
//vodka
//Margarita
//Whiskey
//Pina Colda
//Mai
//Long Island Tea