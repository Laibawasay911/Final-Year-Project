// src/pages/Faq.jsx
import React from 'react'

function Faq() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-10">Frequently Asked Questions</h1>

      <div className="space-y-8 max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">How does CampusMate work?</h3>
          <p className="text-gray-600 mt-2">
            You simply enter your academic interests, budget, and preferences — and we suggest universities that fit you best.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Is CampusMate free to use?</h3>
          <p className="text-gray-600 mt-2">
            Yes! CampusMate is completely free for students.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Can I find hostel options too?</h3>
          <p className="text-gray-600 mt-2">
            Absolutely. We also provide safe and affordable hostel suggestions based on your university location.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Faq
