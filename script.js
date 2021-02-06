url = "https://dog.ceo/api/breeds/image/random"

fetch( url )
  .then( res => res.json() )
  .then( data => {
      console.log(data)
      
      img_url = data.message
      img = document.querySelector('img')
      img.src = img_url
      
   })
