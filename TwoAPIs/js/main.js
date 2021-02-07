let button = document.querySelector('button')
let image = document.querySelector('img')
let recipe = document.querySelector('a')
let mealName = document.querySelector('h2')
let bookDetails = document.querySelector('.book')
let bookLink = document.querySelector('.bookLink')
let p = document.querySelector('p')

button.addEventListener('click', ()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            let meal = data.meals[0]
            image.src = meal.strMealThumb
            mealName.innerText = meal.strMeal
            recipe.classList.remove('hidden')
            recipe.href = meal.strSource
            let region = meal.strArea
            console.log(region)


            fetch(`https://reststop.randomhouse.com/resources/works/?start=0&max=3&expandLevel=1&search=${region}`)
                .then(res => res.text())
                .then(data =>{
                    console.log(data)
                    let isbn = data.split('<isbn formatcode="TR">').pop().split('</isbn>')[0]
                    console.log(isbn)
                    fetch(`https://openlibrary.org/isbn/${isbn}.json`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            p.classList.remove('hidden')
                            bookDetails.innerText = `${data.title} ${data.subtitle}`
                            if(data.url){
                                bookLink.classList.remove('hidden')
                                bookLink.href = data.url
                            } else if(data.isbn_10) {
                                bookLink.classList.remove('hidden')
                                bookLink.href = `https://www.amazon.com/s?k=${data.isbn_10}&ref=nb_sb_noss_1`
                            }
                        })
                        .catch(err => {
                            console.log(`error ${err}`)
                        })
                })
                .catch(err =>{
                    console.log(`error ${err}`)
                })
        })
        .catch(err =>{
            console.log(`error ${err}`)
        })
})

// https://www.amazon.com/s?k=1101989181&ref=nb_sb_noss_1