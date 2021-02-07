//The user will enter a date. (YYYY-MM-DD)
//Use that date to get the NASA picture of the day
// from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', run)
window.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
     event.preventDefault();
     document.querySelector("button").click();
  }
});

document.querySelector('iframe').style.display = "none"
document.querySelector('img').style.display = "none"
document.querySelector('h2').style.display = "none"

function run(){
    let currentDate = document.querySelector('input').value
    const url = 'https://api.nasa.gov/planetary/apod?api_key=ZpxTE9cdmUqMPAL5xFf8GGvXkC3HZgRReA4r1Hlf&date='+currentDate

    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      
      if(data.media_type == "image"){
        document.querySelector('iframe').style.display = "none"
        document.querySelector('img').style.display = "inline"
        document.querySelector('img').src = data.url 
      }
      if(data.hasOwnProperty('hdurl')){
        if(data.hdurl.includes(".gif")){
          document.querySelector('iframe').style.display = "none"
          document.querySelector('img').style.display = "inline"
          document.querySelector('img').src = data.hdurl 
        }
      }
      if(data.media_type == "video"){
        document.querySelector('iframe').src  = data.url
        document.querySelector('img').style.display = "none"
        document.querySelector('iframe').style.display = "inline"
      }
      
      console.log(data.media_type)
      document.querySelector('h2').style.display = "inline"
      document.querySelector('.name').innerHTML = data.title
      document.querySelector('p').innerHTML = data.explanation 
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}