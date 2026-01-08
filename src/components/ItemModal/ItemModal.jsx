import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button"
        ></button>
        <img src={card.imageUrl} alt="Preview Image" className="modal__image" />
        <div className="modal__image-footer">
          <h3 className="modal__caption">{card.name}</h3>
          <h3 className="modal__weather">Weather: {card.weather}</h3>
        </div>
        <button
          onClick={() => onDelete(card)}
          type="button"
          className="modal__delete-item-button"
        >
          Delete Item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
