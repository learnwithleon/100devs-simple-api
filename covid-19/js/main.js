document.querySelector('#getCovid').addEventListener('click', covidCheck)

function covidCheck() {
  let apiCovid = fetch("https://covid-api.mmediagroup.fr/v1/cases?country=US&status=Confirmed")

  Promise.all([apiCovid])
    .then((data) => {
      return Promise.all(data.map((res) => res.json()))
    })
    .then(([dataCovid]) => {
      document.querySelector('#confirmed').innerText = dataCovid.All.confirmed
      document.querySelector("#deaths").innerText = dataCovid.All.deaths;
      document.querySelector("#pop").innerText = dataCovid.All.population;
      document.querySelector("#life").innerText = dataCovid.All.life_expectancy;
      document.querySelector("#cap").innerText = dataCovid.All.capital_city;
    })
}

function covidCheck() {
  let covid = document.querySelector("input").value;
  let apiCovidTwo = "https://covid-api.mmediagroup.fr/v1/cases?country=US&status=Confirmed" +covid

  fetch(apiCovidTwo)
    .then((res) => res.json())
    .then((dataTwo) => {
      document.querySelector("#confirmedTwo").innerText = dataTwo.confirmed;
      document.querySelector("#deathsTwo").innerText = dataTwo.deaths;
      document.querySelector("#popTwo").innerText = dataTwo.population;
      console.log()
    })
}