
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  

  const choice = document.querySelector('button')
  const url = 'https://api.spacexdata.com/v4/launches'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
                
        let randomLaunch = Math.floor(Math.random() * (data.length))

        console.log(randomLaunch)
        
        document.querySelector('.launchDate').innerText=data[randomLaunch].date_local
        
        document.querySelector('.flightNumber').innerText=data[randomLaunch].flight_number
        
        document.querySelector('.missionPatch').src=data[randomLaunch].links.patch.small

        document.querySelector('.launchDetails').innerText=data[randomLaunch].details
        
        console.log(data[randomLaunch].links.webcast)

        document.querySelector('#webcast').src=data[randomLaunch].links.webcast.replace('watch?v=','embed/')

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      
}

