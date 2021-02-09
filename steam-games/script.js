const steamIdInput = document.querySelector('#steamId');
const steamIdSubmit = document.querySelector('#steamIdSubmit');
const gameList = document.querySelector('#gameList');
const API_URL = 'http://api.steampowered.com/'
const API_KEY = '74C42BFDC8A1E2607ECAF648C0233647'

const getGames = () => {
  let steamId = steamIdInput.value;
  fetch(`${API_URL}IPlayerService/GetOwnedGames/v0001/?key=${API_KEY}&steamid=${steamId}`)
    .then(res => res.json())
    .then(data => printGameList(steamId, data.response.games))
    .catch(err => console.log(`error ${err}`))
};

const printGameList = (steamId, gameArr) => {
  gameArr.forEach(element => {
    if (element.playtime_forever) {
      fetch(`${API_URL}ISteamUserStats/GetUserStatsForGame/v0002/?appid=${element.appid}&key=${API_KEY}&steamid=${steamId}`)
        .then(res => res.json())
        .then(data => {
          let gameName = data.playerstats.gameName;
          if ((!gameName.includes('Valve')) && !gameName.includes('UntitledApp') && !gameName == '') {
            gameList.innerText += `${data.playerstats.gameName},\u00a0`;
          };
        })
        .catch(err => console.log(`error ${err}`))
    }   
  });
}



steamIdSubmit.addEventListener('click', getGames);


