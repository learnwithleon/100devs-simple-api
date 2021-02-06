
const API_KEY = config.API_KEY;

let citiesList;
async function getCitiesList() {
    try {
        const results = await fetch('/city.list.json/city.list.json')
        citiesList = await results.json();
    }
    catch(e) {
        console.log(e);
    }
}

getCitiesList();

const cityName = document.querySelector('#name');
const weatherDescription = document.querySelector('#weather-description');
const currTemp = document.querySelector('#temp');
const feelsLike = document.querySelector('#feels-like');
const minTemp = document.querySelector('#min');
const maxTemp = document.querySelector('#max');
const humidity = document.querySelector('#humidity');
const todayHeading = document.querySelector('#today-heading');
const todayIcon = document.querySelector('#today-icon')
const forecastHeading = document.querySelector('#forecast-heading');
    
class WeatherData {
    constructor(name, weather, temps, humidity, unit, coords, forecast) {
        this.name = name;
        this.weather = weather;
        this.temps = temps;
        this.humidity = humidity;
        this.unit = unit;
        this.coords = coords;
        this.forecast = forecast;
    }

    displayWeather() {
        todayHeading.style.visibility = 'visible';
        todayIcon.src = `http://openweathermap.org/img/wn/${this.weather[0].icon}@2x.png`;
        cityName.innerHTML = this.name;
        weatherDescription.innerHTML = `${this.weather[0].description.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}`;
        this.displayWeatherTemps();
    }

    displayWeatherTemps() {
        currTemp.innerText = `Current Temperature: ${this.temps.temp}°${this.unit}`;
        feelsLike.innerText = `Feels Like: ${this.temps['feels_like']}°${this.unit}`;
        minTemp.innerText = `Low: ${this.temps['temp_min']}°${this.unit}`;
        maxTemp.innerText = `High: ${this.temps['temp_max']}°${this.unit}`;
        humidity.innerText = `Humidity: ${this.humidity}%`;
    }

    displayForecast() {
        forecastHeading.style.visibility = 'visible';
        const forecasts = document.querySelector('#forecasts');
        const forecastIcons = this.getForecastIcons();
        const forecastDescriptions = this.getForecastDescriptions();
        const forecastTemps = this.getForecastTemps();

        while (forecasts.firstChild) forecasts.removeChild(forecasts.firstChild);

        for (let i = 0; i < 7; i++) {
            const forecastDisplayBox = document.createElement('div');
            forecastDisplayBox.appendChild(forecastIcons[i]);
            forecastDisplayBox.appendChild(forecastDescriptions[i]);
            forecastDisplayBox.appendChild(forecastTemps[i]);
            forecastDisplayBox.classList.add('forecast-box')
            forecasts.appendChild(forecastDisplayBox);
        }
    }

    getForecastIcons() {
        const forecastIconsArr = [];
        for (let daily of this.forecast) {
            const forecastIcon = document.createElement('img');
            forecastIcon.src = `http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`;
            forecastIconsArr.push(forecastIcon);
        }
        return forecastIconsArr;
    }

    getForecastDescriptions() {
        const forecastDescriptionsArr = [];
        for (let daily of this.forecast) {
            let forecastDay;
            if (daily === this.forecast[0]) {
                forecastDay = 'Tomorrow';
            }
            else {
                const forecastDate = new Date(daily.dt * 1000);
                forecastDay = forecastDate.toString().split(' ')[0];
            }
            const forecastDescriptionsBox = document.createElement('div');
            const dayDisplay = document.createElement('h3');
            dayDisplay.innerText = forecastDay;
            forecastDescriptionsBox.appendChild(dayDisplay);

            const forecastDescription = document.createElement('span');
            forecastDescription.innerText = `${daily.weather[0].description.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}`;
            forecastDescriptionsBox.appendChild(forecastDescription);
            forecastDescriptionsBox.classList.add('forecast-descriptions-box')
            forecastDescriptionsArr.push(forecastDescriptionsBox);
        }
        return forecastDescriptionsArr;
    }

    getForecastTemps() {
        const forecastTempsArr = [];
        for (let daily of this.forecast) {
            const forecastDayTemps = document.createElement('p');

            forecastDayTemps.innerText = `Day: ${daily.temp.day}°${this.unit}\nMorning: ${daily.temp.morn}°${this.unit}\nEvening: ${daily.temp.eve}°${this.unit}\nNight: ${daily.temp.night}°${this.unit}\nLow: ${daily.temp.min}°${this.unit}\nHigh: ${daily.temp.max}°${this.unit}`;

            forecastDayTemps.classList.add('forecast-temps')
            forecastTempsArr.push(forecastDayTemps);
        }
        return forecastTempsArr;
    }

