import React from 'react';
import { useLocation } from 'react-router-dom';

function AvailableHostels() {
  const location = useLocation();
  const { hostels } = location.state || { hostels: [] };

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-10">Available Hostels</h1>

      {hostels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hostels.map((hostel, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600">{hostel.name}</h3>
              <p className="text-gray-600">{hostel.address}</p>
              <p className="text-gray-600 mt-2">Rent: PKR {hostel.rent} /month</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No hostels found near your selected university.</p>
      )}
    </div>
  );
}

export default AvailableHostels;
