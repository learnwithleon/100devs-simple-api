import { useState, useEffect } from 'react'
import Recommendation from './Recommendation'
import LoadingWheel from './LoadingWheel'


const Recommendations = ({recommendations, pauseOther}) => {
    // const [buttonLabels, setButtonLabels] = useState([]);
    

    
   
    return (
        <section className='container recommendations'>
            {console.log(recommendations)}
            <LoadingWheel />
            <div>

            </div>
            {
                recommendations.map((recommendation,index)=>(
                    <Recommendation pauseOther={pauseOther} key = {index} recNum = {index + 1} track={JSON.stringify(recommendation.name)} artist={recommendation.artists[0].name} coverArtURL = {`${recommendation.album.images[1].url}`} preview={`${recommendation.preview_url}`}/>   
                ))
            }
        </section>
    )
}

export default Recommendations
