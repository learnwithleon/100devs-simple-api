import React, { useState } from 'react'
import AudioPlayer from './AudioPlayer.js'


function Recommendation({pauseOther, recNum, track, artist, coverArtURL, preview}) {
    
    

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: `${preview}`,
            type: 'audio/mpeg',
          },
        ],
      };
    


    return (
        <div className='recommendation'>
            <div className='rec-number'></div>
            <div className='rec-img'><img src={coverArtURL} alt={`album cover for ${track} by ${artist}`}></img></div>
            <div className='rec-name'>
                <h2 className='track-name'>{track}</h2>
                <p>by</p>
                <h3 className='artists-name'>{artist}</h3>        
            </div>        
            <div className='rec-preview'>
                { preview != "null" && <AudioPlayer recNum={recNum} onPlay={pauseOther} { ...videoJsOptions } />}
            </div>
        </div>
    )
}

export default Recommendation
