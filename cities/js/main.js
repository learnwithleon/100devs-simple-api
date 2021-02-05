//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


let cityInput = ''
let cityName = ''
let cityData

function getFetch(){
  const cityInput = document.querySelector('input').value
  const url = ' https://api.teleport.org/api/cities/?search='+cityInput
  let results = []
  let cityArray = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data._embedded['city:search-results'])
        data._embedded['city:search-results'].forEach(element => {
          results.push(element.matching_full_name)
        });
        console.log(results)

        for (let i = 0; i < results.length; i++) {
          cityArray.push(`<br><input type="radio" name="city" value="${results[i]}">  ${results[i]}</input>`)  
        }
        
        document.querySelector('#verify-city').innerHTML = 'Choose your city:'+cityArray+'<br><button id="city" type="button" name="city">Choose City</button>'
        document.querySelector('#city').addEventListener('click', getCity)       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });      
}

function getCity(){
  cityName = document.querySelector('input[name=city]:checked').value
  document.querySelector('#city-name').innerText = " " +cityName

  const city = document.querySelector('input').value
  const url = 'https://api.teleport.org/api/cities/?search='+city

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => { 
        cityData = data._embedded['city:search-results'].filter(item => item.matching_full_name === cityName)
        console.log(cityData[0]._links['city:item'].href)   
        cityLink = cityData[0]._links['city:item'].href
         

      fetch(cityLink)
        .then(res => res.json()) // parse response as JSON
        .then(data => { 
          console.table(data)
          console.table(data._links['city:timezone'].name)
         
          document.querySelector('#pop').innerText = "Population:  "+Number(data.population).toLocaleString('en')
          document.querySelector('#lat-lon').innerText = "Latitude:  "+data.location.latlon.latitude+",  Longitude:  "+data.location.latlon.longitude
          document.querySelector('#timezone').innerText = "Timezone:  "+replaceUnderscores(data._links['city:timezone'].name)
          
          // ////////
          // Attempting to get the API to return the time, but I don't think this API is equipped for this, following a rabbithole of URLs
          // let timezoneLink = data._links['city:timezone'].href 
          // fetch(timezoneLink)
          //   .then(res => res.json())
          //   .then(data =>{
          //     console.log(data.iana_name)
          //     document.querySelector('#timezone').innerText = "Timezone:  "+data.iana_name
          //   })
          })
        })

      .catch(err => {
          console.log(`error ${err}`)
      })

}

function replaceUnderscores(string){
  return string.replace("_", " ")
}