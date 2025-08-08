import React from 'react';

const Layout = ({ children, className }) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-green-400 to-green-200 p-6 dark:from-[#1D231E] dark:to-[#232A24] ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
