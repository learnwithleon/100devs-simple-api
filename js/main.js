//Example fetch using pokemonapi.co
// data.links.webcast  - video
// data.details
// data.rocket
// data.links.flickr.original[4] 5 images - push to your own array

document.querySelector('#latestLaunch').addEventListener('click', getLatestLaunch);
document.querySelector('#roadsterButton').addEventListener('click', findRoadster);

function getLatestLaunch(){
  
  const imgStore = []
  const url = `https://api.spacexdata.com/v4/launches/latest`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        //attempt to store images from API
        // data.links.flickr.original.forEach(img => imgStore.push(img)); 
        // toggle visibility: collapse; of information
        document.querySelector("body > section.wrap1").classList.toggle('hidden');
        document.querySelector('#missionName').innerText = data.name
        document.querySelector('#missionDetails').innerText = data.details
        // webcast        
        document.querySelector('#webcast').src = youtubeEmbed(data.links.webcast)

        // storeImgs()
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function findRoadster () {
  const roadsterUrl = `https://api.spacexdata.com/v4/roadster`;
  fetch(roadsterUrl)
    .then(rel => rel.json())
    .then(data => {
      console.log(data);

      // Toggle visibility: collapse; of information
      document.querySelector("body > section.wrap2").classList.toggle('hidden')
      // img
      document.querySelector('#roadsterImg').src = data.flickr_images
      //name
      document.querySelector('#roadsterName').innerText = data.name
      // roadster miles from earth and miles to mars
      document.querySelector('#roadsterMiles').innerText =  roadsterFromTo(data.earth_distance_mi, data.mars_distance_mi, data.speed_mph);
      //roadster details
      document.querySelector('#roadsterInfo').innerText = data.details
      // webcast (falcon heavy test launch)
      document.querySelector('#roadsterVideo').src = youtubeEmbed(data.video)
    })
}

function youtubeEmbed (link) {
  // converts Youtube watch link to Youtube embed link
  let split = (link).split('/')
  let videoId = split[split.length-1];
  return `https://www.youtube.com/embed/${videoId}`
};
function storeImgs (arr) {
  arr.forEach(img => imgStore.push(img) )
};
function imgCarousel () {

  imgStore.forEach(img => document.querySelector('#autoCarousel').src = img )
  
}

function roadsterFromTo(miFromEarth, miToMars, speedMPH) { 
  return `Elon Musk's Tesla Roadster is flying at ${Number(speedMPH).toFixed(2)} mph, is ${Number(miFromEarth).toFixed(2)} miles from Earth, and has ${Number(miToMars).toFixed(2)} left to reach Mars`
};