import { useState } from 'react';

const PRIORITIES = [
  { key: 'soil_health', label: 'Soil health' },
  { key: 'water_saving', label: 'Water saving' },
  { key: 'pest_cycle', label: 'Pest-cycle interruption' },
  { key: 'income', label: 'Income' },
  { key: 'low_labour', label: 'Low labour / equipment' },
];

export default function PrioritySliders({ onChange }) {
  const initial = PRIORITIES.reduce((acc, p) => ({ ...acc, [p.key]: 0.5 }), {});
  const [values, setValues] = useState(initial);

  function update(key, val) {
    const next = { ...values, [key]: Number(val) };
    setValues(next);
    if (onChange) onChange(next);
  }

  return (
    <section className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">What matters most to you?</h2>
      {PRIORITIES.map((p) => (
        <div key={p.key} className="mb-4">
          <div className="flex justify-between text-sm mb-1 text-gray-700">
            <label>{p.label}</label>
            <span className="font-mono">{values[p.key].toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={values[p.key]}
            onChange={(e) => update(p.key, e.target.value)}
            className="w-full cursor-pointer"
          />
        </div>
      ))}
    </section>
  );
}