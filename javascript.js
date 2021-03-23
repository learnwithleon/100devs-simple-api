document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){
  const currency = document.querySelector('input').value
  const url = 'https://api.ratesapi.io/api/latest?base='+currency
  let storedResults = []
  
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(JSON.stringify(data.rates, null, 4))
      
      
      document.querySelector('h4').innerText = JSON.stringify(data.rates, null, 4)
    
        
    
    
      })
      .catch(err => {
          console.log('error')
      });
}