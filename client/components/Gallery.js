import React from 'react';
import Photo from './Photo';
import getLocalMedia from '../config/getLocalStorageMedia.js';

export default class Gallery extends React.Component {

  componentWillMount() {
    //if(getLocalMedia() === null) {
      this.props.getMedia('./getMedia');
    //}
  }

  render() {
    //const local_media = getLocalMedia();
    //const media = (local_media !== null) ? local_media : this.props.media;
    const media = this.props.media;
    return (
      <div>
        { media  &&
          <div className="photo-grid">
            {media.map((media, i) => <Photo {...this.props} key={i} i={i} media={media} />)}
          </div>
        }
      </div>
    );
  }
}
