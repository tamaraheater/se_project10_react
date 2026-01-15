function ConfirmDeleteModal({ isOpen, onClose, onConfirm, cardName }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_confirm">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button"
        ></button>

        <div className="modal__confirm-content">
          <p className="modal__confirm-text">
            Are you sure you want to delete <br />
            This action is irreversible.
          </p>
        </div>

        <div className="modal__confirm-buttons">
          <button
            className="modal__confirm-delete-button"
            onClick={onConfirm}
            type="button"
          >
            Yes, delete item
          </button>

          <button
            className="modal__confirm-cancel-button"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
