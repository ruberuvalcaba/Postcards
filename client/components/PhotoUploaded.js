import React from 'react';
import { Link } from 'react-router';

export default class PhotoUploaded extends React.Component {
  
  componentWillMount() {
    if(typeof this.props.inputId === 'undefined'){
      this.props.history.push('/gallery');
    }
  }

  handleFileSelect() {
    let id = this.props.inputId;
    let file = document.getElementById(id).files[0]; // FileList object
   // Loop through the FileList and render image files as thumbnails.
   //for (var i = 0, f; f = files[i]; i++) {
     // Only process image files.
     if (file.type.match('image.*')) {
       let reader = new FileReader();
       // Closure to capture the file information.
      reader.onload = (theFile => {
         return (e) => {
            // Render thumbnail.
            let span = document.createElement('span');
            span.innerHTML = ['<img class="grid-photo" src="', e.target.result,
                          '" title="', escape(theFile.name), '" alt="', escape(theFile.name), '" id="image_',id,'" crossOrigin="anonymous" /> '].join('');
            document.getElementById('loadImg').insertBefore(span, null);
          };
        })(file);
        // Read in the image file as a data URL.
        reader.readAsDataURL(file);
     } else {
       alert('Try again');
     }
  //  }
  }

  render() {
    return(
      <figure id="gridFigure" className="grid-figure">
        <div className="grid-photo-wrap" id="loadImg">
          {this.handleFileSelect()}
          <canvas id="myCanvas" crossOrigin="anonymous" width="0" height="0"></canvas>
        </div>
      </figure>
    );
  }
}
