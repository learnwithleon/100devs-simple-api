const button = document.querySelector('.deliveryBtn')
const del = document.querySelector('.delivery')
const setup = document.querySelector('.setup')

button.addEventListener('click', toggler)
document.querySelector('.button').addEventListener('click', getJoke);

function getJoke() {
    fetch(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            del.classList.add('hide')
            setup.innerText = data.setup
            del.innerText = data.delivery
            button.classList.remove('hide')
        })
        .catch(err => {
            console.log(`error`)
        });
}

function toggler(){
    del.classList.remove('hide')
}