import React from 'react';
import Photo from './Photo';

export default class Gallery extends React.Component {
  render() {
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
