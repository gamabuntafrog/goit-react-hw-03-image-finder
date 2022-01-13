import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import Loader from "../Loader";
import Modal from "../Modal";
import imagesApi from "../services/images-api";

class ImageGallery extends Component {
  state = {
    images: [],
    status: "idle",
    page: 1,
    showModal: false,
    modalImage: [],
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({ status: "pending", page: 1 });

      imagesApi.fetchImages(nextName, 1).then((res) => {
        if (res.totalHits === 0) {
          this.setState({ status: "empty" });
        } else {
          this.setState({
            images: res.hits,
            totalHits: res.totalHits,
            status: "resolved",
          });
        }
      });
    }

    //если меняется page то делаю новый фетч

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevPage !== nextPage) {
      imagesApi.fetchImages(nextName, nextPage).then((res) => {
        this.setState({
          images: this.state.images.concat(res.hits),
          status: "resolved",
        });
      });
    }
  }

  openModal = (img) => {
    const modalImg = this.state.images.filter((e) => {
      return e.webformatURL === img;
    });
    this.setState({ modalImage: modalImg[0] });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  plusPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { status, images, showModal, modalImage, totalHits, page } =
      this.state;

    if (status === "idle") {
      return <div>Введите название картинки</div>;
    }

    if (status === "pending") {
      return <Loader />;
    }

    if (status === "empty") {
      return <h1>Not found :(</h1>;
    }

    if (status === "resolved") {
      return (
        <div>
          <ul className="ImageGallery">
            {images.map((img, i) => {
              return (
                <ImageGalleryItem
                  openModal={this.openModal}
                  key={i}
                  img={img.webformatURL}
                />
              );
            })}
          </ul>
          {totalHits > page * 12 && <Button onClick={this.plusPage} />}
          {showModal && (
            <Modal toggleModal={this.toggleModal}>
              <img src={modalImage.largeImageURL} alt={modalImage.tags} />
            </Modal>
          )}
        </div>
      );
    }
  }
}

export default ImageGallery;
