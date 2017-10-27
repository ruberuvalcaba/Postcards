import React from 'react';
import { Link } from 'react-router';

import mainIcon from '../assets/postalpost-icon.svg';

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  // Script to open and close sidebar
  openMenu() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
  }

  closeMenu() {
    console.log('close');
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
  }

  handleFileSelect() {
    var file = document.getElementById('imgFile').files[0]; // FileList object
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
            span.innerHTML = ['<img class="thumb" src="', e.target.result,
                          '" title="', escape(theFile.name), '"/>'].join('');
            document.getElementById('list').insertBefore(span, null);
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
    const colmd = (location.pathname !== '/') ? 'col-md-10 main' : 'col-md-12 main';
    return(
      <div className="row">
        {/* Top menu on small screens */}
        <header className="main-header">
          <span className="">POSTALPOST</span>
          <a href="javascript:void(0)" className="btn btn-default fr" onClick={this.openMenu}>☰</a>
        </header>
        {/* Sidebar/menu */}
        { (location.pathname !== '/') &&
          <nav className="col-md-2 sidebar animation-left" id="mySidebar">
            <ul className="nav nav-sidebar">
              <li><Link to="/" className=""><img src={mainIcon}/></Link></li>
              <li><Link to="/gallery" activeClassName="active">GALLERY</Link></li>
              <li><Link to="/albums" activeClassName="active">ALBUMS</Link></li>
              <li><Link to="/collections" activeClassName="active">COLLECTIONS</Link></li>
              <li><Link to="/contact" activeClassName="active">CONTACT</Link></li>
              <li className="link-upload">
                <p>Create your own Postcard now</p>
                <input type="file" id="inputFile" name="files[]" multiple />
                <Link to="/gallery/uploaded" className="btn btn-default" onClick={this.props.uploadImage.bind(null, 'inputFile')}>Upload image</Link>
              </li>
            </ul>
          </nav>
        }
        {/* Overlay effect when opening sidebar on small screens */}
        <div className="overlay animate-opacity" onClick={this.closeMenu} title="close side menu" id="myOverlay"></div>
        <div className={colmd}>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
}
