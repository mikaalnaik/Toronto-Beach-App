import fetch from 'node-fetch';

const getWeather = async () => {
  const weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=toronto`)
    .then(r => r.json());
  return weather;
};

export default getWeather;
