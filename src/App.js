import React, { useState } from 'react';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [city, setCity] = useState('London');

  const handleSearch = city => {
    setCity(city);
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <SearchBar onSearch={handleSearch} />
      <Weather city={city} />
      <Forecast city={city} />
    </div>
  );
};

export default App;
