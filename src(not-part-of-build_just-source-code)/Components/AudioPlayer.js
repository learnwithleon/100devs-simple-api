import React from 'react';
import videojs from 'video.js';

export default class AudioPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vidPlayerObj: 0,
    };
  }
  
  componentDidMount() {
    // instantiate video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {

    });
    this.player.volume(.8)
    this.player.on('click',()=>{
      if(this.player.paused()){
        console.log('hello')        
      }else{
        let vidPlayerObjj = this.player.player().id();
        this.setState({
          vidPlayerObj: this.player.player().id()
        })
        console.log(vidPlayerObjj)
        this.props.onPlay(parseInt(vidPlayerObjj))
      }
    })
  }
  
  
  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }
  
  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div data-vjs-player>
        <video id={this.props.recNum} ref={node => (this.videoNode = node)} className="video-js" />
      </div>
    );
  }
}
