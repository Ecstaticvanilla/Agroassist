import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-6 fixed top-0 left-0">
      <h3 className="text-xl font-semibold mb-6">Navigation</h3>
      <ul className="space-y-4">
        <li><Link to="/feature" className="hover:text-green-500">Feature</Link></li>
        <li><Link to="/services" className="hover:text-green-500">Services</Link></li>
        <li><Link to="/about" className="hover:text-green-500">About</Link></li>
        <li><Link to="/contact" className="hover:text-green-500">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
