import React, { Component } from 'react';

class ImageTile extends Component {
  render() {

    const { imageId, url } = this.props;

    return (
      <div className="image-container">
        <div className="Imagetile">
          <img src={url} width= "200px" height="200px"/>
        </div>
        <div>
          <label>{imageId}</label>
        </div>
        <div>
          <button className="open-button"><a className="a-button" href={url} target="_blank">Open</a></button>
        </div>
      </div>
    )
  }
}

export default ImageTile;
