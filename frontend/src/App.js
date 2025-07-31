import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from './pages/Weather';
import Irrigation from './pages/Irrigation';
import Updates from './pages/Updates';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* Dummy route for under development feature */}
        <Route path="/weather" element={<Weather />} />
        <Route path="/irrigation" element={<Irrigation />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Home from './pages/Home';
// import Weather from './pages/Weather';
// import Irrigation from './pages/Irrigation';
// import Updates from './pages/Updates';

// const App = () => {
//   return (
//     <Router>
//       <div className="flex h-screen">
//         {/* Sidebar */}
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//           {/* Navbar */}
//           <Navbar />
          
//           {/* Main content */}
//           <div className="flex-1 p-6">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/weather" element={<Weather />} />
//               <Route path="/irrigation" element={<Irrigation />} />
//               <Route path="/updates" element={<Updates />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
