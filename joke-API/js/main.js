

document.querySelector('button').addEventListener('click', getJoke);
let url = "https://v2.jokeapi.dev/joke/Any";

function getJoke() {
fetch(url)
    .then((res) => res.json())
    .then((data) => {
    console.log(data)
    if (!data.joke) {
        let setup = data.setup
        let delivery = data.delivery
        document.querySelector('h2').innerText = setup
        document.querySelector('h3').innerText = delivery
    } else if (!data.setup) {
        let joke = data.joke
        document.querySelector('h3').innerText = joke
    // } else {
    //     let delivery = data.delivery
    //     document.querySelector('h3').innerText = delivery
    //     }
    }
})
    .catch((err) => {
    console.log(`error ${err}`)
})
}






// // JokeAPI.getJokes().then(r => console.log(r.body))
// JokeAPI.getJokes({
//   jokeType: "single"
// })
//   .then((res) => res.json())
//   .then((data) => {
//     updateUI(data);
//   });

// // To update the joke on the UI
// function updateUI(jokeData) {
//   const $ = (id) => document.getElementById(id);

//   $("joke--text").innerHTML = jokeData.joke;
// }







