import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends React.Component {

  render() {
    const { media, i, resolution } = this.props;
    return(
      <figure id="gridFigure" className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`gallery/view/${media.id}`}>
            <img
              src={media.images.standard_resolution.url}
              alt=''
              className="grid-photo"
              id={`image_${i}`}
              crossOrigin="anonymous"/>
          </Link>
          <canvas id="myCanvas" crossOrigin="anonymous" width="0" height="0"></canvas>
        </div>
      </figure>
    );
  }
}
