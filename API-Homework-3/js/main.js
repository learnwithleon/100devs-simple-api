document.querySelector('button').addEventListener('click', getPoke)


function getPoke(){
    let random = Math.floor(Math.random() * 151)

fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=151')
    .then(res => res.json())
    .then( data => {
        document.querySelector('h1').textContent = data.results[random].name
        document.querySelector('h2').textContent = data.results[random].url

        console.log(data.results[random])
    })

}