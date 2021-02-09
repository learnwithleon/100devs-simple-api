
document.querySelector('button').addEventListener('click', getHolidays)



function getHolidays() {
let holidayType = document.querySelector('input').value
let url = 'https://calendarific.com/api/v2/holidays?&api_key=0b59aa310e8c282938b8e7ffcd0e930bde0e0382&country=US&year=2021&type='+holidayType
fetch(url)
    .then(res => res.json())
    .then(data => {
        let oneHoliday = data.response.holidays[0].name
        let twoHoliday = data.response.holidays[1].name
        let threeHoliday = data.response.holidays[2].name
        let fourHoliday = data.response.holidays[3].name
        let fiveHoliday = data.response.holidays[4].name
        let sixHoliday = data.response.holidays[5].name
        let sevenHoliday = data.response.holidays[6].name
        let eightHoliday = data.response.holidays[7].name
        let nineHoliday = data.response.holidays[8].name
        let tenHoliday = data.response.holidays[9].name
        let elevenHoliday = data.response.holidays[10].name

        let oneHolidayD = data.response.holidays[0].description
        let twoHolidayD = data.response.holidays[1].description
        let threeHolidayD = data.response.holidays[2].description
        let fourHolidayD = data.response.holidays[3].description
        let fiveHolidayD = data.response.holidays[4].description
        let sixHolidayD = data.response.holidays[5].description
        let sevenHolidayD = data.response.holidays[6].description
        let eightHolidayD = data.response.holidays[7].description
        let nineHolidayD = data.response.holidays[8].description
        let tenHolidayD = data.response.holidays[9].description
        let elevenHolidayD = data.response.holidays[10].description
      

        document.getElementById('first').innerText = oneHoliday
        document.getElementById('second').innerText = twoHoliday
        document.getElementById('third').innerText = threeHoliday
        document.getElementById('fourth').innerText = fourHoliday
        document.getElementById('fifth').innerText = fiveHoliday
        document.getElementById('sixth').innerText = sixHoliday
        document.getElementById('seventh').innerText = sevenHoliday
        document.getElementById('eighth').innerText = eightHoliday
        document.getElementById('ninth').innerText = nineHoliday
        document.getElementById('tenth').innerText = tenHoliday
        document.getElementById('eleventh').innerText = elevenHoliday

        document.getElementById('firstD').innerText = oneHolidayD
        document.getElementById('secondD').innerText = twoHolidayD
        document.getElementById('thirdD').innerText = threeHolidayD
        document.getElementById('fourthD').innerText = fourHolidayD
        document.getElementById('fifthD').innerText = fiveHolidayD
        document.getElementById('sixthD').innerText = sixHolidayD
        document.getElementById('seventhD').innerText = sevenHolidayD
        document.getElementById('eighthD').innerText = eightHolidayD
        document.getElementById('ninthD').innerText = nineHolidayD
        document.getElementById('tenthD').innerText = tenHolidayD
        document.getElementById('eleventhD').innerText = elevenHolidayD

        console.log(data.response.holidays[0].name);

    })
    .catch(err => {
        console.log(`err ${err}`)
    })
}
    /*my key

    ?api_key=0b59aa310e8c282938b8e7ffcd0e930bde0e0382

    */