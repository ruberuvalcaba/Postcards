import React from 'react';
import Photo from './Photo';

export default class Gallery extends React.Component {

  componentWillMount() {
    if(typeof localStorage.getItem('media') === 'undefined') {
      this.props.getMedia('./getMedia');
    }
  }

  render() {
    const localStorage_media = localStorage.getItem("media");
    const local_media = JSON.parse(localStorage_media);
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
