// https://developer.nytimes.com/docs/articlesearch-product/1/overview

document.querySelector('button').addEventListener('click', fetchHeadlines)

function fetchHeadlines() {
const choice = document.querySelector('.choice').value
// const articles = data.response.docs
const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${choice}&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(data.response.docs[0])
      printHeadlines(data.response.docs)
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}

// function createDiv() {
//   let div = document.createElement('div')
//   div.innerText
// }

function printHeadlines(arr) {
  let h3 = document.createElement('h3')
  for(i=0; i<arr.length; i++) {
    // console.log(getAbstract(arr[i]))
    // document.querySelector('h3').innerText = getHeadlines(arr[i])
    document.body.appendChild(h3).innerText = getHeadlines(arr[i])
  }
}


function getHeadlines(obj) {
  for(let key in obj) {
    console.log(obj.abstract)
    return obj.abstract
  }
}


// headline, link, author
