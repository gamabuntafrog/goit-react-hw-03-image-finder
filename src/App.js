import "./App.css";
import React, { Component } from "react";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import Modal from "./Components/Modal";

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
        {/* onClick={this.setState({ showModal: !this.state.showModal})} був пропом в модалці */}
        {/* спробувати перенести images в app, як і модалку */}
      </div>
    );
  }
}

export default App;
