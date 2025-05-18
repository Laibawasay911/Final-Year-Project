import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <input type="text" placeholder="Full Name" className="w-full mb-4 p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Sign Up</button>
        <p className="mt-4 text-center text-sm">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
