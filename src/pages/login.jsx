import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to CampusMate</h2>
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
        <p className="mt-4 text-center text-sm">
          Don’t have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
