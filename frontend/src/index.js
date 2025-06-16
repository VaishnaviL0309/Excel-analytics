import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GoogleOAuthProvider clientId="1074296566614-4p4t3tgjp3v037j3beag7r3b9057s4cs.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);

reportWebVitals(); // ✅ Leave only this
