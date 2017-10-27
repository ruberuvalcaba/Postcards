import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends React.Component {

  render() {
    const { post, i, comments } = this.props;
    return(
      <figure id="gridFigure" className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`gallery/view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
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
