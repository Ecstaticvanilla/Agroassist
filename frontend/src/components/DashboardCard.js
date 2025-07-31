import React from 'react';

const DashboardCard = ({ title }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{title} Data goes here. (Placeholder)</p>
    </div>
  );
};

export default DashboardCard;
