import React, { useEffect, useState, useRef } from "react";
import letstalk from "../../Assets/Images/letstakeicon1.png";
import technology from "../../Assets/Videos/Technology6.mp4";
import highquality from "../../Assets/Images/highquality1.png";
import onbudget from "../../Assets/Images/onbudget.png";
import SplitCard from "../../Components/TechServicesPage/SplitCard";
import bank from "../../Assets/Images/bankingicon.png";
import ecom from "../../Assets/Images/egovandecomicon.png";
import health from "../../Assets/Images/healthcare.png";
import hospitality from "../../Assets/Images/hospitality.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Footer from "../../Components/CommonComponents/Footer";
import HeroSection from "../../Components/CommonComponents/HeroSection";
import "./TechServicesPage.css";


import requirements from "../../Assets/Images/planning requirement.gif";
import design from "../../Assets/Images/web-design.gif";
import development1 from "../../Assets/Images/web-developer.gif";
import testing from "../../Assets/Images/icons8-testing.gif";
import deployment from "../../Assets/Images/deployementgif.gif";
import maintenance from "../../Assets/Images/programmer.gif";
import arrow from "../../Assets/Images/Loading-Arrow.png";

import techsupport from "../../Assets/Images/technical-support (1).png";
import contentchange from "../../Assets/Images/content-writing.png";
import hosting from "../../Assets/Images/hosting.png";
import websecurity from "../../Assets/Images/websecurity.png";
import databackup from "../../Assets/Images/databackup.png";
import webmonitor from "../../Assets/Images/webmonitor.png";
import "./TechServicesPage.css";
import team from "../../Assets/Images/participation.png";
import deliver from "../../Assets/Images/saas.png";
import colaborate from "../../Assets/Images/communications.png";
import worker from "../../Assets/Images/workers.png";

