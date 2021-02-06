import { useState } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'



function QueryForm({onSubmit}) {

    const [artist, setArtist] = useState('');
    const [track, setTrack] = useState('');
    const [genre, setGenre] = useState([]);
    const [tempo, setTempo] = useState('');
    const [key, setKey] = useState('');

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
    const keys = {
        'C': 0,
        'C#/Db': 1,
        'D':2,
        'D#/Eb':3,
        'E':4,
        'F':5,
        'F#/Gb':6,
        'G':7,
        'G#/Ab':8,
        'A':9,
        'A#/Bb':10,
        'B':11,
    }
    const chkGreen = (e)=>{
        console.log(e.target.checked)
        if(e.target.checked == true){
            console.log('1')
            e.target.classList.add = 'green-glow';
        }else{
            e.target.classList.remove = 'green-glow';
        }    
    }

    const checkChange = (e)=>{
    
    }

    const sendParams = (e)=>{
        e.preventDefault();
        document.getElementById('loadingWheel').style.display= 'block';
        console.log(artist, track, genre, tempo, key)
        onSubmit({artist, track, genre, tempo, key});

    }

    return (
        <section className='container form' onSubmit={sendParams}>
            <form className='query-form'>
                <div className='form-control artist'>
                    <label className='label-spacing'>Artist</label>
                    <input type='text' name='artists' placeholder='i.e. Drake' onChange={(e)=> {setArtist(e.target.value)}}/>
                </div>
                <div className='form-control track'>
                    <label className='label-spacing'>Track</label>
                    <input type='text' name='tracks' placeholder='i.e. Started from the Bottom' onChange={(e)=> {setTrack(e.target.value)}}/>
                </div>
                <div className='form-control genre'>
                    <label className='label-spacing'>Genre</label>
                    <div className='boxes-container'>
                        {genres.map((genre)=>(
                            <label className='chk-box-container'>
                                {genre}
                                <input type='checkbox' name='genres' onChange={(e)=> {
                                    setGenre([genre]);
                                    chkGreen(e);
                                    }}/>
                                <span className="checkmark"></span>
                            </label>
                        ))}
                    </div>
                    
                </div>
                <div className='form-control tempo'>
                    <label className='label-spacing'>Tempo</label>                    
                    <input type='text' name='target_key' placeholder='130' onChange={(e)=> {setTempo(e.target.value)}}/>
                </div>
                <div className='form-control key'>
                    <label className='label-spacing'>Key</label>                
                    <div className='boxes-container key'>
                        {Object.keys(keys).map((key)=>(
                            <label className='chk-box-container'>
                                {key}
                                <input type='radio' name='keys' onChange={(e)=> {
                                    console.log(e.target);
                                    chkGreen(e);
                                    checkChange(e);
                                    setKey(keys[key]);
                                    }}/>
                                <span className="checkmark"></span>
                            </label>
                        ))}
                    </div>
                </div>
                <input id='submit' type='submit' value='SUBMIT'></input>
                
            </form>
        </section>
    )
}

export default QueryForm
