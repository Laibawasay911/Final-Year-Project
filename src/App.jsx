// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import home from './pages/home.jsx'
import contact from './pages/contact.jsx'

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
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white text-center p-4">
          &copy; {new Date().getFullYear()} CampusMate. All rights reserved.
        </footer>
      </div>
    </Router>
  )
}

export default App
