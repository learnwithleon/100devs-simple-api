import React from 'react'
import { Slider, RangeSlider } from 'rsuite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeDown } from '@fortawesome/free-solid-svg-icons'

function VolumeSlider() {
    
    return (
        <div className='container slider'>
                <FontAwesomeIcon icon={faVolumeDown} />
                <Slider progress defaultValue={80} onChange={value => {
                    let volume = document.querySelector('.rs-tooltip-inner').innerHTML;
                    volume = parseInt(volume);
                    let slider = document.querySelector('.rs-slider-handle');
                  //   let style = window.getComputedStyle(slider, '::before')
                  //   style.style.left = toString(volume*2) 
                  //   console.log(slider)
                  //   slider.style.left = toString(volume*2) 
                 }}
                />
                <FontAwesomeIcon icon={faVolumeUp} />
        </div>
    )
}

export default VolumeSlider
