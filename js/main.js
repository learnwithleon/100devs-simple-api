document.querySelector('button').addEventListener('click', getWord)

function getWord(){
  const word = document.querySelector('input').value
  const url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'+word+'?key=49808cc0-5b82-45fc-9e37-443cad7796a1'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const definition = data[0].shortdef
        document.querySelector('p').innerHTML = definition
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
