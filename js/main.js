// Weather API (openweather.org)

document.querySelector('#checkRecent').addEventListener('click', getFetch);
document.querySelector('#clear').addEventListener('click', clear);

function getFetch(){
  let choice = document.querySelector('input').value

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&units=imperial&appid=1638e09ceeb9d3546d4469226c99a664`;
  
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)

    let loc = data.name
    let currentTemp = `${data.main.temp}°F`;
    let feelsLike = `Feels Like: ${data.main.feels_like}°F`
    let maxTemp = `Max: ${data.main.temp_max}°F`;
    let minTemp = `Min: ${data.main.temp_min}°F`;
    let weatherCondition = data.weather[0].main; 

    document.querySelector('h2').innerText = loc;
    document.querySelector('h3').innerText = currentTemp;
    document.querySelector('#condition').innerHTML = weatherCondition;

    if(weatherCondition === 'Clear'){
      document.querySelector('#display').style.backgroundImage = 'linear-gradient(to bottom, #1e528e 0%,#728a7c 50%,#e9ce5d 100%)';
    }
    if(weatherCondition === 'Rain') {
      document.querySelector('#display').style.backgroundImage = "url('img/rain.gif')";
      document.querySelector('#display').style.color = 'white';
    }
    if(weatherCondition === 'Mist') {
      document.querySelector('#display').style.backgroundColor = 'grey';
    }
    if(weatherCondition === 'Clouds') {
      document.querySelector('#display').style.backgroundImage = "url('img/clouds.gif')";
    }

    document.querySelector('#feel').innerText = feelsLike;

    document.querySelector('#max').innerText = maxTemp;
    document.querySelector('#min').innerText = minTemp; 

  })
  .catch(err => {
    console.log(`error ${err}`)
  });
}

function clear(){
  document.querySelector('form').reset()
  document.querySelector('#display').style.backgroundImage = 'linear-gradient(to bottom, #163C52 0%,#4F4F47 30%,#C5752D 60%,#B7490F 80%, #2F1107 100%)';
  document.querySelector('h2').innerText = '';
  document.querySelector('h3').innerText = '';
  document.querySelector('#condition').innerText = '';
  document.querySelector('#feel').innerText = '';
  document.querySelector('#max').innerText = '';
  document.querySelector('#min').innerText = '';
}

