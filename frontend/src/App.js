import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import './index.css'; // for dark mode css

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    
    <Router>
      <div className="min-h-screen flex flex-col">
      <Navbar
        isAuthenticated={isAuthenticated}
        logout={logout}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Routes>
        <Route path="/dashboard" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/upload" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Upload />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
