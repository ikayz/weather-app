import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForecast from './components/WeatherForecast';
import './App.css';

const baseUrl = `http://localhost:3001/api/weather/current`;

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  useEffect(() => {
    const savedHistory = JSON.parse(
      localStorage.getItem('weatherSearchHistory')
    );
    if (savedHistory) {
      setSearchHistory(searchHistory);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('weatherSearchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

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

      updateSearchHistory(city, countryCode);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
      setForecastData([]);
    }
  };

  const updateSearchHistory = (city, countryCode) => {
    const newEntry = { city, countryCode };
    const updatedHistory = [
      newEntry,
      ...searchHistory.filter(entry => entry.city !== city),
    ].slice(0, 5);
    setSearchHistory(updatedHistory);
  };

  const handleHistoryClick = (city, countryCode) => {
    setSelectedCity(city);
    setSelectedCountryCode(countryCode);
    fetchWeather(city, countryCode);
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <WeatherForm
        onFetchWeather={fetchWeather}
        selectedCity={selectedCity}
        selectedCountryCode={selectedCountryCode}
      />
      <WeatherDisplay weatherData={weatherData} />
      <WeatherForecast forecastData={forecastData} />

      <h3>Search History</h3>
      <ul className="search-history">
        {searchHistory.map((entry, index) => (
          <li
            key={index}
            onClick={() => handleHistoryClick(entry.city, entry.countryCode)}
          >
            {entry.city}, {entry.countryCode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
