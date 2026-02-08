import { useEffect } from "react";
import { useForm } from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weatherType: "",
  };
  const { values, handleChange, handleReset } = useForm(defaultValues);
  

  useEffect(() => {
    if (isOpen) {
      handleReset();
    }
  }, [isOpen, handleReset]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values, handleReset);
  }

  return (
    <ModalWithForm
      buttonText="Add Garment"
      title="New garment:"
      name="new-card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          name="name"
          className="modal__input modal__input-type_card-name"
          id="name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          className="modal__input modal__input_type_url"
          id="imageUrl"
          placeholder="Image URL"
          required
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          {" "}
          <input
            checked={values.weatherType === "hot"}
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="weatherType"
            value="hot"
            onChange={handleChange}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          {" "}
          <input
            checked={values.weatherType === "warm"}
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="weatherType"
            value="warm"
            onChange={handleChange}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          {" "}
          <input
            checked={values.weatherType === "cold"}
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="weatherType"
            value="cold"
            onChange={handleChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
