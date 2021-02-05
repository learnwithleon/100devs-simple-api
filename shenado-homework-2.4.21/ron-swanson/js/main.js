//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let btn = document.querySelector('.btn').addEventListener('click', runInfo)

function runInfo() {
    const url = `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        document.querySelector('h2').innerText = `"${data}"`

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}