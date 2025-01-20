import React from 'react';
import WeatherIcons from './weatherIcons';

function WeatherDisplay({ weather }) {
  return (
    <div className="weather-display desktop animate-fade-in">
      <div className="weather-card">
        <div className="weather-header">
          <div className="location-info">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p className="date">{new Date().toLocaleDateString()}</p>
          </div>
          <WeatherIcons condition={weather.weather[0].main} className="weather-card-icon" />
        </div>
        
        <div className="weather-content">
          <div className="weather-main">
            <img
              className="animate-float"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <div className="temperature-container">
              <p className="temperature animate-scale-in">{Math.round(weather.main.temp)}°C</p>
              <p className="description">{weather.weather[0].description}</p>
            </div>
          </div>

          <div className="weather-details-grid">
            <div className="detail-card animate-slide-up">
              <h3>Humidity</h3>
              <p>{weather.main.humidity}%</p>
            </div>
            <div className="detail-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3>Wind Speed</h3>
              <p>{weather.wind.speed} m/s</p>
            </div>
            <div className="detail-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3>Pressure</h3>
              <p>{weather.main.pressure} hPa</p>
            </div>
            <div className="detail-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3>Feels Like</h3>
              <p>{Math.round(weather.main.feels_like)}°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;