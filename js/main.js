
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://rickandmortyapi.com/api/character'

    let rndNum = Math.floor(Math.random() * 19 + 1)
    console.log(rndNum);


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data.results[rndNum].image)
        document.querySelector('#name').innerText = data.results[rndNum].name
        document.querySelector('#characterImg').src = data.results[rndNum].image


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
getFetch()
