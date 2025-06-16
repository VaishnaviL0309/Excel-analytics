import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate('/upload');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
   <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleUploadClick}
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
        >
          Upload File
        </button>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-600 text-white px-5 py-2 rounded hover:bg-gray-700"
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Dashboard;