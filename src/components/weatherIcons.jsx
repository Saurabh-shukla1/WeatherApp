
import React from 'react';

const WeatherIcons = ({ condition, className = '' }) => {
  const renderIcon = () => {
    switch (condition?.toLowerCase()) {
      case 'clear':
        return (
          <div className={`weather-icon-container ${className}`}>
            <div className="sun">
              <div className="rays"></div>
            </div>
          </div>
        );
      case 'clouds':
        return (
          <div className={`weather-icon-container ${className}`}>
            <div className="cloud"></div>
            <div className="cloud small"></div>
          </div>
        );
      case 'rain':
      case 'drizzle':
        return (
          <div className={`weather-icon-container ${className}`}>
            <div className="cloud"></div>
            <div className="rain"></div>
          </div>
        );
      case 'thunderstorm':
        return (
          <div className={`weather-icon-container ${className}`}>
            <div className="cloud"></div>
            <div className="lightning"></div>
          </div>
        );
      case 'snow':
        return (
          <div className={`weather-icon-container ${className}`}>
            <div className="cloud"></div>
            <div className="snow-particles"></div>
          </div>
        );
      default:
        return (
          <div className={`weather-icon-container ${className}`}>
            <div className="cloud"></div>
          </div>
        );
    }
  };

  return renderIcon();
};

export default WeatherIcons;