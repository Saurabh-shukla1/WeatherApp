
import React from 'react';
import WeatherIcons from './weatherIcons';

function Header({ weatherCondition }) {
    return (
      <header className="header">
        <div className="header-content">
          <WeatherIcons 
            condition={weatherCondition} 
            className="header-icon"
          />
          <h1>Weather App</h1>
        </div>
      </header>
    );
  }

export default Header;