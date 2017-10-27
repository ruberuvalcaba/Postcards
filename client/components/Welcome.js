import React from 'react';
import Photo from './Photo';
import { Link } from 'react-router'

export default class Welcome extends React.Component {
  render() {
    return(
      <div className="presentation-container">
        <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsInline autoPlay muted loop>
          <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm" />
          <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4" />
        </video>
        <h1>Postalpost</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
        <Link to="/gallery" className="btn btn-lg btn-success">Get started</Link>
      </div>
    );
  }
}
