import React, { useEffect, useRef, useState } from 'react'
// import RecServiceBackground from '../../Assets/Images/RecServiceBackground.jpg'
import delivery from '../../Assets/Images/delivery.png'
import OurServices from '../../Assets/Videos/OurServices.mp4'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../../Components/CommonComponents/Footer';
import HeroSection from '../../Components/CommonComponents/HeroSection';
import { LockOpenOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import EnterpriseSolution from "../../Assets/Videos/enterprisesolution.mp4";
// import Permanent from "../../Assets/Videos/temporary staffing.mp4";
import Permanent from "../../Assets/Videos/webdevelopment.mp4";

import Recruiters from "../../Assets/Videos/Recruitment.mp4";
// import Temporary from "../../Assets/Videos/permanent staffing.mp4";
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
import JAVA from "../../Assets/Images/JavaI.png";
// import JAVA from "../../Assets/Images/JavaI.png";

import AndroidKotlin from "../../Assets/Images/TechServicePageLanguages/Android-Kotlin.png"
import Angular from "../../Assets/Images/TechServicePageLanguages/Angular.png"
import ApplicationSupport from "../../Assets/Images/TechServicePageLanguages/Application-Support.png"
import BusinessAnalyst from "../../Assets/Images/TechServicePageLanguages/Business-Analyst.png"
import CloudOperations from "../../Assets/Images/TechServicePageLanguages/CloudOperations.png"
import DataScienceML from "../../Assets/Images/TechServicePageLanguages/DataScience-ML.png"
import DevOps from "../../Assets/Images/TechServicePageLanguages/DevOps.png"
import DotNet from "../../Assets/Images/TechServicePageLanguages/DotNet.png"
import Flutter from "../../Assets/Images/TechServicePageLanguages/Flutter.png"
import FullStackDevelopment from "../../Assets/Images/TechServicePageLanguages/FullStackDevelopment.png"
import MSSQL from "../../Assets/Images/TechServicePageLanguages/MS-SQL.png"
import ManualAutomationTester from "../../Assets/Images/TechServicePageLanguages/Manual-Automation-Tester.png"
import MicrosoftAzure from "../../Assets/Images/TechServicePageLanguages/MicrosoftAzure.png"
import MongoDB from "../../Assets/Images/TechServicePageLanguages/MongoDB.png"
import PHP from "../../Assets/Images/TechServicePageLanguages/PHP.png"
import ReactIcon from "../../Assets/Images/TechServicePageLanguages/React.png"
import CPlus from "../../Assets/Images/TechServicePageLanguages/C++.png"
import SAP from "../../Assets/Images/TechServicePageLanguages/SAP.png"
import Google from "../../Assets/Images/TechServicePageLanguages/GoogleBigQuery.png"
import Network from "../../Assets/Images/TechServicePageLanguages/NetworkEng.png"
import Oracle from "../../Assets/Images/TechServicePageLanguages/Oracle.png"
import Sales from "../../Assets/Images/TechServicePageLanguages/Sales.png"
import ServiceDesk from "../../Assets/Images/TechServicePageLanguages/ServiceDesk.png"







 const RecServicesPage = () => {

  

  const jobRoles2 = [
    ".NET DotNet Developer",
    "ReactJs Developer",
    "PL/SQL Developer",
    "Tableau Analyst",
    "Java Developer",
    "UI/UX Developer",
    "SQL Developer",
    "IOS Developer",
    "Angular Developer",
    "Python Developer",
    "Application Support",
    "Automation Tester",
    "Devops Engg",
    "Cloud Operations",
    "Data Scientist / Machine Learning",
    "Service Desk Analyst",
    "SAP ABAP CONSULTANT",
    "Oracle PL/SQL",
    "SAP ABAP Consultant",
    "SAP ABAP HR",
    "SAP HANA"
  ];


  
  const marqueeRef2 = useRef(null); // Reference to the marquee element

 

  const handleMouseEnter2 = () => {
    marqueeRef2.current.stop(); // Stop the marquee on hover
  };

  const handleMouseLeave2 = () => {
    marqueeRef2.current.start(); // Start the marquee on mouse leave
  };

  // const [visibleItems, setVisibleItems] = useState({});
  // const listRefs = useRef([]);

  // const Permanent  = [
  //   'We provide skilled, highly skilled, and professional recruitment services.',
  //   'We work closely with a wide range of clients as an extension of their own teams.',
  //   'Hiring the right candidates for permanent roles is a long-term commitment.',
  //   'We find the best people for your projects through our tried-and-tested processes.',
  //   'Our services provide a fast turnaround to meet your recruitment needs.',
  // ];

  // const Temporary   = [
  //   'Our Temporary Staffing can help you save valuable time and resources.',
  //   'Recruitment process, background checks, onboarding, and placement.',
  //   'Payroll management, monthly compliance, and other staffing needs.',
  //   'We also assist with employee training and development.',
  //   'We tailor our services to fit your unique business needs.',
  // ];

  // const Recruitment =[
  //   'We offer Recruitment Process Outsourcing (RPO) services.',
  //   'We take on the task of identifying potential candidates for your recruitment needs.',
  //   'Our approach focuses on delivering well-suited candidates.',
  //   'We aim to streamline the recruitment process for your organization.',
  //   'This minimizes the involvement of your HR personnel.'
  // ]

  // // Intersection Observer to track visibility of list items
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const index = parseInt(entry.target.dataset.index, 10);
  //         if (entry.isIntersecting) {
  //           // Show items one by one with a delay
  //           if (!visibleItems[index]) {
  //             setTimeout(() => {
  //               setVisibleItems((prev) => ({ ...prev, [index]: true }));
  //             }, index * 100); // Delay of 500ms per item
  //           }
  //         } else {
  //           // Reset visibility when the item goes out of view
  //           if (visibleItems[index]) {
  //             setVisibleItems((prev) => ({ ...prev, [index]: false }));
  //           }
  //         }
  //       });
  //     },
  //     { threshold: 0.1 } // Adjust based on how much of the item should be visible
  //   );

  //   // Observe all list items
  //   listRefs.current.forEach((ref) => {
  //     if (ref) observer.observe(ref);
  //   });

  //   // Cleanup observer on unmount
  //   return () => observer.disconnect();
  // }, [visibleItems]);

  // const jobRoles = [
  //   "JAVA ",
  //   ".NET",
  //   "PHP Developers",
  //   "Android, Kotlin, Flutter - Developer",
  //   "SAP ABAP / Basis / FICO / MDG / CRM / BPC / Hana",
  //   "Linux Admin / Network Engineer",
  //   "Microsoft Azure / Ms Dynamic 365",
  //   "Workday/ OracleES / EDM",
  //   "Devops / RSA ARCHER / PAAS",
  //   "C++ Programmer / Open Link",
  //   "Sales Force / RED HAT",
  //   "Mongo DB / Cloud contact center OPS",
  //   "Google Big Query / Pega System",
  //   "Service Desk / Service Now",
  //   "Manual / Automation tester",
  //   "Angular Developer",
  //   "Business Analyst",
    
  // ];


  const jobRolesWithImages = [
    { text: "JAVA", image: JAVA }, // Replace with your actual image paths
    { text: ".NET", image: DotNet },
    { text: "PHP Developers", image: PHP},
    { text: "Android, Kotlin, Flutter - Developer", image: AndroidKotlin},
    { text: "SAP ABAP / Basis / FICO / MDG / CRM / BPC / Hana", image:SAP },
    { text: "Linux Admin / Network Engineer", image: Network },
    { text: "Microsoft Azure / Ms Dynamic 365", image: MicrosoftAzure},
    { text: "Workday/ OracleES / EDM", image: Oracle },
    { text: "Devops / RSA ARCHER / PAAS", image: DevOps },
    { text: "C++ Programmer / Open Link", image: CPlus },
    { text: "Sales Force / RED HAT", image: Sales },
    { text: "Mongo DB / Cloud contact center OPS", image: MongoDB },
    { text: "Google Big Query / Pega System", image: Google },
    { text: "Service Desk / Service Now", image: ServiceDesk },
    { text: "Manual / Automation tester", image: ManualAutomationTester },
    { text: "Angular Developer", image: Angular },
    { text: "Business Analyst", image: BusinessAnalyst }]

  const marqueeRef = useRef(null); 
  const handleMouseEnter1 = () => {
    marqueeRef.current.stop(); 
  };

  const handleMouseLeave1 = () => {
    marqueeRef.current.start(); 
  };

  return (
    <>

      <HeroSection
        videoUrl={OurServices}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className="lg:w-[50vw] w-[90vw] flex flex-col justify-end items-start font-bold drop-shadow-xl ">
          {/* <div className=" flex items-center">
            <h1 className="text-[#0060b5] text-7xl font-bold drop-shadow-xl ">
              Our Recruitment Services
            </h1>
          </div> */}



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
            </h1><br/>
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




          {/* </div> */}

        </div>


      </HeroSection>


      {/* <div className="   mt-10">
        <h1 className="italic text-5xl text-center " >
          Services Offered
        </h1> */}
       


        {/* <div className=' h-[80vh] flex justify-center items-center'>
          <div className='h-[70vh] w-[30vw] bg-[var(--primary-color)] shadow-lg '>
            {/* <img src={RecServiceBackground}/> */}
          {/* </div>
          <div className='h-1/2 bg-gray-100 text-black flex flex-col justify-evenly -ms-10 w-1/2 px-10 shadow-lg  '>
            <h1 className='text-2xl font-bold '>Permanent Staffing</h1>
            <p className='text-start '> */}
              {/* We provide skilled, highly skilled and professional
              recruitment services. Working closely with a wide range
              of clients as an extension of their own teams, we deliver
              bespoke recruitment solutions.Hiring the right candidates
              for permanent roles is a commitment that can reap
              benefits over the long term. We help you find the
              best people for your projects through our
              tried-and-tested processes, with a quick
              turn-around- time. */}
              {/* <ul className='list-disc'>
                <li>We provide skilled, highly skilled, and professional recruitment services.</li>
                <li>We work closely with a wide range of clients as an extension of their own teams.</li>
                <li>We deliver bespoke recruitment solutions tailored to your specific needs.</li>
                <li>Hiring the right candidates for permanent roles is a long-term commitment.</li>
                <li>We find the best people for your projects through our tried-and-tested processes.</li>
                <li>Our services provide a fast turnaround to meet your recruitment needs.</li>
              </ul>

            </p></div> */}
        {/* </div>  */}

        {/* <div className=' h-[80vh] flex flex-row-reverse justify-center items-center'>
          <div className='h-[70vh] w-[30vw] bg-[var(--primary-color)] shadow-lg '>
            {/* <img src={RecServiceBackground}/> */}
          {/* </div>
          <div className='h-1/2 bg-gray-100  z-10 text-black flex flex-col justify-evenly  shadow-lg -me-10 w-1/2 px-10'>
            <h1 className='text-2xl font-bold '>Temporary Staffing </h1>
            <p className='text-start'> */}
              {/* Our Temporary Staffing can help you save valuable
              time and resources. We are equipped to handle the
              entire life cycle of the employee including the
              recruitment process, background checks, onboarding,
              placement, payroll management, monthly compliance,
              and other staffing needs. Furthermore, our team can
              help with employee training and development,
              ensuring that the team is prepared to excel in their roles.
              We understand that each business is unique, and
              we work closely with you to customize our services
              to your specific needs. */}
              {/* <ul className='list-disc'>
                <li>Our Temporary Staffing can help you save valuable time and resources.</li>

               
              
               
                <li>We handle the entire life cycle of the employee, including:</li>
               
               <p className='text-[#0060b5] italic'>recruitment process, background checks, onboarding,
                placement, payroll management, monthly compliance,
                and other staffing needs
                </p> 
                <li>We also assist with employee training and development.</li>
                <li>We tailor our services to fit your unique business needs.</li>
              </ul>

            </p>
          </div> */}
        {/* </div>  */}

        {/* <div className=' h-[80vh] flex justify-center items-center'>
          <div className='h-[70vh] w-[30vw] bg-[var(--primary-color)] shadow-lg '>
            {/* <img src={RecServiceBackground}/> */}
          {/* </div>
          <div className='h-1/2 bg-gray-100 text-black flex flex-col justify-evenly -ms-10 w-1/2 px-10 shadow-lg '>
            <h1 className='text-2xl font-bold '>Recruitment process outsourcing (RPO)</h1>
            <p className='text-start '>   */}
                {/* In our Recruitment Process Outsourcing (RPO)
              service, we take up the task of identifying potential
              candidates for your recruitments. The approach aims
              to deliver well-suited candidates to you while
              minimizing the  participation of your HR personnel. */}
              {/* <ul className='list-disc'>
  <li>In our Recruitment Process Outsourcing (RPO) service, we:</li>
  <ul className='list-decimal'>
    <li>Identify potential candidates for your recruitment needs.</li>
    <li>Deliver well-suited candidates while minimizing HR involvement.</li>
  </ul>
</ul>

            </p>
            </div> */}
        {/* </div> */}

{/* /////////////////////////////////////////////////////////// */}
<div className="  flex flex-col items-center  min-h-screen  bg-[linear-gradient(135deg,_#0000_20.5%,_#ffffff_0_29.5%,_#0000_0)_0_50px,_linear-gradient(45deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%)_100px_0,_linear-gradient(135deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%,_#ffffff_0_67%,_#0000_0),_linear-gradient(45deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%,_#ffffff_0_67%,_#0000_0_83%,_#ffffff_0_92%,_#0000_0),_rgba(71,74,255,0.05)] bg-[200px_200px]">
<h1 className="text-center uppercase md:text-center text-white text-xl md:text-5xl font-bold md:my-20"
                                style={{

                                        fontFamily: 'Goudy Old Style',
                                        letterSpacing: '0.05em'}}>
        Services Offered
        </h1>
        {/* <span className="hidden relative lg:w-[8%] lg:h-[5px] lg:mr-[62%] lg:block lg:rounded-b-[5px]" style={{ backgroundColor: '#002eff' }}></span> */}

        <div
          // data-aos="fade-up"
          data-aos-duration="4000"
          className="md:mx-auto md:w-10/12 md:mt-4 md:relative containt "
        >
          <div
            data-aos="fade-right"
            data-aos-duration="4000"
            className="relative z-50"
          >
            <div className="md:absolute hidden  md:left-10 md:top-10 md:z-10  bg-cover bg-center  md:text-2xl md:font-bold md:flex p-3  	 customborder   custom-border relative border-[4px] border-transparent rounded-[10%] max-w-[23em] custom-border md:justify-center   md:h-72 lg:h-72 md:w-72 lg:w-1/4 hover:-translate-y-6  md:transition-all md:duration-500">
              {/* <img
                src={WebDevelopment}
                className="object-cover Imagescss rounded-[20px] shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)] "
                alt=""
              /> */}

              <video
                className="Imagescss rounded-[20px] object-cover h-full w-full  shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)]"
                autoPlay
                loop
                muted
              >
                <source src={Permanent} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>




          {/* <div className="bg-gradient-to-r from-[rgba(220,220,220,0.4)] to-[#0060b5] m-2 md:border-none border-2 border-sky-600 rounded-2xl parentDiv md:w-[90%] shadow-xl parentDiv md:relative md:left-20 md:shadow-2xl  md:p-5 md:rounded-xl md:mb-5 md:transform md:transition-all  md:border "> */}
          <div className="bg-[#0060b5] m-2 md:px-0 px-3 md:border-none border-2 border-sky-600 rounded-2xl parentDiv md:w-[90%] shadow-xl parentDiv md:relative md:left-20 md:shadow-2xl  md:p-5 md:rounded-xl md:mb-5 md:transform md:transition-all  md:border ">

            <div className="md:flex   md:h-80 md:pl-72 md:flex-col md:items-center     ">
              <div className=" md:h-full  md:flex md:flex-col md:justify-between md:w-full ">
                <div className="md:pl-2 md:flex md:flex-col p-4 md:justify-between ">
                  <h4 className="heading font-bold text-[30px] smallcontaint my-3 ml-1  text-white ">
                  Permanent Staffing
                  </h4>
                  <ul className="text-white list-disc md:pt-4 md:font leading-loose ">
                    <li>
                    We provide skilled, highly skilled, and professional recruitment services.
                    </li>
                    <li>
                    We work closely with a wide range of clients as an extension of their own teams.
                    </li>
                    <li>
                    Hiring the right candidates for permanent roles is a long-term commitment.
                    </li>
                    <li>
                    We find the best people for your projects through our tried-and-tested processes.
                    </li>
                    <li>Our services provide a fast turnaround to meet your recruitment needs.</li>
                  </ul>
                </div>
                <div className=" flex flex-row gap-4 mt-4 md:pb-0 md:ml-0 md:mr-6  ml-6 pb-3 shadow-2xl shadow-transparent md:flex  md:justify-end md:items-end md:gap-3">
                  <img
                    src={Permanenticon}
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                  <img
                    src={Permanenticon2}
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                  <img
                    src={Permanenticon3}
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          // data-aos="fade-up"
          data-aos-duration="4000"
          className="md:mx-auto md:w-10/12 md:relative containt "
        >
          <div
            data-aos="fade-left"
            data-aos-duration="4000"
            className="relative z-50"
          >
            <div className="md:absolute hidden rounded-2xl  md:right-[-0.75rem] md:top-10 md:z-10   bg-cover bg-center  md:text-2xl md:font-bold md:flex p-3  	 customborder  md:justify-center  md:h-72 lg:h-72 md:w-72 lg:w-1/4 hover:-translate-y-6  md:transition-all md:duration-500">
              {/* <img
                src={AndroidDevlopment}
                className="Imagescss  object-cover rounded-[20px] border-4 border-[#0060b5] shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)]"
                alt=""
              /> */}

              <video
                className="Imagescss rounded-[20px] object-cover h-full w-full  shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)]"
                autoPlay
                loop
                muted
              >
                <source src={Temporary} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>

          <div className="bg-white m-2  parentDiv md:w-[90%] mt-2  md:relative md:left-20 border-sky-600 border-2 md:shadow-2xl md:p-6 md:px-0 px-6 rounded-2xl  md:transform md:transition-all  md:border-none ">
            <div className="md:flex md:flex-col md:h-80 md:items-start">
              <h4 className="heading font-bold text-[30px] smallcontaint my-3 ml-1 md:pl-14 text-[#0060b5]">
              Temporary Staffing
              </h4>
              <ul className="text-black md:ml-8 list-disc leading-loose md:h-72 ml-1 font md:p-6 md:w-[74%] ">
                <li>
                Our Temporary Staffing can help you save valuable time and resources.
                </li>
                <li>
                Recruitment process, background checks, onboarding, and placement.
                </li>
                <li>Payroll management, monthly compliance, and other staffing needs.</li>
                <li> We also assist with employee training and development.</li>
                <li>We tailor our services to fit your unique business needs.</li>
              </ul>
              <div className=" flex flex-row gap-4 ml-3 mt-2 md:py-0 py-2 shadow-2xl shadow-transparent md:flex md:justify-end md:items-end md:gap-3 ">
                <img
                  src={Temporaryicon}
                  className="md:h-10 h-8  filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
                <img
                  src={Temporaryicon2}
                  className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
                <img
                  src={Temporaryicon3}
                  className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          // data-aos="fade-up"
          data-aos-duration="4000"
          className="md:mx-auto md:w-10/12  md:relative containt "
        >
          <div
            data-aos="fade-right"
            data-aos-duration="4000"
            className="relative z-50"
          >
            <div className="md:absolute  hidden  md:left-10  md:top-16  md:z-10 md:p-3  bg-cover bg-center  md:text-2xl md:font-bold md:flex   	 customborder  md:justify-center   md:h-72 lg:h-72 md:w-72 lg:w-1/4 md:hover:-translate-y-8  md:transition-all md:duration-500">
              <video
                className="Imagescss rounded-[20px] object-cover h-full w-full  shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)]"
                autoPlay
                loop
                muted
              >
                <source src={Recruiters} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>

          <div className="bg-[#0060b5]   m-2 mt-2 parentDiv md:w-[90%] border-sky-600 border-2 rounded-2xl md:h-96 md:relative md:left-20 md:shadow-2xl  md:p-3 md:px-0 px-6 md:rounded-xl md:mb-5 md:mt-5 md:transform md:transition-all  md:border-none ">
            <div className="md:flex md:flex-col  ">
              <div className="  ">
                <h4 className=" md:text-center heading border-solid border-black font-bold text-[30px] smallcontaint ml-1  md:pl-60 md:pr-32 text-white ">
                Recruitment process outsourcing (RPO)
                </h4>
                <div className="md:pl-2  md:flex md:justify-center   ">
                  <ul className="text-white list-disc leading-loose font md:h-[275px] md:pt-10 md:pl-80 ml-1 md:w-[100%] md:line-break:anywhere">
                    <li>
                    We offer Recruitment Process Outsourcing (RPO) services.
                    </li>
                    <li>
                    We take on the task of identifying potential candidates for your recruitment needs.
                    </li>
                    <li>
                    Our approach focuses on delivering well-suited candidates.
                    </li>
                    <li>We aim to streamline the recruitment process for your organization.</li>
                    <li>This minimizes the involvement of your HR personnel.</li>
                  </ul>
                </div>
                <div className=" flex mr-6 md:py-0 py-3  shadow-2xl shadow-transparent  flex-row gap-4 md:flex md:justify-end  md:gap-3 ">
                  <img
                    src={Recruitericon}
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                  <img
                    src={Recruitericon2}
                    className="md:h-10 h-8 filter  hover:scale-105 transition duration-300"
                  />
                  <img
                    src={Recruitericon3}
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
          


{/* <div className='md:w-[90%] md:h-96 bg-white flex items-center rounded-lg mx-auto'> 
  <div className=' w-[30%]'>
  
<video
                className=" rounded-[20px] object-cover w-72 h-72 -ml-14 hover:-translate-y-10 transition-all duration-300 ease-in-out shadow-black shadow-lg"
                autoPlay
                loop
                muted
              >
                <source src={Recruiters} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              </div>
<div className='h-full  flex flex-col justify-around w-[70%] bg-red-200'> 
<h1 className="   font-bold text-3xl text-white ">
                Recruitment process outsourcing (RPO)
                </h1>
                <div className="md:pl-2  md:flex md:justify-center   ">
                  <ul className="text-white list-disc leading-loose">
                    <li>
                    We offer Recruitment Process Outsourcing (RPO) services.
                    </li>
                    <li>
                    We take on the task of identifying potential candidates for your recruitment needs.
                    </li>
                    <li>
                    Our approach focuses on delivering well-suited candidates.
                    </li>
                    <li>We aim to streamline the recruitment process for your organization.</li>
                    <li>This minimizes the involvement of your HR personnel.</li>
                  </ul>
                </div>
                <div className=" flex mr-6 md:py-0 py-3  shadow-2xl shadow-transparent  flex-row gap-4 md:flex md:justify-end  md:gap-3 ">
                  <img
                    src={Recruitericon}
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                  <img
                    src={Recruitericon2}
                    className="md:h-10 h-8 filter  hover:scale-105 transition duration-300"
                  />
                  <img
                    src={Recruitericon3}
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                </div>
</div>

</div> */}

        </div>
      
      </div>
{/* //////////////////////////////////////////////////// */}


<div className="my-20">
<h1 className="text-center uppercase md:text-center text-white text-xl md:text-5xl font-bold md:my-20"
                                style={{

                                        fontFamily: 'Goudy Old Style',
                                        letterSpacing: '0.05em'}}>
        B3 Expertise In IT Recruitment
        </h1>






      
        <marquee
  className="w-full h-[30vh] flex justify-start items-center  text-black my-10"
  style={{backgroundColor:'rgba(0,0,0,0.4)'}}
  behavior="scroll"
  direction="left"
  scrollamount="10"
  ref={marqueeRef}
  onMouseEnter={handleMouseEnter1}
  onMouseLeave={handleMouseLeave1}
>
  {jobRolesWithImages.map((role, index) => (
    // <span
    //   key={index}
    //   className={`inline-flex items-center mx-4 rounded-lg text-xl  hover:scale-110 hover:py-7  hover:bg-white hover:text-black drop-shadow-lg shadow-lg shadow-black border-x-4 py-5 px-5 bg-black text-white  border-blue-900 transition-all duration-300  `}
      //   ${
      //   index % 2 === 0
      //     ? "  bg-black text-white  border-blue-900" // Styles for even items
      //     : " text-[#0060b5] border-blue-900"
      //      : " bg-white text-[#0060b5]  border-blue-900"
      //     :"  bg-black text-white  border-blue-900"
      // }`}
      
    // >


<span
  key={index}
  className={`inline-flex items-center mx-4 rounded-lg text-xl hover:scale-110 hover:bg-white hover:text-black drop-shadow-lg shadow-lg shadow-black border-x-4 py-5 px-5 bg-black text-white border-blue-900 transition-all duration-500 ease-in-out`}
>


      {/* Display the job role text */}
      {role.text}

      {/* Right-side: Job role image */}
      <img
        src={role.image}
        // alt={role.text}
        className="w-10 h-10 ml-2" // Adjust width and height as needed
      />
    </span>
  ))}
</marquee>





{/* <h1 className="font-bold text-xl text-center mt-10  uppercase text-[var(--primary-color)]">
  B3 Expertise into Contract Hiring
</h1>


<marquee
  className="w-full p-10 text-black"
  behavior="scroll"
  direction="right"
  scrollamount="10"
  ref={marqueeRef2}
  onMouseEnter={handleMouseEnter2}
  onMouseLeave={handleMouseLeave2}
>
  {jobRoles2.map((role, index) => (
    <span key={index} className="inline-flex items-center mx-4 rounded-lg bg-white drop-shadow-lg  text-black border-2 border-[var(--primary-color)] p-3">
      {role}
      <ArrowForwardIcon className="ml-2  text-[var(--primary-color)]" />
    </span>
  ))}
</marquee> */}
</div>      

      {/* <div>
        <Footer />
      </div> */}
    </>
  )
}

export default RecServicesPage;