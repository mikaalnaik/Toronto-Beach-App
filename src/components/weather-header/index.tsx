import React from 'react';
import styles from './style.module.scss';

export default function WeatherHeader({ weather }) {
  const temperature = weather.temp_c;
  const windSpeed = weather.wind_kph;
  const windDirection = weather.wind_dir;

  return (
    <div className={styles['weather-stats']}>
      <div>
        {temperature}°C
      </div>
      <div>
        {windSpeed} km/h {windDirection}
      </div>
    </div>
  );
}
