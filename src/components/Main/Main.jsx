import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function Main({ weatherData }) {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <h2 className="cards__title">
          Today is 75 &deg; F / You may want to wear:
        </h2>
        <ul className="cards__list">
          {defaultClothingItems
            // .filter((item) => {
            //   return item.weather === weatherData.type;
            // })
            .map((item) => {
              return <ItemCard key={item._id} item={item} />; /*Props*/
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
