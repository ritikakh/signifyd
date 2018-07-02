import React, { Component } from 'react';
import ImageTile from "./image-tile";

const API_KEY = "excjsk4sGqJZ5J0iuvioKpFqYS2NOBpFKPrGYMom";

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=excjsk4sGqJZ5J0iuvioKpFqYS2NOBpFKPrGYMom')
      .then(results => {
        return results.json();
      })
      .then(({ photos = []}) => {
        this.setState({
          albums: photos.slice(0, 10)
        });
      })
  }

  render() {
    const { albums } = this.state;
    return (
      <div className="album-container">
        {albums.map((album) => {
          return (
            <ImageTile key={album.id} imageId={album.id} url={album.img_src} />
          );
        })}
      </div>
    )
  }
}

export default Album;
