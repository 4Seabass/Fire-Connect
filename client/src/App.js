import './App.css';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import React, { useState } from 'react'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditAccount from './components/EditAccount';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
