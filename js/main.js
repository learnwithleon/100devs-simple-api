const artistSelection = document.querySelector("#artistChoice");
const songSelection = document.querySelector("#songChoice");
const lyricsOut = document.querySelector("#lyricsOut");
let baseUrl = "https://api.lyrics.ovh/v1/";

document.querySelector("#submit").addEventListener("click", getDetails);

function getDetails() {
  const song = songSelection.value;
  const artist = artistSelection.value;
  console.log(artist, song);
  baseUrl += `${artist}/${song}`;
  console.log(baseUrl);
  getLyrics();
}

function getLyrics() {
  fetch(baseUrl)
    .then((res) =>
      res.json().then((data) => {
        console.log(data);
        lyricsOut.innerHTML = data["lyrics"];
      })
    )
    .catch((err) => console.log(`Error: ${err}`));
}
