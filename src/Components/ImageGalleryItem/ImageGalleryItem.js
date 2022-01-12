const ImageGalleryItem = ({ img, openModal }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => {
        openModal(img);
      }}
    >
      <img className="ImageGalleryItem-image" src={img} />
    </li>
  );
};

export default ImageGalleryItem;
