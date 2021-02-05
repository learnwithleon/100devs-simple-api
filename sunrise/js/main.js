document.querySelector("button").addEventListener("click", getData)

function getData() {
    fetch("https://geo.ipify.org/api/v1?apiKey=at_UXoQXSYWE0DxCvtlcVYKIpTzoTWOT")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let geoLat = data.location.lat;
            let geoLng = data.location.lng;
            getSun(geoLat, geoLng)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function getSun(geoLat, geoLng) {
    fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today")
    .then(res => res.json())
    .then(data => {
            console.log(data)
            console.log(geoLat + " " + geoLng);
            document.querySelector(".coors1").innerText = geoLat.toFixed(2);
            document.querySelector(".coors2").innerText = geoLng.toFixed(2);
            document.querySelector(".sunrise").innerText = data.results.sunrise;
            document.querySelector(".sunset").innerText = data.results.sunset;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
