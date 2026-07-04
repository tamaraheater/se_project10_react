import "./ItemModal.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ isOpen, onClose, card, onDeleteItem }) {
  const currentUser = useContext(CurrentUserContext);

  
  const isOwn = card.owner === currentUser._id;

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button"
        ></button>

        <img
          src={card.imageUrl}
          alt="Preview of Item Image"
          className="modal__image"
        />

        <div className="modal__image-footer">
          <h3 className="modal__caption">{card.name}</h3>

          {isOwn && (
            <button
              onClick={() => onDeleteItem(card)}
              type="button"
              className="modal__delete-item-button"
            >
              Delete Item
            </button>
          )}

          <h3 className="modal__weather">Weather: {card.weather}</h3>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

