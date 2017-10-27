import React from 'react';
import Photo from './Photo';
import Editor from './Editor';

export default class Single extends React.Component {
  render() {
    const { postId } = this.props.params;
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === postId);
    // get us the post
    const post = this.props.posts[i];
    return(
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Editor i={i} post={post} {...this.props} />
      </div>
    );
  }
}
