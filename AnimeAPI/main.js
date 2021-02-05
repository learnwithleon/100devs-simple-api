url = "https://ghibliapi.herokuapp.com/films"

fetch(url)
    .then(res => res.json())
    .then(data => handleData(data))
    .catch(err => `error: ${err}`)

function handleData(data) {
    let filmList = document.querySelector("#films")
    data.forEach(f => {
        let title = f.title
        let entry = document.createElement('li')
        let link = document.createElement('a')
        link.textContent = title
        link.setAttribute('href', '#')
        entry.appendChild(link)
        filmList.appendChild(entry)
        link.addEventListener('click', fetchPoster)
    })
}

function fetchPoster() {
    let slug = this.innerText.toLowerCase().replaceAll(" ", "%20")
    const kitsu = "https://kitsu.io/api/edge/anime?filter[text]="
    fetch(kitsu + slug)
        .then(res => res.json())
        .then(data => handlePoster(data))
        .catch(err => `error with kitsu: ${err}`)
}

function handlePoster(data) {
    const image = document.querySelector("img")
    image.src = data.data[0].attributes.posterImage.small
}