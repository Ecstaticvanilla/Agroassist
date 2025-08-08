import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from './pages/Weather';
import Irrigation from './pages/Irrigation';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import MyFarms from './pages/MyFarms';
import FarmDetails from './pages/FarmDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* Dummy route for under development feature */}
        <Route path="/weather" element={<Weather />} />
        <Route path="/irrigation" element={<Irrigation />} />
        <Route path="/myfarms" element={<MyFarms />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/farms/:id" element={<FarmDetails />} />
      </Routes>
    </Router>
  );
};

export default App;