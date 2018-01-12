import React from 'react';
import Photo from './Photo';
import Editor from './Editor';

export default class Single extends React.Component {

  render() {
    const localStorage_media = localStorage.getItem("media");
    const local_media = JSON.parse(localStorage_media);
    const arr_media = (local_media.length > 0) ? local_media : this.props.media;
    const { imgID } = this.props.params;
    const i = arr_media.findIndex((media) => media.id === imgID);
    const media = arr_media[i];

    return(
      <div className="single-photo">
        <Photo i={i} media={media} />
        <Editor i={i} media={media} {...this.props} />
      </div>
    );
  }
}
