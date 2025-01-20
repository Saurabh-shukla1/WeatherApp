
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WeatherDisplay from './components/WeatherDisplay';
import MobileweatherDisplay from './components/MobileweatherDisplay';
import './App.css';



const API_KEY = 'cb845159d45b4dd399a8db243997f733';
const API_URL = 'https://api.openweathermap.org/data/2.5';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('varanasi');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [city]); // Fetch weather when city changes


  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  const getBackgroundClass = () => {
    if (!weather) return 'bg-default';
    const condition = weather.weather[0].main.toLowerCase();
    switch (condition) {
      case 'clear':
        return 'bg-clear';
      case 'clouds':
        return 'bg-cloudy';
      case 'rain':
      case 'drizzle':
        return 'bg-rainy';
      case 'thunderstorm':
        return 'bg-storm';
      case 'snow':
        return 'bg-snow';
      default:
        return 'bg-default';
    }
  };
  return (
    <div className={`app ${getBackgroundClass()}`}>
      <Header weatherCondition={weather?.weather?.[0]?.main} />
      <main className="main-content">
        <div className="search-box animate-slide-down">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="search-input"
          />
          <button onClick={fetchWeather} className="search-button">
            Search
          </button>
        </div>
        {loading && <div className="loading animate-fade-in">Loading...</div>}
        {error && <div className="error animate-shake">{error}</div>}
        {weather && (
          isMobile ? 
            <MobileweatherDisplay weather={weather} /> :
            <WeatherDisplay weather={weather} />
        )}
      </main>
      <Footer />
    </div>
  
);
}

export default App;









