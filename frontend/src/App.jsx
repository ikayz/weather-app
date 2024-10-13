import { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

const baseUrl = `http://localhost:3001/api/weather/current`;

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city, countryCode) => {
    try {
      const response = await axios.get(baseUrl, {
        params: { city, countryCode },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <WeatherForm onFetchWeather={fetchWeather} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
