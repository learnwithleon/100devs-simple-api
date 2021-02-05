document.querySelector('#shuffle').addEventListener('click', shuffleCard);
document.querySelector('#throw').addEventListener('click', runGame);
document.querySelector('#inst').addEventListener('click', showInst);

const cardPowers=["ACE","2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING"];
const suitPowers=["DIAMONDS", "HEARTS", "CLUBS", "SPADES"];
const userCard=document.querySelector('#userCard');
const compCard=document.querySelector('#compCard');
const winMessage=document.querySelector('#insertWin');

let deckID;

function showInst(){
  alert("1. SHUFFLE CARDS\n2. THROW A CARD. THE CARD'S POWER IS DETERMINED BY ITS NUMERICAL VALUE MULTIPLIED BY THE POWER OF ITS SUIT (IN THE ORDER OF DIAMONDS, HEARTS, CLUBS AND SPADES). THE CARD WITH HIGHEST POWER WINS.\n3. THROW YOUR CARD AGAIN. OR SHUFFLE IF YOU WISH.");
}

function shuffleCard(){
	fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      deckID=data.deck_id;
      console.log(deckID);
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function runGame(){
	if(!deckID) alert("You must first shuffle the cards to play.");
	else{
	fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      userCard.classList.remove("hidden");
      compCard.classList.remove("hidden");
      document.querySelector('#urCardLabel').classList.remove("hidden");
      document.querySelector('#compCardLabel').classList.remove("hidden");
      userCard.src=data.cards[0].image;
      compCard.src=data.cards[1].image;
      checkWin({v:data.cards[0].value, s:data.cards[0].suit}, {v:data.cards[1].value, s:data.cards[1].suit});
  })
    .catch(err => {
        console.log(`error ${err}`)
    });}
}

function checkWin(uCard, cCard){
	let userScore=(cardPowers.indexOf(uCard.v)+1)*(suitPowers.indexOf(uCard.s)+1);
	let compScore=(cardPowers.indexOf(cCard.v)+1)*(suitPowers.indexOf(cCard.s)+1);
	if(userScore>compScore){
		winMessage.innerText=`You have won with a score of ${userScore} to the comp's score of ${compScore}! Shuffle if you want to and throw again to play again.`;
	}
	else if(userScore<compScore){
		winMessage.innerText=`The computer has won with a score of ${compScore} to your score of ${userScore}! Shuffle if you want to and throw again to play again.`;
	}
	else{
		winMessage.innerText=`It's a draw. Both cards have the same power. Shuffle if you want to and throw again to play again.`
	}
}