import React, { useEffect, useRef, useState } from 'react'
import RecServiceBackground from '../../Assets/Images/RecServiceBackground.jpg'
import OurServices from '../../Assets/Videos/OurServices.mp4'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../../Components/CommonComponents/Footer';
import HeroSection from '../../Components/CommonComponents/HeroSection';
import { LockOpenOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

export const RecServicesPage = () => {

  const jobRoles = [
    "JAVA .NET .NET PHP Developers",
    "Android, Kotlin, Flutter - Developer",
    "SAP ABAP / Basis / FICO / MDG / CRM / BPC / Hana",
    "SAP ABAP",
    "Linux Admin / Network Engineer",
    "Microsoft Azure / Ms Dynamic 365",
    "Workday/ OracleES / EDM",
    "Devops / RSA ARCHER / PAAS",
    "C++ Programmer / Open Link",
    "Sales Force / RED HAT",
    "Mongo DB / Cloud contact center OPS",
    "Google Big Query / Pega System",
    "Service Desk / Service Now",
    "Manual / Automation tester",
    "B3 Angular Developer",
    "Business Analyst",
    "Data Scientist / Machine Learning"
  ];

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
    "SAP ABAP HR",
    "SAP HANA",
    "SAP HANA"
  ];


  const marqueeRef = useRef(null); // Reference to the marquee element
  const marqueeRef2 = useRef(null); // Reference to the marquee element

  const handleMouseEnter = () => {
    marqueeRef.current.stop(); // Stop the marquee on hover
  };

  const handleMouseLeave = () => {
    marqueeRef.current.start(); // Start the marquee on mouse leave
  };

  const handleMouseEnter2 = () => {
    marqueeRef2.current.stop(); // Stop the marquee on hover
  };

  const handleMouseLeave2 = () => {
    marqueeRef2.current.start(); // Start the marquee on mouse leave
  };


  return (
    <>

      <HeroSection
        videoUrl={OurServices}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className="h-[100vh]  ms-[2vw] flex flex-col justify-end pb-24 items-start font-bold drop-shadow-xl ">
          {/* <div className=" flex items-center">
            <h1 className="text-[#0060b5] text-7xl font-bold drop-shadow-xl ">
              Our Recruitment Services
            </h1>
          </div> */}



          <div className=" flex flex-col text-start  ">
            <h1 className="drop-shadow-lg text-[#0060b5] text-6xl  font-extrabold">
              Our Solutions For 
            </h1><br/>
            <h1 className="drop-shadow-lg   text-yellow-500 text-6xl  w-auto  mb-5 font-semibold "> Your Hiring Needs
            {/* <span className="absolute bottom-0 left-0 w-full border-b-2 border-dotted translate-y-5"
    style={{
      borderImage: 'linear-gradient(to right, blue, yellow) 1 ',
    }}>
  </span>    */}
  <span
  className="absolute bottom-0 left-0 w-full border-b-2 border-dotted translate-y-5"
  style={{
    borderImage: 'linear-gradient(to right, yellow, white, blue) 1',
    animation: 'gradientShift 1s infinite', // Increase duration to slow down the speed
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

           </h1>
            {/* <SearchIcon className="text-[#0060b5] scale-75" sx={{ fontSize: '60px' }} /> */}
          </div>
          <div className="  w-[50vw] text-white text-start drop-shadow-xl mt-5 pl-7 ">
            {/* <ul className='list-disc'>
            <li>Discover tailored recruitment strategies to perfect your team fit.</li>
            <li>Enhance your hiring strategy with our comprehensive talent services.</li>

            </ul> */}

            <ul className="list-none space-y-4">
  <li className="relative pl-4">
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white  w-2 h-2 rounded-full"></div>
    Discover tailored recruitment strategies to perfect your team fit.
  </li>
  <li className="relative pl-4">
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
    Enhance your hiring strategy with our comprehensive talent services.
  </li>
</ul>

          </div>

        </div>


      </HeroSection>


      <div className="text-center   mt-10">
        <h1 className="font-bold text-3xl " style={{ color: "var(--primary-color)" }}>
          SERVICES OFFERED
        </h1>
        {/* <p className='mx-20 text-md opacity-90 text-[var(--secondary-color)]'>


          In a 24/7 economy, corporations have different needs.
          The way they work is changing and this also influences the
          skills and talent they need. Digital HR, new solutions and tools
          are disrupting our market by drastically changing the way people
          connect to jobs and the role BitByBit plays in this space. Clients
          and candidates expect to be served anywhere anytime and
          through various devices, in a way we never imagined it was
          possible earlier, ultimately influencing the way we work for
          our clients.We have a team of young but highly knowledgeable
          and highly experienced professionals, which are well equipped
          to offer our clients the best HR solutions in the form of
          customized delivery.
        </p> */}


        <div className=' h-[80vh] flex justify-center items-center'>
          <div className='h-[70vh] w-[30vw] bg-[var(--primary-color)] shadow-lg '>
            {/* <img src={RecServiceBackground}/> */}
          </div>
          <div className='h-1/2 bg-gray-100 text-black flex flex-col justify-evenly -ms-10 w-1/2 px-10 shadow-lg  '>
            <h1 className='text-2xl font-bold '>Permanent Staffing</h1>
            <p className='text-start '>
              {/* We provide skilled, highly skilled and professional
              recruitment services. Working closely with a wide range
              of clients as an extension of their own teams, we deliver
              bespoke recruitment solutions.Hiring the right candidates
              for permanent roles is a commitment that can reap
              benefits over the long term. We help you find the
              best people for your projects through our
              tried-and-tested processes, with a quick
              turn-around- time. */}
              <ul className='list-disc'>
                <li>We provide skilled, highly skilled, and professional recruitment services.</li>
                <li>We work closely with a wide range of clients as an extension of their own teams.</li>
                <li>We deliver bespoke recruitment solutions tailored to your specific needs.</li>
                <li>Hiring the right candidates for permanent roles is a long-term commitment.</li>
                <li>We find the best people for your projects through our tried-and-tested processes.</li>
                <li>Our services provide a fast turnaround to meet your recruitment needs.</li>
              </ul>

            </p></div>
        </div>

        <div className=' h-[80vh] flex flex-row-reverse justify-center items-center'>
          <div className='h-[70vh] w-[30vw] bg-[var(--primary-color)] shadow-lg '>
            {/* <img src={RecServiceBackground}/> */}
          </div>
          <div className='h-1/2 bg-gray-100  z-10 text-black flex flex-col justify-evenly  shadow-lg -me-10 w-1/2 px-10'>
            <h1 className='text-2xl font-bold '>Temporary Staffing </h1>
            <p className='text-start'>
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
              <ul className='list-disc'>
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
          </div>
        </div>

        <div className=' h-[80vh] flex justify-center items-center'>
          <div className='h-[70vh] w-[30vw] bg-[var(--primary-color)] shadow-lg '>
            {/* <img src={RecServiceBackground}/> */}
          </div>
          <div className='h-1/2 bg-gray-100 text-black flex flex-col justify-evenly -ms-10 w-1/2 px-10 shadow-lg '>
            <h1 className='text-2xl font-bold '>Recruitment process outsourcing (RPO)</h1>
            <p className='text-start '>  
                {/* In our Recruitment Process Outsourcing (RPO)
              service, we take up the task of identifying potential
              candidates for your recruitments. The approach aims
              to deliver well-suited candidates to you while
              minimizing the  participation of your HR personnel. */}
              <ul className='list-disc'>
  <li>In our Recruitment Process Outsourcing (RPO) service, we:</li>
  <ul className='list-decimal'>
    <li>Identify potential candidates for your recruitment needs.</li>
    <li>Deliver well-suited candidates while minimizing HR involvement.</li>
  </ul>
</ul>

            </p>
            </div>
        </div>



      </div>
      <div className='my-10 '>

        <h1 className="font-bold text-xl text-center mt-10 text-[var(--primary-color)]" >
          B3 EXPERTISE IN IT RECRUITMENT
        </h1>


        <marquee
          className="w-full  p-5 text-black"
          behavior="scroll"
          direction="left"
          scrollamount="10"
          ref={marqueeRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {jobRoles.map((role, index) => (
            <span key={index} className="inline-flex items-center mx-4 rounded-lg bg-white text-black drop-shadow-lg  border-2 border-[var(--primary-color)] p-3">
              {role}
              <ArrowBackIcon className="ml-2 text-[var(--primary-color)]" />
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


      <div>

        <h1 className="font-bold text-4xl text-center h-[10vh]" style={{ color: "var(--primary-color)" }}>
          Our Promise
        </h1>

        <div className='h-[90vh]  gap-10 flex p-10'>
          <div className='w-full '>
            <div className='p-5'>
              <h1 className='text-md font-bold text-[var(--primary-color)] uppercase'>
                Full End to end Delivery
              </h1>

              <ul className='list-disc'>
                <li>Recruiters work closely with supervisors, handling end-to-end delivery.</li>
                <li>Standardized process improves candidate presentation.</li>
                <li>Responsibilities span from gathering requirements to candidate start date.</li>
                <li>Prevents miscommunication and ensures faster delivery.</li>
              </ul>

            </div>
            <div className='bg-green-200 h-1/3 w-full'>
              <img src={RecServiceBackground} alt="" /></div>
          </div>



          <div className='w-full'>
            <div className='bg-green-200 h-1/3 w-full'>
              <img src={RecServiceBackground} alt="" /></div>
            <div className='p-5'>
              <h1 className='text-md font-bold text-[var(--primary-color)] uppercase'>
                We assure a CLIENT to
              </h1>
              <ul className='list-disc'>
                <li>Know what they need before any action.</li>
                <li>Deploy right recruiters, right quantity for the right period.</li>
                <li>Maintain confidentiality in all dealings across the value chain.</li>
                <li>Meet their expectations perfectly.</li>
              </ul>
            </div>
          </div>




          <div className='w-full'>
            <div className='p-5'>
              <h1 className='text-md font-bold text-[var(--primary-color)] uppercase'>
                We assure a CANDIDATE to
              </h1>

              <ul className='list-disc '>
                <li>Take the time to understand your needs.</li>
                <li>Refer only to genuine positions that suit your qualifications and experience.</li>
                <li>Maintain confidentiality in all dealings.</li>
                <li>Provide tailored recommendations based on your profile.</li>
              </ul>
            </div>
            <div className='bg-green-200 h-1/3 w-full'>
              <img src={RecServiceBackground} alt="" /></div>
          </div>





          <div className='w-full'>
            <div className='bg-green-200 h-1/3 w-full'>
              <img src={RecServiceBackground} alt="" /></div>
            <div className='p-4'>
              <h1 className='text-md font-bold text-[var(--primary-color)] uppercase'>
                Competitive Rates & Delivery
              </h1>

              <ul className='list-disc'>
                <li>Fast, accurate delivery in technology and HR solutions.</li>
                <li>High standards with extra effort.</li>
                <li>Best industry rates and long-term client focus.</li>
                <li>Top value-for-money agency in a short time.</li>
              </ul>

            </div>

          </div>



        </div>
      </div>

      <div>


        <p className='text-lg italic text-[var(--primary-color)] text-center m-5 underline pb-2' style={{ textDecorationSkip: 'ink', textDecorationThickness: '0.1em', textDecorationColor: 'currentColor', textUnderlineOffset: '0.4em' }}>
          “At BitByBit, it’s all about YOU! Whether you’re hunting for a new full-time role or just need a temp role, our recruiters are here to help you out.”
        </p>


        <Footer />
      </div>
    </>
  )
}
