import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({
  clothingItems,
  onCardClick,
  handleAddClick,
}) {
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
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}
