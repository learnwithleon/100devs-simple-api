//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', nasa)

function nasa(){
  let input = document.querySelector('input').value
  let url = "https://api.nasa.gov/planetary/apod?api_key=Y4DFJvJxflvv0dvpR8g0tYcMlRCdGTessPdbgHnK&date="+input
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    
      if(data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl
      }else if(data.media_type === 'video'){
        document.querySelector('iframe').src = data.url
      }
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
