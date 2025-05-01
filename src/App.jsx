import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import About from './pages/about.jsx';
import Faq from './pages/faq.jsx';
import UniversityFinder from './pages/universityFinder';
import UniversityResults from './pages/universityResult';
import ScholarshipAlerts from './pages/ScholarshipsAlert';
import ScholarshipResults from './pages/scholarshipResults';
import HostelBooking from './pages/hostelBooking'; {/* Added import for HostelBooking */}
import AvailableHostels from './pages/availableHostels'; {/* Added import for AvailableHostels */}
import UniversityComparison from './pages/universityComparison';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
        {/* Navbar */}
        <header className="bg-white shadow">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">CampusMate</Link>
            <nav className="space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
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
            <Route path="/hostel-booking" element={<HostelBooking />} /> {/* Added this route */}
            <Route path="/available-hostels" element={<AvailableHostels />} /> {/* Added this route */}
            <Route path="/university-comparison" element={<UniversityComparison />} />
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
      </div>
    </Router>
  );
}

export default App;
