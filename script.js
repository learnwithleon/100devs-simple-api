document.querySelector("button").addEventListener('click', getUser);

function getUser() {
  const url1 = "https://api.quotable.io/random"
  const url2 = "https://www.googleapis.com/books/v1/volumes?q="

  fetch(url1)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.getElementById("quote").innerText = '" ' + data.content + ' "'
      document.getElementById("author").innerText = '- ' + data.author

      fetch(url2+data.author)
        .then(res => res.json())
        .then(data => {
          document.getElementById("bookTitle").innerText = data.items[0].volumeInfo.title
          document.querySelector("img").src = data.items[0].volumeInfo.imageLinks.thumbnail
          document.querySelector("img").alt = "book cover"
          document.querySelector("a").setAttribute("href",`${data.items[0].volumeInfo.infoLink}`);
        })
        .catch(err => {
          console.log(`error ${err}`);
        })
    })

    .catch(err => {
      console.log(`error ${err}`);
    })
}
