// WEATHER APP
let weather = {
	weatherapiKey: "c9eb346b814af2d646c89bc9c8eef6b6",
	APIKEY: "K5WRWVW5QSPG",
	fetchWeather: function(city){
		fetch("https://api.openweathermap.org/data/2.5/weather?q="
			+city 
			+"&units=metric&appid="
			+this.weatherapiKey
		)
		.then(res=> res.json())
		.then(data=>{
		console.log(data)
		let latcord = data.coord.lat
		let lngcord = data.coord.lon
		this.displayWeather(data)

		fetch("https://api.timezonedb.com/v2.1/get-time-zone?key=K5WRWVW5QSPG&format=json&by=position"
			+"&lat="+latcord
			+"&lng="+lngcord)
		.then(res=> res.json())
		.then(data=>{
			console.log(data)
			document.querySelector(".localTime").innerText = "Local time is"+data.formatted.slice(10)
			
		})

			
			


		})
	},
	displayWeather: function(data){
		const { name } = data
		const { icon, description} = data.weather[0]
		const { temp, humidity} = data.main
		const { speed } = data.wind
		
	
		
		
		document.querySelector('.city').innerText = "Weather in" + " " +name
		document.querySelector('.icon').src = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
		document.querySelector('.temp').innerText = Math.round(temp) + "°C"
		document.querySelector('.description').innerText = description
		document.querySelector('.humidity').innerText = "Humidity" + " " +humidity + "%"
		document.querySelector('.wind').innerText = "Wind speed" + " " +speed +"km/h"
		document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" +name+"')"

		
	},


	search: function(){
		this.fetchWeather(document.querySelector(".searchbar").value)
	},




}

// search helpers
document.querySelector('.searchButton').addEventListener('click', function(){
	weather.search()
})


document.querySelector('.searchbar').addEventListener('keyup', function(event){
 	if(event.key == "Enter"){
 		weather.search()
 	}
})

weather.fetchWeather('coffs harbour')
