
let apiKey = 'v7JJFLu9ajLhAWZf2wDCl2mjOFwijONU'
let url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
document.querySelector('button').addEventListener('click', getGif)
function getGif(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let random = Math.floor(Math.random()*51)
        let title = data.data[random].title
        let gif = data.data[random].images.downsized.url
        document.querySelector('img').src = gif
        document.querySelector('h1').innerText = title 
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
