import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Navbar = ({ pageTitle = '' }) => {
  const [darkMode, setDarkMode] = useState(false);

  // On initial load, sync state with localStorage and system preference
  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');

    if (saved === 'dark') {
      setDarkMode(true);
      root.classList.add('dark');
    } else if (saved === 'light') {
      setDarkMode(false);
      root.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      prefersDark ? root.classList.add('dark') : root.classList.remove('dark');
    }
  }, []);

    useEffect(() => {
    const root = document.documentElement;
    console.log('Dark mode changed:', darkMode);
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="w-full h-20 bg-white/70 backdrop-blur-md shadow-md px-8 flex items-center justify-between fixed top-0 left-0 z-50 dark:bg-green-900">  
    {/* <dark:bg-[#193526]"> */}
      {/* Site Name */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-green-900 font-extrabold text-4xl font-maiden dark:text-white"
        >
          AgroAssist
        </Link>
      </div>

      {/* Page Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-2xl font-bold text-green-800 font-revalia dark:text-white">
          {pageTitle}
        </h1>
      </div>

      {/* Right-side buttons */}
      <div className="flex-1 flex justify-end items-center gap-4">
        <button
          onClick={() => {
  console.log('Toggling dark mode...');
  setDarkMode((prev) => !prev);
}}
          title="Toggle Dark Mode"
          aria-label="Toggle Dark Mode"
          className="focus:outline-none"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-400 hover:text-yellow-500 transition" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-700 hover:text-gray-900 transition dark:text-white" />
          )}
        </button>


        <button title="Profile">
          <UserCircleIcon className="h-8 w-8 text-gray-700 hover:text-gray-900 transition dark:text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
