
const button = document.querySelector('.button');


button.addEventListener('click', () => {
    getNewImage();

});

async function getNewImage() {
    let value = document.querySelector('.input').value
    let img = document.querySelector('.img');
    let randomNumber = Math.floor(Math.random() * 10);
    return fetch(`https://api.unsplash.com/search/photos?query=${value}&client_id=sA-JAi8J7E6Ojdr3vSJYUZmnTfccD6btxK-VJ41vUKM`)

        .then((response) => response.json())
        .then((data) => {

            img.src = data.results[randomNumber].urls.regular;

        });
}