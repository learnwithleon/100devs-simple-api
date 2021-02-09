// API on API
document.querySelector('button').addEventListener('click', makeFetch);

function makeFetch() {
  // inputs
  const drinkVal = document.querySelector('#drink').value;
  const countryVal = document.querySelector('#country').value;

  // URLs
  const url1 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkVal}`;
  const url2 = `https://restcountries.eu/rest/v2/name/${countryVal}`;

  // fetch 1
  fetch(url1)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector('.alc').innerText = data.drinks[0].strDrink;
      document.querySelector('#cocktail').src = data.drinks[0].strDrinkThumb;

      // fetch 2
      fetch(url2)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          document.querySelector('.pais').innerText = data[0].name;
          document.querySelector('#flag').src = data[0].flag;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
