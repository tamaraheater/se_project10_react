import { coordinates, APIkey } from "./constants";

export const getWeather = () => {
  return fetch(
   `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  return {
    city: data.name,
    temp: { F: data.main.temp },
    type: getWeatherType(data.main.temp),
  };
};

const getWeatherType = (temp) => {
  if (temp >= 86) return "hot";
  if (temp >= 66) return "warm";
  return "cold";
};
