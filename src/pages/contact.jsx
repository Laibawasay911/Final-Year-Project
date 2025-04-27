// src/pages/Contact.jsx
import React from 'react'

function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-12">Contact Us</h1>
      
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input type="text" className="w-full p-3 border rounded" placeholder="Your Name" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full p-3 border rounded" placeholder="Your Email" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea className="w-full p-3 border rounded" rows="5" placeholder="Your Message"></textarea>
        </div>

        <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
