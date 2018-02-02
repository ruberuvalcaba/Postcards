import React from 'react';
import Photo from './Photo';
import Editor from './Editor';
import LoadingPage from './LoadingPage';
import { addReloadListener, removeReloadListener } from '../util/onBeforeUnload.js';

export default class Single extends React.Component {

  componentWillMount() {
    addReloadListener();
  }

  render() {
    const arr_media = this.props.media || [];
    const { imgID } = this.props.params;
    const i = arr_media.findIndex((media) => media.id === imgID);
    const media = arr_media[i];
    if(media) {
      return(
        <div className="single-photo">
            <Photo i={i} media={media} />
            <canvas id="canvasContent" crossOrigin="anonymous" width="0" height="0"></canvas>
            <Editor i={i} media={media} {...this.props} />
        </div>
      );
    }else {
      return <LoadingPage />;
    }
  }

  componentWillUnmount() {
    removeReloadListener();
  }
}
