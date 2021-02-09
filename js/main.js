document.querySelector('button').addEventListener('click', getQuotes);

    function getQuotes(){
    document.querySelector("#characterBox").style.visibility = "visible";
    
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            let charPic = data[0].image;
            let charName = data[0].character;
            let charQuote = data[0].quote;

            document.querySelector('h2').innerText = charName; 
            document.querySelector('p').innerText = charQuote;
            document.querySelector('img').src = charPic;
          })
        .catch(err => {
         console.log(`error ${err}`)
        });
    }