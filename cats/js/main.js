document.querySelector('#getCats').addEventListener('click', catsAllDay)

function catsAllDay() {
  let apiFacts = fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4");
  let apiCatPics = fetch("https://api.thecatapi.com/v1/images/search");

  Promise.all([apiFacts, apiCatPics])
  .then(data => {
    return Promise.all(data.map(res => res.json()))
  }).then(([dataFacts, dataCatPics]) => {
    document.querySelector("#catPics").src = dataCatPics[0]['url'];
    document.querySelector("#catFactsOne").innerText = dataFacts[0].text;
    document.querySelector("#catFactsTwo").innerText = dataFacts[1].text;
    document.querySelector("#catFactsThree").innerText = dataFacts[2].text;
    document.querySelector("#catFactsFour").innerText = dataFacts[3].text;
    console.log(dataCatPics[0]['url'])
  })
}