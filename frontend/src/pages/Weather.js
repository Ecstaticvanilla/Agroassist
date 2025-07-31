import React from 'react';

const Weather = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Weather Forecast</h2>
      {/* Weather Widget */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Current Weather</h3>
        {/* Weather data will go here */}
        <p>Weather data will be displayed here. (Placeholder)</p>
      </div>
    </div>
  );
};

export default Weather;
