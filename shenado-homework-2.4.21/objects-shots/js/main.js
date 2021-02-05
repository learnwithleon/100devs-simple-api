//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let btn = document.querySelector('.btn').addEventListener('click', runInfo)

function runInfo() {
    let drink = document.querySelector('input').value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    console.log(drink)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let drinkName = data.drinks[0].strDrink
        let drinkThumb = data.drinks[0].strDrinkThumb
        let drinkInst = data.drinks[0].strInstructions

        document.querySelector('h2').innerText = drinkName
        document.querySelector('img').src = drinkThumb
        document.querySelector('h3').innerText = drinkInst
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}