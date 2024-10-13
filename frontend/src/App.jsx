import { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForecast from './components/WeatherForecast';
import './App.css';

const baseUrl = `http://localhost:3001/api/weather/current`;

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const fetchWeather = async (city, countryCode) => {
    try {
      const response = await axios.get(baseUrl, {
        params: { city, countryCode },
      });
      setWeatherData(response.data);

      const forecastResponse = await axios.get(
        `http://localhost:3001/api/weather/forecast`,
        {
          params: { city, countryCode },
        }
      );
      setForecastData(forecastResponse.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
      setForecastData([]);
    }
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <WeatherForm onFetchWeather={fetchWeather} />
      <WeatherDisplay weatherData={weatherData} />
      <WeatherForecast forecastData={forecastData} />
    </div>
  );
};

export default App;
