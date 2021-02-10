//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.meals[0].strMeal
        document.querySelector('img').src = data.meals[0].strMealThumb
        document.querySelector('p').innerText = data.meals[0].strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
