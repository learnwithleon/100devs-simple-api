
document.querySelector('button').addEventListener('click', getRecipe)





function getRecipe(){
    let mealName = document.querySelector('input').value;
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+mealName;
    fetch(url)
        .then(res => res.json())
        .then(data => {
        let mealName = data.meals[0].strMeal 
        let mealPic = data.meals[0].strMealThumb
        let directions = data.meals[0].strInstructions;
        let video = data.meals[0].strYoutube;
        document.querySelector('h2').innerText = mealName;
        document.querySelector('h3').innerText = directions;
        document.querySelector('img').src = mealPic;
        document.querySelector('#ytVideo').src = video;
        console.log(data)
    })
    .catch(err => {
        console.log(`err ${err}`)
    })
}

