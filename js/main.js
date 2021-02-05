//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', randomDog)

function randomDog() {
fetch ('https://api.thedogapi.com/v1/images/search')
.then(res => res.json())
.then(data => {
  document.querySelector('img').src = data[0].url
  document.querySelector('h3').innerText = data[0].breeds[0].name
  document.querySelector('h4').innerText = data[0].breeds[0].temperament
  let title = data[0].breeds[0].name
  console.log(title)
  console.log(data[0])
  randomBook(title)
})
.catch(err => [
  console.log(`${err}`)
])

}

function randomBook (title) {
  
  fetch(`http://openlibrary.org/search.json?title=${title}`)
  .then(res => res.json())
  .then(data => {
    clear()
    document.querySelector('#bookOne').innerText = data.docs[0].title
    document.querySelector('#authOne').innerText = data.docs[0].author_name[0]
    document.querySelector('#bookTwo').innerText = data.docs[1].title
    document.querySelector('#authTwo').innerText = data.docs[1].author_name[0]
    document.querySelector('#bookThree').innerText = data.docs[2].title
    document.querySelector('#authThree').innerText = data.docs[2].author_name[0]
    document.querySelector('#bookFour').innerText = data.docs[3].title
    document.querySelector('#authFour').innerText = data.docs[3].author_name[0]
    console.log(data.docs)
  })
  .catch(err => {
    console.log(`The error is ${err}`)
  })
  document.querySelector('.hidden').classList.remove('hidden')
}

function clear() {
  let bookArr =document.querySelectorAll('.bookSection')
  bookArr.forEach( el => el.innerText = '' )
}