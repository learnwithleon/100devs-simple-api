
document.querySelector('#search').addEventListener('click', getFetch)
document.querySelector('#startOver').addEventListener('click', startOver)


function getFetch() {
  const choice = document.querySelector('input').value.split(' ').join('+')
  const url = 'https://www.googleapis.com/youtube/v3/search?q=' + choice + 'farts&key=AIzaSyDd4TjcI-KfHHvAcLLHeKaBmABWTOVzKBk&type=video&limit=15'

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      for (let i = 0; i < data.items.length; i++) {
        let results = document.querySelector('#iframes')
        let newVideo = document.createElement('iframe')
        newVideo.src = "https://www.youtube.com/embed/" + data.items[i].id.videoId
        results.appendChild(newVideo)
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function startOver() {
  let numIframes = document.querySelector('#iframes').childElementCount;
  for (let i = 0; i < numIframes; i++) {
    document.querySelector('iframe').remove()
  }
  document.querySelector('input').value = ""
}