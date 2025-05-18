// src/pages/home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-700">Find Your Perfect University</h1>
          <p className="mt-6 text-lg text-gray-700">
            CampusMate makes university selection easy, smart, and tailored to you!
          </p>
          <Link to="/quiz">
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Take the Quiz
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Features</h2>
        <div className="flex flex-wrap justify-center gap-12">

          {/* University Finder Card */}
          <Link
            to="/university-finder"
            className="max-w-sm bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-4">University Finder</h3>
            <p className="text-gray-600">
              Enter your academic preferences and budget, and find universities matching your dreams.
            </p>
          </Link>

          {/* Scholarship Alerts Card */}
          <Link
            to="/scholarship-alerts"
            className="max-w-sm bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-4">Scholarship Alerts</h3>
            <p className="text-gray-600">
              Get real-time alerts for scholarships to fund your studies.
            </p>
          </Link>

          {/* Hostel Booking Card */}
          <Link
            to="/hostel-booking"
            className="max-w-sm bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-4">Hostel Booking</h3>
            <p className="text-gray-600">
              Find and book hostels near your university directly through CampusMate.
            </p>
          </Link>

          {/* University Comparison Card */}
          <Link
            to="/university-comparison"
            className="max-w-sm bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-4">Compare Universities</h3>
            <p className="text-gray-600">
              Easily compare universities side by side based on your preferences.
            </p>
          </Link>

          {/* Dashboard Card */}
          <Link
            to="/dashboard"
            className="max-w-sm bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-4">Dashboard</h3>
            <p className="text-gray-600">
              Access your personalized data, saved searches, and alerts.
            </p>
          </Link>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <Link to="/contact">
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
