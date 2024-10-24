import React, { useEffect, useState,useRef } from "react";
import TechServicesVideo from "../../Assets/Videos/TechServicesVideo.mp4";
import "./TechServicesPage.css";
import HeroSection from "../../Components/common/HeroSection";
import TypingTextAnimation from "../../Components/common/TypingTextAnimation";
import SplitCard from "../../Components/techservicepage/SplitCard";
import { jobRolesWithImages } from "../../data/languagesdata/TechData";
import LanguagesLogos from "../../Components/common/LanguagesLogos";




const TechServicesPage = (props) => {

 

  const marqueeRef2 = useRef(null); // Reference to the marquee element

  const marqueeRef = useRef(null);
  const handleMouseEnter1 = () => {
    marqueeRef.current.stop();
  };

  const handleMouseLeave1 = () => {
    marqueeRef.current.start();
  };
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

        <LanguagesLogos title="Redefining IT Skill Expertise" jobRolesWithImages={jobRolesWithImages}/>
   

      
</div>
  );
};

export default TechServicesPage;
