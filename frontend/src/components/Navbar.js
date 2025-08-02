import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { FiHome } from 'react-icons/fi';

const Navbar = ({ pageTitle = '' }) => {
  const [darkMode, setDarkMode] = useState(false);

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
      if (prefersDark) root.classList.add('dark');
      else root.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
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
      <div className="flex-1">
        <Link
          to="/"
          className="text-green-900 font-extrabold text-4xl font-maiden dark:text-white"
        >
          AgroAssist
        </Link>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-2xl font-bold text-green-800 font-revalia dark:text-white">
          {pageTitle}
        </h1>
      </div>

      <div className="flex-1 flex justify-end items-center gap-4">
        <Link
          to="/dashboard"
          title="Dashboard"
          className="p-2 rounded-md text-green-700 hover:bg-green-600 hover:text-white transition cursor-pointer dark:text-white"
          aria-label="Go to Dashboard"
        >
          <FiHome className="w-6 h-6" />
        </Link>
<button
  onClick={() => setDarkMode((prev) => !prev)}
  title="Toggle Dark Mode"
  aria-label="Toggle Dark Mode"
  className="p-2 rounded-md hover:bg-green-600 hover:text-white transition cursor-pointer focus:outline-none text-gray-700 dark:text-yellow-400"
>
  {darkMode ? (
    <SunIcon className="h-6 w-6" />
  ) : (
    <MoonIcon className="h-6 w-6" />
  )}
</button>

<button
  title="Profile"
  className="p-2 rounded-md hover:bg-green-600 hover:text-white transition cursor-pointer focus:outline-none text-gray-700 dark:text-white"
>
  <UserCircleIcon className="h-8 w-8" />
</button>

      </div>
    </nav>
  );
};

export default Navbar;
