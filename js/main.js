// API Documentation https://www.weatherapi.com/docs/#intro-location

document.querySelector('button').addEventListener('click', getFetch)

function getFetch () {
  const userInputLocation = (document.querySelector('#location').value).split(' ').join('%20')
  const url = `http://api.weatherapi.com/v1/forecast.json?key=a30cda865ab84907ab2211524210702&q=${userInputLocation}&days=3`
  fetch(url)
    .then (res => res.json())
    .then (data => {
      // data for current time
      document.querySelector('#today').innerText = `${data.location.localtime}`
      document.querySelector('#imgtoday').src = `https:${data.current.condition.icon}`
      document.querySelector('#condition').innerText = data.current.condition.text
      document.querySelector('#temp').innerText = `Temperature: ${data.current.temp_c}C - ${data.current.temp_f}F`
      document.querySelector('#uv').innerText = `UV Index: ${data.current.uv}`
      document.querySelector('#wind').innerText = `Wind: ${data.current.wind_kph}kph - ${data.current.wind_mph}mph`
      document.querySelector('#sunrise').innerText = `Sunrise: ${data.forecast.forecastday[0].astro.sunrise}`
      document.querySelector('#sunset').innerText = `Sunset: ${data.forecast.forecastday[0].astro.sunset}`

      // data for tomorrow
      document.querySelector('#date1').innerText = `${data.forecast.forecastday[1].date}`
      document.querySelector('#imgDate1').src = `https:${data.forecast.forecastday[1].day.condition.icon}`
      document.querySelector('#conditionDate1').innerText = data.forecast.forecastday[1].day.condition.text
      document.querySelector('#maxTempDate1').innerText = `Max Temperature: ${data.forecast.forecastday[1].day.maxtemp_c}C - ${data.forecast.forecastday[1].day.maxtemp_f}F`
      document.querySelector('#minTempDate1').innerText = `Min Temperature: ${data.forecast.forecastday[1].day.mintemp_c}C - ${data.forecast.forecastday[1].day.mintemp_f}F`
      document.querySelector('#uvDate1').innerText = `UV Index: ${data.forecast.forecastday[1].day.uv}`
      document.querySelector('#windDate1').innerText = `Max wind: ${data.forecast.forecastday[1].day.maxwind_kph}kph - ${data.forecast.forecastday[1].day.maxwind_kph}mph`
      document.querySelector('#sunriseDate1').innerText = `Sunrise: ${data.forecast.forecastday[1].astro.sunrise}`
      document.querySelector('#sunsetDate1').innerText = `Sunset: ${data.forecast.forecastday[1].astro.sunset}`
      
      // data for the day after tomorrow
      document.querySelector('#date2').innerText = `${data.forecast.forecastday[2].date}`
      document.querySelector('#imgDate2').src = `https:${data.forecast.forecastday[2].day.condition.icon}`
      document.querySelector('#conditionDate2').innerText = data.forecast.forecastday[2].day.condition.text
      document.querySelector('#maxTempDate2').innerText = `Max Temperature: ${data.forecast.forecastday[2].day.maxtemp_c}C - ${data.forecast.forecastday[2].day.maxtemp_f}F`
      document.querySelector('#minTempDate2').innerText = `Min Temperature: ${data.forecast.forecastday[2].day.mintemp_c}C - ${data.forecast.forecastday[2].day.mintemp_f}F`
      document.querySelector('#uvDate2').innerText = `UV Index: ${data.forecast.forecastday[2].day.uv}`
      document.querySelector('#windDate2').innerText = `Max wind: ${data.forecast.forecastday[2].day.maxwind_kph}kph - ${data.forecast.forecastday[2].day.maxwind_kph}mph`
      document.querySelector('#sunriseDate2').innerText = `Sunrise: ${data.forecast.forecastday[2].astro.sunrise}`
      document.querySelector('#sunsetDate2').innerText = `Sunset: ${data.forecast.forecastday[2].astro.sunset}`
    })
    .catch (err => console.log(err))
}