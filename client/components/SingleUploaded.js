import React from 'react';
import { Redirect } from 'react-router';
import PhotoUploaded from './PhotoUploaded';
import Editor from './Editor';
import LoadingPage from './LoadingPage';
import { addReloadListener, removeReloadListener } from '../util/onBeforeUnload.js';

export default class SingleUploaded extends React.Component {

  componentWillMount() {
    if(typeof this.props.uploadedMedia === 'undefined') {
      const { history } = this.props;
       history.push('/users');
    }
    addReloadListener();
  }

  render() {
    const file = this.props.uploadedMedia;
    if(typeof file !== 'undefined' && file.name) {
      const id = file.lastModified;
      return(
        <div className="single-photo">
          <PhotoUploaded
            file={file}
            id={id}
          />
          <canvas id="canvasContent" crossOrigin="anonymous" width="0" height="0"></canvas>
          <Editor i={id} {...this.props} />
        </div>
      );
    } else {
      return <LoadingPage />;
    }
  }

  componentWillUnmount() {
    removeReloadListener();
  }
}
