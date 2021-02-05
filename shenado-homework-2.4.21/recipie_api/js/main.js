//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let btn = document.querySelector('.btn').addEventListener('click', runInfo)


function runInfo() {
    let food = document.querySelector('input').value
    const url = `http://www.recipepuppy.com/api/?q=${food}`
    console.log(food)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let min = 1
        let max = 9
        let num = Math.round(Math.random() * (max - min)) + min
        let foodName = data.results[num].title
        let foodImg = data.results[num].thumbnail
        let foodIng = data.results[num].ingredients
        let foodRec = data.results[num].href

        document.querySelector('h2').innerText = foodName
        document.querySelector('img').src = foodImg
        document.querySelector('h3').innerText = foodIng
        document.querySelector('h4').innerHTML = `<a href =${foodRec}>Recipe Here!</a>`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}