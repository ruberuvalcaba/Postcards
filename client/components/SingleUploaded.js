import React from 'react';
import PhotoUploaded from './PhotoUploaded';
import Editor from './Editor';

export default class SingleUploaded extends React.Component {
  render() {
    const id = this.props.uploadedMediaID;
    return(
      <div className="single-photo">
        <PhotoUploaded uploadedMediaID={id} {...this.props} />
        <canvas id="canvasContent" crossOrigin="anonymous" width="0" height="0"></canvas>
        <Editor i={id} {...this.props} />
      </div>
    );
  }
}
