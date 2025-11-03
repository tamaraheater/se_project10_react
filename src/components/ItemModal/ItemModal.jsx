import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button"
        ></button>
        <img src={card.link} alt="" className="modal__image" />
        <div className="modal__image-footer">
          <h3 className="modal__caption">{card.name}</h3>
          <h3 className="modal__weather">Weather: {card.weather}</h3>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
