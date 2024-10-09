import React, { useEffect, useState } from 'react'
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export const ScrollToTop = () => {


const [isVisible, setIsVisible] = useState(false);

const toggleVisibility = () => {
  setIsVisible(window.scrollY > 100);
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

useEffect(() => {
  window.addEventListener("scroll", toggleVisibility);
  return () => {
    window.removeEventListener("scroll", toggleVisibility);
  };
}, []);


  return (
    <button
    onClick={scrollToTop}
    className={`fixed bottom-16 right-5  bg-yellow-400 text-black hover:text-white h-10 w-10 rounded-full flex justify-center items-end shadow-lg hover:bg-[#0060b5] transition-opacity ${
      isVisible ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
  >
    <KeyboardDoubleArrowUpIcon
      className="animate-bounce"
      style={{ fontSize: "30px" }}
    />
  </button> 
  )
}

