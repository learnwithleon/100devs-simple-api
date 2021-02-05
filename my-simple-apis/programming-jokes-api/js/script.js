const button = document.querySelector('.deliveryBtn')

button.addEventListener('click', toggler)
document.querySelector('.button').addEventListener('click', getJoke);

function getJoke() {
    fetch(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.querySelector('.delivery').classList.add('hide')
            document.querySelector('.setup').innerText = data.setup
            document.querySelector('.delivery').innerText = data.delivery
            button.classList.remove('hide')
        })
        .catch(err => {
            console.log(`error`)
        });
}

function toggler(){
    document.querySelector('.delivery').classList.remove('hide')
}