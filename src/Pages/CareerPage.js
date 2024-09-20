
import React, { useEffect, useState } from 'react';
import OurServices from '../Assets/Videos/OurServices.mp4';
import HeroSection from '../Components/CommonComponents/HeroSection';
import AboutUs4 from '../Assets/Images/AboutUs4.jpg';
import RecruitmentHomeBg from '../Assets/Images/RecruitmentHomeBg.jpg';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import { Button } from '@mui/material';
import { Padding } from '@mui/icons-material';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import TypingText from '../Components/CommonComponents/TypingText';
import Footer from '../Components/CommonComponents/Footer';
import CareerVideo from '../Assets/Videos/CareerVideo.mp4'


const CareerPage = () => {

 



  const [currentIndex, setCurrentIndex] = useState(0);

  const quotes = [
    " Elevate your career with our platform, Where opportunities meet ambition. Explore endless job possibilities, And find the perfect role for you.",
    "Your dream job is closer than you think, With tailored matches and expert guidance. Discover roles that align with your goals, And take the next step in your career.",
    "Navigate your career journey with ease, Connect with top recruiters and opportunities. Find roles that match your skills and passions, And unlock the path to your professional success.",
    "Your next career adventure starts here, With personalized job matches and support. Discover roles that align with your aspirations, And step into a role that suits your skills."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 15000); // Change quote every 3 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);


  return (
    <div >

      <HeroSection
        videoUrl={CareerVideo}
        videoOpacity={20}
        MarginAnimtion={true}
      >


        <div className={`z-10 flex justify-end transition-all duration-300  items-end`}>
          <div className=" w-full drop-shadow-xl">
            <div className=" flex items-center">
              <h1 className="text-[#0060b5] text-5xl font-bold  mr-2 ">
                Find Your 
                  Job
                  
  <span
    className="absolute bottom-0  left-0 w-[48vh] border-b-2 my-40 "
    style={{
      borderImage: "linear-gradient(to right, yellow, white, blue, black) 1",
      animation: "gradientShift 6s infinite", // Adjust duration as needed
    }}
  ></span>
  
  <style>
    {`
      .relative {
        position: relative;
      }
      .absolute {
        position: absolute;
      }
      @keyframes gradientShift {
        0% {
          border-image-source: linear-gradient(to right, yellow, blue);
        }
        100% {
          border-image-source: linear-gradient(to right, blue, yellow);
        }
      }
    `}
  </style>
              </h1>
              {/* <SearchIcon className="text-white scale-75" sx={{ fontSize: '60px' }} /> */}
            </div>



            <div className=" flex items-center">
              <h1 className="drop-shadow-lg text-white text-3xl my-5 font-bold  pb-1">
                Transform Your <TypingText word="CAREER"  />
              </h1>

             
            </div>

            <div className="relative w-full h-24 overflow-hidden">
              <div
                className="absolute w-full h-full flex transition-transform duration-1000 font-bold"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {quotes.map((quote, index) => (
                  <div key={index} className="w-full flex-shrink-0  bg-transparent text-white font-semibold text-xl drop-shadow-xl">
                    <p>{quote}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </HeroSection>













      <div className='h-[80vh] w-full  flex flex-col justify-center items-center'>
        <h1 className='uppercase text-xl font-bold text-[var(--secondary-color)]'>for Job seekers</h1>
        <h1 className='text-7xl mt-10 drop-shadow-xl text-[var(--primary-color)]'>Our Seeking Process</h1>
        <p className='w-[50%] my-10 text-[var(--secondary-color)]'>Find jobs by checking job vacancy and recruitment websites, social media, professional and industry journals, and by going to career expos or promoting yourself at industry networking events.</p>
        <Button variant="contained" size="large" sx={{ borderRadius: '20px', backgroundColor: 'var(--primary-color)' }}>
          Discover Jobs</Button>
      </div>






<h1 className='h-[100vh] flex justify-center items-center text-4xl text-[var(--primary-color)]'>Work In Progress.....</h1>

      <div className='recr-footer'>
        <Footer /></div>
    </div>

  );


}



export default CareerPage;