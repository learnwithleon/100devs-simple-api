//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let btn = document.querySelector('.btn').addEventListener('click', runInfo)


function runInfo() {
    let min = 1
    let max = 151
    let id = Math.round(Math.random() * (max - min)) + min
    const url1 = `https://pokeapi.co/api/v2/pokemon/${id}/`
    

    fetch(url1)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let pokeName = data.forms[0].name
        document.querySelector('h2').innerText = pokeName
        console.log(pokeName)
        const url2 = `https://api.giphy.com/v1/gifs/search?api_key=cLtMOb6MUnPNmmD6gjZaFzohncdc21tR&limit=1&q=${pokeName}`
         fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(content => {
          console.log(content)
      
          document.querySelector('img').src = content.data[0].images.downsized.url
          }
        )
        .catch(err => {
            console.log(`error ${err}`)
        });
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
