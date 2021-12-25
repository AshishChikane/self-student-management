import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './index.css';
import Home from './component/Home/Home';
import Dashboard from './component/Dashboard/Dashboard';
import Profile from './component/Profile/Profile';
import Regestration from './component/Regestration/Regestration'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/regestration" element={<Regestration />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

