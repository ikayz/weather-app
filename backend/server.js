require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;
const cors = require('cors');

const baseUrl = `https://api.weatherbit.io/v2.0/current`;
const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily`;

app.use(cors());

app.use(express.json());

app.get('/api/weather/current', async (req, res) => {
  const { city, countryCode } = req.query;
  const apiKey = process.env.WEATHERBIT_API_KEY;

  try {
    const response = await axios.get(baseUrl, {
      params: {
        city: city,
        country: countryCode,
        key: apiKey,
      },
    });

    const weatherData = response.data.data[0];

    res.json({
      temperature: weatherData.temp,
      feels_like: weatherData.app_temp,
      description: weatherData.weather.description,
      wind_speed: weatherData.wind_spd,
      humidity: weatherData.rh,
      air_quality_index: weatherData.aqi,
      city_name: weatherData.city_name,
      country_code: weatherData.country_code,
      observation_time: weatherData.ob_time,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
});

app.get('/api/weather/forecast', async (req, res) => {
  const { city, countryCode } = req.query;
  const apiKey = process.env.WEATHERBIT_API_KEY;

  try {
    const response = await axios.get(forecastUrl, {
      params: {
        city: city,
        country: countryCode,
        key: apiKey,
      },
    });

    const forecastData = response.data.data.map(day => ({
      date: day.datetime,
      max_temp: day.max_temp,
      min_temp: day.min_temp,
      description: day.weather.description,
      precipitation: day.precip,
      uv_index: day.uv,
      wind_direction: day_wind_cdir_full,
      wind_speed: day.wind_spd,
    }));

    res.json(forecastData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch weather forecast data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
