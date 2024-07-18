const API_KEY = '51ac1401a56a0879573184c3149434c0';

const WEATHER_MOCK = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10d',
    },
  ],
  base: 'stations',
  main: {
    temp: 298.48,
    feels_like: 298.74,
    temp_min: 297.56,
    temp_max: 300.05,
    pressure: 1015,
    humidity: 64,
    sea_level: 1015,
    grnd_level: 933,
  },
  visibility: 10000,
  wind: {
    speed: 0.62,
    deg: 349,
    gust: 1.18,
  },
  rain: {
    '1h': 3.16,
  },
  clouds: {
    all: 100,
  },
  dt: 1661870592,
  sys: {
    type: 2,
    id: 2075663,
    country: 'IT',
    sunrise: 1661834187,
    sunset: 1661882248,
  },
  timezone: 7200,
  id: 3163858,
  name: 'Zocca',
  cod: 200,
};

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const data = WEATHER_MOCK;
  const weather = document.querySelector('#weather span:first-child');
  const city = document.querySelector('#weather span:last-child');
  city.innerText = data.name;
  weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
