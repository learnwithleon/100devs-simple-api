const input = document.querySelector('input')

document.querySelector('button').addEventListener('click', getZip)

function getZip() {
    fetch(`http://api.zippopotam.us/us/${Number(input.value)}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)     
            getCharger(data.places[0].longitude, data.places[0].latitude)  
        })
        .catch(err => {
            console.log(`error: ${err}`)
        });
}



function getCharger(lon, lat) {
    fetch(`https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=10&longitude=${lon}&latitude=${lat}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = `${data[0].AddressInfo.Title}`
            document.querySelector('.add').innerText = `${data[0].AddressInfo.AddressLine1}`
            document.querySelector('a').innerText = `${data[0].AddressInfo.RelatedURL}`
            document.querySelector('a').href = `${data[0].AddressInfo.RelatedURL}`
        })
        .catch(err => {
            console.log(`error: ${err}`)
        });
}
