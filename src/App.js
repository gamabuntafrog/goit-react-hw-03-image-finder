import "./App.css";
import React, { Component } from "react";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";

class App extends Component {
  state = {
    imageName: "",
  };

  submitForm = (form) => {
    this.setState({ imageName: form });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.submitForm} />
        <ImageGallery imageName={this.state.imageName} />
      </div>
    );
  }
}

export default App;
