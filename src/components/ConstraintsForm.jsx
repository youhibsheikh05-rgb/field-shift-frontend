import { useState } from 'react';

export default function ConstraintsForm({ onChange }) {
  const [data, setData] = useState({
    water_availability: '',
    equipment: '',
    crops_to_avoid: '',
  });

  function update(field, value) {
    const next = { ...data, [field]: value };
    setData(next);
    if (onChange) onChange(next);
  }

  return (
    <section className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Your Farming Constraints</h2>
      
      <div className="mb-3">
        <label className="block text-sm text-gray-700 mb-1">Water availability</label>
        <input
          type="text"
          placeholder="e.g., Limited canal water"
          value={data.water_availability}
          onChange={(e) => update('water_availability', e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm text-gray-700 mb-1">Equipment you have</label>
        <input
          type="text"
          placeholder="e.g., Tractor, tubewell"
          value={data.equipment}
          onChange={(e) => update('equipment', e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm text-gray-700 mb-1">Crops you cannot grow</label>
        <input
          type="text"
          placeholder="e.g., Sugarcane"
          value={data.crops_to_avoid}
          onChange={(e) => update('crops_to_avoid', e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
    </section>
  );
}