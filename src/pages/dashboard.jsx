import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Saved University Searches</h2>
          <p className="text-gray-600 mt-2">You haven't saved any searches yet.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Scholarship Alerts</h2>
          <p className="text-gray-600 mt-2">No new scholarship alerts.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
