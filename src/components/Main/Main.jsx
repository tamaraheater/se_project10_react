import { useContext } from "react";

import "./Main.css";

import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const Main = ({ weatherData, handleCardClick, clothingItems = [] }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  // Safety check
  const itemsToShow = Array.isArray(clothingItems) ? clothingItems : [];

  const filteredItems = itemsToShow.filter((item) => {
    return item.weather === weatherData.type;
  });

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />

      <section className="cards">
        <h2 className="cards__title">
          Today it's {weatherData.temp[currentTemperatureUnit]}°
          {currentTemperatureUnit} / You may want to wear:
        </h2>

        <ul className="cards__list">
          {filteredItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
