import React from 'react';
import Navbar from '../Components/common/Navbar';
import Footer from '../Components/common/Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from '../Components/common/Spinner';
import { ScrollToTop } from '../Components/common/ScrollToTop';
import ThemeProvider from '../Components/common/ThemeProvider';

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <ThemeProvider/>
      {/* Wrap Outlet with Suspense to show Spinner while loading lazy components */}
      <ScrollToTop/>
        <Outlet />
      {/* </Suspense> */}
      {/* The Footer will render only after the Outlet content has loaded */}
     
      <Footer />
    </div>
  );
}
