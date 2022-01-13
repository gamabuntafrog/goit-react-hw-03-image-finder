import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onClose);
  }

  onClose = (e) => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };
  render() {
    return (
      <div className="Overlay" onClick={this.onClose}>
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
