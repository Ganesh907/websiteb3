import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../components/common/ScrollToTop';
import ThemeProvider from '../components/common/ThemeProvider';

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <ThemeProvider />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}
