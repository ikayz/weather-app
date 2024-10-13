import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  // Checks if there is no data, display a message
  if (!weatherData) {
    return <p>No weather data available</p>;
  }

  // Destructured relevant data from the weatherData object
  const {
    temperature,
    feels_like,
    description,
    wind_speed,
    humidity,
    air_quality_index,
    city_name,
    country_code,
    observation_time,
    icon,
  } = weatherData;

  // Renders the current weather forecast to the screen
  return (
    <div className="weather-display">
      <h2>
        Current Weather in {city_name}, {country_code}
      </h2>
      <div className="weather-info">
        <img
          src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
          alt={description}
        />
        <p>
          <strong>Temperature:</strong> {temperature} degrees celsius
        </p>
        <p>
          <strong>Feels Like:</strong> {feels_like} degrees celsius
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Wind Speed:</strong> {wind_speed} m/s
        </p>
        <p>
          <strong>Humidity:</strong> {humidity} %
        </p>
        <p>
          <strong>Air Quality Index:</strong> {air_quality_index}
        </p>
        <p>
          <strong>Observation Time:</strong> {observation_time}
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
