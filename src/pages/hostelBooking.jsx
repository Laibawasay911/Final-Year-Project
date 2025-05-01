import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HostelBooking() {
  const [formData, setFormData] = useState({
    university: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating available hostels based on the form data
    const dummyHostels = [
      { name: 'City Boys Hostel', address: 'Near ' + formData.university, rent: 15000 },
      { name: 'Dream Hostel', address: 'Near ' + formData.university, rent: 18000 },
    ];

    // Navigating to available hostels page and passing the hostels data
    navigate('/available-hostels', { state: { hostels: dummyHostels } });
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-10">Book a Hostel</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow space-y-6">
        <input
          type="text"
          name="university"
          onChange={handleChange}
          placeholder="University Name"
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="date"
          name="checkIn"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="date"
          name="checkOut"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="number"
          name="guests"
          min="1"
          onChange={handleChange}
          value={formData.guests}
          className="w-full p-3 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
        >
          Find Hostels
        </button>
      </form>
    </div>
  );
}

export default HostelBooking;
