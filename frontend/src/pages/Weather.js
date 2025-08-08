import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import { FiSun, FiThermometer, FiWind, FiDroplet } from 'react-icons/fi';

const Weather = () => {
  return (
    <Layout>
      <Navbar pageTitle="Weather" />

      <div className="flex flex-col lg:flex-row gap-10 mt-20 px-4">
      {/* Weather Box - Left Side */}
      <div className="lg:w-2/3 bg-white/80 dark:bg-gray-800/80 border border-blue-400 dark:border-blue-500 rounded-xl p-8 shadow hover:shadow-md transition min-h-[800px] flex flex-col">
        <div className="flex items-center gap-3 mb-6 text-blue-700 dark:text-blue-300 font-semibold text-xl">
          <FiSun className="w-6 h-6" />
          Today's Weather Forecast
        </div>

        <div className="flex flex-1 items-center justify-center text-gray-700 dark:text-gray-300 text-sm">
          <div className="text-center">
            <p className="text-lg mb-2">Weather data will be displayed here.</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">This area will show forecast results from your chosen API.</p>
          </div>
        </div>
      </div>


        {/* Highlights - Right Side */}
        <div className="lg:w-1/3 flex flex-col gap-6">
        <p className="text-2xl font-semibold text-green-700 dark:text-yellow-300">
          Highlights
        </p>
          <div className="bg-white/80 dark:bg-gray-800/80 border border-yellow-400 dark:border-yellow-500 rounded-xl p-5 shadow hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2 text-yellow-700 dark:text-yellow-300 font-semibold text-lg">
              <FiThermometer className="w-5 h-5" />
              Temperature
            </div>
            <div className="text-3xl font-bold text-yellow-700 dark:text-yellow-300 mb-1">29°C</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Feels like 31°C</p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 border border-blue-400 dark:border-blue-500 rounded-xl p-5 shadow hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-300 font-semibold text-lg">
              <FiWind className="w-5 h-5" />
              Wind Speed
            </div>
            <div className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-1">12 km/h</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">North-East direction</p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 border border-green-400 dark:border-green-500 rounded-xl p-5 shadow hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2 text-green-700 dark:text-green-300 font-semibold text-lg">
              <FiDroplet className="w-5 h-5" />
              Humidity
            </div>
            <div className="text-3xl font-bold text-green-800 dark:text-green-300 mb-1">78%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Moderate humidity</p>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Weather;
