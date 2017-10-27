import React from 'react';
import PhotoUploaded from './PhotoUploaded';
import Editor from './Editor';

export default class SingleUploaded extends React.Component {
  render() {
    const id = this.props.uploaded.inputId;
    return(
      <div className="single-photo">
        <PhotoUploaded inputId={id} {...this.props} />
        <Editor i={id} {...this.props} />
      </div>
    );
  }
}
