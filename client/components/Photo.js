import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends React.Component {

  render() {
    const { media, i, resolution } = this.props;
    let divStyle = {
      backgroundImage: 'url(' + media.images.standard_resolution.url + ')',
      backgroundSize: 'cover'
    }
    return(
      <figure className="grid-figure">
        <Link to={`gallery/view/${media.id}`}>
          <div className="grid-photo-wrap" style={divStyle}>
            <img
              src={media.images.standard_resolution.url}
              alt=''
              className="grid-photo"
              id={`image_${i}`}
              crossOrigin="anonymous"/>
          </div>
        </Link>
      </figure>
    );
  }
}
