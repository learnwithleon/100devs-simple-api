//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getRecipe)

function getRecipe() {
    let ingredient = document.querySelector('input').value
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.meals[0])
            console.log(data.meals[0].idMeal)
            console.log(data.meals[0].strMeal)


            document.querySelector('h2').innerText = data.meals[0].strMeal
            document.querySelector('img').src = data.meals[0].strMealThumb


            const url2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[0].idMeal}`

            fetch(url2)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                    console.log(data)

                    document.querySelector('#ingredients').innerText = `Ingredients: \n ${data.meals[0].strIngredient1}, ${data.meals[0].strIngredient2}, ${data.meals[0].strIngredient3}, ${data.meals[0].strIngredient4}, ${data.meals[0].strIngredient5} `
                    document.querySelector('h3').innerText = `Instructions: \n ${data.meals[0].strInstructions}, ${data.meals[0].strIngredient6},${data.meals[0].strIngredient7}`

                })
                .catch(err => {
                    console.log(`error ${err}`)
                });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}

