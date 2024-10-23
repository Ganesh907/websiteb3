import React, { useEffect, useRef, useState } from 'react'
// import RecServiceBackground from '../../Assets/Images/RecServiceBackground.jpg'
import delivery from '../../Assets/Images/delivery.png'
import OurServices from '../../Assets/Videos/OurServices.mp4'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HeroSection from '../../Components/common/HeroSection';
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
import CPlus from "../../Assets/Images/tech-languages-logos/C++.png"
import SAP from "../../Assets/Images/tech-languages-logos/SAP.png"
import Google from "../../Assets/Images/tech-languages-logos/GoogleBigQuery.png"
import Network from "../../Assets/Images/tech-languages-logos/NetworkEng.png"
import Oracle from "../../Assets/Images/tech-languages-logos/Oracle.png"
import Sales from "../../Assets/Images/tech-languages-logos/Sales.png"
import ServiceDesk from "../../Assets/Images/tech-languages-logos/ServiceDesk.png"
import Footer from '../../Components/common/Footer';
import NavbarDemo from '../../Components/lightmodecomponents/NavbarDemo';







const RecServicesPage = () => {



  const jobRolesWithImages = [
    { text: "JAVA", image: JAVA },
    { text: ".NET", image: DotNet },
    { text: "PHP Developers", image: PHP },
    { text: "Android, Kotlin, Flutter - Developer", image: AndroidKotlin },
    { text: "SAP ABAP / Basis / FICO / MDG / CRM / BPC / Hana", image: SAP },
    { text: "Linux Admin / Network Engineer", image: Network },
    { text: "Microsoft Azure / Ms Dynamic 365", image: MicrosoftAzure },
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



      <div className="  flex flex-col items-center  min-h-screen  bg-[linear-gradient(135deg,_#0000_20.5%,_#ffffff_0_29.5%,_#0000_0)_0_50px,_linear-gradient(45deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%)_100px_0,_linear-gradient(135deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%,_#ffffff_0_67%,_#0000_0),_linear-gradient(45deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%,_#ffffff_0_67%,_#0000_0_83%,_#ffffff_0_92%,_#0000_0),_rgba(71,74,255,0.05)] bg-[200px_200px]">
        <h1 className="text-center uppercase md:text-center text-[#0060b5] dark:text-white text-xl md:text-5xl font-bold md:my-20"
          style={{

            fontFamily: 'Goudy Old Style',
            letterSpacing: '0.05em'
          }}>
          Services Offered
        </h1>


        <div
          data-aos-duration="4000"
          className="md:mx-auto md:w-10/12 md:mt-4 md:relative containt "
        >
          <div
            data-aos="fade-right"
            data-aos-duration="4000"
            className="relative z-50"
          >
            <div className="md:absolute hidden  md:left-10 md:top-10 md:z-10  bg-cover bg-center  md:text-2xl md:font-bold md:flex p-3  	 customborder   custom-border relative border-[4px] border-transparent rounded-[10%] max-w-[23em] custom-border md:justify-center   md:h-72 lg:h-72 md:w-72 lg:w-1/4 hover:-translate-y-6  md:transition-all md:duration-500">


              <video
                className="Imagescss rounded-[20px] object-cover h-full w-full  shadow-lg shadow-black dark:shadow-md dark:shadow-black "
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


              <video
                className="Imagescss rounded-[20px] object-cover h-full w-full  dark:shadow-md dark:shadow-black shadow-lg shadow-black"
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
                className="Imagescss rounded-[20px] object-cover h-full w-full  shadow-lg shadow-black dark:shadow-md dark:shadow-black "
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


        </div>

      </div>


      <div className="py-20 ">
        <h1 className="text-center uppercase md:text-center text-[#0060b5] dark:text-white text-xl md:text-5xl font-bold md:my-20"
          style={{

            fontFamily: 'Goudy Old Style',
            letterSpacing: '0.05em'
          }}>
          B3 Expertise In IT Recruitment
        </h1>
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
{/* <Footer/> */}

    </div>
  )
}

export default RecServicesPage;