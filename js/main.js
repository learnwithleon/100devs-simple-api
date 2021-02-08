



const urlHeat = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Miami_Heat'

const urlJimmy = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Jimmy_Butler'
const urlBam = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Bam_Adebayo'
const urlDragon = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Goran_Dragic'
const urlHerro = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Tyler_Herro'
const urlUd = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Udonis_Haslem'
const urlIggy = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Andre_Igoudala'
const urlDuncan = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Duncan_Robinson'
const urlAvery = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Avery_Bradley'
const urlKo = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Kelly_Olynyk'

const height = document.querySelectorAll('.height')
const birth = document.querySelectorAll('.birth')
const desc = document.querySelectorAll('.desc')
const plusIcon = document.querySelectorAll('.plusIcon')
const closeButton = document.querySelectorAll('.closeButton')
const baller = document.querySelectorAll('.baller')

fetch(urlHeat)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        document.querySelector('.logo').src = data.teams[0].strTeamBadge
        // document.querySelector('.aboutTeam').innerText = data.teams[0].strDescriptionEN
    })
    .catch(err => {
        console.log(`Error ${err}`)
    })


document.querySelector('#jimmyPlus').addEventListener('click', getJimmy)
document.querySelectorAll('.closeButton')[0].addEventListener('click', closeJimmy)

function getJimmy(){

    fetch(urlJimmy)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        height[0].innerText = `Height: ${data.player[0].strHeight}`
        birth[0].innerText = `Birthplace: ${data.player[0].strBirthLocation}`
        desc[0].innerText = `About: ${data.player[0].strDescriptionEN}`
        plusIcon[0].classList.add('hidden')
        closeButton[0].style.display = 'block'
        baller[1].style.display = 'none'
        baller[2].style.display = 'none'
        document.querySelectorAll('.baller')[0].classList.add('expanded')
    })
    .catch(err => {
        console.log(`Error ${err}`)
    })

}

function closeJimmy(){
    height[0].innerText = ``
    birth[0].innerText = ``
    desc[0].innerText = ``
    plusIcon[0].classList.remove('hidden')
    closeButton[0].style.display = 'none'
    baller[1].style.display = 'block'
    baller[2].style.display = 'block'
    document.querySelectorAll('.baller')[0].classList.remove('expanded')
}

document.querySelector('#dragonPlus').addEventListener('click', getDragon)
document.querySelectorAll('.closeButton')[1].addEventListener('click', closeDragon)

function getDragon(){

    fetch(urlDragon)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        height[1].innerText = `Height: ${data.player[0].strHeight}`
        birth[1].innerText = `Birthplace: ${data.player[0].strBirthLocation}`
        desc[1].innerText = `About: ${data.player[0].strDescriptionEN}`
        plusIcon[1].classList.add('hidden')
        closeButton[1].style.display = 'block'
        baller[0].style.display = 'none'
        baller[2].style.display = 'none'
        document.querySelectorAll('.baller')[1].classList.add('expanded')
    })
    .catch(err => {
        console.log(`Error ${err}`)
    })

}

function closeDragon(){
    height[1].innerText = ``
    birth[1].innerText = ``
    desc[1].innerText = ``
    plusIcon[1].classList.remove('hidden')
    closeButton[1].style.display = 'none'
    baller[0].style.display = 'block'
    baller[2].style.display = 'block'
    document.querySelectorAll('.baller')[1].classList.remove('expanded')
}

document.querySelector('#bamPlus').addEventListener('click', getBam)
document.querySelectorAll('.closeButton')[2].addEventListener('click', closeBam)

function getBam(){

    fetch(urlBam)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        height[2].innerText = `Height: ${data.player[0].strHeight}`
        birth[2].innerText = `Birthplace: ${data.player[0].strBirthLocation}`
        desc[2].innerText = `About: ${data.player[0].strDescriptionEN}`
        plusIcon[2].classList.add('hidden')
        closeButton[2].style.display = 'block'
        baller[0].style.display = 'none'
        baller[1].style.display = 'none'
        document.querySelectorAll('.baller')[2].classList.add('expanded')
    })
    .catch(err => {
        console.log(`Error ${err}`)
    })

}

