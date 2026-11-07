import { useState } from 'react';

export default function RotationInput({ onChange }) {
  const [crops, setCrops] = useState([{ name: '', month: '' }]);

  function update(index, field, value) {
    const next = crops.map((c, i) => (i === index ? { ...c, [field]: value } : c));
    setCrops(next);
    if (onChange) onChange(next);
  }

  function addCrop() {
    const next = [...crops, { name: '', month: '' }];
    setCrops(next);
    if (onChange) onChange(next);
  }

  function removeCrop(index) {
    const next = crops.filter((_, i) => i !== index);
    setCrops(next);
    if (onChange) onChange(next);
  }

  return (
    <section className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Your Current Crop Rotation</h2>
      {crops.map((crop, i) => (
        <div key={i} className="flex flex-wrap gap-2 mb-2">
          <input
            type="text"
            placeholder="Crop name (e.g., Rice)"
            value={crop.name}
            onChange={(e) => update(i, 'name', e.target.value)}
            className="flex-1 min-w-[150px] border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Month"
            value={crop.month}
            onChange={(e) => update(i, 'month', e.target.value)}
            className="w-32 border border-gray-300 rounded px-3 py-2"
          />
          <button
            onClick={() => removeCrop(i)}
            className="bg-red-100 text-red-700 px-3 py-2 rounded hover:bg-red-200"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addCrop}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + Add Crop
      </button>
    </section>
  );
}