import React from 'react';
import Photo from './Photo';
import getLocalMedia from '../config/getLocalStorageMedia.js';

export default class Gallery extends React.Component {

  componentWillMount() {
    if(typeof localStorage.getItem('media') === 'undefined') {
      this.props.getMedia('./getMedia');
    }
  }

  render() {
    const local_media = getLocalMedia();
    const media = (local_media.length > 0) ? local_media : this.props.media;
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
