document.querySelector('button').addEventListener('click', getZip)

function getZip(){
  const choice = document.querySelector('input').value
  const url = 'https://www.zipwise.com/webservices/zipinfo.php?key=f3vxxm47c846kgms&format=json&zip='+ choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        data.results.latitude
        data.results.longitude
        document.querySelector('p').innerText=data.results.population

          // input data of lat and long to the air quality url
        fetch(`http://api.airvisual.com/v2/nearest_city?lat=${data.results.latitude}&lon=${data.results.longitude}&key=694a268a-006f-418d-a7ab-00d44d342c35`)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
              console.log(data)
              document.querySelector('#airquality').innerText=data.data.current.pollution.aqius
              // console.log(data.data.current.pollution.aqius)
              document.querySelector('#temp').innerText=data.data.current.weather.tp + 'C'
              document.querySelector('#pressure').innerText=data.data.current.weather.pr +'hPa'
              document.querySelector('#humidity').innerText=data.data.current.weather.hu + '%'
              document.querySelector('#windspeed').innerText=data.data.current.weather.ws + 'm/s'

            })

      })
      .catch(err => {
        console.log(`error ${err}`)
      });
}
