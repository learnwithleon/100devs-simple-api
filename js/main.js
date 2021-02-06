
const getWord = document.getElementById('search');
const getPokemon = document.getElementById('pokemon');
const pokemonImage = document.getElementById('pokemonImage')
const ima = document.getElementById('display')
const hide = document.querySelectorAll('.change')


// button listening
getWord.addEventListener('click',pokemon)

let search;     
function pokemon() {
     // hidin the game boy brand at the begining
     Array.from(hide).forEach(element=>element.classList.add('hidden'))
     // getting data from pokemon API
     pokeData(`https://pokeapi.co/api/v2/pokemon/${getPokemon.value}`) 
     .then(data => { 
          search = data, 
          pokemonImage.setAttribute('src' , data.sprites.front_default)

          // getting Data from second API using information coming from the pokemon API
          imgData(`https://picsum.photos/id/${search.order}/200/300`) 
          .then(data => { 
          search = data, 
          ima.style.backgroundImage = `url(${data.url})`
          console.log(search)
         
     })
    
     })
 
}
// Asyn the data waithing for one event to hapen first
async function pokeData(url) {
     const response = await fetch(url); 
     return response.json();
    }
     

 async function imgData(url) {
     const response = await fetch(url); 
     return response;
    }











