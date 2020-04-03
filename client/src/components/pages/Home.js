import React from 'react';
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar';
import MainContent from '../layouts/MainContent';

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <MainContent />
    </div>
  );
};

export default Home;
