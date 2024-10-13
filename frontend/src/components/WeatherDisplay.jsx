import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <h2>
        Weather in {weatherData.city_name}, {weatherData.country_code}
      </h2>
      <p>Temperature: {weatherData.temperature} degrees celsius</p>
      <p>Feels Like: {weatherData.feels_like} degrees celsius</p>
      <p>Description: {weatherData.description}</p>
      <p>Wind Speed: {weatherData.wind_speed} m/s</p>
      <p>Humidity: {weatherData.humidity} %</p>
      <p>Air Quality Index: {weatherData.air_quality_index}</p>
      <p>Observation Time: {weatherData.observation_time}</p>
    </div>
  );
};

export default WeatherDisplay;
