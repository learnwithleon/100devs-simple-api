//The user will click the button and get a random cat fact.

document.querySelector('button').addEventListener('click', getFact);


function getFact() {

const url = "https://cat-fact.herokuapp.com/facts"

fetch(url)
    .then(res=> res.json())
    .then(data=> {
        let random = function() {
            let num = Math.random()
            let tenNumRound = Math.round(num*10);
            if (tenNumRound < 4) {
            return tenNumRound;
        }   else {
            return 0
        }
        } 

        let catFact = data[random()].text;
        document.querySelector('h3').innerText = catFact
    })
    
    .catch(err=> {
        console.log(`error ${err}`)
    })
}
