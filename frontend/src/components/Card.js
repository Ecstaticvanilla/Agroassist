import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <Link to={link}>
      <div className="transform hover:scale-105 transition duration-300 ease-in-out">
        <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 rounded-xl shadow hover:shadow-md p-4 flex flex-col h-full">
        {/* bg-[#0D371E] */}
          <img
            src={imageSrc}
            alt={title}
            className="rounded-lg h-40 object-cover mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 tracking-wide">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
