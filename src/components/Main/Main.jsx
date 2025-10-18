import WeatherCard from "../WeatherCard/WeatherCard";

function Main() {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <h2 className="cards__title">
          Today is 75 &deg; F / You may want to wear:
        </h2>
        {/*cards*/}
      </section>
    </main>
  );
}

export default Main;
