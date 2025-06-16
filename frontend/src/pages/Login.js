import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function Login({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempt:', { email, password });
    login();
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google login success', credentialResponse);
    login();
  };

  const handleGoogleFailure = () => {
    console.log('Google Login Failed');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="mb-2 text-gray-700 dark:text-gray-300">Or login with Google:</p>
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
