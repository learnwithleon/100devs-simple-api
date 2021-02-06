//search button
const getPoke = document.getElementById("getPoke");
//input
const input = document.getElementById("input");
//image box
const box = document.getElementById("box");
//pokemon sprite
const pokeImage = document.getElementById("pokeImage");
//loading text
const loading = document.getElementById("loading")
//pokeMon info
const namey = document.getElementById('name')
const theID = document.getElementById('theID')
const type = document.getElementById('type')
const weight = document.getElementById('weight')
const description = document.getElementById('description')

//eventlisteners
getPoke.addEventListener("click", funkyTown);
input.addEventListener('keyup', funkyTownCaller)

//function for key press
function funkyTownCaller(e){
  
  if(e.keyCode === 13){
    funkyTown()
  }
}
//rendering function
function funkyTown() {
  //won't work if input is empty
  if(input.value.length > 0){
    loadingString(loading)
  box.style.background = 'white'
  let mama;
  Array.from(document.querySelectorAll('span')).forEach(e => e.innerText = '')
  //get pokedata from api
  postData(`https://pokeapi.co/api/v2/pokemon/${input.value}`).then((data) => {
    //set variable to the data
    mama = data;  
    console.log(mama.species.url)
    //display sprite
    pokeImage.setAttribute("src", mama.sprites.front_default);
    //set info to poke info
    namey.innerText = `Name : ${mama.name}`
    theID.innerText = `ID : #${mama.id}`
    type.innerText = `Type : ${mama.types.map((x)=> x.type.name).join(', ')}`
    weight.innerText = `Weight : ${mama.weight}lbs`
    //fetch description data
    postData(mama.species.url).then(data => description.innerText = `\n${String(data.flavor_text_entries[10].flavor_text)}`)
    //fetch background image using pokemon id number
    postPlainData(`https://picsum.photos/id/${Math.floor(Math.random() *mama.id + 20)}/400/400`).then((data) => {
      //set background image
      box.style.backgroundImage = `url(${data.url})`;
      box.style.backgroundPosition = 'bottom';
      
    });
  });
  
  loading.style.opacity = '1'
  pokeImage.style.opacity = '0'
  }
}
//async function for json
async function postData(url) {
  const response = await fetch(url);

  return response.json();
}
//async function for plain text
async function postPlainData(url) {
  const response = await fetch(url);
  loading.style.opacity = '0'
  setTimeout(() => {
    ghosty(pokeImage);
  }, 500);
  
  return response;
}
//opacity animation
function ghosty(e) {
    let nuthin = 0
  
let johnny = setInterval(() => {
      e.style.opacity = nuthin;
      nuthin += 0.1
      if(nuthin > 1){
          clearInterval(johnny)
      }
  }, 100);
}
//loading 'animation'
function loadingString(str){
  let county = 1
  str.innerText = 'loading'
  let loadIt = setInterval(() => {
    if(county % 3 !== 0){
      str.innerText += '.'
    }else{
      str.innerText = 'loading'
    }
    county++

    if(county > 12){
      clearInterval(loadIt)
    }
  }, 500);
  
}