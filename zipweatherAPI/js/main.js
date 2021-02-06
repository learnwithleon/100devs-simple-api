//The user will enter a zipcode. Our program will plug that information into weather API and output the city information to the DOM
//API auth key = xb5wkf52e5vcw3dz
//API with auth key = https://www.zipwise.com/webservices/zipinfo.php?key=xb5wkf52e5vcw3dz&zip=00501&format=json
//API zip code input url = "https://www.zipwise.com/webservices/zipinfo.php?key=xb5wkf52e5vcw3dz&zip="+inputVal+"&format=json"

document.querySelector('button').addEventListener('click', getWeather);


function getWeather() {
const inputVal = document.querySelector('input').value;
const url = "https://www.zipwise.com/webservices/zipinfo.php?key=xb5wkf52e5vcw3dz&zip="+inputVal+"&format=json"

fetch(url)
    .then(res=> res.json())
    .then(data=> {
        console.log(data)
                                    let city = data.results.cities[0].city
                                    let state = data.results.state
                                    console.log(city)
                                    document.querySelector('h2').innerText = city + `, ${state}`;


    fetch(`http://api.weatherapi.com/v1/current.json?key=b31bdec4dfb54793b4a200715210502&q=${city}`)
        .then(res=> res.json())
        .then(data=> {
        console.log(data)
        let lastUpdated = data.current.last_updated
        let degreesC = data.current.temp_c
        let degreesF = data.current.temp_f
        document.querySelector('h3').innerText = `The current temperature as of ${lastUpdated} is ${degreesC} degrees C and ${degreesF} degrees F.` 
        })
    }
    )
    
    .catch(err=> {
        console.log(`error ${err}`)
    })
}







