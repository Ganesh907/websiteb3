
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

  // const [bottomRadius, setBottomRadius] = useState('0%');
  // const [scrollHeading, setScrollHeading] = useState("");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const maxScroll = 50; // Adjust this value for how quickly you want the border to round
  //     const radius = Math.min(scrollTop / maxScroll * 50, 50); // Cap at 50% for a smooth transition
  //     setBottomRadius(`${radius}%`);
  //     setScrollHeading(scrollTop > 30 ? "ml-[30%]" : "ml-0");
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);



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


        <div className={`z-10 w-[50vw] h-[100vh] flex justify-end transition-all duration-300 mt-[10%]  items-end`}>
          <div className=" w-full  mx-10  my-20 drop-shadow-xl">
            <div className=" flex items-center">
              <h1 className="text-[#0060b5] text-5xl font-bold  mr-2 ">
                Find Your <span className='text-yellow-400'>
                  Job</span>
              </h1>
              {/* <SearchIcon className="text-white scale-75" sx={{ fontSize: '60px' }} /> */}
            </div>



            <div className=" flex items-center">
              <h1 className="drop-shadow-lg text-white text-4xl my-5 font-bold border-b-4 border-[#0060b5] pb-1">
                Transform Your <TypingText word="CAREER"  />
              </h1>

             
            </div>

            <div className="relative w-full h-32 overflow-hidden">
              <div
                className="absolute w-full h-full flex transition-transform duration-1000 font-bold"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {quotes.map((quote, index) => (
                  <div key={index} className="w-full flex-shrink-0  bg-transparent text-white drop-shadow-xl">
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






      {/* <h2 className='text-center text-5xl font-semibold mt-10 italic text-[var(--primary-color)]'>Related Services</h2>
      <div className='my-10  flex justify-around'
      >
        <div className="sm:w-[20vw] border-2 border-transparent border-gray-100 p-5 hover:translate-x-2 hover:shadow-lg rounded-lg" data-aos="zoom-in" data-aos-duration="700">

          <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
            <img src={AboutUs4} alt="" />
          </div>
          <div className="h-[50%] ">
            <h1 className="font-bold text-center my-2 text-xl "> Permanent Placement</h1>
            <p className='text-[var(--secondary-color)]'>  We help organisations hire expert full-time talent for middle,
              senior and top level positions across diverse sectors.</p>

          </div>
        </div>

        <div className="sm:w-[20vw] border-2 border-transparent border-gray-100 p-5 hover:translate-x-2 hover:shadow-lg rounded-lg" data-aos="zoom-in" data-aos-duration="700">

          <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
            <img src={AboutUs4} alt="" />
          </div>
          <div className="h-[50%] ">
            <h1 className="font-bold text-center my-2 text-xl "> Staffing Solutions</h1>
            <p className='text-[var(--secondary-color)]'>  Building an agile and flexible workforce requires an easy and fast
              access to expert talent, available on short notice. We offer a pool of pre-screened
              talent, hired on our rolls</p>

          </div>
        </div>
        <div className="sm:w-[20vw] border-2 border-transparent border-gray-100 p-5 hover:translate-x-2 hover:shadow-lg rounded-lg" data-aos="zoom-in" data-aos-duration="700">

          <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
            <img src={AboutUs4} alt="" />
          </div>
          <div className="h-[50%] ">
            <h1 className="font-bold text-center my-2 text-xl ">Contract to Hire</h1>
            <p className='text-[var(--secondary-color)]'>  Our Temp-to-Hire services allow organisations the opportunity to
              evaluate a candidate over a period of time before on-boarding the candidate at the end of the
              contract period.</p>

          </div>
        </div>
      </div> */}

<h1 className='h-[100vh] flex justify-center items-center text-4xl text-[var(--primary-color)]'>Work In Progress.....</h1>

      <div className='recr-footer'>
        <Footer /></div>
    </div>

  );


}



export default CareerPage;