import React from 'react';
import { Link } from 'react-router';

import mainIcon from '../assets/postalpost-icon.svg';

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fileInputName: "Select a file...",
      showUploadBtn: false
    };
    this.fileInputIndex = 0;
    this.fileInputID = "fileInput";
    this.onChnageFileInput = this.onChnageFileInput.bind(this);
    this.callUploadImage = this.callUploadImage.bind(this);
  }

  // Script to open and close sidebar
  openMenu() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
  }

  closeMenu() {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
  }

  onChnageFileInput(e) {
    let fileName = e.target.value.split("\\");
        fileName = fileName[fileName.length - 1];
    this.setState({
      fileInputName: `File: ${fileName}`,
      showUploadBtn: true
    });
  }

  callUploadImage() {
    let fileInputID = `${this.fileInputID}_${this.fileInputIndex}`;
    let media = document.getElementById(fileInputID).files[0] || null;
    this.setState({
      fileInputName: "Select a file...",
      showUploadBtn: false
    }, this.fileInputIndex ++);
    this.props.uploadImage(media);
  }

  render() {
    const { fileInputName, showUploadBtn } = this.state;
    const fileInputID = `${this.fileInputID}_${this.fileInputIndex}`;
    const colmd = (location.pathname !== '/') ? 'col-md-10 main' : 'col-md-12 main';
    return(
      <div className="row">
        {/* Top menu on small screens */}
        <header className="main-header">
          <span className="">PODCARDS</span>
          <a href="javascript:void(0)" className="btn btn-default fr" onClick={this.openMenu}>☰</a>
        </header>
        {/* Sidebar/menu */}
        { (location.pathname !== '/') &&
          <nav className="col-md-2 sidebar animation-left" id="mySidebar">
            <ul className="nav nav-sidebar">
              <li>
                <Link to="/">
                  <p className="app-title">PodCard</p>
                  <img className="app-icon" src={mainIcon}/>
                </Link>
              </li>
              <li><Link to="/gallery" activeClassName="active">GALLERY</Link></li>
              <li><Link to="/albums" activeClassName="active">ALBUMS</Link></li>
              <li><Link to="/collections" activeClassName="active">COLLECTIONS</Link></li>
              <li><Link to="/contact" activeClassName="active">CONTACT</Link></li>
              <li className="link-upload">
                <p>Create your own Postcard now</p>
                <div className="link-upload-content">
                  <input type="file" id={fileInputID} name="files[]" className="input-file" multiple onChange={this.onChnageFileInput}/>
                  <label htmlFor={fileInputID} className="input-file-trigger btn btn-default">{ fileInputName }</label>
                  { showUploadBtn &&
                    <Link to={{
                        pathname: '/uploaded',
                        search: '?utm=your+face'
                      }}
                      onClick={this.callUploadImage}>
                      <span className="link-upload-arrow" aria-hidden="true"></span>
                    </Link>
                  }
                </div>
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
