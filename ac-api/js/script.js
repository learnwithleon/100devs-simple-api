document.querySelector('button').addEventListener('click', randomSong)

let audio = document.querySelector('audio')
audio.volume = .15

function randomSong() {
    fetch(`https://acnhapi.com/v1a/songs/`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        let n = Math.floor(Math.random() * data.length)
        audio.autoplay = true
        document.querySelector('img').src = data[n].image_uri
        document.querySelector('h2').innerText = data[n].name['name-USen']
        audio.src = `${data[n].music_uri}`
        audio.classList.remove("hide")
    })
    .catch(err => {
        console.log(`error: ${err}`)
    });
}
