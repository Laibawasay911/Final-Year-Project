import React from 'react';
import { useLocation } from 'react-router-dom';

function ScholarshipResults() {
  const location = useLocation();
  const { scholarships } = location.state || { scholarships: [] };

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-10">Scholarship Opportunities</h1>

      {scholarships.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600">{scholarship.title}</h3>
              <p className="text-gray-600">{scholarship.description}</p>
              <a href={scholarship.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No scholarships available at the moment.</p>
      )}
    </div>
  );
}

export default ScholarshipResults;
