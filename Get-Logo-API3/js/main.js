

document.querySelector('button').addEventListener('click', getLogo)


function getLogo(){
const company = document.querySelector('input').value 
const url = 'https://autocomplete.clearbit.com/v1/companies/suggest?query='+company;

    fetch(url)
    .then(res => res.json())
    .then(data => {
     let brandName = data[0].name;
     let logoPic = data[0].logo;
     document.querySelector('h2').innerText = brandName;
     document.querySelector('img').src = logoPic;
        
    })
    .catch(err => {
        console.log(`err ${err}`)
    })

}
