import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import Navbar from "./Components/CommonComponents/Navbar";
import { TechHomePage } from "./Pages/Technology/TechHomePage";
import { TechClientsPage } from "./Pages/Technology/TechClientsPage";
import { RecServicesPage } from "./Pages/Recruitment/RecServicesPage";
import { RecClientsPage } from "./Pages/Recruitment/RecClientsPage";
import { ContactUsPage } from "./Pages/ContactUsPage";
import RecHomePage from "./Pages/Recruitment/RecHomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import { TechServicesPage } from "./Pages/Technology/TechServicesPage";
import LandingPage from "./Pages/LandingPage";
import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Blogs } from "./Pages/Blogs";
import { ColorTheme } from "./Components/ColorTheme";
import CareerPage from "./Pages/CareerPage";
import HorizontalPageProgress from "react-horizontal-page-progress";
import zIndex from "@mui/material/styles/zIndex";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top
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
    <Router>
      <div>
      {/* <HorizontalPageProgress
  height="3px"
  backgroundColor="#0060b5"  
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 99999  
  }}
/> */}


        <Navbar />
        
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/technology" element={<TechHomePage />} />
          <Route path="/technology-services" element={<TechServicesPage />} />
          <Route path="/partners" element={<TechClientsPage />} />
          <Route path="/recruitment" element={<RecHomePage />} />
          <Route path="/recruitment-services" element={<RecServicesPage />} />
          {/* <Route path="/recruitment-clients" element={<RecClientsPage />} />  */}
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/aboutB3" element={<AboutUsPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-[var(--primary-color)] text-white h-10 w-10  rounded-full flex justify-center  items-end  shadow-lg hover:bg-blue-700 transition-opacity ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <KeyboardDoubleArrowUpIcon
        className="animate-bounce"
        style={{ fontSize: '30px' }}
      />
    </button>
      </div>
      <ColorTheme/>
    </Router>
  );
}

export default App;
