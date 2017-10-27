import React from 'react';
import instagramNode from '../assets/instagram_svg.svg';

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.reset = this.reset.bind(this);
    this.download = this.download.bind(this);
    this.createCanvas = this.createCanvas.bind(this);
    this.defaultValues = [
      {name: 'grayscale', value: 0, sizing: '%'},
      {name: 'contrast', value: 100, sizing: '%'},
      {name: 'exposure', value: 100, sizing: '%'},
      {name: 'hueRotate', value: 0, sizing: 'deg'},
      {name: 'opacity', value: 100, sizing: '%'},
      {name: 'invert', value: 0, sizing: '%'},
      {name: 'saturate', value: 1, sizing: ''},
      {name: 'sepia', value: 0, sizing: '%'}
    ];
    this.customeValues = [];
    this.state = {
      editorClass: 'editor'
    }
  }
  componentWillMount() {
    this.reset();
  }

  handleUpdate(e) {
    const sizing = e.target.dataset.sizing || '';
    const value = e.target.value;
    const name = e.target.name;
    document.documentElement.style.setProperty(`--${name}`, value + sizing);
  }

  reset() {
    for(let origin in this.defaultValues) {
      let current = this.defaultValues[origin];
      document.documentElement.style.setProperty(`--${current.name}`, current.value + current.sizing);
    }
  }

  createCanvas() {
    let [x, y, footer] = [0];
    //let [x, y, tx, ty] = [0, 0, 0, 0];
    let canvas = document.getElementById("myCanvas");
    //let instagramNode = document.getElementById("instagram");
    let imgID = `image_${this.props.i}`;
    let img = document.getElementById(imgID);
    let filterStyle = window.getComputedStyle(img, null).getPropertyValue('filter');
    let text = this.refs.cText.value;

    if(img.width === img.height) {
      x = 30;
      y = 30;
      footer = 60;
    } else if (img.width > img.height) {
      x = 30;
      y = 40;
      footer = 60;
      //[x, y, tx, ty] = [40, 30, 0, 60];
    } else {
      x = 30;
      y = 10;
      footer = 80;
      //[x, y, tx, ty] = [30, 5, 0, 60];
    }
    canvas.setAttribute('width', img.width + 200);
    canvas.setAttribute('height', img.height + footer);
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff"
    ctx.fillRect(0, 0, img.width + 200, img.height + footer);
    ctx.filter = filterStyle;
    //canvas.style.border = borderStyle;
    ctx.drawImage(img, x, y, img.width - (x * 2), img.height - (y * 2));
    let instagramImg = new Image();
    instagramImg.src = instagramNode;
    instagramImg.onload = () => {
    	ctx.drawImage(instagramImg, canvas.width - 110, (canvas.height) - ((footer + y) / 2 - 10), 20, 20);
    }

    ctx.fillStyle = "#B1B0B0";
    ctx.font = "italic 15px Gill Sans";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    ctx.fillText(text, canvas.width / 2 , (canvas.height) - ((footer + y) / 2 + 10));
    ctx.fillText("R U B E N • F L O R E S", canvas.width / 2 , (canvas.height) - ((footer + y) / 2 - 20));
    ctx.fillText("Rubnsom", canvas.width - 60, (canvas.height) - ((footer + y) / 2 - 20))
    img.classList.add('hidden');
    this.setState({
      editorClass: 'ditor hidden'
    });

    this.download(canvas);
  }

  download(canvas) {
    let download = document.getElementById("download");
		let image = canvas.toDataURL("image/jpeg");
		download.setAttribute("href", image);
  }

  render() {
    return(
      <div className={this.state.editorClass}>
        <form ref="editorForm" className="edit-form">
          <div className="form-group">
            <span htmlFor="grayscale">Grayscale</span>
            <input type="range" name="grayscale" className="editor-range" onChange={this.handleUpdate} onMouseMove={this.handleUpdate} min="0" max="100" defaultValue="0" data-sizing="%"/>
          </div>
          <div className="form-group">
            <span htmlFor="contrast">Contrast</span>
            <input type="range" name="contrast" className="editor-range" onChange={this.handleUpdate} min="10" max="200" defaultValue="100" data-sizing="%" />
          </div>
          <div className="form-group">
            <span htmlFor="exposure">Exposure</span>
            <input type="range" name="exposure" className="editor-range" onChange={this.handleUpdate} min="40" max="250" defaultValue="100" data-sizing="%" />
          </div>
          <div className="form-group">
            <span htmlFor="hueRotate">Hue Rotate</span>
            <input type="range" name="hueRotate" className="editor-range" onChange={this.handleUpdate} min="0" max="340" defaultValue="0" data-sizing="deg" />
          </div>
          <div className="form-group">
            <span htmlFor="opacity">Opacity</span>
            <input type="range" name="opacity" className="editor-range" onChange={this.handleUpdate} min="10" max="100" defaultValue="100" data-sizing="%" />
          </div>
          <div className="form-group">
            <span htmlFor="invert">Invert</span>
            <input type="range" name="invert" className="editor-range" onChange={this.handleUpdate} min="0" max="100" defaultValue="0" data-sizing="%" />
          </div>
          <div className="form-group">
            <span htmlFor="saturate">Saturate</span>
            <input type="range" name="saturate" className="editor-range" onChange={this.handleUpdate} min="0" max="15" defaultValue="1" />
          </div>
          <div className="form-group">
            <span htmlFor="sepia">Sepia</span>
            <input type="range" name="sepia" className="editor-range" onChange={this.handleUpdate} min="0" max="100" defaultValue="0" data-sizing="%" />
          </div>
          <div className="form-group">
            <span htmlFor="sepia">Custom Text</span>
            <textarea className="form-control" ref="cText" maxLength="50"></textarea>
          </div>

          <button  className="btn btn-default fl" onClick={this.reset}>Reset</button>
          <a id="download" download="postalpost.jpg"><button className="btn btn-success fr" type="button" onClick={this.createCanvas}>Export</button></a>

        </form>
      </div>
    );
  }
}
export default Editor;
