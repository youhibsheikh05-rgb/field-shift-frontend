import { useState } from 'react';

export default function WhatIfSliders({ onChange }) {
  const [rain, setRain] = useState(0);
  const [temp, setTemp] = useState(0);

  function updateRain(v) {
    setRain(Number(v));
    if (onChange) onChange({ rainfallChange: Number(v), temperatureChange: temp });
  }
  function updateTemp(v) {
    setTemp(Number(v));
    if (onChange) onChange({ rainfallChange: rain, temperatureChange: Number(v) });
  }

  return (
    <section className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">What-If Climate Scenario</h2>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1 text-gray-700">
          <label>Rainfall change</label>
          <span className="font-mono">{rain > 0 ? '+' : ''}{rain}%</span>
        </div>
        <input
          type="range"
          min="-50"
          max="50"
          step="5"
          value={rain}
          onChange={(e) => updateRain(e.target.value)}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1 text-gray-700">
          <label>Temperature change</label>
          <span className="font-mono">{temp > 0 ? '+' : ''}{temp}°C</span>
        </div>
        <input
          type="range"
          min="-3"
          max="5"
          step="0.5"
          value={temp}
          onChange={(e) => updateTemp(e.target.value)}
          className="w-full cursor-pointer"
        />
      </div>
      
    </section>
  );
}