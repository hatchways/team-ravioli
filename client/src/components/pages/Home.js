import React, { useEffect } from 'react';
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar';
import MainContent from '../layouts/MainContent';
import setAuthToken from '../utility/setAuthToken';

const Home = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);

  return (
    <div>
      <Sidebar />
      <Navbar />
      <MainContent />
    </div>
  );
};

export default Home;
