// Selects the js-new-quote class to generate a new quote

const newQuoteButton = document.querySelector('#js-new-quote')
const personalQuoteButton = document.querySelector('#js-personal-quote')

newQuoteButton.addEventListener('click', getQuote);
personalQuoteButton.addEventListener('click', getPersonal);

function getQuote() {
  const url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.message
    })
    .catch(err => {
      console.log(`error ${err}`)
    });

}

function getPersonal() {
  const choice = document.querySelector('input').value
  const url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=' + choice

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector('h2').innerText = data.message
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
