import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close-button"></button>
        <form>{children}</form>
        <button type="submit" className="modal__submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
