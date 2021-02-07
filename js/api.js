document.querySelector('button').addEventListener('click', getPicture);

function getPicture() {
  // let inputVal = document.querySelector('input').value
  const url = "https://www.dnd5eapi.co/api/monsters/adult-black-dragon"
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      document.querySelector('h2').innerText = data.alignment
      document.querySelector('#walk').innerText = `The walking distance is ${data.speed.walk}`
      document.querySelector('#swim').innerText = `The swimming distance is  ${data.speed.swim}`
      document.querySelector('#fly').innerText = `The flying distance is ${data.speed.fly}`

       document.querySelector('body').style.backgroundImage = "url(https://iili.io/fIaUPI.jpg)"


    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
// fetch("https://cat.ceo/api/breeds/image/random")
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data.message)
//       document.querySelector('img').src = data.message
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
