import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UniversityFinder() {
  const [formData, setFormData] = useState({
    academicScore: '',
    budget: '',
    preferredField: '',
    city: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dummy universities data based on form input
    const dummyUniversities = [
      { name: 'University of Lahore', city: formData.city, fee: 450000 },
      { name: 'FAST NUCES', city: formData.city, fee: 500000 }
    ];

    // Redirect to results page with data
    navigate('/university-results', { state: { universities: dummyUniversities } });
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-10">Find Your Ideal University</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow space-y-6">

        <input type="text" name="academicScore" onChange={handleChange} placeholder="Academic Score %" className="w-full p-3 border rounded" required />
        <input type="text" name="budget" onChange={handleChange} placeholder="Budget PKR" className="w-full p-3 border rounded" required />
        <input type="text" name="preferredField" onChange={handleChange} placeholder="Preferred Field" className="w-full p-3 border rounded" required />
        <input type="text" name="city" onChange={handleChange} placeholder="Preferred City" className="w-full p-3 border rounded" required />

        <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
          Find Universities
        </button>
      </form>
    </div>
  );
}

export default UniversityFinder;
