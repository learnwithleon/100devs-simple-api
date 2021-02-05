let button = document.querySelector("button");
button.addEventListener("click", getQuote);

let breakingBadCharacters = [];
let random;
function getQuote() {
  const url = `https://www.breakingbadapi.com/api/quote/random`;
  random = Math.floor(Math.random() * 63);

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      document.querySelector("h2").innerText = data[0].quote;

      const url2 = `https://www.breakingbadapi.com/api/characters`;
      fetch(url2)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          breakingBadCharacters = data;
          document.querySelector(".content-img").src =
            breakingBadCharacters[random].img;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
