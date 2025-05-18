// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Faq from './pages/faq';
import UniversityFinder from './pages/universityFinder';
import UniversityResults from './pages/universityResult';
import ScholarshipAlerts from './pages/ScholarshipsAlert';
import ScholarshipResults from './pages/scholarshipResults';
import HostelBooking from './pages/hostelBooking';
import AvailableHostels from './pages/availableHostels';
import UniversityComparison from './pages/universityComparison';
import ComparisonResults from './pages/universityComparisonResult';
import Dashboard from './pages/dashboard';
import QuizPage from './pages/quiz';
import LoginModal from './context/LoginModal';
import SignupModal from './context/SignupModal';

function AppContent() {
  const { user, logout, isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">CampusMate</Link>
          <nav className="space-x-6 flex items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            {isAuthenticated ? (
              <div className="inline-flex items-center space-x-4 ml-4">
                <span className="text-sm text-gray-700">Welcome, {user.fullName || user.email}</span>
                <button onClick={logout} className="text-red-600 hover:underline text-sm">Logout</button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setShowLogin(true)}
                  className="border border-gray-400 rounded px-4 py-1 text-gray-700 hover:text-blue-600 hover:border-blue-600 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowSignup(true)}
                  className="border border-gray-400 rounded px-4 py-1 text-gray-700 hover:text-blue-600 hover:border-blue-600 transition ml-2"
                >
                  Sign Up
                </button>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/university-finder" element={<UniversityFinder />} />
          <Route path="/university-results" element={<UniversityResults />} />
          <Route path="/scholarship-alerts" element={<ScholarshipAlerts />} />
          <Route path="/scholarship-results" element={<ScholarshipResults />} />
          <Route path="/hostel-booking" element={<HostelBooking />} />
          <Route path="/available-hostels" element={<AvailableHostels />} />
          <Route path="/university-comparison" element={<UniversityComparison />} />
          <Route path="/comparison-results" element={<ComparisonResults />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} CampusMate. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToSignup={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
      />

      <SignupModal
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
        onSwitchToLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}
