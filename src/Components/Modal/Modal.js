const Modal = ({ children, toggleModal }) => {
  return (
    <div
      className="Overlay"
      onClick={() => {
        toggleModal();
      }}
    >
      <div className="Modal">{children}</div>
    </div>
  );
};

export default Modal;
