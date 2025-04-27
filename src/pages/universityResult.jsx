import React from 'react';
import { useLocation } from 'react-router-dom';

function UniversityResults() {
  const location = useLocation();
  const { universities } = location.state || { universities: [] };

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-10">University Results</h1>
      
      {universities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600">{uni.name}</h3>
              <p className="text-gray-600">{uni.city}</p>
              <p className="text-gray-600 mt-2">Fee: PKR {uni.fee}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No universities found matching your criteria.</p>
      )}
    </div>
  );
}

export default UniversityResults;
