document.querySelector('h2').addEventListener('click', joke)

function joke(){
  fetch("https://v2.jokeapi.dev/joke/Programming")
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('h3').innerText = ''
    if(data.joke){
      document.querySelector('h3').innerText = data.joke
    }else{
      document.querySelector('h3').innerText = `${data.setup}  ${data.delivery}`
    }
    
  })
  .catch(err => {
      console.log(`error ${err}`)
  })
}
 