import axios from 'axios'
import { useState, useEffect } from 'react'

const genres = [
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
const CLIENT_ID = '5895f98c24ce4792826ece2403169238'
const CLIENT_SECRET = 'bce4f73f463f492c925b57164f0986d8'
const REDIRECT_URI = ''



const ApiScratch = () => {

    const [token, setToken] = useState('');
    const [artistID, setArtistID] = useState('');
    const [trackID, setTrackID] = useState('');
    const [recommendations, setRecommendations] = useState({});


    useEffect(()=> {
        let artist ='Drake';
        let genre = 'hip%20hop';
        let searchType = 'artist';
        let searchLimit = 1;
        
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
            //search for artist ID (Search for an Item endpoint)**Default to song's artist/s
            axios(`https://api.spotify.com/v1/search?q=Drake&type=artist&market=US&limit=${searchLimit}`, {
                method: 'GET',
                headers: { 'Authorization' : 'Bearer ' + token}
              })
              .then(response => {
                console.log(`hello the data is ${response.data}`)
                setArtistID(response.data.artists.items[0].id);
              })

            //search for track ID (Search for an Item endpoint)**Default to artists top songs if none given
            axios(`https://api.spotify.com/v1/search?q=Drake&type=track&market=US&limit=${searchLimit}`, {
                method: 'GET',
                headers: { 'Authorization' : 'Bearer ' + token}
              })
              .then(response => {
                console.log(response.data) 
                setTrackID(response.data.tracks.items[0].id);
              })
              console.log(trackID, artistID)
            //search for related tracks (Get Recommendations Based on Seeds endpoint) has parameters of [limit, market, seed_artists*, seed_genres*, seed_tracks*, target_dancability, target_energy, target_key, target_tempo, target_popularity ]
            //https://api.spotify.com/v1/recommendations?limit=50&market=US&seed_artists=${artistID}&seed_genres=${genre}&seed_tracks=${trackID}
            axios(`https://api.spotify.com/v1/recommendations?limit=50&market=US&seed_artists=${artistID}&seed_genres=${genre}&seed_tracks=${trackID}`, {
                method: 'GET',
                headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
              })
              .then(response => {
                console.log(response.data);
                setRecommendations(response.data.tracks)
                
              })
            // recommendations.forEach((e)=>{
            //     console.log(`'${e.name}' by ${e.artists[0].name}`)
            // })

          });

    },[])

  


    return (
        <div>
            <h1>Recommendations</h1>
            {recommendations.map((e, i)=>{
                return <p>{i+1}. '{e.name}' by {e.artists[0].name}</p>
            })}
            <p></p>
        </div>
    )
}

export default ApiScratch


 

    //https://api.spotify.com/v1/search