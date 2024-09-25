import React, { useEffect, useState } from 'react'
import letstalk from "../../Assets/Images/letstakeicon1.png"
import technology from "../../Assets/Videos/Technology6.mp4"
import highquality from "../../Assets/Images/highquality1.png"
import onbudget from "../../Assets/Images/onbudget.png"
import SplitCard from '../../Components/TechServicesPage/SplitCard'
import bank from "../../Assets/Images/bankingicon.png";
import ecom from "../../Assets/Images/egovandecomicon.png";
import health from "../../Assets/Images/healthcare.png";
import hospitality from "../../Assets/Images/hospitality.png";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Footer from '../../Components/CommonComponents/Footer';
import HeroSection from '../../Components/CommonComponents/HeroSection';
import "./TechServicesPage.css"

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
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [visibleSteps, setVisibleSteps] = useState(0);

  // This useEffect will add one step every second (you can adjust the timing)
  useEffect(() => {
    if (visibleSteps < 2) {
      const timer = setTimeout(() => {
        setVisibleSteps((prev) => prev + 1);
      }, 1000); // Adjust the time for each step to appear
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [visibleSteps]);
  return (
    <div className="techHomepageMain  ">
      {/* {scrollHeading ? (
  <div className='z-50 top-[90%] bg-blue-800 text-white fixed flex justify-center items-center rounded-lg font-montserrat text-[18px] font-bold h-[44px] leading-[24px] w-2/5 gap-[10px] md:p-0 md:w-[10%] md:ml-2'>
    <img src={letstalk} width='25px' alt="Let's talk" />
    <a href="#" onClick={(e) => e.preventDefault()}>Let’s talk</a>
  </div>
) : null}  */}

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

      {/* <div className={`header-container ${showNavbar ? "" : "header-hidden"}`}> */}
      {/* {showNavbar && <Header />} */}
      {/* </div> */}

      {/* ............................................................. */}

      {/* <div className="techpage md:mt-4 md:mb-16  w-full h-full   ">
        <div className="  items-center md:flex md:flex-row md:w-full md:pl-10 pl-2 flex  ">
          <div className=" z-50 w-full md:flex md:flex-col md:justify-center md:items-start md:gap-2 md:mt-28  ">
            <h1 className={`home_h1 font-extrabold  text-6xl leading-[57px] text-[var(--primary-color)] font-montserrat pb-4 z-50 ${scrollHeading}`} style={{ transition: 'margin-left 1s ease-in-out' }}>Your Solution</h1> */}
      {/* <ul className={`list-disc md:ml-8 font-montserrat text-[16px] leading-[28px] break-words text-white pr-[70px] z-50`}>
              <li className={`${scrollHeading} `} style={{ transition: 'margin-left 1s ease-in-out' }}>Partner with us to bring your ideas to life and stay ahead in the digital world.</li>
              <li className={`${scrollHeading}`} style={{ transition: 'margin-left 1s ease-in-out' }}>Expertise in custom websites, mobile apps, and enterprise systems.</li>
              <li className={`${scrollHeading}`} style={{ transition: 'margin-left 1s ease-in-out' }}>High-quality development services tailored to your needs.</li>
              <li className={`${scrollHeading}`} style={{ transition: 'margin-left 1s ease-in-out' }}>Latest technologies ensure reliable and scalable solutions.</li>
                </ul> */}
      {/* <div className='z-50  flex justify-center items-center bg-[var(--primary-color)] text-[var(--background-color)] rounded-lg  font-montserrat text-[18px] font-bold h-[44px] leading-[24px] w-2/5 gap-[10px] md:p-0 md:w-1/4'>
              <img src={letstalk} width='25px'  />
              <a href="#">Let’s talk</a>
            </div> */}
      {/* 
             <div className={`label text-center  mt-5 md:flex md:justify-start md:ml-3 md:gap-3 ${scrollHeading} `} style={{ transition: 'margin-left 1s ease-in-out' }}>
        <h1 className={`relative font-extrabold text-5xl text-white ${scrollHeading}`} style={{ transition: 'margin-left 1s ease-in-out' }}>
    We
  <span className="absolute animate-zoom-design md:ml-4 text-white" style={{ color: 'var(--primary-color)'}}>Design</span>
  <span className="absolute animate-zoom-develop md:ml-4 text-white" style={{ color:'var(--primary-color)' }}>Develop</span>
  <span className="absolute animate-zoom-deliver md:ml-4 text-white" style={{ color:'var(--primary-color)' }}>Deliver</span>
</h1>
   </div> */}
      {/* <p className="md:mt-8 text-white z-50 text-xl md:ml-4">Partner with us for expert, high-quality development of custom <br/> websites, 
       mobile apps, and enterprise systems using the latest scalable technologies.</p> */}

      {/* <ul className={`list-disc w-full md:mt-4 md:ml-8 font-montserrat text-[16px] leading-[28px] break-words text-white pr-[70px] z-50`}>
              <li className={`${scrollHeading} `} style={{ transition: 'margin-left 1s ease-in-out' }}>Latest scalable technologies for reliable solutions.</li>
              <li className={`${scrollHeading}`} style={{ transition: 'margin-left 1s ease-in-out' }}>Expert custom website, app, and system development.</li>
              
                </ul>
   
          </div> */}
      {/* <div className=" mt-6 md:w-3/6 md:flex md:justify-center md:items-center">
            <img src={technologyhomeimg} style={{}} width='90%' />
          </div> */}
      {/* <img
          src={technologyhomeimg}
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out"
          // style={{  }}
          style={{ borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`}}  // Makes the entire image slightly transparent
        /> */}
      {/* <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover   transition-all duration-1000 ease-in-out"
          style={{
            borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`,
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center',
          }}
        > */}
      {/* <source src={technology} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      {/* <div
          className="absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out"
          style={{
            backgroundColor: 'rgba(0, 96, 181, 0.5)',
            borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`
            // Transparent blue overlay
          }}
        ></div> */}
      {/* <div
          className="absolute top-0 -left-2 w-full h-full transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%)',
            borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`,
            filter: 'blur(5px)',
            pointerEvents: 'none',
          }}
        ></div> */}
      {/* </div> */}

      {/* <div className={`label text-center  mt-5 md:flex md:justify-start md:ml-20 md:gap-3 `}>
        <h1 className={`relative font-extrabold text-5xl text-white ${scrollHeading}`} style={{ transition: 'margin-left 1s ease-in-out' }}>
    We
  <span className="absolute animate-zoom-design md:ml-4 text-white" style={{ color: 'var(--primary-color)'}}>Design</span>
  <span className="absolute animate-zoom-develop md:ml-4 text-white" style={{ color:'var(--primary-color)' }}>Develop</span>
  <span className="absolute animate-zoom-deliver md:ml-4 text-white" style={{ color:'var(--primary-color)' }}>Deliver</span>
</h1>
   </div> */}
      {/* <p className="md:mt-8 text-white z-50 text-xl md:ml-[88px]">Partner with us for expert, high-quality development of custom <br/> websites, 
       mobile apps, and enterprise systems using the latest scalable technologies.</p>  */}
      {/* </div> */}

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
          {/* <ul className="list-disc w-full md:mt-4 md:ml-16 font-montserrat text-[16px] leading-[28px] break-words text-white pr-[70px] z-50">
      <li
        className={`w-full ${visibleSteps >= 1 ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 1s ease-in-out' }}
      >
        Latest scalable technologies for reliable solutions.
      </li>
      <li
        className={`w-full ${visibleSteps >= 2 ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 1s ease-in-out' }}
      >
        Expert custom website, app, and system development.
      </li>
    </ul> */}

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

      {/* <div className="secondary-section"> */}
      {/* <div className="label text-center md:mb-10  mt-5 md:flex md:justify-center md:gap-3">


        </div> */}
      {/* <div className=" w-full   mt-2 h-screen justify-start ">
          <div>
            <h1 className="text-[var(--primary-color)] heading2 text-5xl font-bold ml-10  ">
              Process & Methodology
            </h1>
            {/* <span className="w-[8%] h-[5px] ml-[3%] block rounded-b-[5px]" style={{backgroundColor:'#002eff'}}></span>  */}
      {/* </div>

          <div className="flex justify-between items-center  h-[80vh] mt-4 ">
            <ol className="flex relative  bottom-16 text-gray-500  w-full border-gray-400  dark:border-gray-700 dark:text-gray-400">
              <li className="flex-1 mr-10 ml-10 ">
                <span className=" absolute flex items-center justify-center w-24 h-10  rounded top-0 -mt-4  ring-blue-400 dark:ring-gray-900 dark:bg-gray-700">
                  <img src={requirements} className="h-20 w-40 " />
                </span>
                <div className="ml-[96px] -mt-[25px] w-80">
                  <h3 className="font-xl font-bold text-white leading-tight">
                    Planning and Requirement Analysis
                  </h3>
                  <p className="text-sm pt-1 leading-normal text-blue-500">
                    We begin by understanding your business needs and defining
                    clear project requirements.
                  </p>
                </div>
              </li>
              <li className="flex-1 mr-10  ">
                <span className="-mt-[110px]  absolute flex items-center justify-center w-24 h-10 bg-gray-100 rounded top-0 -mt-4  ring-blue-400 dark:ring-gray-900 dark:bg-gray-700">
                  <img src={design} className="h-20 w-40" />
                </span>
                <div className="ml-[95px] -mt-[120px] w-80">
                  <h3 className="font-xl font-bold text-white leading-tight">
                    Design
                  </h3>
                  <p className="text-sm pt-1">
                    Our experienced architects design scalable and efficient
                    software solutions tailored to your specifications.
                  </p>
                </div>
              </li>
              <li className="flex-1  ">
                <span className="absolute flex items-center justify-center w-24 h-10 bg-gray-100 rounded top-0 -mt-4  ring-blue-400 dark:ring-gray-900 dark:bg-gray-700">
                  <img src={development1} className=" h-20 w-40" />
                </span>
                <div className="ml-[95px] -mt-[25px] w-80">
                  <h3 className="font-xl font-bold text-white leading-tight">
                    Development
                  </h3>
                  <p className="text-sm pt-1">
                    Our developers build robust software using industry-best
                    practices and cutting-edge technologies.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="flex justify-between items-center  mt-0  ">
            <ol className="flex relative text-gray-500  w-full border-gray-400  dark:border-gray-700 dark:text-gray-400">
              <div className="flex flex-wrap">
                <li className="flex-1  mr-10 ml-12 ">
                  <span className=" -mt-[160px] absolute flex items-center justify-center w-24 h-10  rounded top-0   ring-blue-400 dark:ring-gray-900 dark:bg-gray-700">
                    <img src={testing} className=" h-20 w-40" />
                  </span>
                  <div className="ml-[95px] -mt-[170px] ">
                    <h3 className="font-xl font-bold text-white leading-tight">
                      Testing
                    </h3>
                    <p className="text-sm pt-1">
                      Comprehensive testing ensures that our software is
                      reliable, secure, and performs flawlessly.
                    </p>
                  </div>
                </li>
                <span className="absolute  bottom-[250px] left-[540px] flex items-center justify-center w-56 h-10 rounded -mt-4 ring-blue-400 ">
                  <img src={arrow} className=" h-40 w-40" />
                </span>

                <li className="flex-1 mr-4 pb-10">
                  <span className=" -mt-[60px] absolute flex items-center justify-center w-24 h-10 bg-gray-100 rounded top-0 -mt-4  ring-blue-400 dark:ring-gray-900 dark:bg-gray-700">
                    <img src={deployment} className=" h-20 w-40" />
                  </span>
                  <div className="ml-[95px] -mt-[70px] ">
                    <h3 className="font-xl font-bold text-white leading-tight">
                      Deployment
                    </h3>
                    <p className="text-sm pt-1">
                      We seamlessly deploy your software, ensuring minimal
                      disruption and maximum efficiency.
                    </p>
                  </div>
                </li>
                <li className="flex-1 mr-4">
                  <span className="-mt-[160px] absolute flex items-center justify-center w-24 h-10 bg-gray-100 rounded top-0 -mt-4  ring-blue-400 dark:ring-gray-900 dark:bg-gray-700">
                    <img src={maintenance} className=" h-20 w-40" />
                  </span>
                  <div className="ml-[95px] -mt-[160px] w-80">
                    <h3 className="font-xl font-bold text-white leading-tight">
                      Maintenance and Support
                    </h3>
                    <p className="text-sm pt-1">
                      Ongoing support and maintenance keep your software running
                      smoothly and adapt to evolving needs.
                    </p>
                  </div>
                </li>
              </div>
            </ol>
          </div> */}
      {/* </div>  */}

      {/* </div> */}

      {/*/////////////////////////////////////////////////////////// */}
      <div className='w-[90%] h-auto' >
        <h1 className='text-center md:text-start md:ml-[9%] text-[var(--primary-color)]  text-5xl font-bold m-[5px] font-montserrat md:mt-[40px] '>
          Industries we deal with
        </h1>
        <div className="grid grid-cols-1 place-content-center md:grid-cols-2 md:gap-2 md:ml-20 md:w-auto w-[100%]">
          <div>
            <div className="m-7">
              <div className="p-4 bg-[#1a1a1a] border border-[#333] border-spacing-4 hover:border-blue-600 shadow-lg hover:shadow-xl transition-shadow duration-300  hover:scale-110 ">
                <style jsx>{`
                  .rotate-y-360 {
                    transform: rotateY(0deg);
                    transition: transform 0.5s;
                    transform-style: preserve-3d;
                  }
                  .group:hover .rotate-y-360 {
                    transform: rotateY(360deg);
                  }
                `}</style>
                <div className="flex items-center justify-center gap-2 group">
                  <img
                    src={bank}
                    className="md:h-12 image rotate-y-360"
                    alt="Banking"
                  />
                  <div className="font-bold pt-1 text-lg text-[#00bfff]">
                    Banking, Financial Services and Insurance
                  </div>
                </div>

                <div className="md:ml-8 leading-loose mt-4 text-[#f0f0f0]">
                  <ul className="list-disc">
                    <li>
                      Expertise in secure and efficient software for the BFSI
                      sector.
                    </li>
                    <li>
                      Risk assessment systems for informed decision-making.
                    </li>
                    <li>Customer relationship management (CRM) solutions.</li>
                    <li>
                      Regulatory compliance solutions to meet industry
                      standards.
                    </li>
                    <li>
                      Automation of routine banking operations for improved
                      efficiency.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mx-7">
              <div className="p-4 bg-[#1a1a1a] border border-[#333] hover:border-blue-600 border-spacing-4 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110">
                <style jsx>{`
                  .rotate-y-360 {
                    transform: rotateY(0deg);
                    transition: transform 0.5s;
                    transform-style: preserve-3d;
                  }
                  .group:hover .rotate-y-360 {
                    transform: rotateY(360deg);
                  }
                `}</style>
                <div className="flex items-center justify-center gap-2 group">
                  <img
                    src={hospitality}
                    className="md:h-12 image rotate-y-360"
                    alt="Hospitality"
                  />
                  <div className="font-bold pt-1 text-lg text-[#00bfff]">
                    Hospitality
                  </div>
                </div>

                <div className="leading-loose md:ml-8 mt-4 text-[#f0f0f0]">
                  <ul className="list-disc">
                    <li>
                      Property Management Systems (PMS) for efficient
                      hospitality operations.
                    </li>
                    <li>Booking systems to simplify guest management.</li>
                    <li>CRM software to enhance customer service.</li>
                    <li>POS systems for optimized transaction handling.</li>
                    <li>
                      Tailored solutions using industry expertise and
                      technology.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="m-7">
              <div className="p-4 bg-[#1a1a1a] border border-[#333] hover:border-blue-600 border-spacing-4 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110">
                <style jsx>{`
                  .rotate-y-360 {
                    transform: rotateY(0deg);
                    transition: transform 0.5s;
                    transform-style: preserve-3d;
                  }
                  .group:hover .rotate-y-360 {
                    transform: rotateY(360deg);
                  }
                `}</style>
                <div className="flex items-center justify-center gap-2 group">
                  <img
                    src={ecom}
                    className="md:h-12 image rotate-y-360"
                    alt="E-Gov & E-Com"
                  />
                  <div className="font-bold pt-1 text-lg text-[#00bfff]">
                    E-Gov & E-Com
                  </div>
                </div>

                <div className="leading-loose md:ml-8 mt-4 text-[#f0f0f0]">
                  <ul className="list-disc">
                    <li>
                      Comprehensive e-Governance and e-Commerce solutions.
                    </li>
                    <li>
                      Services include ticketing, recharges, transfers, and
                      Aadhaar.
                    </li>
                    <li>
                      Supports Amazon orders, insurance purchases, utility bill
                      payments.
                    </li>
                    <li>
                      Features shopping cart integration and payment gateways.
                    </li>
                    <li>
                      Customer management and analytics for smooth transactions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mx-7">
              <div className="p-4 bg-[#1a1a1a] border border-[#333] hover:border-blue-600 border-spacing-4 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 ">
                <style jsx>{`
                  .rotate-y-360 {
                    transform: rotateY(0deg);
                    transition: transform 0.5s;
                    transform-style: preserve-3d;
                  }
                  .group:hover .rotate-y-360 {
                    transform: rotateY(360deg);
                  }
                `}</style>

                <div className="flex items-center justify-center gap-2 group">
                  <img
                    src={health}
                    className="md:h-12 image rotate-y-360"
                    alt="HealthCare"
                  />
                  <div className="font-bold pt-1 text-lg text-[#00bfff]">
                    HealthCare
                  </div>
                </div>

                <div className="leading-loose md:ml-8 mt-4 text-[#f0f0f0]">
                  <ul className="list-disc">
                    <li>Wide range of healthcare IT solutions.</li>
                    <li>
                      Electronic Health Records (EHR) systems for efficient
                      patient data management.
                    </li>
                    <li>
                      Appointment scheduling software for streamlined bookings.
                    </li>
                    <li>Telemedicine platforms for remote patient care.</li>
                    <li>
                      Healthcare data analytics to enhance care and operations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* .......................................................... */}
      {/* <section className=" w-full md:h-screen bg-red-40 flex flex-col items-center  justify-center py-4">
        <div className=" text-center w-[90%] bg-green-30 mb-10">
          <p className=" text-[var(--primary-color)] text-[40px] font-bold techservice_heading2 font-montserrat">
            Let our experts take care of your website,
            <br />
            so that you can focus on your business
          </p>
        </div>

        <div className="md:w-[90%] md:flex md:flex-row md:justify-around flex flex-col  ">
          <div className=" md:w-[40%] bg-yellow-40">
            <p className="techservice_paraghap md:pl-1 p-2">
              Five Online is a top website maintenance services company, helping
              businesses across the globe improve the performance and security
              of their websites. Whether you're looking for a monthly, hourly,
              or after-hours website maintenance plan, Five Online provides the
              experience and expertise your company demands.
            </p>

            <h1 className="techservice_heading3 mt-6 mb-1 md:pl-1 p">
              Professional Website Management{" "}
            </h1>
            <h1 className="techservice_heading3 bg-yellow-500 text-white md:pl-1">
              Maximize Your Website’s Potential{" "}
            </h1>
          </div>

          <div className=" md:w-[50%] bg-orange- md:grid md:grid-cols-2 gap-6 mt-2">
            <div className="techservice_sec2box flex items-center  gap-8 md:p-3  ">
              <img src={webmonitor} width="20%" className=" md:h-12" />
              <p className="techservice_sec2paraghap">
                24x7x365 Website Monitoring
              </p>
            </div>
            {/* ............................................... */}
      {/* <div className="techservice_sec2box flex items-center  gap-8 md:p-3">
              <img src={techsupport} width="20%" className=" md:h-12" />
              <p className="techservice_sec2paraghap md:pr-2">
                Unlimited Technical Support
              </p>
            </div> */}
      {/* ............................................... */}
      {/* <div className="techservice_sec2box flex items-center  gap-8 md:p-3 ">
              <img src={contentchange} width="20%" className=" md:h-12" />
              <p>Content Changes</p>
            </div> */}
      {/* ............................................... */}
      {/* <div className="techservice_sec2box flex items-center  gap-8 md:p-3">
              <img src={hosting} width="20%" className=" md:h-12" />
              <p>Hosting Support</p>
            </div> */}
      {/* ............................................... */}
      {/* <div className="techservice_sec2box flex items-center  gap-8 md:p-3">
              <img src={websecurity} width="20%" className=" md:h-12" />
              <p>Website Security</p>
            </div> */}
      {/* ............................................... */}
      {/* <div className="techservice_sec2box flex items-center  gap-8 md:p-3">
              <img src={databackup} width="20%" className=" md:h-12" />
              <p>Regular Backup</p>
            </div> */}
      {/* ............................................... */}
      {/* </div>
        </div>
      </section>  */}

      <section className="relative w-full min-h-screen mt-10 py-16 overflow-hidden">
        {/* Diagonal White Shape for Contrast */}
        {/* <div className="absolute top-0 left-0 w-full h-[20%] bg-white transform -skew-y-6"></div> */}

        {/* Main Heading with Blue and Yellow */}
        <div className="relative z-10 text-center w-[90%] mb-12">
          <p className="text-[var(--primary-color)] text-5xl md:text-[40px] font-bold font-montserrat tracking-wide leading-tight">
            Expert Website Solutions
          </p>
          <p className="text-yellow-500 text-2xl mt-4">
            Focus on your business, while we handle your website.
          </p>
        </div>

        {/* Section Content */}
        <div className="relative md:w-[90%] flex flex-col md:flex-row justify-between items-center z-10">
          {/* Left Floating Content */}
          <div className="md:w-[40%] ml-10 bg-gradient-to-r from-blue-500 via-yellow-400 to-yellow-500 p-10 rounded-lg shadow-2xl transform   transition-all duration-500 ease-in-out">
            <p className="text-black text-lg leading-relaxed mb-6">
              Five Online offers high-quality website maintenance services,
              tailored to improve your site's performance and security. Our
              plans cater to businesses of all sizes, ensuring professional
              management of your website.
            </p>
            <h2 className="text-xl font-bold text-white">
              Professional Website Management
            </h2>
            <h2 className="text-2xl font-bold bg-yellow-500 text-black py-2 px-4 mt-6 inline-block transform hover:-translate-y-1 transition-transform">
              Maximize Your Website’s Potential
            </h2>
          </div>

          {/* Right Side Features - Minimalistic and Clean */}
          <div className="md:w-[50%] grid grid-cols-2 gap-8 mt-12 md:mt-0">
            {[
              { src: webmonitor, label: "24/7 Website Monitoring" },
              { src: techsupport, label: "Unlimited Tech Support" },
              { src: contentchange, label: "Content Updates" },
              { src: hosting, label: "Hosting Support" },
              { src: websecurity, label: "Website Security" },
              { src: databackup, label: "Regular Backups" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-full shadow-lg transform hover:scale-110 transition-transform duration-500 hover:bg-blue-700"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-12 w-12 object-contain"
                />
                <p className="text-black hover:text-white text-lg font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Background Elements */}
        {/* <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-blue-400 opacity-30 rounded-full transform rotate-12"></div> */}
      </section>

      {/* .............................................................. */}
      {/* <div className='w-[90%] h-auto  md:mb-20 mb-5'>
        <h1 className='mb-3  text-center md:text-start md:ml-[9%] text-[var(--primary-color)]  text-[40px] font-bold m-[5px] font-montserrat md:w-full md:mt-[40px] mt-5'>
          Why do our clients value us?
        </h1>
        <div className='md:flex md:flex-row md:justify-evenly md:ml-6  flex flex-col-reverse '>
          <div className='md:w-[50%]  space-y-4 text-[var(--secondary-color)]'>
            <h1 className='font-extrabold text-2xl bg-red-3 md:text-start text-center'>High-Quality Products</h1>
          
            <ul className='list-disc pl-5 space-y-2 md:ml-0 ml-4'>
              <li>Clients value our commitment to quality, craftsmanship, and innovation.</li>
              <li>Consistent high-quality experience for every client.</li>
              <li>Customized solutions for unique client needs.</li>
              <li>Focus on eco-friendly materials and processes.</li>
              <li>Outstanding customer service enhances the overall experience.</li>
            </ul>
          </div>

          <div>
            <img src={highquality} className='h-[50vh] md:ml-0 ml-5' />
          </div>
        </div>



        <div className='md:flex md:justify-around md:gap-24 md:ml-6 md:mt-8'>
          <div>
            <img src={onbudget} className='h-[50vh] ml-6' />
          </div>
          <div className='md:w-[50%]  space-y-4 text-[var(--secondary-color)] '>
            <h1 className='font-extrabold text-2xl md:text-start text-center'>On Budget, On-Time</h1>
          
            <ul className='list-disc pl-5 space-y-2 md:ml-0 ml-4'>
              <li>Consistent on-time delivery.</li>
              <li>Projects stay within budget.</li>
              <li>Effective planning minimizes risks.</li>
              <li>Proactive communication keeps clients updated at every stage.</li>
            </ul>
          </div>


        </div>
      </div> */}
      <div className=" ">
        <h1 className="font-bold text-[40px] text-[var(--primary-color)] flex justify-center items-center ">
          Driving Success Through Strategic Partnerships and Innovation
        </h1>

        <div className="flex flex-col  md:flex-row justify-evenly  mb-28 mx-10  ">
          <div className=" text-white p-6 flex flex-col items-center justify-between h-[360px] ">
            <img src={team} className="h-20 w-20" />
            <h3 className="text-lg font-semibold mb-8 text-[#00bfff]">
              Dedicated Teams
            </h3>
            <p
              className="flex-grow   "
              style={{ marginTop: "0", lineHeight: "1.4 " }}
            >
              Successful collaboration is rooted in strong partnerships. You’ll
              work closely with a dedicated team from inception to completion,
              fostering an environment of trust and open communication. This
              collaborative approach allows us to bring in specialized experts.{" "}
            </p>
          </div>

          <div className=" text-white p-6 flex flex-col items-center justify-between h-[360px]">
            <img src={deliver} className="h-20 w-20" />
            <h3 className="text-lg font-semibold mb-2 text-[#00bfff]">
              Prioritizing Software Delivery
            </h3>
            <p
              className="flex-grow  "
              style={{ marginTop: "0", lineHeight: "1.4 " }}
            >
              We prioritize the timely and consistent delivery of functional
              software that meets your needs. Understanding the power of
              compelling storytelling, we will expertly guide you through every
              phase of the process, ensuring a seamless experience from start to
              finish.{" "}
            </p>
          </div>

          <div className=" text-white p-6 flex flex-col items-center justify-between h-[360px]">
            <img src={worker} className="h-20 w-20" />
            <h3 className="text-lg font-semibold mb-2 text-[#00bfff]">
              Constructive Collaborators
            </h3>
            <p
              className="flex-grow "
              style={{ marginTop: "0", lineHeight: "1.4 " }}
            >
              Genuine partnerships thrive on the ability to challenge one
              another, as it fosters growth and innovation. We believe in
              encouraging you to push boundaries through constructive
              discussions, creating a dynamic environment where ideas can
              flourish.{" "}
            </p>
          </div>

          <div className=" text-white p-6 flex flex-col justify-between  h-[360px] ">
            <img src={deliver} className="h-20 w-20" />
            <h3 className="text-lg font-semibold mb-2 text-[#00bfff]">
              Pragmatic Innovators
            </h3>
            <p
              className="flex-grow  "
              style={{ marginTop: "0", lineHeight: "1.4 " }}
            >
              We not only accelerate the development process but also ensure
              that the outcomes are meaningful and impactful for your business.
              This strategic adaptation empowers you to achieve tangible results
              that align with your goals and drive your success.{" "}
            </p>
          </div>

          <div className=" text-white p-6 flex flex-col justify-between h-[360px]">
            <img src={deliver} className="h-20 w-20" />
            <h3 className="text-lg font-semibold mb-8 text-[#00bfff] ">
              Tailored Solutions
            </h3>
            <p
              className="flex-grow  "
              style={{ marginTop: "0", lineHeight: "1.4 " }}
            >
              We adapt to your unique circumstances, working collaboratively to
              develop a tailored, strategic approach. Every project comes with
              its own set of challenges, and we are fully committed to
              overcoming yours while utilizing tested, reliable technologies.{" "}
            </p>{" "}
          </div>
        </div>
      </div>
      <div className=" tech-footer">
        <Footer />
      </div>
    </div>
  );
};

export default TechHomePage;
