import React from 'react';
import Navbar from '../Components/commoncomponents/Navbar';
import Footer from '../Components/commoncomponents/Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from '../Components/commoncomponents/Spinner';
import { ScrollToTop } from '../Components/commoncomponents/ScrollToTop';

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* Wrap Outlet with Suspense to show Spinner while loading lazy components */}
      <ScrollToTop/>
        <Outlet />
      {/* </Suspense> */}
      {/* The Footer will render only after the Outlet content has loaded */}
     
      <Footer />
    </div>
  );
}
