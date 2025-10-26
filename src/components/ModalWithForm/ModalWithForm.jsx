import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__container">
          <h2 className="modal__title">New garment:</h2>
          <button type="button" className="modal__close-button"></button>
        </div>
        <form className="modal__form" id="add-garment">
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              {" "}
              Hot
              <input id="hot" type="radio" className="modal__radio-input" />
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              {" "}
              Warm
              <input id="warm" type="radio" className="modal__radio-input" />
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              {" "}
              Cold
              <input id="cold" type="radio" className="modal__radio-input" />
            </label>
          </fieldset>
          <button type="submit" className="modal__submit">
            Add Garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
