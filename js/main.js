document.querySelector('#submitButton').addEventListener('click', getFetch)

function getFetch() {
    const pokemon = document.querySelector('#pokemonInput').value.toLowerCase()
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon
    let pokeStore = []
    let pokeImg = []
    

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data.name)


            // refreshes poketype for next pokemon
            
            // function refreshTypes() {
            //     if (ul = true){
            //         let ul = document.querySelector('ul')
            //         ul.remove()
            //     } else {
            //         return
            //     }
            // }

            // refreshTypes()

            // function createTypes(types, ul) {
            //     types.forEach(function (type) {
            //         let typeLi = document.createElement('li');
            //         typeLi.innerText = type['type']['name'];
            //         ul.append(typeLi)
            //     })
            // }

            // let pokeTypes = document.createElement('ul')
            // createTypes(data.types, pokeTypes)
            // let pokeTypeHeader = document.createElement('h3')
            // pokeTypeHeader.innerText = 'Type(s):'
            // pokeOutput.append(pokeTypeHeader, pokeTypes)

            let pokeOutput = document.querySelector('#output')
            let pokeInfo = document.querySelector('#poke-info')
            let frontGif = data.sprites.versions["generation-v"]["black-white"].animated.front_default
            let bg1 = data.sprites.other["official-artwork"].front_default
            let bg2 = data.sprites.versions["generation-i"]["red-blue"].front_default
            let bg3 = data.sprites.versions["generation-viii"].icons.front_default
            let bg4 = data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default
            let pokeName = data.name
            let pokeWeight = data.weight
            let pokeHeight = data.height
            let pokeId = data.id



            
    

            pokeImg.push(frontGif)
            pokeImg.push(bg1)
            pokeImg.push(bg2)
            pokeImg.push(bg3)
            pokeImg.push(bg4)

            document.querySelector('#poke-gif').src = pokeImg[0];
            // document.querySelector('#img-top-left').src = pokeImg[1]
            // document.querySelector('#img-top-right').src = pokeImg[2]
            // document.querySelector('#img-bottom-left').src = pokeImg[3]
            // document.querySelector('#img-bottom-right').src = pokeImg[4]
            document.querySelector('#poke-name').innerText = `${pokeName}`
            document.querySelector('#poke-id').innerText = `Pokémon #${pokeId}`
            document.querySelector('#poke-weight').innerText = `Weight: ${pokeWeight} hectograms`
            document.querySelector('#poke-height').innerText = `Height: ${pokeHeight} decimeters`
            // pokeOutput.style.border = 'solid rgb(197, 189, 178) 5px'
            // pokeOutput.style.width = '500px'
        })
        .catch(err => {
            console.log(`error ${err}`)     
        });   
}