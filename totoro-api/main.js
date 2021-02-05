//Make a way for when the user clicks a character's image, the name of that character is saved as a variable
document.querySelectorAll('.char').forEach(item => {
    item.addEventListener('click', event => {
        if (event.localName = "img")
            getInfo(event.target.alt);
    })
})

function getInfo(n){
const name = n
let url = 'https://ghibliapi.herokuapp.com/people/'

fetch(url)
    .then(res => res.json())
    .then(data => {
        for(let i =0;i<data.length;i++){
                if (name === data[i].name) {
                    //Once the character entered matches a charcter in the array, save the ID of the URL
                       url = url + data[i].id
                }            
    }   
    fetch(url) 
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            document.querySelector("#chName").innerText = data.name;
            document.querySelector("#chBio").innerText = `${data.name} has ${data.hair_color.toLowerCase()} hair and ${data.eye_color.toLowerCase()} colored eyes.`
        })
           
})    
    .catch(err=>{
        console.log(`error ${err}`);
    })
}