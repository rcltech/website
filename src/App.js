import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
