import React, { useEffect, useRef, useState } from 'react'
import OurServices from '../../Assets/Videos/OurServices.mp4'
import HeroSection from '../../Components/common/HeroSection';
import Permanent from "../../Assets/Videos/webdevelopment.mp4";
import Recruiters from "../../Assets/Videos/Recruitment.mp4";
import Temporary from "../../Assets/Videos/CareerVideo.mp4";
import Permanenticon from "../../Assets/Images/Permanent1.png";
import Permanenticon2 from "../../Assets/Images/Permanent2.png";
import Permanenticon3 from "../../Assets/Images/Permanent3.png";
import Temporaryicon from "../../Assets/Images/temporary.png";
import Temporaryicon2 from "../../Assets/Images/temporary2.png";
import Temporaryicon3 from "../../Assets/Images/temporary3.png";
import Recruitericon from "../../Assets/Images/Recruitment.png";
import Recruitericon2 from "../../Assets/Images/Recruitment2.png";
import Recruitericon3 from "../../Assets/Images/Recruitment3.png";
import { jobRolesWithImages } from '../../data/languagesdata/RecData';
import RecServices from '../../Components/recservicespae/RecServices';
import LanguagesLogos from '../../Components/common/LanguagesLogos';

const RecServicesPage = () => {

 
  const marqueeRef = useRef(null);

  const handleMouseEnter1 = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = 'paused'; // Pause on mouse enter
    }
  };

  const handleMouseLeave1 = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = 'running'; // Resume on mouse leave
    }
  };
  return (
    <div className='dark:bg-transparent'>
{/* <NavbarDemo/> */}
      <HeroSection
        videoUrl={OurServices}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className="lg:w-[50vw] w-[90vw] flex flex-col justify-end items-start font-bold drop-shadow-xl ">

          <div className=" flex flex-col text-start  ">
            <h1 className="text-[#0060b5]  text-3xl lg:text-5xl font-bold drop-shadow-xl">
              Our Solutions
              <span
                className="absolute bottom-0 left-0 w-full border-b-2 border-dotted translate-y-5"
                style={{
                  borderImage: 'linear-gradient(to right, yellow,  blue) 1',
                  animation: 'gradientShift 6s infinite', // Increase duration to slow down the speed
                }}
              ></span>

              <style>
                {`
    @keyframes gradientShift {
      0% {
        border-image-source: linear-gradient(to right, yellow,  blue);
      }
      100% {
        border-image-source: linear-gradient(to right, blue,  yellow);
      }
    }
  `}
              </style>
            </h1><br />
            <h1 className="drop-shadow-lg   text-white text-3xl  md:w-auto  mb-5 font-bold "> Your <span className='text-yellow-500'>Hiring</span> Needs


            </h1>

          </div>


          <ul className="list-none space-y-4 text-xl font-semibold mt-2">
            <li
              className="relative pl-4  opacity-0 animate-fadeInRepeat"
              style={{ animationDelay: '0.5s' }} // First item appears after 0.5s
            >
              <div className="absolute left-0 md:top-1/2 top-[28%] transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
              Discover tailored recruitment strategies to perfect your team fit.
            </li>
            <li
              className="relative pl-4 opacity-0 animate-fadeInRepeat"
              style={{ animationDelay: '1.5s' }} // Second item appears after 1.5s
            >
              <div className="absolute left-0 md:top-1/2 top-[28%] transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
              Enhance your hiring strategy with our comprehensive talent services.
            </li>
          </ul>

          <style>
            {`
    @keyframes fadeInRepeat {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      30% {
        opacity: 1;
        transform: translateY(0);
      }
      70% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
    .animate-fadeInRepeat {
      animation: fadeInRepeat 15s infinite; // Long duration, stops on screen for a long time
    }
  `}
          </style>

        </div>


      </HeroSection>



  <RecServices/>

      {/* <div className="py-20 ">
        <h1 className="text-center uppercase md:text-center text-[#0060b5] dark:text-white text-xl md:text-5xl font-bold md:my-20"
          style={{

            fontFamily: 'Goudy Old Style',
            letterSpacing: '0.05em'
          }}>
          B3 Expertise In IT Recruitment
        </h1>
        <marquee
          className="w-full md:h-[30vh] h-[15vh] flex justify-start items-center cursor-pointer bg-[#0060b5]  text-black my-10 dark:bg-[rgba(0,0,0,0.4)] whitespace-nowrap"
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

      </div> */}
      <LanguagesLogos title="B3 Expertise In IT Recruitment" jobRolesWithImages={jobRolesWithImages}/>
{/* <Footer/> */}

    </div>
  )
}

export default RecServicesPage;