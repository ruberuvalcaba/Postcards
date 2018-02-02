import React from 'react';

export default class PhotoUploaded extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.uploadedMediaID !== this.props.uploadedMediaID) return true;
  //   else return false;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextProps.uploadedMediaID !== this.props.uploadedMediaID) return true;
  //   else return false;
  // }

  handleFileSelect() {
    let parentNode = document.getElementById("loadImg")
    if(parentNode !== null) {
      let last;
      while (last = parentNode.lastChild) parentNode.removeChild(last);
    }
    //let id = this.props.params.imgID;
    //let file = document.getElementById(id).files[0]; // FileList object
    const { file, id } = this.props;
   // Loop through the FileList and render image files as thumbnails.
   //for (var i = 0, f; f = files[i]; i++) {
     // Only process image files.
     if (file.type.match('image.*')) {
       let reader = new FileReader();
       // Closure to capture the file information.
      reader.onload = (theFile => {
         return (e) => {
            // Render thumbnail.
            let span = document.createElement('div');
            span.innerHTML = ['<img class="grid-photo" src="', e.target.result,
                          '" title="', escape(theFile.name), '" alt="', escape(theFile.name), '" id="image_',id,'" crossOrigin="anonymous" /> '].join('');
            document.getElementById('loadImg').insertBefore(span, null);
          };
        })(file);
        // Read in the image file as a data URL.
        reader.readAsDataURL(file);
     } else {
       alert('Select an image');
     }
  //  }
  }

  render() {
    return(
      <figure className="grid-figure">
        <div className="grid-photo-wrap" id="loadImg">
          {this.handleFileSelect()}
        </div>
      </figure>
    );
  }
}
