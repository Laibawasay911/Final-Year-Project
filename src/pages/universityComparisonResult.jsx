import React from 'react';
import { useLocation } from 'react-router-dom';

function ComparisonResults() {
  const location = useLocation();
  const { comparisons } = location.state || { comparisons: [] };

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-10">University Comparison</h1>

      {comparisons.length > 0 ? (
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6">University</th>
              <th className="py-3 px-6">City</th>
              <th className="py-3 px-6">Fee</th>
              <th className="py-3 px-6">Ranking</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((uni, index) => (
              <tr key={index} className="border-t">
                <td className="py-3 px-6">{uni.name}</td>
                <td className="py-3 px-6">{uni.city}</td>
                <td className="py-3 px-6">PKR {uni.fee}</td>
                <td className="py-3 px-6">{uni.ranking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-600">No universities selected for comparison.</p>
      )}
    </div>
  );
}

export default ComparisonResults;
