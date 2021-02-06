const key = 'a86428a34b826711ab5d2f191bb495a1d96cb5d3';

//note: callback should be in global scope

function getData(data) {

console.log(data);
document.querySelector('img').src = data.results[0].image.medium_url
document.querySelector('h2').innerText = data.results[0].name
document.querySelector('h3').innerHTML = data.results[0].description
let otherTitles = `${data.results[1].name} | ${data.results[2].name} | ${data.results[3].name}`
document.querySelector('h4').innerHTML = `Additional Series Titles: ${otherTitles}`
}

window.onload = runThis;

function runThis() {

const submit = document.getElementById('submit');

const search = document.getElementById('search');

submit.addEventListener('click', clickThis);

function clickThis() {

let ans = search.value;

const jsonpScript = document.createElement('script');

jsonpScript.src = `https://www.giantbomb.com/api/search/?api_key=${key}&format=jsonp&json_callback=getData&query=${ans}&resources=game`;

document.head.appendChild(jsonpScript);

}

}
