// let url = 'https://api.rsc.org/compounds/v1/'
//universal variables
let formula = document.querySelector('#user-input')
let library = []

document.querySelector('button').addEventListener('click', function () {
  queryOrganize(formula.value);
})


function createImage(imageCode) {//translate base64 imag into a png
  let image = new Image();
  image.src = `data:image/png;base64,${imageCode}`;
  document.body.appendChild(image);

}

async function queryOrganize(x) {
  //functionScope variables
  const postBody = await JSON.stringify({//creates post body from formular request
    "formula": x
  })
  let postOptions = {
    method: "POST",
    headers: {
      "apikey": "YZzPHvkbkTGNFJsfXW9KPwKzvsVA3UFk",
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: await postBody//stringify takes time, so we will wait for it to return the body before continuing
  };
  let getOptions = {
    method: "GET",
    headers: {
      "apikey": "YZzPHvkbkTGNFJsfXW9KPwKzvsVA3UFk",
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
  };

  let url = 'https://api.rsc.org/compounds/v1'
  //functions to call
  async function GetQuery() {//this will process all requests until we get our image
    try {//each declaration or callback is analogous to individual .then()
      let rawPost = await fetch(url + "/filter/formula", postOptions)
      let readablePost = await rawPost.json()//.json() takes time as well
      let queryId = readablePost.queryId
      let rawGet = await fetch(url + `/filter/${queryId}/results`, getOptions)
      let readableGet = await rawGet.json()
      let chemId = readableGet.results[0]
      let img = await fetch(url + `/records/${chemId}/image`, getOptions)
      let readableImg = await img.json()
      let imgCode = readableImg.image
      createImage(imgCode)
    } catch(err) {//in event of error
      console.log(err)//always print error to console log
      if ( /^SyntaxError/.test(err)){//if the problem is the response doesn't understand user entered input
        alert('Please enter only valid molecules, and follow Capitalization nomenclature conventions')
      } else if (/^TypeError/.test(err)){//if address issues
        alert('please notify us; failed Fetch request')

      }
    }
  }
  await GetQuery()//we will run the above function 
}