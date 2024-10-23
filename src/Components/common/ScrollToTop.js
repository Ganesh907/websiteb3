import React, { useEffect, useState } from 'react';
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  // State to control visibility of the scroll-to-top button
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the button based on scroll position
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 100); // Show button after scrolling 100px down
  };

  // Smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



        const { pathname } = useLocation(); // Get the current route
      
        useEffect(() => {
          window.scrollTo(0, 0); // Scroll to the top on route change
        }, [pathname]); // Re-run effect whenever the route changes
      
   


  // Add/remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-16 right-5 hover:bg-white text-white hover:text-[#0060b5] h-10 w-10 rounded-full flex justify-center items-center shadow-lg bg-[#0060b5] transition-opacity duration-300  z-50 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-label="Scroll to top"
    >
      <KeyboardDoubleArrowUpIcon
        className="animate-bounce"
        style={{ fontSize: "30px" }}
      />
    </button>
  );
};
