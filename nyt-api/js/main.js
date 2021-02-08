// https://developer.nytimes.com/docs/articlesearch-product/1/overview

document.querySelector('button').addEventListener('click', fetchHeadlines)
document.querySelector('.world').addEventListener('click', getWorldHeadlines)
document.querySelector('.us').addEventListener('click', getUsHeadlines)
document.querySelector('.politics').addEventListener('click', getPoliticsHeadlines)
document.querySelector('.ny').addEventListener('click', getNyHeadlines)
document.querySelector('.business').addEventListener('click', getBusinessHeadlines)
document.querySelector('.opinion').addEventListener('click', getOpinionHeadlines)
document.querySelector('.tech').addEventListener('click', getTechHeadlines)
document.querySelector('.science').addEventListener('click', getScienceHeadlines)
document.querySelector('.health').addEventListener('click', getHealthHeadlines)
document.querySelector('.sports').addEventListener('click', getSportsHeadlines)
document.querySelector('.arts').addEventListener('click', getArtsHeadlines)
document.querySelector('.books').addEventListener('click', getBooksHeadlines)
document.querySelector('.style').addEventListener('click', getStyleHeadlines)
document.querySelector('.food').addEventListener('click', getFoodHeadlines)
document.querySelector('.travel').addEventListener('click', getTravelHeadlines)
document.querySelector('.magazine').addEventListener('click', getMagazineHeadlines)
document.querySelector('.t_magazine').addEventListener('click', getTmagazineHeadlines)
document.querySelector('.real_estate').addEventListener('click', getRealestateHeadlines)
document.querySelector('.video').addEventListener('click', getVideoHeadlines)

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
function getWorldHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=world&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getUsHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=u.s.&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getPoliticsHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=politics&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getNyHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=n.y.&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getBusinessHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=business&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getOpinionHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=opinion&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getTechHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=tech&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getScienceHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=science&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getHealthHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=health&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getSportsHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getArtsHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=arts&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getBooksHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=books&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getStyleHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=style&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getFoodHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=food&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getTravelHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=travel&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getMagazineHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=magazine&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getTmagazineHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=` + "tech magazine" + `&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getRealestateHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=` + "real estate" + `&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
function getVideoHeadlines() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=video&api-key=mhD3OliI6H1iB98ReEZvOd0jGVn0CYzG`
  fetch(url)
    .then(res => res.json())
    .then(data => {
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
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
