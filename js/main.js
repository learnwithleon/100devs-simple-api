// Access-Control-Allow-Origin: *


function baseFetch(){
    let url = 'https://api.covid19api.com/summary' 
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          let newConfirmed = data.Global.NewConfirmed;
          let totalConfirmed = data.Global.TotalConfirmed;

            document.querySelector('#newCases').innerText ='New Cases - ' + newConfirmed;
            document.querySelector('#total').innerText = 'Total Confirmed Cases - ' + totalConfirmed;
          
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }
baseFetch()


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("input")
.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    document.querySelector("button").click();
  }
});
  document.querySelector('button').addEventListener('click', runFetch)

  function runFetch(){
      let inputVal = document.querySelector('input').value.toLowerCase();
      if (inputVal === 'america' || inputVal === 'us' || inputVal === 'usa' ){inputVal= 'United States'}
      let url = 'https://api.covid19api.com/total/dayone/country/' + inputVal;
      document.querySelector('h2').innerText = inputVal[0].toUpperCase() + inputVal.substring(1)
    
    fetch(url)

    .then(res => res.json()) // parse response as JSON
    .then(data => {

        console.log(data)
        let total = data[data.length-1].Confirmed;
        let active = data[data.length-1].Active;
        let deaths = data[data.length-1].Deaths;
        let recovered = data[data.length-1].Recovered;
        if(recovered === 0){recovered = "No Data Currently Available"}
            document.querySelector('#newCases').innerText ='Active Cases - ' + active;
            document.querySelector('#total').innerText = 'Total Confirmed Cases - ' + total;
            document.querySelector('#deaths').innerText ='Deaths - ' + deaths;
            document.querySelector('#recovered').innerText = 'Recovered - ' + recovered;
        
        })
        .catch(err => {
            document.querySelector('h2').innerText ='Error';
            document.querySelector('#newCases').innerText ='Invalid Country';
            document.querySelector('#total').innerText = '';
            document.querySelector('#deaths').innerText ='';
            document.querySelector('#recovered').innerText = '';


            
        });
}
  