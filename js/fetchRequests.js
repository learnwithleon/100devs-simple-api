import { formRecipe} from './main.js'


const userInput = document.querySelector('.userInput');
const drinkSelection = document.querySelector('.drinkSelection');
const inputForm = document.querySelector('.inputForm');

export function fetchCocktail() {
  let choice = userInput.value;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`;
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const { drinks } = data;
      displayAvailableDrinks(drinks);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
// Displaying all the drinks matching the user Input in the UI

export function displayAvailableDrinks(drinks) {
  drinkSelection.classList.add('active');
  drinks.map((drink) => {
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = drink.strDrink;
    input.className = 'drinkOption';
    let label = document.createElement('label');
    label.for = drink.strDrink;
    label.textContent = drink.strDrink;
    inputForm.appendChild(input);
    // inputArray.push(input)
    inputForm.appendChild(label);
  });
}

export function fetchDrinksRecipe(input) {
  const optionsArray = inputForm.childNodes;
  optionsArray.forEach((el) => {
    if (el.checked === true) {
    let drinkSelected = el.attributes[1].textContent;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSelected}`;
      fetch(url)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          const { drinks } = data
          let matchedDrinkObj = drinks.filter(
            (drink) => drink.strDrink === drinkSelected
          );
          formRecipe(matchedDrinkObj)
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    }
  });
}

// we could have also done the export this way:
// export {fetchCocktail, displayAvailableDrinks, fetchRecipe}
