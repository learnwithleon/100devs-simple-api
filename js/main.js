import {
  fetchCocktail,
  fetchDrinksRecipe,
} from './fetchRequests.js';

// We can rename a single function by doing import { fetchCocktail as CallMeWhatYouLike }
// We can import everything that has been export by doing import * as CallMeWhatYouLike from './fetchRequests.js'
// and then we can say CallMeWhatYouLike. => the name of the function or const that the module is exporting
const searchBtn = document.querySelector('.searchBtn');
const getRecipeBtn = document.querySelector('.getRecipeBtn');

//! EVENT LISTENERS
searchBtn.addEventListener('click', fetchCocktail);
getRecipeBtn.addEventListener('click', fetchDrinksRecipe);

//! FUNCTIONS

export function formRecipe(drink) {
  //! Creating an object for the selected Drink

  //Step 1: Cleaning the object from the empty key value pairs
  function clean(obj) {
    for (let propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj;
  }
  //Step 2: Obtaining the object correspondent to the user choice
  const userDrink = clean(drink[0]);

  //Step 3: Obtaining the ingredient for the chosen drink
  const ingredients = Object.entries(userDrink).reduce(
    (acc, [key, val]) => (key.includes('strIngredient') ? [...acc, val] : acc),
    []
  );
  //Step 4: Obtaining the measures for the chosen drink
  const measures = Object.entries(userDrink).reduce(
    (acc, [key, val]) => (key.includes('strMeasure') ? [...acc, val] : acc),
    []
  );

  //? Changing the Recipe elements according to the selected drink
  //Step 1: Making Visible the recipe section
  const recipeCard = document.querySelector('.recipeCard');
  recipeCard.classList.add('active');
  //Step 2: Showing the Recipe's name
  document.querySelector('.recipeTitle').textContent = userDrink.strDrink;
  //Step 3: Showing a picture of the Drink
  document.querySelector(
    '.imgContainer'
  ).firstElementChild.src = `${userDrink.strDrinkThumb}`;

  //Step 4: Combining Ingredients and measures into a single array
  let ingredientsMeasuresArray = [];
  for (var i = 0; i < ingredients.length; i++) {
    if (measures[i] != undefined) {
      ingredientsMeasuresArray.push(`${ingredients[i]}: ${measures[i]}`);
    } else {
      ingredientsMeasuresArray.push(`${ingredients[i]}`);
    }
  }

 
// Step: 5 Creating and appending the list of ingredient in the UI

  let textNode;

  ingredientsMeasuresArray.forEach((el) => {
    let node = document.createElement('li');
    textNode = document.createTextNode(el);
    node.appendChild(textNode);
    document.querySelector('.recipeIngredients').appendChild(node);
    // Inserting the recipe in the UI
    document.querySelector('.cocktailRecipe').textContent =
      userDrink.strInstructions;
  });




 
}
