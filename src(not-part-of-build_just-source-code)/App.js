import { useState, useEffect } from 'react';
import QueryForm from './Components/QueryForm';
import Recommendations from './Components/Recommendations';
import axios from 'axios';
import Head from './Components/Head'
import VolumeSlider from './Components/VolumeSlider';



function App() {
      
    const [token, setToken] = useState('');
    const [artistID, setArtistID] = useState('');
    const [trackID, setTrackID] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [searchParams, setParams ]= useState({})
    const [lastPlayed, setLastPlayed] = useState({obj : {}, id: -1});

    const pauseOther = (id)=>{
        if(lastPlayed.id == -1){
          setLastPlayed({
            obj : document.getElementById(`${id}_html5_api`),
            id: id
          })
          return
        }else if(id != lastPlayed.id){

          lastPlayed.obj.pause();
          setLastPlayed({
              obj:document.getElementById(`${id}_html5_api`),
              id:id
            })
        }
    }
    const changeVol = (vol)=>{
        if(vol>1){
            return
        }else{
            let tracks = document.querySelectorAll('video');
            tracks.forEach((track)=>{
                track.volume = vol;
            })  
        }

    }
    useEffect(()=>{
        console.log('Hello')
        let volumeSlider = document.querySelector('.rs-tooltip-inner')
        volumeSlider.addEventListener('DOMSubtreeModified', ()=>{
            changeVol(parseInt(volumeSlider.innerHTML)*.01)
        })
    },[])


    
  
    const fetchRecommendations = (paramsObj)=>{     
      setParams(paramsObj);
      console.log(searchParams)
  
    }
    ///API CALL LOGIC
    const CLIENT_ID = '5895f98c24ce4792826ece2403169238'
    const CLIENT_SECRET = 'bce4f73f463f492c925b57164f0986d8'
    const acceptableGenres = [
    "acoustic",
    "afrobeat",
    "alt-rock",
    "alternative",
    "ambient",
    "anime",
    "black-metal",
    "bluegrass",
    "blues",
    "bossanova",
    "brazil",
    "breakbeat",
    "british",
    "cantopop",
    "chicago-house",
    "children",
    "chill",
    "classical",
    "club",
    "comedy",
    "country",
    "dance",
    "dancehall",
    "death-metal",
    "deep-house",
    "detroit-techno",
    "disco",
    "disney",
    "drum-and-bass",
    "dub",
    "dubstep",
    "edm",
    "electro",
    "electronic",
    "emo",
    "folk",
    "forro",
    "french",
    "funk",
    "garage",
    "german",
    "gospel",
    "goth",
    "grindcore",
    "groove",
    "grunge",
    "guitar",
    "happy",
    "hard-rock",
    "hardcore",
    "hardstyle",
    "heavy-metal",
    "hip-hop",
    "holidays",
    "honky-tonk",
    "house",
    "idm",
    "indian",
    "indie",
    "indie-pop",
    "industrial",
    "iranian",
    "j-dance",
    "j-idol",
    "j-pop",
    "j-rock",
    "jazz",
    "k-pop",
    "kids",
    "latin",
    "latino",
    "malay",
    "mandopop",
    "metal",
    "metal-misc",
    "metalcore",
    "minimal-techno",
    "movies",
    "mpb",
    "new-age",
    "new-release",
    "opera",
    "pagode",
    "party",
    "philippines-opm",
    "piano",
    "pop",
    "pop-film",
    "post-dubstep",
    "power-pop",
    "progressive-house",
    "psych-rock",
    "punk",
    "punk-rock",
    "r-n-b",
    "rainy-day",
    "reggae",
    "reggaeton",
    "road-trip",
    "rock",
    "rock-n-roll",
    "rockabilly",
    "romance",
    "sad",
    "salsa",
    "samba",
    "sertanejo",
    "show-tunes",
    "singer-songwriter",
    "ska",
    "sleep",
    "songwriter",
    "soul",
    "soundtracks",
    "spanish",
    "study",
    "summer",
    "swedish",
    "synth-pop",
    "tango",
    "techno",
    "trance",
    "trip-hop",
    "turkish",
    "work-out",
          "world-music"]
    useEffect(()=> {
        
        let artist = searchParams.artist;
        let track = searchParams.track;
        let genre = searchParams.genre;
        let tempo = searchParams.tempo === ''? '' :`&target_tempo=${searchParams.tempo}`
        let key = searchParams.key === '' ? '' :`&target_key=${searchParams.key}`
        let popularity = 20;
        let searchLimit = 1;
        let tempAID = '';
        let tempTID = '';
        let tempToken = '';

        if(artist != ''){
    
            if(Object.keys(searchParams).length === 0){
                return console.log('HERE')
            }
            setRecommendations([]);
            setArtistID('');
            setTrackID('');
            setToken('');




            axios('https://accounts.spotify.com/api/token', {
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)      
                },
                data: 'grant_type=client_credentials',
                  method: 'POST'
            })
                .then(tokenResponse => {

                    setToken(tokenResponse.data.access_token);
                    tempToken = tokenResponse.data.access_token;
                    //search for artist ID (Search for an Item endpoint)**Default to song's artist/s
                    return axios(`https://api.spotify.com/v1/search?q=${artist}&type=artist&market=US&limit=${searchLimit}`, {
                        method: 'GET',
                        headers: { 'Authorization' : 'Bearer ' + tempToken}
                    })
                })
                .catch((error) => {
                  console.error(error);
                })
                .then(response => {
                
                    setArtistID(response.data.artists.items[0].id);
                    tempAID = response.data.artists.items[0].id;
                    //If genre empty set to artist's genres


                    genre = genre.length === 0 ? response.data.artists.items[0].genres: genre;
                    if(genre.length > 3){
                        let genres =[]
                        while(genres.length < 3){
                            if(genre[randomIndex(genre.length)]){
                                let index = randomIndex(genre.length);
                                genres.push(genre[index]);
                                genre.splice(index,1);
                            }
                        }
                        genre = genres.join(',');
                    }else{

                        genre = genre.join(',');
                    }
                
                    genre = genre.replace(/[ ,]/g, '%20');               

                    //search for track ID (Search for an Item endpoint)**Default to artists top songs if none given

                    return axios(`https://api.spotify.com/v1/artists/${tempAID}/top-tracks?market=US`, {
                        method: 'GET',
                        headers: { 'Authorization' : 'Bearer ' + tempToken}
                    })
                })
                .catch((error) => {
                  console.error(error);
                })
                .then(response => {
                    console.log(response.data.tracks) 
                    setTrackID(response.data.tracks[0].id);
                    tempTID = response.data.tracks[0].id;
                    console.log(genre, tempAID, tempTID)
                    console.log(token)
                    //search for related tracks (Get Recommendations Based on Seeds endpoint) has parameters of [limit, market, seed_artists*,seed_genres*,seed_tracks*, target_dancability, target_energy, target_key, target_tempo, target_popularity ]
                    //https://api.spotify.com/v1/recommendations?limit=50&market=US&seed_artists=${artistID}&seed_genres=${genre}&seed_tracks=${trackID}
                    
                    return axios(`https://api.spotify.com/v1/recommendations?limit=50&market=US&seed_artists=${tempAID}&seed_genres=${genre}&seed_tracks=${tempTID}&min_popularity=${popularity}${tempo}`, {
                        method: 'GET',
                        headers: { 'Authorization' : 'Bearer ' + tempToken}
                    })
                })
                .catch((error) => {
                  console.error(error);
                })
                .then(response => {
                  setRecommendations(response.data.tracks)
                  return 
                })
            
                .catch((error) => {
                    console.error(error);  
                })
        }else if(artist == '' && track != ''){
            
            if(Object.keys(searchParams).length === 0){
                return console.log('HERE')
            }
            setRecommendations([]);
            setArtistID('');
            setTrackID('');
            setToken('');

            axios('https://accounts.spotify.com/api/token', {
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)      
                },
                data: 'grant_type=client_credentials',
                  method: 'POST'
            })
                .then(tokenResponse => {

                    setToken(tokenResponse.data.access_token);
                    tempToken = tokenResponse.data.access_token;
                    //search for artist ID (Search for an Item endpoint)**Default to song's artist/s
                    return axios(`https://api.spotify.com/v1/search?q=${track}&type=track&market=US&limit=${searchLimit}`, {
                        method: 'GET',
                        headers: { 'Authorization' : 'Bearer ' + tempToken}
                    })
                })
                .catch((error) => {
                  console.error(error);
                })
                .then(response => {
                    console.log(response.data)

                    tempAID = response.data.tracks.items[0].album.artists[0].id;
                    tempTID = response.data.tracks.items[0].id;
                    //If genre empty set to artist's genres


                    genre = genre.length === 0 ? response.data.artists.items[0].genres: genre;
                    console.log(genre)
                    if(genre.length > 3){
                        let genres =[]
                        while(genres.length < 3){
                            if(genre[randomIndex(genre.length)]){
                                let index = randomIndex(genre.length);
                                genres.push(genre[index]);
                                genre.splice(index,1);
                            }
                        }
                        genre = genres.join(',');
                    }else{

                        genre = genre.join(',');
                    }
                
                    genre = genre.replace(/[ ,]/g, '%20');               

                    //search for related songs
                    return axios(`https://api.spotify.com/v1/recommendations?limit=50&market=US&seed_artists=${tempAID}&seed_genres=${genre}&seed_tracks=${tempTID}&min_popularity=${popularity}${tempo}`, {
                        method: 'GET',
                        headers: { 'Authorization' : 'Bearer ' + tempToken}
                    })
                })
                .catch((error) => {
                  console.error(error);
                })
                .then(response => {
                  setRecommendations(response.data.tracks)
                  return 
                })
            
                .catch((error) => {
                    console.error(error);  
                })

        }
    },[searchParams])
    
    //Api helper function, generates random index of array
    function randomIndex(indexLength){
        return Math.floor(Math.random()*indexLength)
    }
///END OF API LOGIC





//artists={artists} tracks={tracks} genres={genres} tempo={tempo} key={key} INPUTS FOR RECOMMENDATIONS
  return (
    <div className="App">
      <Head />
      <h1 id='heading'>Song Recommender</h1>
      <QueryForm onSubmit = {fetchRecommendations} />
      <VolumeSlider onChangeVol = {changeVol}/>
      <Recommendations pauseOther = {pauseOther} recommendations={recommendations}/>
    </div>
  );
}

export default App;




// https://api.spotify.com/v1/recommendations?limit=50&market=US&seed_artists=3TVXtAsR1Inumwj472S9r4&seed_genres=pop rap,rap,hip hop&seed_tracks=2SAqBLGA283SUiwJ3xOUVI
// https://api.spotify.com/v1/recommendations?limit=50&market=US&seed_artists=3TVXtAsR1Inumwj472S9r4&seed_genres=rap,toronto rap,canadian hip hop&seed_tracks=2SAqBLGA283SUiwJ3xOUVI