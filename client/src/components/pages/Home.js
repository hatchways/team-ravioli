import React, { useEffect, useContext } from 'react';
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar';
import MainContent from '../layouts/MainContent';
import AuthContext from '../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  // useEffect(() => {
  //   loadUser();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div>
      <Sidebar />
      <Navbar />
      <MainContent />
    </div>
  );
};

export default Home;
