
let deckId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json())
      .then(data => {
        deckId = data.deck_id
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let val1 = cardValue(data.cards[0].value)
      let val2 = cardValue(data.cards[1].value)
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player2').src = data.cards[1].image
      if(val1 > val2){
        document.querySelector('h3').innerText= 'PLAYER 1 WINS'
      }else if(val1 < val2){
        document.querySelector('h3').innerText= 'PLAYER 2 WINS'
      }else{
        document.querySelector('h3').innerText= 'DRAW'
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function cardValue(val){
  if(val === 'ACE'){
    return 14
  }else if(val === 'KING'){
    return 13
  }else if(val === 'QUEEN'){
    return 12
  }else if(val === 'JACK'){
    return 11
  }else if(val === '10'){
    return 10
  }else if(val === '9'){
    return 9
  }else if(val === '8'){
    return 8
  }else if(val === '7'){
    return 7
  }else if(val === '6'){
    return 6
  }else if(val === '5'){
    return 5
  }else if(val === '4'){
    return 4
  }else if(val === '3'){
    return 3
  }else{
    return 2
  }
}
