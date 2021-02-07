//this is one cool guy
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
const url = "http://api.icndb.com/jokes/random"
randomImg()

function randomImg(){
  let random = Math.random()
  console.log(random)
  if(random < .33){
    document.querySelector('img').src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fperspectivesofpublicdiplomacy.files.wordpress.com%2F2012%2F06%2Fpokemon-chuck-norris-funny-pics-500x437.jpg&f=1&nofb=1"
  }else if(random < .66){
    document.querySelector('img').src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.westernjournal.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fchuck-norris.jpg&f=1&nofb=1"
  }else{
    document.querySelector('img').src = "http://cigarmonkeys.com/wp-content/uploads/2020/03/chuck-norris-cigar-smoke-celebrity-cigarmonkeys-7.jpg"
  }
}
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
		console.log(data)
    console.log(data.value.joke)
    
    document.querySelector('h3').innerHTML = data.value.joke

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
 }