const TechHomePage = () => {
  const [expanded, setExpanded] = useState(false);
  const [bottomRadius, setBottomRadius] = useState("0%");
  const [scrollHeading, setScrollHeading] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 50; // Adjust this value for how quickly you want the border to round
      const radius = Math.min((scrollTop / maxScroll) * 50, 50); // Cap at 50% for a smooth transition
      setBottomRadius(`${radius}%`);
      setScrollHeading(scrollTop > 30 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle accordion expansion
  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

  const [visibleSteps, setVisibleSteps] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0); // Track how many lines are visible
  const [visibleItems, setVisibleItems] = useState({});
  const [hoverDelay, setHoverDelay] = useState(null);
  // const hoverTimeout = useRef(null); // Use useRef to store timeout IDs
  // const [cardHeight, setCardHeight] = useState('50px'); // Initial card height
  // const [visibleLines, setVisibleLines] = useState(0); // Track how many lines are visible


  // This useEffect will add one step every second (you can adjust the timing)
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing once it's in view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  const linesBank = [
    'Expertise in secure and efficient software for the BFSI sector.',
    'Financial transactions management solutions.',
    'Risk assessment systems for informed decision-making.',
    'Customer relationship management (CRM) solutions.',
    'Regulatory compliance solutions to meet industry standards.',
  ];
  const linesHospitality = [
    'Property Management Systems (PMS) for efficient hospitality operations.',
    'Booking and reservation systems to streamline guest management.',
    'CRM software to enhance customer service.',
    'POS systems for optimized transaction handling.',
    'Tailored solutions leveraging industry expertise and latest technologies.',
  ];
  const linesGov = [
    'Comprehensive e-Governance and e-Commerce solutions.',
    'Services include ticket booking, recharges, money transfers, and Aadhaar enrolments.',
    'Supports Amazon orders, insurance purchases, and utility bill payments.',
    'Features shopping cart integration and payment gateways.',
    'Customer management and data analytics for seamless online transactions.',
  ];
  const linesHealth = [
    'Wide range of healthcare IT solutions.',
    'Electronic Health Records (EHR) systems for efficient patient data management.',
    'Appointment scheduling software for streamlined bookings.',
    'Telemedicine platforms for remote patient care.',
    'Healthcare data analytics to improve patient care and operations.',
  ];




  // const handleMouseEnter = (panel, lines) => {
  //   setExpanded(panel);
  //   setVisibleItems((prevState) => ({ ...prevState, [panel]: 0 }));

  //   if (hoverDelay) clearTimeout(hoverDelay);
    
  //   // Reveal list items one by one
  //   lines.forEach((_, index) => {
  //     setTimeout(() => {
  //       setVisibleItems((prevState) => ({
  //         ...prevState,
  //         [panel]: index + 1,
  //       }));
  //     }, index * 300); // Adjust delay for each list item (300ms)
  //   });
  // };

  // const handleMouseLeave = () => {
  //   setExpanded(false);
  //   setVisibleItems({});
  //   if (hoverDelay) clearTimeout(hoverDelay);
  // };

  const handleMouseEnter = (panel) => {
    setExpanded(panel); // Expand the accordion on hover
  };

  const handleMouseLeave = () => {
    setExpanded(false); // Collapse the accordion when the mouse leaves
    setVisibleLines(0); // Reset visible lines when closed
  };
  useEffect(() => {
    if (expanded) {
      let lineIndex = 0;
      let currentLines = []; // Declare currentLines here

      // Assign the correct lines based on the expanded panel
      if (expanded === 'panel1') {
        currentLines = linesBank;
      } else if (expanded === 'panel2') {
        currentLines = linesHospitality;
      } else if (expanded === 'panel3') {
        currentLines = linesGov;
      } else if (expanded === 'panel4') {
        currentLines = linesHealth;
      }

      const typingInterval = setInterval(() => {
        if (lineIndex < currentLines.length) {
          setVisibleLines((prev) => prev + 1); // Show next line
          lineIndex++;
        } else {
          clearInterval(typingInterval); // Clear interval when done
        }
      }, 300); // Adjust the speed of typing here (1000ms = 1 second)

      return () => clearInterval(typingInterval); // Cleanup
    }
  }, [expanded, linesBank, linesHospitality, linesGov, linesHealth]);


  return (
    <div className="techHomepageMain  ">
    

      {scrollHeading ? (
        <div
          className="z-50 bg-blue-800 text-white fixed flex justify-center items-center rounded-lg font-montserrat text-[18px] font-bold h-[44px] leading-[24px] w-2/5 gap-[10px] md:p-0 md:w-[10%] md:ml-2"
          style={{ bottom: "10px", right: "10px" }}
        >
          {" "}
          {/* Adjusted top position */}
          <img src={letstalk} width="25px" alt="Let's talk" />
          <a href="#" onClick={(e) => e.preventDefault()}>
            Let’s talk
          </a>
        </div>
      ) : null}


      <HeroSection
        videoUrl={technology}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className="  z-50 w-auto md:flex md:flex-col md:justify-end  md:gap-2  ">
          <h1
            className={`md:w-full font-bold  text-5xl  font-montserrat pb-4 z-50 text-[#0060b5] `}
            style={{ transition: "margin-left 1s ease-in-out" }}
          >
            Your <span className="text-[#0060b5]">Solution</span>
          </h1>
          <span
            className="absolute bottom-[182px] left-50 w-[48%] border-b-2 border-dotted translate-y-5"
            style={{
              borderImage: "linear-gradient(to right, yellow, white, blue) 1",
              animation: "gradientShift 3s infinite", // Increase duration to slow down the speed
            }}
          ></span>

          <style>
            {`
    @keyframes gradientShift {
      0% {
        border-image-source: linear-gradient(to right, yellow,  blue);
      }
      100% {
        border-image-source: linear-gradient(to right,  blue,  yellow);
      }
    }
  `}
          </style>

          <div
            className={`label   w-full mt-2 md:flex md:justify-start  md:gap-3 `}
            style={{ transition: "margin-left 1s ease-in-out" }}
          >
            <h1
              className={`relative w-full font-bold text-5xl text-white `}
              style={{ transition: "margin-left 1s ease-in-out" }}
            >
              We
              <span className="absolute animate-zoom-design md:ml-4 text-yellow-400">
                Design
              </span>
              <span className="absolute animate-zoom-develop md:ml-4 text-yellow-400">
                Develop
              </span>
              <span className="absolute animate-zoom-deliver md:ml-4 text-yellow-400">
                Deliver
              </span>
            </h1>
          </div>
         

          <ul className="list-none space-y-4 text-xl font-semibold mt-1">
            <li
              className="relative pl-4 mt-2 opacity-0 animate-fadeInRepeat text-white"
              style={{ animationDelay: "0.5s" }} // First item appears after 0.5s
            >
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
              Latest scalable technologies for reliable solutions.
            </li>
            <li
              className="relative pl-4 mt-4 opacity-0 animate-fadeInRepeat text-white"
              style={{ animationDelay: "1.5s" }} // Second item appears after 1.5s
            >
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
              Expert custom website, app, and system development.
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

     


          <div className='w-[90%] h-auto'>
      <h1 className='text-center  md:text-start md:ml-[9%] text-white italic text-5xl  m-[5px]  md:mt-[40px]'>
        Industries we deal with
      </h1>

      <div className='grid grid-cols-1 place-content-center md:grid-cols-2 md:gap-2 md:ml-20 md:w-auto w-[100%]'> 
    <div className='m-7'>
      <Accordion
           expanded={expanded === 'panel1'}
           onMouseEnter={() => handleMouseEnter('panel1')}
        onMouseLeave={handleMouseLeave}
        className='p-2 bg-[#1a1a1a] border border-[#333] border-spacing-4 hover:border-blue-600 shadow-lg transition-shadow duration-300'
      >
        {/* <AccordionSummary
          aria-controls='panel1-content'
        > */}
        <AccordionSummary
              expandIcon={
                <ArrowDownwardIcon
                  style={{
                    color: 'blue',
                    fontWeight: 'bold',
                    fontSize: '1.6rem',
                    animation: 'bounce 1s infinite',
                  }}
                />
              }
              aria-controls='panel1-content'
            >
          <div className='flex items-center justify-center gap-2'>
            <img src={bank} className='md:h-12' alt='Banking' />
            <div className='font-bold pt-1 text-lg text-[#00bfff]'>
              Banking, Financial Services and Insurance
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul className='md:pl-5 list-disc leading-loose text-white'>
            {linesBank.slice(0, visibleLines).map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>

    <div className='m-7'>
      <Accordion
             expanded={expanded === 'panel2'}
             onMouseEnter={() => handleMouseEnter('panel2')}
        onMouseLeave={handleMouseLeave}
        className='p-2 bg-[#1a1a1a] border border-[#333] border-spacing-4 hover:border-blue-600 shadow-lg transition-shadow duration-300'
      >
        {/* <AccordionSummary
          aria-controls='panel2-content'
        > */}

        <AccordionSummary
              expandIcon={
                <ArrowDownwardIcon
                  style={{
                    color: 'blue',
                    fontWeight: 'bold',
                    fontSize: '1.6rem',
                    animation: 'bounce 1s infinite',
                  }}
                />
              }
              aria-controls='panel2-content'
            >
          <div className='flex items-center justify-center gap-2'>
            {/* <img src={bank} className='md:h-12' alt='Banking' /> */}
            <img src={hospitality} className='md:h-12' alt='Hospitality' />
            <div className='font-bold pt-1 text-lg text-[#00bfff]'>
            Hospitality
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul className='md:pl-5 list-disc leading-loose text-white'>
            {linesHospitality.slice(0, visibleLines).map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>

    <div className='m-7'>
      <Accordion
              expanded={expanded === 'panel3'}
              onMouseEnter={() => handleMouseEnter('panel3')}
        onMouseLeave={handleMouseLeave}
        className='p-2 bg-[#1a1a1a] border border-[#333] border-spacing-4 hover:border-blue-600 shadow-lg transition-shadow duration-300'
      >
        {/* <AccordionSummary
          aria-controls='panel2-content'
        > */}

        <AccordionSummary
              expandIcon={
                <ArrowDownwardIcon
                  style={{
                    color: 'blue',
                    fontWeight: 'bold',
                    fontSize: '1.6rem',
                    animation: 'bounce 1s infinite',
                  }}
                />
              }
              aria-controls='panel3-content'
            >
          <div className='flex items-center justify-center gap-2'>
          
            <img src={ecom} className='md:h-12' alt='E-Gov & E-Com' />
            <div className='font-bold pt-1 text-lg text-[#00bfff]'>
            E-Gov & E-Com
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul className='md:pl-5 list-disc leading-loose text-white'>
            {linesGov.slice(0, visibleLines).map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
     
    <div className='m-7'>
      <Accordion
             expanded={expanded === 'panel4'}
             onMouseEnter={() => handleMouseEnter('panel4')}
        onMouseLeave={handleMouseLeave}
        className='p-2 bg-[#1a1a1a] border border-[#333] border-spacing-4 hover:border-blue-600 shadow-lg transition-shadow duration-300'
      >
       

        <AccordionSummary
              expandIcon={
                <ArrowDownwardIcon
                  style={{
                    color: 'blue',
                    fontWeight: 'bold',
                    fontSize: '1.6rem',
                    animation: 'bounce 1s infinite',
                  }}
                />
              }
              aria-controls='panel4-content'
            >
          <div className='flex items-center justify-center gap-2'>

            <img src={health} className='md:h-12' alt='HealthCare' />
            <div className='font-bold pt-1 text-lg text-[#00bfff]'>
            HealthCare
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul className='md:pl-5 list-disc leading-loose text-white'>
            {linesHealth.slice(0, visibleLines).map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
    
   
       
     </div>
     </div>

    

      <div className="w-[90%] mx-auto ">
  <h1 className="text-center md:text-start my-10 text-5xl italic  bg-clip-text text-[var(--primary-color)] drop-shadow-lg md:ml-[5%]">
    Our Promise
  </h1>
  </div>
 


      <div className=" tech-footer">
        <Footer />
      </div>
    </div>
  );
};

export default TechHomePage;
