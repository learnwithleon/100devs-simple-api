document.querySelector('.newJoke').addEventListener('click', getJoke)

function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
    console.log(data.setup)
    document.querySelector('#joke').innerHTML = data.setup
    document.querySelector('.getAnswer').addEventListener("click", getAnswer)
    function getAnswer() {
        document.querySelector('#show-answer').innerHTML = data.punchline
        document.querySelector('img').src = "https://memesbams.com/wp-content/uploads/2018/01/5-Laughing-Face-Gif.gif"
    }
    document.querySelector('#show-answer').innerHTML = ""
    document.querySelector('img').src = ""
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}