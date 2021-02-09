
document.querySelector('#fetch').addEventListener('click', getFetch)
document.querySelector('#identify').addEventListener('click', getIdentify)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://api.jikan.moe/v3/anime/'+choice+'/pictures'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.pictures[0].small
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getIdentify() {
  const img = document.querySelector("img"); // select image from DOM
  const url = 'https://trace.moe/api/search?url='+img.src;

  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    })
}