    updateForecastTemps() {
        const forecastTempsElements = document.getElementsByClassName('forecast-temps');
        while (forecastTempsElements.length > 0) {
            forecastTempsElements[0].parentNode.removeChild(forecastTempsElements[0]);
        }
        const forecastBoxElements = document.getElementsByClassName('forecast-box');
        const forecastTempsArr = [];
        for (let daily of this.forecast) {
            const forecastDayTemps = document.createElement('p');

            forecastDayTemps.innerText = `Day: ${daily.temp.day}°${this.unit}\nMorning: ${daily.temp.morn}°${this.unit}\nEvening: ${daily.temp.eve}°${this.unit}\nNight: ${daily.temp.night}°${this.unit}\nLow: ${daily.temp.min}°${this.unit}\nHigh: ${daily.temp.max}°${this.unit}`;

            forecastDayTemps.classList.add('forecast-temps')
            forecastTempsArr.push(forecastDayTemps);
        }

        for (let i = 0; i < 7; i++) {
            forecastBoxElements[i].appendChild(forecastTempsArr[i]);
        }
    }

    convertKtoF() {
        for (let key in this.temps) {
            this.temps[key] = Math.round((this.temps[key] - 273) * 1.8 + 32);
        }
        for (let daily of this.forecast) {
            for (let time in daily.temp) {
                daily.temp[time] = Math.round((daily.temp[time] - 273) * 1.8 + 32);
            }
        }
        this.unit = 'F';
    }

    convertCtoF() {
        if (this.unit === 'F') return;
        for (let key in this.temps) {
            this.temps[key] = Math.round(this.temps[key] * (9/5) + 32);
        }
        for (let daily of this.forecast) {
            for (let time in daily.temp) {
                daily.temp[time] = Math.round(daily.temp[time] * (9/5) + 32);
            }
        }
        this.unit = 'F';
        this.displayWeatherTemps();
        this.updateForecastTemps();
    }

    convertFtoC() {
        if (this.unit === 'C') return;
        for (let key in this.temps) {
            this.temps[key] = Math.round((this.temps[key] - 32) * (5/9));
        }
        for (let daily of this.forecast) {
            for (let time in daily.temp) {
                daily.temp[time] = Math.round((daily.temp[time] - 32) * (5/9));
            }
        }
        this.unit = 'C';
        this.displayWeatherTemps();
        this.updateForecastTemps();
    }
}

let weatherData;

document.querySelector('#getWeather').addEventListener('click', getWeather);
document.querySelector('#convert-to-c').addEventListener('click', () => weatherData.convertFtoC());
document.querySelector('#convert-to-f').addEventListener('click', () => weatherData.convertCtoF());
document.querySelector('#country').addEventListener('input', (e) => {
    if (e.target.value === 'US') {
        document.querySelector('#state').removeAttribute('disabled');
    }
    else {
        document.querySelector('#state').setAttribute('disabled', '');
        document.querySelector('#state').selectedIndex = 0;
    }
})

async function getWeather() {
    const cityInput = document.querySelector('input').value;
    if (!cityInput) return alert('Please enter a city.');

    const country = document.querySelector('#country').value;
    if (!country) return alert('Please select a country');

    const state = document.querySelector('#state').value;
    if (country === 'US' && !state) return alert('Please select a state');

    const city = cityInput.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    const cityID = getCityID(city, state, country);
    if (!cityID) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${API_KEY}`

    try {
        const results = await fetch(url);
        const data = await results.json();
        const forecast = await getForecast(data.coord);

        weatherData = new WeatherData(data.name, data.weather, data.main, data.main.humidity, 'K', data.coord, forecast);

        weatherData.convertKtoF();
        weatherData.displayWeather();
        weatherData.displayForecast();
    }
    catch(e) {
        console.log(e);
    }
}

function getCityID(cityName, state, country) {
    const cities = citiesList.filter(city => city.country === country && city.state === state && city.name === cityName);
    return cities.length ? cities[0].id : alert('Could not find city, please try again.');
}

async function getForecast(coords) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=current,minutely,hourly&appid=${API_KEY}`;

    try {
        const results = await fetch(url);
        const data = await results.json();

        return data.daily.slice(1);
    }
    catch(e) {
        console.log(e);    
    }
}



