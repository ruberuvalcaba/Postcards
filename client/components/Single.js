import React from 'react';
import Photo from './Photo';
import Editor from './Editor';
import getLocalMedia from '../config/getLocalStorageMedia.js';

export default class Single extends React.Component {
  componentDidMount() {
    if(typeof this.props.media !== 'undefined'){
      localStorage.setItem("media", JSON.stringify(this.props.media));
    }
  }

  render() {
    const local_media = getLocalMedia();
    const arr_media = (local_media !== null) ? local_media : this.props.media;
    const { imgID } = this.props.params;
    const i = arr_media.findIndex((media) => media.id === imgID);
    const media = arr_media[i];

    return(
      <div className="single-photo">
        <Photo i={i} media={media} />
        <canvas id="canvasContent" crossOrigin="anonymous" width="0" height="0"></canvas>
        <Editor i={i} media={media} {...this.props} />
      </div>
    );
  }
}
