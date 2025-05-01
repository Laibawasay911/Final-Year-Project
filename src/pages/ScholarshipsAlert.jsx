import React from 'react';
import { useNavigate } from 'react-router-dom';

function ScholarshipAlerts() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const dummyScholarships = [
      { title: 'HEC Need-Based Scholarship', description: 'Available for all major universities.', link: '#' },
      { title: 'Merit Scholarship', description: 'Scholarships based on outstanding academic results.', link: '#' }
    ];

    navigate('/scholarship-results', { state: { scholarships: dummyScholarships } });
  };

  return (
    <div className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-10">Scholarship Alerts</h1>

      <p className="text-lg text-gray-700 mb-8">Click below to explore the latest scholarships available for you!</p>

      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
      >
        Show Scholarships
      </button>
    </div>
  );
}

export default ScholarshipAlerts;
