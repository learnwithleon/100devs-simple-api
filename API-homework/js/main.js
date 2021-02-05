document.querySelector("button").addEventListener("click", getHoliday);

function getHoliday() {
  let url =
    "https://calendarific.com/api/v2/holidays?api_key=d46462b6b05eddfbbcfe3066e1228cc53b142a78&country=US&year=2019";
  let random = Number(Math.floor(Math.random() * 255));

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let month = data.response.holidays[random].date.datetime.month;
      switch (month) {
        case 1:
          month = "January";
          break;
        case 2:
          month = "February";
          break;
        case 3:
          month = "March";
          break;
        case 4:
          month = "April";
          break;
        case 5:
          month = "May";
          break;
        case 6:
          month = "June";
          break;
        case 7:
          month = "July";
          break;
        case 8:
          month = "August";
          break;
        case 9:
          month = "September";
          break;
        case 10:
          month = "October";
          break;
        case 11:
          month = "November";
          break;
        case 12:
          month = "December";
          break;
        default:
          break;
      }
      document.querySelector("h1").textContent =
        data.response.holidays[random].name;
        
      document.querySelector("h2").textContent = `Date: ${month} ${data.response.holidays[random].date.datetime.day}`;

      document.querySelector("h3").textContent =
        data.response.holidays[random].description;
      console.log(data.response.holidays[random]);
    });
}