function closeBam(){
    height[2].innerText = ``
    birth[2].innerText = ``
    desc[2].innerText = ``
    plusIcon[2].classList.remove('hidden')
    closeButton[2].style.display = 'none'
    baller[0].style.display = 'block'
    baller[1].style.display = 'block'
    document.querySelectorAll('.baller')[2].classList.remove('expanded')
}


document.querySelector('#herroPlus').addEventListener('click', getHerro)
document.querySelectorAll('.closeButton')[3].addEventListener('click', closeHerro)

function getHerro(){

    fetch(urlHerro)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        height[3].innerText = `Height: ${data.player[0].strHeight}`
        birth[3].innerText = `Birthplace: ${data.player[0].strBirthLocation}`
        desc[3].innerText = `About: ${data.player[0].strDescriptionEN}`
        plusIcon[3].classList.add('hidden')
        closeButton[3].style.display = 'block'
        baller[4].style.display = 'none'
        baller[5].style.display = 'none'
        document.querySelectorAll('.baller')[3].classList.add('expanded')
    })
    .catch(err => {
        console.log(`Error ${err}`)
    })

}

function closeHerro(){
    height[3].innerText = ``
    birth[3].innerText = ``
    desc[3].innerText = ``
    plusIcon[3].classList.remove('hidden')
    closeButton[3].style.display = 'none'
    baller[4].style.display = 'block'
    baller[5].style.display = 'block'
    document.querySelectorAll('.baller')[3].classList.remove('expanded')
}

document.querySelector('#duncanPlus').addEventListener('click', getDuncan)
document.querySelectorAll('.closeButton')[4].addEventListener('click', closeDuncan)

function getDuncan(){

    fetch(urlDuncan)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        height[4].innerText = `Height: ${data.player[0].strHeight}`
        birth[4].innerText = `Birthplace: ${data.player[0].strBirthLocation}`
        desc[4].innerText = `About: ${data.player[0].strDescriptionEN}`
        plusIcon[4].classList.add('hidden')
        closeButton[4].style.display = 'block'
        baller[3].style.display = 'none'
        baller[5].style.display = 'none'
        document.querySelectorAll('.baller')[4].classList.add('expanded')
    })
    .catch(err => {
        console.log(`Error ${err}`)
    })

}

function closeDuncan(){
    height[4].innerText = ``
    birth[4].innerText = ``
    desc[4].innerText = ``
    plusIcon[4].classList.remove('hidden')
    closeButton[4].style.display = 'none'
    baller[3].style.display = 'block'
    baller[5].style.display = 'block'
    document.querySelectorAll('.baller')[4].classList.remove('expanded')
}

document.querySelector('#udPlus').addEventListener('click', getUd)
document.querySelectorAll('.closeButton')[5].addEventListener('click', closeUd)

function getUd(){

    fetch(urlUd)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        height[5].innerText = `Height: ${data.player[0].strHeight}`
        birth[5].innerText = `Birthplace: ${data.player[0].strBirthLocation}`
        desc[5].innerText = `About: ${data.player[0].strDescriptionEN}`
        plusIcon[5].classList.add('hidden')
        closeButton[5].style.display = 'block'
        baller[3].style.display = 'none'
        baller[4].style.display = 'none'
        document.querySelectorAll('.baller')[5].classList.add('expanded')
    })
    .catch(err => {
        console.log(`Error ${err}`)
    })

}

function closeUd(){
    height[5].innerText = ``
    birth[5].innerText = ``
    desc[5].innerText = ``
    plusIcon[5].classList.remove('hidden')
    closeButton[5].style.display = 'none'
    baller[3].style.display = 'block'
    baller[4].style.display = 'block'
    document.querySelectorAll('.baller')[5].classList.remove('expanded')
}

