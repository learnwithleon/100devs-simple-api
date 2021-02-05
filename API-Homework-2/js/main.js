document.querySelector('button').addEventListener('click', getFood)

function getFood(){
    let food = document.querySelector('input').value
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + food)
    .then(res => res.json())
    .then(data => {
        document.querySelector('h1').textContent = data.meals[0].strMeal
        document.querySelector('h2').textContent = data.meals[0].strInstructions

        console.log(data.meals[0].strMeal)
        console.log(data.meals[0])
    })
}
