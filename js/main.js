//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', fetchUrl);

function fetchUrl(){
    let inputVal = document.querySelector('input').value;

    const url = 'https://www.amiiboapi.com/api/amiibo/?name='+ inputVal;
    
   fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        let firstImg = data.amiibo[0].image;
        let secondImg = data.amiibo[1].image;
        let gameSeries = data.amiibo[0].gameSeries;

        document.querySelector('#firstPic').src = firstImg
        document.querySelector('#secPic').src = secondImg;
        document.querySelector('h3').innerText = gameSeries;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });



};





