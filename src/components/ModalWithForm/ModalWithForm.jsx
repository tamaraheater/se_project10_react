import "./ModalWithForm.css";

const ModalWithForm = ({ 
  title,
  name,
  buttonText,
  onClose, 
  children,
  isOpen, 
  onSubmit,     
}) => {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button"
        ></button>
        <form onSubmit={onSubmit} className="modal__form" name={name}>
          {children}
          <button          
          type="submit" 
          className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
