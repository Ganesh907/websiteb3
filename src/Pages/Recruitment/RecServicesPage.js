import React, { useEffect, useRef, useState } from 'react'
import RecServiceBackground from '../../Assets/Images/RecServiceBackground.jpg'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../../Components/CommonComponents/Footer';

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

  const [bottomRadius, setBottomRadius] = useState('0%');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 50; // Adjust this value for how quickly you want the border to round
      const radius = Math.min(scrollTop / maxScroll * 50, 50); // Cap at 50% for a smooth transition
      setBottomRadius(`${radius}%`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div
        className="relative h-[100vh] shadow-xl bg-[#0060b5] transition-all duration-1000 ease-in-out"
        style={{
          borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`, // Dynamic bottom border radius
          backgroundImage: `
      
      linear-gradient(rgba(0, 96, 181, 0.5), rgba(0, 96, 181, 0.5)), /* Transparent blue overlay */
      url(${RecServiceBackground}) /* Background image */
    `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // filter: 'blur(5px)',  // Adds blur effect
        }}
      >
        <div className='h-14 flex justify-center animate-pulse items-end text-[200px] rounded-full w-14 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white z-50' style={{ animationDuration: "4000ms" }}>
          <KeyboardDoubleArrowDownIcon className="animate-bounce" style={{ fontSize: "50px", animationDuration: "400ms", animationDelay: "3000ms" }} />
        </div>
      </div>

      <div className="text-center   mt-10">
        <h1 className="font-bold text-xl " style={{ color: "var(--primary-color)" }}>
          SERVICES OFFERED
        </h1>
        <p className='mx-20 text-md opacity-90 text-[var(--secondary-color)]'>


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
        </p>


        <div className=' h-[80vh] flex justify-center items-center'>
          <div className='h-[70vh] w-[30vw] bg-[var(--primary-color)] shadow-lg '>
            {/* <img src={RecServiceBackground}/> */}
          </div>
          <div className='h-1/2 bg-gray-100 text-black flex flex-col justify-evenly -ms-10 w-1/2 px-10 shadow-lg  '>
            <h1 className='text-2xl font-bold '>Permanent Staffing</h1>
            <p className='text-start '>  We provide skilled, highly skilled and professional
              recruitment services. Working closely with a wide range
              of clients as an extension of their own teams, we deliver
              bespoke recruitment solutions.Hiring the right candidates
              for permanent roles is a commitment that can reap
              benefits over the long term. We help you find the
              best people for your projects through our
              tried-and-tested processes, with a quick
              turn-around- time.
            </p></div>
        </div>

        <div className=' h-[80vh] flex flex-row-reverse justify-center items-center'>
          <div className='h-[70vh] w-[30vw] bg-[var(--primary-color)] shadow-lg '>
            {/* <img src={RecServiceBackground}/> */}
          </div>
          <div className='h-1/2 bg-gray-100  z-10 text-black flex flex-col justify-evenly  shadow-lg -me-10 w-1/2 px-10'>
            <h1 className='text-2xl font-bold '>Temporary Staffing </h1>
            <p className='text-start'>   Our Temporary Staffing can help you save valuable
              time and resources. We are equipped to handle the
              entire life cycle of the employee including the
              recruitment process, background checks, onboarding,
              placement, payroll management, monthly compliance,
              and other staffing needs. Furthermore, our team can
              help with employee training and development,
              ensuring that the team is prepared to excel in their roles.
              We understand that each business is unique, and
              we work closely with you to customize our services
              to your specific needs.
            </p>
          </div>
        </div>

        <div className=' h-[80vh] flex justify-center items-center'>
          <div className='h-[70vh] w-[30vw] bg-[var(--primary-color)] shadow-lg '>
            {/* <img src={RecServiceBackground}/> */}
          </div>
          <div className='h-1/2 bg-gray-100 text-black flex flex-col justify-evenly -ms-10 w-1/2 px-10 shadow-lg '>
            <h1 className='text-2xl font-bold '>Recruitment process outsourcing (RPO)</h1>
            <p className='text-start '>    In our Recruitment Process Outsourcing (RPO)
              service, we take up the task of identifying potential
              candidates for your recruitments. The approach aims
              to deliver well-suited candidates to you while
              minimizing the  participation of your HR personnel.
            </p></div>
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


        <h1 className="font-bold text-xl text-center mt-10  uppercase text-[var(--primary-color)]">
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
        </marquee>
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
            <img src={RecServiceBackground}  alt=""/></div>
          </div> 



          <div className='w-full'>
            <div className='bg-green-200 h-1/3 w-full'>
            <img src={RecServiceBackground}  alt=""/></div>
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
            <img src={RecServiceBackground}  alt=""/></div>
          </div>





          <div className='w-full'>
            <div className='bg-green-200 h-1/3 w-full'>
            <img src={RecServiceBackground}  alt=""/></div>
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


        <p className='text-lg italic text-[var(--primary-color)] text-center m-5 underline pb-2'style={{ textDecorationSkip: 'ink', textDecorationThickness: '0.1em', textDecorationColor: 'currentColor', textUnderlineOffset: '0.4em' }}>
        “At BitByBit, it’s all about YOU! Whether you’re hunting for a new full-time role or just need a temp role, our recruiters are here to help you out.”
        </p>


        <Footer />
      </div>
    </>
  )
}
