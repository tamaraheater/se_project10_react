import { useForm } from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = {
    name: "",
    link: "",
    weatherType: "",
  };
  const { values, handleChange } = useForm(defaultValues);
  function handleSubmit(evt) {}

  return (
    <ModalWithForm
      title="New garment:"
      name="new-card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onAddItem}
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
          name="link"
          className="modal__input modal__input_type_url"
          id="imageUrl"
          placeholder="Image URL"
          required
          value={values.link}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          {" "}
          <input
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
