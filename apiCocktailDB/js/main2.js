//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//handle spaces within the search
//handle spelling wrong
//rotating list of drinks....a carousel after clicking the button

document.getElementById("search").addEventListener("click", search);
document.getElementById("stop").addEventListener("click", myStopFunction);
let timeoutID;

function search() {
    let drinkChoice = document.querySelector("input").value.replace(" ", "%20");
    console.log(drinkChoice);
    let url =
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkChoice;

    fetch(url)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
            if (data.drinks == null) {
                document.querySelector("h2").innerText = "Nothing found.";
                document.querySelector("img").src = "";
                document.querySelector("h3").innerText = "instructions";
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
        .catch((err) => {
            console.log(`error ${err}`);
        });
}
function myStopFunction() {
    clearTimeout(timeoutID);
}



