//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const zip = document.querySelector('input').value
  const url = 'https://api.openbrewerydb.org/breweries?by_postal='+zip

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#name').innerText = data[0].name
        document.querySelector('#streetAddress').innerText = data[0].street 
        document.querySelector('#cityLocated').innerText = data[0].city
        document.querySelector('#stateLocated').innerText = data[0].state  
        document.querySelector('#phoneNumber').innerText = data[0].phone
       if(data[0].website_url !== ""){
         document.querySelector('#siteUrl').href = data[0].website_url
         document.querySelector(".hidden").classList.toggle("hidden")

      }
        
      document.querySelector('#name2').innerText = data[1].name
      document.querySelector('#streetAddress2').innerText = data[1].street 
      document.querySelector('#cityLocated2').innerText = data[1].city
      document.querySelector('#stateLocated2').innerText = data[1].state  
      document.querySelector('#phoneNumber2').innerText = data[1].phone       
        console.log(data[1].website_url)
        if (data[1].website_url !== ""){
          document.querySelector('#siteUrl2').href = data[1].website_url
          document.querySelector('.hidden').classList.toggle('hidden')
        }

        document.querySelector('#name3').innerText = data[2].name
      document.querySelector('#streetAddress3').innerText = data[2].street 
      document.querySelector('#cityLocated3').innerText = data[2].city
      document.querySelector('#stateLocated3').innerText = data[2].state  
      document.querySelector('#phoneNumber3').innerText = data[2].phone      
      if (data[1].website_url !== ""){
        document.querySelector('#siteUrl3').href = data[1].website_url
        document.querySelector('.hidden').classList.toggle('hidden')
      }    
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}