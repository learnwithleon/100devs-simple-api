document.querySelector('button').addEventListener('click', findBrewery)

function findBrewery(){
  let city = document.querySelector('input').value
  fetch("https://api.openbrewerydb.org/breweries")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector('ul').innerHTML = ''
      data.forEach(data => {
        if(city.toLowerCase() == data.city.toLowerCase()){
          document.querySelector('ul').innerHTML += `<li>${data.name}, located in ${data.city}: <a href='${data.website_url}'>${data.website_url}</a></li> `
        }
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

  
