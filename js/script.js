document.querySelector("button").addEventListener("click", getFetch);

const API_KEY = `ef26d5c233a5be000ce31cebd2e93c6d`;

function getFetch() {
  let cityName = document.querySelector("input").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherIcon = data.weather[0].icon;
      document.querySelector(
        ".img1"
      ).src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      document.querySelector(
        ".img2"
      ).src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      document.querySelector(".temp__now").innerText = data.main.temp;
      document.querySelector(".temp__feels").innerText = data.main.feels_like;

      document.querySelector(".forecast__conditions").style.display = "flex";
      document.querySelector(".forecast__input").style.display = "none";
      document.querySelector(".forecast__footer").style.display = "none";
    })
    .catch((err) => `error ${err}`);
}

function geoFindMe() {
  function sucess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const geoURL = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    fetch(geoURL)
      .then((res) => res.json())
      .then((data) => {
        const weatherIcon = data.weather[0].icon;
        document.querySelector(
          ".img1"
        ).src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        document.querySelector(
          ".img2"
        ).src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        document.querySelector(".temp__now").innerText = data.main.temp;
        document.querySelector(".temp__feels").innerText = data.main.feels_like;

        document.querySelector(".forecast__conditions").style.display = "flex";
        document.querySelector(".forecast__input").style.display = "none";
        document.querySelector(".forecast__footer").style.display = "none";
      })
      .catch((err) => `error ${err}`);
  }

  function error() {
    status.textContent = `Unable to retrieve your location`;
  }

  navigator.geolocation.getCurrentPosition(sucess, error);
}

geoFindMe();
