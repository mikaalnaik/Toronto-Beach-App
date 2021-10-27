import React from 'react';

export default function WeatherHeader() {

  const temperature = 0;
  const windSpeed = 0;
  const windDirection = '12';
  return (
    <div>
      <div>
        {temperature}°C
      </div>
      <div>
        {windSpeed} km/h {windDirection}
      </div>
    </div>
  );
}
