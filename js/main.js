
document.querySelector('button').addEventListener('click', getQuotes)

function getQuotes(){
//   const inputVal = document.querySelector('input').value
  const url = 'https://api.quotable.io/random';

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
      document.getElementById("quoteText").innerHTML = data.content; 
      document.querySelector(".quoteAuthor").innerHTML = "- " + data.author;
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
}



