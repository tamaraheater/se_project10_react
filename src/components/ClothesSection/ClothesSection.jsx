import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";


export default function ClothesSection({
    clothingItems,
    weatherData,
    onCardClick,
}) {
    return (
      <div className="clothes-section">
        <div>
            <p>Text</p>
            <button>BUTTON</button>
        </div>
        <ul className="cloths-section__items">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                />
              );
            })}
        </ul>
      </div>
    );    
}