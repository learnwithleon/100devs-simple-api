
index = 0
num_drinks = 0

function fetchData(){

  url = "https://rickandmortyapi.com/api/character?name="
  name = "rick"
  
  input = document.querySelector('input')
  name = input.value
  
  full_url = url + name
  
  fetch( full_url )
    .then( res => res.json() )
    .then( data => {
        console.log(data)
        
        array = data.results
        length = array.length
        
        random_index = Math.floor( Math.random() * length ) 
        character = array[ random_index ]
        
        //~ img_url = data.results[0].image
        img_url = character.image
        
        console.log( img_url)
        //~ img = document.querySelector('#character_image')
        img = document.getElementById('character_image')
        img.src = img_url
        
        //~ name = data.results[0].name
        name = character.name
        
        h3 = document.querySelector('h3')
        h3.innerText = name
        
        document.querySelector('h4').innerText = character.status;
        
        
        
     })
     .catch( err => {
        console.log(`error ${err} `)
      })
}

boton = document.querySelector('button')
boton.addEventListener('click', fetchData)



