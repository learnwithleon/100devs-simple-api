// //The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


document.querySelector('button').addEventListener('click', getDrink)


function getDrink(){
const chosenDrink = document.querySelector('input').value 
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+chosenDrink.replace(/%20/g, '+').trim();;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        let drinkName = data.drinks[0].strDrink
        let instructions = data.drinks[0].strInstructions
        let drinkPic = data.drinks[0].strDrinkThumb
        document.querySelector('h2').innerText = drinkName;
        document.querySelector('h3').innerText = instructions;
        document.querySelector('img').src = drinkPic;
        
    })
    .catch(err => {
        console.log(`err ${err}`)
    })
}
