import React, { Component } from "react";
import "./App.css";

// This URL can be combined with an photo id to fetch an photo.
const PHOTO_URL = photoId => `https://picsum.photos/id/${photoId}/200/200`;
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

class App extends Component {
  // 1. Declare a state object that will be used to track an array of photos
  state = {
    photos: []
  };

  componentDidMount() {
    fetch(PHOTO_LIST_URL)
      .then(response => response.json())
      .then(responseBody => {
        console.log(responseBody);
        this.setState({ photos: responseBody });
      });
  }
  // 2. Declare a life cycle method
  // This life cycle method should:
  //  - will be called after the component is initially rendered
  // - will fetch an array of photos
  // - will add that array of photos to state once received
  render() {
    const { photos = [] } = this.state;
    return (
      <React.Fragment>
        <header>
          <h1 className="header">Photo Wall</h1>
        </header>
        <div className="collage">
          {photos.map(photo => (
            <img
              alt={photo.filename}
              key={photo.id}
              src={PHOTO_URL(photo.id)}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
