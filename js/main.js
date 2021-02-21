

document.querySelector('#q').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = data[0].quote
        document.querySelector('h3').innerText = data[0].author
    
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

