//Generate a user using an api
//get their gender as a variable
//use that gender variable as a way to generate a user image according to their gender
//display their name in the dom
//display their generated user image in the dom
// document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('button').addEventListener('click', getFetch)

let gender = ""

function getFetch(){
  const url = 'https://randomuser.me/api/?inc=gender,name,nat'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.results[0])
        console.log(`${data.results[0].name.first} ${data.results[0].name.last}`)
        gender = data.results[0].gender
        document.querySelector('#username').innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`
        console.log(gender)

        fetchFace()
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      
}

function fetchFace(){
  const faceUrl = `https://api.generated.photos/api/v1/faces?api_key=dsc4mAYAbEHHsd8-WK1u2g&per_page=1&gender=${gender}&order_by=random`

  fetch(faceUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.faces[0])
        console.log(data.faces[0].urls[4])
        console.log(data.faces[0].urls[4]["512"])
        document.querySelector('img').src = data.faces[0].urls[4]["512"]
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      
}