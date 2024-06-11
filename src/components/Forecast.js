import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Forecast = ({ city }) => {
  const [forecastData, setForecastData] = useState([]);
  const API_KEY = 'YOUR_API_KEY';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

  useEffect(() => {
    if (city) {
      axios
        .get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
          const dailyData = response.data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
          setForecastData(dailyData);
        })
        .catch(error => {
          console.error('Error fetching forecast data:', error);
        });
    }
  }, [city]);

  return (
    <div>
      <h2>5-Day Forecast</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {forecastData.map((day, index) => (
          <div key={index}>
            <h3>{new Date(day.dt_txt).toLocaleDateString()}</h3>
            <p>Temp: {day.main.temp}°C</p>
            <p>Condition: {day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
