import React, { useEffect, useState,useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AboutUs4 from '../../Assets/Images/AboutUs4.jpg';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Footer from '../../Components/commoncomponents/Footer';
import jobinterview from '../../Assets/Videos/jobinterview.mp4'
import HeroSection from '../../Components/commoncomponents/HeroSection';
import delivery from '../../Assets/Images/deliveryicon1.png'
import clienticon from '../../Assets/Images/clienticon2.png'
// import candidate from '../../Assets/Images/candidateicon1.png'
import rating from '../../Assets/Images/ratingicon.png'
import ITicon from '../../Assets/Images/information.png'
// import software from '../../Assets/Images/softwareicon.png'

import enterprise from '../../Assets/Images/enterpriseicon.png'
import CustomAccordion from './NewTwo';
import PromiseCardsContainer from '../../Components/rechomepage/PromiseCards';
import NavbarDemo from '../../Components/lightmodecomponents/NavbarDemo';
import HeroSection2 from './HeroSection2';
const RecHomePage = () => {
  const searchIconSvg = `data:image/svg+xml;base64,${btoa(`

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100"  fill="white" height="100" viewBox="0 0 24 24">
<path d="M 10 2 C 5.590603 2 2 5.5906063 2 10 C 2 14.409394 5.590603 18 10 18 C 11.929744 18 13.635779 17.22512 15.019531 16.082031 L 20.71875 21.78125 A 0.75130096 0.75130096 0 1 0 21.78125 20.71875 L 16.082031 15.019531 C 17.225119 13.635778 18 11.929742 18 10 C 18 5.5906063 14.409397 2 10 2 z M 10 3.5 C 13.598737 3.5 16.5 6.401265 16.5 10 C 16.5 13.598735 13.598737 16.5 10 16.5 C 6.4012627 16.5 3.5 13.598735 3.5 10 C 3.5 6.401265 6.4012627 3.5 10 3.5 z"></path>
</svg>

  `)}`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const quotes = [
    "Your success is our priority. With our deep industry knowledge and personalized approach, we match you with top talent that drives your business forward, creating long-term value beyond just filling a position.",

    "Your business deserves the best, and we’re here to deliver. We go beyond resumes to find candidates that align with your company’s values and goals, ensuring a perfect fit every time",
  ];


  const marqueeRef = useRef(null); 
  const handleMouseEnter1 = () => {
    marqueeRef.current.stop(); 
  };

  const handleMouseLeave1 = () => {
    marqueeRef.current.start(); 
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 3000); 
    }
    return () => clearInterval(interval);
  }, [isHovered, quotes.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [expanded, setExpanded] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0); // Track how many lines are visible
  const [visibleItems, setVisibleItems] = useState({});
  const [hoverDelay, setHoverDelay] = useState(null);

  useEffect(() => {
    if (visibleSteps < 2) {
      const timer = setTimeout(() => {
        setVisibleSteps((prev) => prev + 1);
      }, 100); // Adjust the time for each step to appear
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [visibleSteps]);
  // const [expanded, setExpanded] = useState(false);

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const [scrollReached, setScrollReached] = useState(false);
  
  // Scroll handler to detect when user scrolls past a specific height
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const targetHeight = 300; // Height after which state becomes true

    if (scrollTop >= targetHeight) {
      setScrollReached(true);
    } else {
      setScrollReached(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="recrHomepageMain bg-white" >
      <NavbarDemo/>

<HeroSection2 videoUrl={jobinterview}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className="lg:w-[50vw] w-[90vw] md:h-80 h-auto font-bold drop-shadow-xl">
          <div className='' style={{ cursor: `url(${searchIconSvg}) 40 30, auto` }}>
          <div className="relative">
  <h1
    className=" text-[#0060b5] text-3xl lg:text-5xl font-bold drop-shadow-xl mr-2 "
    style={{ userSelect: 'none', WebkitUserSelect: 'none', MsUserSelect: 'none' }}
  >
    {"Top Talent Access".split("").map((letter, index) => (
      <span key={index} className="hover:text-white transition-opacity duration-300">
        {letter}
      </span>
    ))}
  </h1>

  <span
    className="absolute bottom-0 lg:top-5 top-2 left-0 lg:w-[30vw] w-[90vw] lg:border-b-2 border-b-4 my-9"
    style={{
      borderImage: "linear-gradient(to right, yellow, white, blue, black) 1",
      animation: "gradientShift 6s infinite",
    }}
  ></span>

  <style jsx>{`
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
  `}</style>
</div>

          <div className=" flex items-center">

            <h1 className="drop-shadow-lg  text-white md:text-3xl text-xl my-5 font-bold  pb-4"
              style={{ userSelect: 'none', WebkitUserSelect: 'none', MsUserSelect: 'none' }}
            >
              {"Let Us Find the ".split("").map((letter, index) => (
                <span key={index} className="hover:text-[#0060b5] md:hover:text-[35px] transition-opacity duration-300">
                  {letter}
                </span>
              ))}

           

              {"Perfect Fit ".split("").map((letter, index) => (
                <span key={index} className="hover:text-[#0060b5] md:hover:text-[35px] transition-opacity duration-300 text-[#0060b5]  md:text-4xl text-xl">
                  {letter}
                </span>
              ))}

             

              {"for Your Company".split("").map((letter, index) => (
                <span key={index} className="hover:text-[#0060b5]  md:hover:text-[35px] text-white transition-opacity duration-300">
                  {letter}
                </span>
              ))}
            </h1>

          </div>
          </div>

          <div className="relative w-full h-32 overflow-hidden  mr-2 cursor-pointer">
            <div
              className="absolute w-full h-full flex transition-transform duration-1000 "
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {quotes.map((quote, index) => (
                <div key={index} className="w-full font-semibold md:text-xl flex-shrink-0 bg-transparent text-white drop-shadow-xl">
                  <p>{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </HeroSection2>

      <CustomAccordion />

    




<PromiseCardsContainer/>





<p className='text-lg italic text-[#0060b5] text-semibold text-center mt-20 py-5  border-y-2 border-white'>
          “ At BitByBit, it’s all about YOU! Whether you’re hunting for a new full-time role or just need a temp role, our recruiters are here to help you out. ”
        </p>


<Footer/>

    </div>

  );

}


export default RecHomePage;

