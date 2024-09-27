import React, { useEffect, useRef, useState } from 'react'
import RecServiceBackground from '../../Assets/Images/RecServiceBackground.jpg'
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
    "SAP ABAP HR",
    "SAP HANA",
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
  return (
    <>

      <HeroSection
        videoUrl={OurServices}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className=" flex flex-col justify-end items-start font-bold drop-shadow-xl ">
          {/* <div className=" flex items-center">
            <h1 className="text-[#0060b5] text-7xl font-bold drop-shadow-xl ">
              Our Recruitment Services
            </h1>
          </div> */}



          <div className=" flex flex-col text-start  ">
            <h1 className="drop-shadow-lg text-[#0060b5] text-5xl  font-bold">
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
            <h1 className="drop-shadow-lg   text-white text-3xl  w-auto  mb-5 font-bold "> Your <span className='text-yellow-500'>Hiring</span> Needs
          

           </h1>
          
          </div>
         

<ul className="list-none space-y-4 text-xl font-semibold mt-2">
  <li
    className="relative pl-4  opacity-0 animate-fadeInRepeat"
    style={{ animationDelay: '0.5s' }} // First item appears after 0.5s
  >
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
    Discover tailored recruitment strategies to perfect your team fit.
  </li>
  <li
    className="relative pl-4 opacity-0 animate-fadeInRepeat"
    style={{ animationDelay: '1.5s' }} // Second item appears after 1.5s
  >
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
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


      <div className="   mt-10">
        <h1 className="font-bold text-3xl text-center " style={{ color: "var(--primary-color)" }}>
          SERVICES OFFERED
        </h1>
       


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
                <source src={EnterpriseSolution} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>

          <div className="bg-[#0060b5]   m-2 mt-2 parentDiv md:w-[90%] border-sky-600 border-2 rounded-2xl md:h-96 md:relative md:left-20 md:shadow-2xl  md:p-3 md:rounded-xl md:mb-5 md:mt-5 md:transform md:transition-all  md:border-none ">
            <div className="md:flex md:flex-col  ">
              <div className="  ">
                <h4 className=" md:text-center heading border-solid border-black font-bold text-[30px] smallcontaint ml-1  md:pl-60 md:pr-32 text-white ">
                Permanent Staffing
                </h4>
                <div className="md:pl-2  md:flex   ">
                  <ul className="text-white list-disc leading-loose font md:h-[275px] md:pt-10 md:pl-80 ml-1 md:w-[100%] md:line-break:anywhere">
                  <li>We provide skilled, highly skilled, and professional recruitment services.</li>
                <li>We work closely with a wide range of clients as an extension of their own teams.</li>
                {/* <li>We deliver bespoke recruitment solutions tailored to your specific needs.</li> */}
                <li>Hiring the right candidates for permanent roles is a long-term commitment.</li>
                <li>We find the best people for your projects through our tried-and-tested processes.</li>
                <li>Our services provide a fast turnaround to meet your recruitment needs.</li>

     {/* {Permanent.map((line, index) => (
        <li
          key={index}
          data-index={index}
          ref={(el) => (listRefs.current[index] = el)}
          style={{
            opacity: visibleItems[index] ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          {line}
        </li>
      ))} */}
                  </ul>
                </div>
                {/* <div className=" flex mr-6    flex-row gap-4 md:flex md:justify-end  md:gap-3 ">
                  <img
                    src={enterpriselogo}
                    className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                  />
                  <img
                    src={digital}
                    className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                  />
                  <img
                    src={solution}
                    className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                  />
                </div> */}
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
                <source src={EnterpriseSolution} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>

          <div className="bg-white m-2  parentDiv md:w-[90%] mt-2  md:relative md:left-20 border-sky-600 border-2 md:shadow-2xl md:p-6 rounded-2xl  md:transform md:transition-all  md:border-none ">
            <div className="md:flex md:flex-col md:h-80 md:items-start">
              <h4 className="heading font-bold text-[30px] smallcontaint my-3 ml-1 md:pl-14 text-[#0060b5]">
              Temporary Staffing
              </h4>
              <ul className="text-black md:ml-8 list-disc leading-loose md:h-72 ml-1 font md:p-6 md:w-[74%] ">
              <li>Our Temporary Staffing can help you save valuable time and resources.</li>
              <li>Recruitment process, background checks, onboarding, and placement.</li>
              <li>Payroll management, monthly compliance, and other staffing needs.</li>
              <li>We also assist with employee training and development.</li>
              <li>We tailor our services to fit your unique business needs.</li>

{/* {Temporary.map((line, index) => (
        <li
          key={index}
          data-index={index}
          ref={(el) => (listRefs.current[index] = el)}
          style={{
            opacity: visibleItems[index] ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          {line}
        </li>
      ))} */}
              </ul>
              {/* <div className=" flex flex-row gap-4 ml-3 mt-2 md:flex md:justify-end md:items-end md:gap-3 ">
                <img
                  src={javalogo}
                  className="md:h-10 h-8  filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
                <img
                  src={kotline}
                  className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
                <img
                  src={flutter}
                  className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
              </div> */}
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
                <source src={EnterpriseSolution} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>

          <div className="bg-[#0060b5]   m-2 mt-2 parentDiv md:w-[90%] border-sky-600 border-2 rounded-2xl md:h-96 md:relative md:left-20 md:shadow-2xl  md:p-3 md:rounded-xl md:mb-5 md:mt-5 md:transform md:transition-all  md:border-none ">
            <div className="md:flex md:flex-col  ">
              <div className="  ">
                <h4 className=" md:text-end border-solid border-black font-bold text-[30px] smallcontaint ml-1 md:ml-0  md:pl-56 md:pr-[110px] text-white ">
                Recruitment process outsourcing (RPO)
                </h4>
                <div className="md:pl-2  md:flex   ">
                  <ul className="text-white list-disc leading-loose font md:h-[275px] md:pt-10 md:pl-80 ml-1 md:w-[100%] md:line-break:anywhere">
                   <li>We offer Recruitment Process Outsourcing (RPO) services.</li>
                   <li>We take on the task of identifying potential candidates for your recruitment needs.</li>
                   <li>Our approach focuses on delivering well-suited candidates.</li>
                   <li>We aim to streamline the recruitment process for your organization.</li>
                   <li>This minimizes the involvement of your HR personnel.</li>

{/* {Recruitment.map((line, index) => (
        <li
          key={index}
          data-index={index}
          ref={(el) => (listRefs.current[index] = el)}
          style={{
            opacity: visibleItems[index] ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          {line}
        </li>
      ))} */}
                  </ul>
                </div>
                {/* <div className=" flex mr-6    flex-row gap-4 md:flex md:justify-end  md:gap-3 ">
                  <img
                    src={enterpriselogo}
                    className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                  />
                  <img
                    src={digital}
                    className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                  />
                  <img
                    src={solution}
                    className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div> 
{/* //////////////////////////////////////////////////// */}
      <div>

        <h1 className="font-bold text-4xl text-center h-[10vh]" style={{ color: "var(--primary-color)" }}>
          Our Promise
        </h1>

        {/* <div className='h-[90vh]  gap-10 flex p-10'>
          <div className='w-full '>
            <div className='p-5'  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
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
            <div className='bg-green-200 h-1/3 w-full'  data-aos="fade-up"
     data-aos-duration="3000">
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



        </div> */}

        {/* ....................... */}
        <div className='flex justify-evenly'>
        <div className="border rounded-[10px] border-black w-[20%] h-auto p-4 bg-[#0060b5] transform transition-all duration-500 hover:-translate-y-3 hover:shadow-lg group relative" style={{ perspective: '1000px' }}>
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
  <div>
    <div className="flex justify-between items-center">
      {/* Image flipping 360 degrees from right to left on hover */}
      <div className="relative w-[100px] h-[100px]">
        <div className="absolute inset-0 rotate-y-360">
          <img src={delivery} className="w-full h-full object-cover border-r-[50%] rounded" />
        </div>
      </div>
      
      <h1
        className="
          text-6xl font-bold text-white
          bg-clip-text
          text-transparent
          "
        style={{
          WebkitTextStroke: '2px white',
        }}
      >
        01
      </h1>
    </div>
  </div>

  <div>
    <h1 className="my-2 text-white font-bold">Full End to end Delivery</h1>
    <ul className="list-disc leading-loose text-white ml-4" style={{ '--tw-marker-color': 'blue' }}>
  <li className="marker:text-white">Recruiters manage the entire end-to-end delivery process.</li>
  <li className="marker:text-white">Standardized process ensures better candidate presentation.</li>
  <li className="marker:text-white">Recruiters handle requirements gathering to candidate start date.</li>
  <li className="marker:text-white">Workflow prevents information loss during translation.</li>
  <li className="marker:text-white">Streamlined process ensures faster delivery.</li>
</ul>

  </div>

  {/* Underline at the bottom of the card */}
  <div className="absolute bottom-0 left-6 w-[80%] h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-500"></div>
       </div>
       {/* .................................. */}
       <div className="border rounded-[10px] border-black w-[20%] h-auto p-4 bg-white transform transition-all duration-500 hover:-translate-y-3 hover:shadow-lg group relative" style={{ perspective: '1000px' }}>
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
  <div>
    <div className="flex justify-between items-center">
      {/* Image flipping 360 degrees from right to left on hover */}
      <div className="relative w-[100px] h-[100px]">
        <div className="absolute inset-0 rotate-y-360">
          <img src={delivery} className="w-full h-full object-cover border-r-[50%] rounded" />
        </div>
      </div>
      
      <h1
        className="
          text-6xl font-bold text-white
          bg-clip-text
          text-transparent
          "
        style={{
          WebkitTextStroke: '2px blue',
        }}
      >
        02
      </h1>
    </div>
  </div>

  <div>
    <h1 className="my-2 text-black font-bold"> We assure a CLIENT to</h1>
    <ul className="list-disc leading-loose text-black ml-4" style={{ '--tw-marker-color': 'blue' }}>
  <li className="marker:text-blue-500">Understand their requirements in detail before taking any action.</li>
  <li className="marker:text-blue-500">Deploy the right recruiters, in the right quantity, for the right duration.</li>
  <li className="marker:text-blue-500">Maintain confidentiality throughout all dealings across the value chain.</li>
  <li className="marker:text-blue-500">Fulfill their requirements exactly as per their expectations.</li>
 
</ul>

  </div>

  {/* Underline at the bottom of the card */}
  <div className="absolute bottom-0 left-6 w-[80%] h-1 bg-transparent group-hover:bg-[#0060b5] transition-all duration-500"></div>
       </div>
       {/* ........................... */}
        
      <div className="border rounded-[10px] border-black w-[20%] h-auto p-4 bg-white hover:bg-[#0060b5] transform transition-all duration-500 hover:-translate-y-3 hover:shadow-lg group relative" style={{ perspective: '1000px' }}>
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
  <div>
    <div className="flex justify-between items-center">
      {/* Image flipping 360 degrees from right to left on hover */}
      <div className="relative w-[100px] h-[100px]">
        <div className="absolute inset-0 rotate-y-360">
          <img src={delivery} className="w-full h-full object-cover border-r-[50%] rounded" />
        </div>
      </div>
      
      <h1
        className="
          text-6xl font-bold bg-clip-text
          text-transparent group-hover:text-white
        "
        style={{
          WebkitTextStroke: '2px blue',
        }}
      >
        03
      </h1>
    </div>
  </div>

  <div className='group-hover:text-white'>
    <h1 className="my-2 text-black font-bold group-hover:text-white"> We assure a CANDIDATE to</h1>
    <ul className="list-disc leading-loose text-black ml-4 group-hover:text-white" style={{ '--tw-marker-color': 'blue' }}>
      <li className="marker:text-blue-500">Recruiters manage the entire end-to-end delivery process.</li>
      <li className="marker:text-blue-500">Standardized process ensures better candidate presentation.</li>
      <li className="marker:text-blue-500">Recruiters handle requirements gathering to candidate start date.</li>
      <li className="marker:text-blue-500">Workflow prevents information loss during translation.</li>
      <li className="marker:text-blue-500">Streamlined process ensures faster delivery.</li>
    </ul>
  </div>

  {/* Underline at the bottom of the card */}
  <div className="absolute bottom-0 left-6 w-[80%] h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-500"></div>
</div>



       {/* ................ */}

       <div className="border rounded-[10px] border-black w-[20%] h-auto p-4 bg-white transform transition-all duration-500 hover:-translate-y-3 hover:shadow-lg group relative" style={{ perspective: '1000px' }}>
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
  <div>
    <div className="flex justify-between items-center">
      {/* Image flipping 360 degrees from right to left on hover */}
      <div className="relative w-[100px] h-[100px]">
        <div className="absolute inset-0 rotate-y-360">
          <img src={delivery} className="w-full h-full object-cover border-r-[50%] rounded" />
        </div>
      </div>
      
      <h1
        className="
          text-6xl font-bold text-white
          bg-clip-text
          text-transparent
          "
        style={{
          WebkitTextStroke: '2px blue',
        }}
      >
        04
      </h1>
    </div>
  </div>

  <div>
    <h1 className="my-2 text-black font-bold">Competitive Rates & Delivery</h1>
    <ul className="list-disc leading-loose text-black ml-4" style={{ '--tw-marker-color': 'blue' }}>
  <li className="marker:text-blue-500">We are a delivery-based TECHNOLOGY and HR solutions startup that goes the extra mile.</li>
  <li className="marker:text-blue-500">Known for fast and accurate delivery without compromising quality standards.</li>
  <li className="marker:text-blue-500">At BitByBit, we offer the best industry rates, ensuring cost-effectiveness.</li>
  <li className="marker:text-blue-500">Committed to building long-term relationships with our clients.</li>
  <li className="marker:text-blue-500">Recognized as one of the best value-for-money TECHNOLOGY and HR agencies in a short span.</li>
</ul>

  </div>

  {/* Underline at the bottom of the card */}
  <div className="absolute bottom-0 left-6 w-[80%] h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-500"></div>
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

export default RecServicesPage;