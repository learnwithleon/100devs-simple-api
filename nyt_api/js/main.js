// https://developer.nytimes.com/docs/articlesearch-product/1/overview

document.querySelector('button').addEventListener('click', fetchHeadlines)

function fetchHeadlines() {
const choice = document.querySelector('.choice').value
const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${choice}&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      // article 1
      document.querySelector('.url1').innerText = data.response.docs[0].abstract
      document.querySelector('.url1').href = data.response.docs[0].web_url
      document.querySelector('.author1').innerText = data.response.docs[0].byline.original
      document.querySelector('.pubdate1').innerText = data.response.docs[0].pub_date
      document.querySelector('.line1').innerText = "-------------------------------------------------------------"
      // article 2
      document.querySelector('.url2').innerText = data.response.docs[1].abstract
      document.querySelector('.url2').href = data.response.docs[1].web_url
      document.querySelector('.author2').innerText = data.response.docs[1].byline.original
      document.querySelector('.pubdate2').innerText = data.response.docs[1].pub_date
      document.querySelector('.line2').innerText = "-------------------------------------------------------------"
      //article 3
      document.querySelector('.url3').innerText = data.response.docs[2].abstract
      document.querySelector('.url3').href = data.response.docs[2].web_url
      document.querySelector('.author3').innerText = data.response.docs[2].byline.original
      document.querySelector('.pubdate3').innerText = data.response.docs[2].pub_date
      // document.querySelector('.line3').innerText = "-------------------------------------------------------------"
      // document.querySelector('.url1').innerText = data.response.docs[0].web_url
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
