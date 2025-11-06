import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData, handleCardClick,clothingItems }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <h2 className="cards__title">
          Today is {weatherData.temp.F.toFixed(0)} &deg; F / You may want to
          wear:
        </h2>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                /> /*Props*/
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
