document.querySelector('#getCovid').addEventListener('click', covidCheck)

function covidCheck() {
  let apiCovid = fetch("https://covid-api.mmediagroup.fr/v1/cases?country=US&status=Confirmed")

  Promise.all([apiCovid])
    .then((data) => {
      return Promise.all(data.map((res) => res.json()))
    })
    .then(([dataCovid]) => {
      document.querySelector('#confirmed').innerText = dataCovid.All.confirmed
      document.querySelector("#deaths").innerText = dataCovid.All.deaths;
      document.querySelector("#pop").innerText = dataCovid.All.population;
      document.querySelector("#life").innerText = dataCovid.All.life_expectancy;
      document.querySelector("#cap").innerText = dataCovid.All.capital_city;
    })
}

function covidCheck() {
  let covid = document.querySelector("input").value;
  let apiCovidTwo = "https://covid-api.mmediagroup.fr/v1/cases?country=US&status=Confirmed" +covid

  fetch(apiCovidTwo)
    .then((res) => res.json())
    .then((dataTwo) => {
      document.querySelector("#confirmedTwo").innerText = dataTwo.confirmed;
      document.querySelector("#deathsTwo").innerText = dataTwo.deaths;
      document.querySelector("#popTwo").innerText = dataTwo.population;
      console.log()
    })
}
// function getDrink() {
//   let drinkChoice = document.querySelector("input").value;
//   let url =
//     "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkChoice;

//   fetch(url)
//     .then((res) => res.json()) //Parse response as JSON
//     .then((data) => {
//       console.log(data.drinks[0]);
//       document.querySelector("h2").innerText = data.drinks[0].strDrink;
//       document.querySelector("img").src = data.drinks[0].strDrinkThumb;
//       document.querySelector("#cat").innerText = data.drinks[0].strCategory;
//       document.querySelector("#glass").innerText = data.drinks[0].strGlass;
//       document.querySelector("#instructions").innerText =
//         data.drinks[0].strInstructions;
//       document.querySelector("#ingredient1").innerText =
//         data.drinks[0].strIngredient1;
//       document.querySelector("#ingredient2").innerText =
//         data.drinks[0].strIngredient2;
//       document.querySelector("#ingredient3").innerText =
//         data.drinks[0].strIngredient3;
//       document.querySelector("#ingredient4").innerText =
//         data.drinks[0].strIngredient4;
//       document.querySelector("#shots1").innerText = data.drinks[0].strMeasure1;
//       document.querySelector("#shots2").innerText = data.drinks[0].strMeasure2;
//       document.querySelector("#shots3").innerText = data.drinks[0].strMeasure3;
//       document.querySelector("#shots4").innerText = data.drinks[0].strMeasure4;
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }