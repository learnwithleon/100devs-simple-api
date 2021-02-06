

document.querySelector('button').addEventListener('click', fetchUrl);

    function fetchUrl(){
    let inputVal = document.querySelector('input').value;

    const url = 'https://www.amiiboapi.com/api/amiibo/?name='+ inputVal;

   
    
   fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        let firstImg = data.amiibo[0].image;
        //let secondImg = data.amiibo[1].image;
        let gameSeries = data.amiibo[0].gameSeries;

        document.querySelector('#firstPic').src = firstImg;
        //document.querySelector('#secPic').src = secondImg;
        document.querySelector('h3').innerText = gameSeries;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    };



  /*  document.querySelector("button").addEventListener("click", fetchUrl);

function fetchUrl() {
  let inputVal = document.querySelector("input").value;

  const url = "https://www.amiiboapi.com/api/amiibo/?name=" + inputVal;

  function makeLi(name, img) {
    return `<li> 
            <h3>${name}</h3>
            <img src=${img} alt=${name}/>
            <li>`;
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const listItems = data.amiibo
        .map((character) => makeLi(character.gameseries, character.image))
        .join("");

      //you'll have to create a <ul></ul> tag in your DOM. When you do that, this method
      //will add all the amiibos returned by the API to the page with a name and a picture
      document.querySelector("ul").insertAdjacentHTML("beforeend", listItems);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}*/







