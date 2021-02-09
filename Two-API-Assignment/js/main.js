//Get a dog photo from the dog.ceo api and place the photo in the DOM

document.querySelector('button').addEventListener('click', getPhotos)


function getPhotos(){
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        let dogPic = data.message
        document.getElementById('dogPhoto').src = dogPic
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

    let pickRandom = Math.floor(Math.random() * 891)
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${pickRandom}/`)
        .then(res => res.json())
        .then(data => {
            const pokemonPhoto = data.sprites.front_shiny
            const pokemonName = `This Pokemon's name is ${data.name}!`
            document.getElementById('pokemonPic').src = pokemonPhoto
            document.querySelector('h3').innerText = pokemonName
            console.log(data.sprites.front_shiny)
        })
        .catch(err => {
            console.log(`err ${err}`)
        })
}