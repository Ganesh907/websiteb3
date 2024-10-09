import React from 'react';
import Navbar from '../Components/CommonComponents/Navbar';
import Footer from '../Components/CommonComponents/Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from '../Components/CommonComponents/Spinner';
import { ScrollToTop } from '../Components/CommonComponents/ScrollToTop';

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* Wrap Outlet with Suspense to show Spinner while loading lazy components */}
     
        <Outlet />
      {/* </Suspense> */}
      {/* The Footer will render only after the Outlet content has loaded */}
      <ScrollToTop/>
      <Footer />
    </div>
  );
}
