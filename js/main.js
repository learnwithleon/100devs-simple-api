//use three APIs
//use the output of 1 api as the input for another

/*
  get random anime trending from kitsu.io
    place anime banner, title, release date, description
    convert release date to hebrew date and find closest Holiday
  on clicking anime banner, fireworks start in description area of page
*/

fetch('https://kitsu.io/api/edge/trending/anime')
  .then(response => response.json())
  .then(generateList)
  .catch(err => console.log("error:",err))


function generateList(data)
{
  let randInd = Math.floor(Math.random()*10)
  randInd = data['data'][randInd]

  let se = document.querySelector('#anime-list')
  let anPic = randInd.attributes.coverImage.small
  let date = randInd.attributes.startDate

  se.append(document.createElement('img'))
  se.lastChild.src = anPic
  se.addEventListener('click', playFW)

  document.querySelector('#anime-title').innerText = randInd.attributes.canonicalTitle
  document.querySelector('#release-date').innerText = "Release Date: " + date
  document.querySelector('#anime-desc').innerText = randInd.attributes.description

  fetchHebrew(date)
}

function fetchHebrew(gregDate)
//date must be string YYYY-MM-DD
{
  date = gregDate.split("-")

  fetch('https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=on&nx=on&year='+date[0]+'&month='+date[1])
    .then(response => response.json())
    .then(data => {
      let sortedDate = data.items.sort((a,b) => Number(a.date.split('-')[2]-date[2]) > Number(b.date.split('-')[2]-date[2]))
      let holiday = sortedDate[0]
      document.querySelector('#hebrew-date').innerText = `Closest Jewish Holiday: ${holiday.title}  ${holiday.hebrew}`
    })
    .catch(err => console.log("error:",err))
}

function playFW()
{
  const container = document.getElementById("fireworks")
  const fireworks = new Fireworks(container)
  fireworks.start()
}
