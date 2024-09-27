import React, { useEffect, useState } from "react";


import TechServicesVideo from "../../Assets/Videos/TechServicesVideo.mp4";
import "./TechServicesPage.css";
import HeroSection from "../../Components/CommonComponents/HeroSection";


import Footer from "../../Components/CommonComponents/Footer";
import TypingTextAnimation from "../../Components/CommonComponents/TypingTextAnimation";
import SplitCard from "../../Components/TechServicesPage/SplitCard";


 const TechServicesPage = (props) => {
  return (
    // <>
      <div className="service-div-main ">
        <HeroSection
          videoUrl={TechServicesVideo}
          videoOpacity={20}
          MarginAnimtion={true}
        >
          <div className=" flex flex-col justify-end items-end ">
            <TypingTextAnimation />
          </div>
        </HeroSection>

        <SplitCard />

        



      <div className="tech-footer">
        <Footer />
      </div>
      </div>
    // {/* </> */}
  );
};



export default TechServicesPage;