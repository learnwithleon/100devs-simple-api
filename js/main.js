//Example fetch using sports db
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const soccerTeam = document.querySelector("input").value;
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${soccerTeam}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      // document.querySelector("img").src = data.;
      document.querySelector(".banner").src = data.teams[0].strTeamBanner;
      document.querySelector("h2").innerText = data.teams[0].strAlternate;
      document.querySelector("h4").innerText = data.teams[0].strCountry;
      document.querySelector("p").innerText = data.teams[0].strDescriptionEN;
      document.querySelector(".badge").src = data.teams[0].strTeamBadge;
      document.querySelector("a").href = data.teams[0].strWebsite;
      document.querySelector("a").innerHTML = data.teams[0].strWebsite;
      // console.log(data);
      // console.log(data.teams[0].strCountry);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
