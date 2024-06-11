import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'YOUR_API_KEY';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  useEffect(() => {
    if (city) {
      axios
        .get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [city]);

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Current Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Condition: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Weather;
