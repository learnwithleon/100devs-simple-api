document.querySelector('#check').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://www.dnd5eapi.co/api/spells?level=' +choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let spellArray = data.results
        let printSpell = function(spell) {
            
            console.log(spell.index)
            document.querySelector('h3').innerText += spell.index + '\n'
        }
        spellArray.forEach(printSpell)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.querySelector('#clear').addEventListener('click', clear)

function clear() {
  document.querySelector('h3').innerText = ''
}