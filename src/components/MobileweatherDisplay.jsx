import React from 'react';
import WeatherIcons from './weatherIcons';

function MobileWeatherDisplay({ weather }) {
  return (
    <div className="weather-display mobile animate-fade-in">
      <div className="mobile-weather-card">
        <div className="mobile-location">
          <WeatherIcons condition={weather.weather[0].main} className="mobile-weather-icon" />
          <h2>{weather.name}</h2>
          <p>{weather.sys.country}</p>
        </div>

        <div className="mobile-main-weather animate-scale-in">
          <img
            className="animate-float"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p className="temperature">{Math.round(weather.main.temp)}°C</p>
          <p className="description">{weather.weather[0].description}</p>
        </div>

        <div className="mobile-weather-details">
          <div className="detail-row animate-slide-right">
            <span>Humidity</span>
            <span>{weather.main.humidity}%</span>
          </div>
          <div className="detail-row animate-slide-left">
            <span>Wind</span>
            <span>{weather.wind.speed} m/s</span>
          </div>
          <div className="detail-row animate-slide-right">
            <span>Pressure</span>
            <span>{weather.main.pressure} hPa</span>
          </div>
          <div className="detail-row animate-slide-left">
            <span>Feels Like</span>
            <span>{Math.round(weather.main.feels_like)}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MobileWeatherDisplay;