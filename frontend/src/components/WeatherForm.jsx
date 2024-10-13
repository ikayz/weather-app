import React, { useEffect, useState } from 'react';

const WeatherForm = ({ onFetchWeather, selectedCity, selectedCountryCode }) => {
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');

  // Effect to set the city and country code based on props
  useEffect(() => {
    if (selectedCity) {
      setCity(selectedCity);
    }

    if (selectedCountryCode) {
      setCountryCode(selectedCountryCode);
    }
  }, [selectedCity, selectedCountryCode]);

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault();
    if (city && countryCode) {
      onFetchWeather(city, countryCode);
    }
  };

  // Renders the form
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={event => setCity(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter country code"
        value={countryCode}
        onChange={event => setCountryCode(event.target.value)}
        required
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
