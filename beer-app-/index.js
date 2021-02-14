const buttonSearch = document.getElementById('buttonSearch');
const textSearch = document.getElementById('food');
const resultArea = document.getElementById('result');
let resultString = "";

buttonSearch.onclick = function() {
    var searchTerm = textSearch.value;

    const url = `https://api.punkapi.com/v2/beers?food=${searchTerm}`;
    console.log(url);

    if (!('fetch' in window)) {
        console.log('Fetch API not found, try including the polyfill');
        return;
      }
      
    //Proceeding to fetch 
    fetch(url)
    .then(function(data) {
        return data.json();
    })
    .then(function(jsonObject) {
        console.log(jsonObject);
        for(beer in jsonObject) {
            const beerInfo = new Array(jsonObject[beer].name, jsonObject[beer].tagline,jsonObject[beer].description,
            jsonObject[beer].image_url)
            beerOut(beerInfo);
        }
        resultArea.innerHTML = resultString;
    })
    .catch(function(error) {
        console.log('Looks like there was a problem: \n', error);
    });
}

function beerOut(beer) {
    console.log(beer)
    resultString += `<div class="beer">
        <div class="beerImage"><img src="${beer[3]}"/><div>
        <div class="beerText">
            <h2>${beer[0]}</h2>
            <h3>${beer[1]}</h3>
            <p><em>${beer[2]}</em></p>
            </div><!--beerText-->
            </div><!--beer-->`;
}