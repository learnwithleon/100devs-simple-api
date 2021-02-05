document.querySelector("#nameButton").addEventListener("click", searchInfoByName)
document.querySelector("#randomButton").addEventListener("click", lookForRandomCharacter)

const minCharacterID = 1 //inclusive
const maxCharacterID = 672 //exclusive
const nameDisplay = document.querySelector("#name")
const characterImage = document.querySelector("#characterImage")
const statusDisplay = document.querySelector("#status")
const specieDisplay = document.querySelector("#specie")
const genderDisplay = document.querySelector("#gender")
const originDisplay = document.querySelector("#origin")
const locationDisplay = document.querySelector("#location")


function searchInfoByName(){
    let name = document.querySelector("input").value
    let url = "https://rickandmortyapi.com/api/character/"+`?name=${name.toString()}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        nameDisplay.innerText = "Name: " + data.results[0].name
        characterImage.src = data.results[0].image
        statusDisplay.innerText = "Status: " + data.results[0].status
        specieDisplay.innerText = "Specie: " + data.results[0].species
        genderDisplay.innerText = "Gender: " + data.results[0].gender
        originDisplay.innerText = "Origin: " + data.results[0].origin.name
        locationDisplay.innerText = "Location: " + data.results[0].location.name
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

function lookForRandomCharacter(){
    let randomCharacterID = Math.floor(Math.random() * (maxCharacterID - minCharacterID) + minCharacterID)
    console.log(randomCharacterID)
    let url = "https://rickandmortyapi.com/api/character/"+`${randomCharacterID.toString()}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        nameDisplay.innerText = "Name: " + data.name
        characterImage.src = data.image
        statusDisplay.innerText = "Status: " + data.status
        specieDisplay.innerText = "Specie: " + data.species
        genderDisplay.innerText = "Gender: " + data.gender
        originDisplay.innerText = "Origin: " + data.origin.name
        locationDisplay.innerText = "Location: " + data.location.name
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}