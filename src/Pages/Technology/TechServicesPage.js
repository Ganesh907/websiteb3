import React, { useEffect, useState,useRef } from "react";

import TechServicesVideo from "../../Assets/Videos/TechServicesVideo.mp4";
import "./TechServicesPage.css";
import HeroSection from "../../Components/CommonComponents/HeroSection";

import Footer from "../../Components/CommonComponents/Footer";
import TypingTextAnimation from "../../Components/CommonComponents/TypingTextAnimation";
import SplitCard from "../../Components/TechServicesPage/SplitCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import javalogo from "../../Assets/Images/java1.png";



const TechServicesPage = (props) => {

  const jobRoles2 = [
    " JAVA ",
    " .NET  ",
    "  React ",
    "  Angular",
    "Android/kotlin",
    "Flutter",
    " Full Stack Developement",
    "Data science / ML ",
    "DevOps ",
    "Microsoft Azure ",
    "Mongo DB",
    "Cloud Operations",
    " MS SQL",
    " Manual / Automation tester ",
    "PHP ",
    " Word press",
    " Business Analyst ",
    "Application Support",
  ];

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

      <div className="my-10">
        <h1 className="italic text-center mt-10 text-white text-5xl m-[5px] md:mt-[40px]">
        Redefining IT Skill Expertise
        </h1>

        <marquee
          className="w-full p-5 text-black"
          behavior="scroll"
          direction="left"
          scrollamount="10"
          ref={marqueeRef}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          {jobRoles2.map((role, index) => (
            <span
              key={index}
              className={`inline-flex items-center mx-4 rounded-lg drop-shadow-lg border-2 p-3 ${
                index % 2 === 0
                  ? "bg-white text-[#0060b5] border-blue-900" // Darker blue for even items
                  : "bg-white text-[#0060b5] border-blue-900" // Dark background for odd items
              }`}
            >
              {role}
               <ArrowBackIcon
                className={`ml-2 ${
                  index % 2 === 0 ? "text-[#0060b5]" : "text-[#0060b5]"
                }`}
              /> 
              
            </span>
          ))}
        </marquee>
      </div> 

      


      <div className="tech-footer">
        <Footer />
      </div>
    </div>
    // {/* </> */}
  );
};

export default TechServicesPage;
