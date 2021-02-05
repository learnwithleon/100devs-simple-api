//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//Handle spaces within the search
//Handle mispellings
//a carousel of drinks

document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto(){
  const url = 'http://www.boredapi.com/api/activity/'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
            console.log(data);
            let activity = data.activity;
            document.querySelector('h2').innerText = activity;

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}