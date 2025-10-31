import "./WeatherCard.css";
import sunny from "../../assets/sunny.svg";
// import warm  from "../../assets/warm.svg";   // <-- add the other SVGs
// import cold  from "../../assets/cold.svg";
// import hot   from "../../assets/hot.svg";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp"> {weatherData.temp.F} &deg; F </p>
      <img src={sunny} alt="sunny" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
