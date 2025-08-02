import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import { FiBarChart2, FiTrendingUp, FiInfo } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <Layout>
        <Navbar pageTitle='Dashboard'/>

      <div className="flex flex-col lg:flex-row gap-10 mt-20">

        {/* Feature Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card
            title="My Farms"
            description="Manage all your current farms."
            imageSrc="https://picsum.photos/400/200?random=1"
            link="/myfarms"
          />
          <Card
            title="Crop Monitoring"
            description="Stay informed about crop health."
            imageSrc="https://picsum.photos/400/200?random=2"
            link="/feature/crop-monitoring"
          />
          <Card
            title="Weather Forecast"
            description="Plan with precision using weather data."
            imageSrc="https://picsum.photos/400/200?random=3"
            link="/feature/weather"
          />
        </div>

        {/* Info Panels */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="bg-white/80 dark:bg-gray-800/80 border border-green-400 dark:border-green-500 rounded-xl p-5 shadow hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2 text-green-700 dark:text-green-300 font-semibold text-lg">
              <FiInfo className="w-5 h-5" />
              Latest News
            </div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
              <li>AI-based pest prediction launched</li>
              <li>New irrigation guidelines released</li>
              <li>Government subsidy extended to 2026</li>
            </ul>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 border border-blue-400 dark:border-blue-500 rounded-xl p-5 shadow hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-300 font-semibold text-lg">
              <FiBarChart2 className="w-5 h-5" />
              Your Statistics
            </div>
            <div className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-1">🌾 87%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Crop health index this week</p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 border border-yellow-400 dark:border-yellow-500 rounded-xl p-5 shadow hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2 text-yellow-700 dark:text-yellow-300 font-semibold text-lg">
              <FiTrendingUp className="w-5 h-5" />
              System Updates
            </div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
              <li>Weather model updated (v2.3)</li>
              <li>Smart sensor sync improved</li>
              <li>Dashboard performance boosted</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
