import React from 'react';

const WeatherForecast = ({ forecastData }) => {
  // Checks If there is no forecast data or it's an empty array, return null
  if (!forecastData || forecastData.length === 0) {
    return null;
  }

  // Renders the 16 day weather forecast
  return (
    <div>
      <h2>16 day weather forecast</h2>
      <div className="forecast-container">
        {forecastData.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>
              <strong>Date:</strong> {day.date}
            </p>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${day.icon}.png`}
              alt={day.description}
              style={{ width: '50px', height: '50px' }}
            />
            <p>
              <strong>Max Temp:</strong> {day.max_temp} degrees celsius
            </p>
            <p>
              <strong>Min Temp:</strong> {day.min_temp} degrees celsius
            </p>
            <p>
              <strong>Description:</strong> {day.description}
            </p>
            <p>
              <strong>Precipitation:</strong> {day.precip}
            </p>
            <p>
              <strong>UV Index:</strong> {day.uv_index}
            </p>
            <p>
              <strong>Wind:</strong> {day.wind_direction} at {day.wind_speed}{' '}
              m/s
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
