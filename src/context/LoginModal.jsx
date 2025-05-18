// src/context/LoginModal.jsx
import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(email);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="relative bg-white rounded-lg shadow-lg w-96 p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* 🔁 Switch to Signup */}
        <div className="text-center mt-4 text-sm">
          Not registered yet?{' '}
          <button
            onClick={() => {
              onClose();         // close login modal
              onSwitchToSignup(); // open signup modal
            }}
            className="text-blue-600 hover:underline"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
