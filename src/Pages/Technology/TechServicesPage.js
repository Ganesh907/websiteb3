import React, { useEffect, useState,useRef } from "react";

import TechServicesVideo from "../../Assets/Videos/TechServicesVideo.mp4";
import "./TechServicesPage.css";
import HeroSection from "../../Components/common/HeroSection";

import Footer from "../../Components/common/Footer";
import TypingTextAnimation from "../../Components/common/TypingTextAnimation";
import SplitCard from "../../Components/techservicepage/SplitCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import JAVA from "../../Assets/Images/JavaI.png";

import AndroidKotlin from "../../Assets/Images/tech-languages-logos/Android-Kotlin.png"
import Angular from "../../Assets/Images/tech-languages-logos/Angular.png"
import ApplicationSupport from "../../Assets/Images/tech-languages-logos/Application-Support.png"
import BusinessAnalyst from "../../Assets/Images/tech-languages-logos/Business-Analyst.png"
import CloudOperations from "../../Assets/Images/tech-languages-logos/CloudOperations.png"
import DataScienceML from "../../Assets/Images/tech-languages-logos/DataScience-ML.png"
import DevOps from "../../Assets/Images/tech-languages-logos/DevOps.png"
import DotNet from "../../Assets/Images/tech-languages-logos/DotNet.png"
import Flutter from "../../Assets/Images/tech-languages-logos/Flutter.png"
import FullStackDevelopment from "../../Assets/Images/tech-languages-logos/FullStackDevelopment.png"
import MSSQL from "../../Assets/Images/tech-languages-logos/MS-SQL.png"
import ManualAutomationTester from "../../Assets/Images/tech-languages-logos/Manual-Automation-Tester.png"
import MicrosoftAzure from "../../Assets/Images/tech-languages-logos/MicrosoftAzure.png"
import MongoDB from "../../Assets/Images/tech-languages-logos/MongoDB.png"
import PHP from "../../Assets/Images/tech-languages-logos/PHP.png"
import ReactIcon from "../../Assets/Images/tech-languages-logos/React.png"
import Wordpress from "../../Assets/Images/tech-languages-logos/Wordpress.png"
// import javalogo from "../../Assets/Images/java1.png";



const TechServicesPage = (props) => {

  const jobRolesWithImages = [
    { text: "JAVA", image: JAVA }, // Replace with your actual image paths
    { text: ".NET", image: DotNet },
    { text: "React", image: ReactIcon},
    { text: "Angular", image: Angular},
    { text: "Android/kotlin", image: AndroidKotlin },
    { text: "Flutter", image: Flutter },
    { text: "Full Stack Development", image: FullStackDevelopment},
    // { text: "Data science / ML", image: DataScienceML },
    { text: "DevOps", image: DevOps },
    { text: "Microsoft Azure", image: MicrosoftAzure },
    { text: "Mongo DB", image: MongoDB },
    { text: "Cloud Operations", image: CloudOperations },
    { text: "MS SQL", image: MSSQL },
    { text: "Manual / Automation tester", image: ManualAutomationTester },
    { text: "PHP", image: PHP },
    { text: "WordPress", image: Wordpress },
    { text: "Business Analyst", image: BusinessAnalyst },
    { text: "Application Support", image: ApplicationSupport}]

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

      <div className="my-20">
      <h1 className="text-center uppercase md:text-center dark:text-white text-[#0060b5] text-xl md:text-5xl font-bold md:mt-10 md:mb-20"
                                style={{
                                  // textShadow: '0.8px 0.8px 0 #eec317, -0.8px -0.8px 0 white, 0.8px -0.8px 0 white, -0.8px 0.8px 0 #eec317',
                                        fontFamily: 'Goudy Old Style',
                                        letterSpacing: '0.05em'}}>
        Redefining IT Skill Expertise
        </h1>

      
{/* <marquee
  className="w-full h-[30vh] flex justify-start items-center  text-black my-10 cursor-pointer"
  style={{backgroundColor:'rgba(0,0,0,0.4)'}}
  behavior="scroll"
  direction="left"
  scrollamount="10"
  ref={marqueeRef}
  onMouseEnter={handleMouseEnter1}
  onMouseLeave={handleMouseLeave1}
>
  {jobRolesWithImages.map((role, index) => (
<span
  key={index}
  className={`inline-flex items-center mx-4 rounded-lg text-xl hover:scale-110 hover:bg-white hover:text-black drop-shadow-lg shadow-lg shadow-black border-x-4 py-5 px-5 bg-black text-white border-blue-900 transition-all duration-500 ease-in-out`}
>

      {role.text}

    
      <img
        src={role.image}
        // alt={role.text}
        className="w-10 h-10 ml-2 " 
      />
    </span>
  ))}
</marquee> */}
<marquee
          className="w-full md:h-[30vh] h-[15vh] flex justify-start items-center cursor-pointer bg-[#0060b5]  text-black my-10 dark:bg-[rgba(0,0,0,0.4)]"
          // style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          behavior="scroll"
          direction="left"
          scrollamount="10"
          ref={marqueeRef}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          {jobRolesWithImages.map((role, index) => (
         
            <span
              key={index}
              className={`inline-flex items-center mx-4 rounded-lg text-xl hover:scale-110 hover:bg-black hover:text-white 
                dark:hover:bg-white dark:hover:text-black drop-shadow-lg shadow-lg shadow-black border-x-4 py-5 px-5 bg-white text-black  dark:bg-black dark:text-white   border-blue-900 transition-all duration-500 ease-in-out`}
            >

              {role.text}

              <img
                src={role.image}
                className="w-10 h-10 ml-2" 
              />
            </span>
          ))}
        </marquee>
      </div> 

      
</div>
  );
};

export default TechServicesPage;
