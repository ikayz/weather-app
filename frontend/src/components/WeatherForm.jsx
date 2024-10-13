import React, { useState } from 'react';

const WeatherForm = ({ onFetchWeather }) => {
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (city && countryCode) {
      onFetchWeather(city, countryCode);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={event => setCity(event.target.value)}
        required
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter country code"
        value={countryCode}
        onChange={event => setCountryCode(event.target.value)}
        required
      />
      <br />
      <br />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
