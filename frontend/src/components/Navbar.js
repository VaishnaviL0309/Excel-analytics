import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-purple-800 text-white px-6 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            Xplore
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
              <Link to="/upload" className="hover:text-gray-300">Upload</Link>
              <Link to="/profile" className="hover:text-gray-300">Profile</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-400 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300">Login</Link>
              <Link to="/register" className="hover:text-gray-300">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
