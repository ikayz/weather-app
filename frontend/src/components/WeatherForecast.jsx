import React from 'react';

const WeatherForecast = ({ forecastData }) => {
  if (!forecastData || forecastData.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>16 day weather forecast</h2>
      <div className="forecast-container">
        {forecastData.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>Date: {day.date}</p>
            <p>Max Temp: {day.max_temp} degrees celsius</p>
            <p>Min Temp: {day.min_temp} degrees celsius</p>
            <p>Description: {day.description}</p>
            <p>Precipitation: {day.precip}</p>
            <p>UV Index: {day.uv_index}</p>
            <p>
              Wind: {day.wind_direction} at {day.wind_speed} m/s
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
