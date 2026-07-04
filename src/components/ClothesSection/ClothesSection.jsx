import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function ClothesSection({
  clothingItems,
  onCardClick,
  handleAddClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  // Filter to show only items added by the current user
  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser._id,
  );

  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__title">Your items</h2>
        <button
          className="clothes-section__add-button"
          onClick={handleAddClick}
        >
          + Add New Items
        </button>
      </div>

      <div className="clothes-section__cards">
        {userItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}
