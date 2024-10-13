require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;
const cors = require('cors');

const baseUrl = `https://api.weatherbit.io/v2.0/current`;

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
