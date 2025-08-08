import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Welcome = () => {
  return (
    <Layout className="flex flex-col items-center justify-center text-center font-outfit">
      <h1 className="text-5xl font-extrabold text-green-700 mb-6">
        Welcome to AgroAssist
      </h1>
      <p className="text-lg text-green-700 max-w-2xl mb-8">
        Your intelligent farming assistant. Manage crops, monitor weather, and optimize your yields — all from one place.
      </p>

      <div className="flex gap-6">
        <Link to="/dashboard">
          <button className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg shadow transition duration-200">
            Go to Dashboard
          </button>
        </Link>

        <button className="px-6 py-3 bg-white text-green-700 border border-green-500 font-semibold rounded-lg shadow hover:bg-green-100 transition duration-200">
          Sign Up
        </button>
      </div>
    </Layout>
  );
};

export default Welcome;
