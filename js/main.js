document.querySelector('button').addEventListener('click', weatherApp)


function weatherApp() {

let location = document.querySelector('input').value    
// let apiKey = "d378d571a8782ce4c09bd37fac163ff9"
let url = "https://api.openweathermap.org/data/2.5/weather?q="+location +"&units=imperial" +"&appid=d378d571a8782ce4c09bd37fac163ff9"


fetch(url) 
    .then(res => res.json())
    .then(data => {
        console.log(data)

        // document.querySelector('h2').innerText = data.main.temp
        
        //check temperature
        document.querySelector('#tempCheck').innerHTML = Math.round(data.main.temp) + " F"

        // check feels like
        document.querySelector('#feelsLike').innerHTML = Math.round(data.main.feels_like) + " F"

        // check humidity 
        document.querySelector('#humidity').innerHTML = data.main.humidity + " %"

        // check wind
        document.querySelector('#windSpeed').innerText = data.wind.speed + " MPH"

        // check description
        document.querySelector('#weatherDescription').innerHTML = data.weather[0].description.toUpperCase()

        // print weather pic
        const weatherPic = data.weather[0].icon
        document.querySelector('img').src = "http://openweathermap.org/img/wn/"+weatherPic +"@2x.png"


    })

    .catch(err => {
        console.log(`error ${err}`)
    })

}






