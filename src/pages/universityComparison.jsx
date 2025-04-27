import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UniversityComparison() {
  const [selected, setSelected] = useState('');
  const [universities, setUniversities] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleAdd = () => {
    if (selected) {
      setUniversities([...universities, {
        name: selected,
        city: 'Lahore',
        fee: 450000,
        ranking: Math.floor(Math.random() * 100) + 1
      }]);
      setSelected('');
    }
  };

  const handleCompare = () => {
    navigate('/comparison-results', { state: { comparisons: universities } });
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-10">Compare Universities</h1>

      <div className="max-w-2xl mx-auto space-y-6">
        <select onChange={handleSelect} value={selected} className="w-full p-3 border rounded">
          <option value="">Select a University</option>
          <option value="FAST NUCES">FAST NUCES</option>
          <option value="LUMS">LUMS</option>
          <option value="University of Lahore">University of Lahore</option>
          <option value="Punjab University">Punjab University</option>
        </select>

        <button onClick={handleAdd} className="w-full py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition">
          Add to Compare
        </button>

        {universities.length > 0 && (
          <button onClick={handleCompare} className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition mt-4">
            Compare Now
          </button>
        )}
      </div>
    </div>
  );
}

export default UniversityComparison;
