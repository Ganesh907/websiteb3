import React, { useEffect, useState } from 'react'
import letstalk from "../../Assets/Images/letstakeicon1.png"
import technology from "../../Assets/Videos/Technology6.mp4"
import highquality from "../../Assets/Images/highquality.jpg"
import onbudget from "../../Assets/Images/onbudget.png"
import SplitCard from './SplitCard'
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

export const TechHomePage = () => {
  const [expanded, setExpanded] = useState(false);
  const [bottomRadius, setBottomRadius] = useState('0%');
  const [scrollHeading, setScrollHeading] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 50; // Adjust this value for how quickly you want the border to round
      const radius = Math.min(scrollTop / maxScroll * 50, 50); // Cap at 50% for a smooth transition
      setBottomRadius(`${radius}%`);
      setScrollHeading(scrollTop > 30 ? true : false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    {scrollHeading ? (
  <div className='z-50 top-[70%] bg-blue-800 text-white fixed flex justify-center items-center rounded-lg font-montserrat text-[18px] font-bold h-[44px] leading-[24px] w-2/5 gap-[10px] md:p-0 md:w-[10%] md:ml-2'>
    <img src={letstalk} width='25px' alt="Let's talk" />
    <a href="#" onClick={(e) => e.preventDefault()}>Let’s talk</a>
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

      <HeroSection videoUrl={technology}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className={`techpage md:mt-4   w-full h-full ${scrollHeading}`} style={{ transition: 'margin-left 1s ease-in-out' }}>
          <div className="  items-end md:flex md:flex-row md:w-full md:pl-10 pl-2 flex  ">
            <div className=" z-50 w-full md:flex md:flex-col md:justify-end md:items-center md:gap-2 md:mt-72  ">
              <h1 className={`md:w-full font-extrabold  text-6xl leading-[57px] font-montserrat pb-4 z-50 text-[#0060b5] `} style={{ transition: 'margin-left 1s ease-in-out' }}>Your <span className='text-[#0060b5]'>Solution</span></h1>
              <span
  className="absolute bottom-44 left-12 w-[75%] border-b-2 border-dotted translate-y-5"
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


              <div className={`label md:ml-3  w-full mt-2 md:flex md:justify-start  md:gap-3 `} style={{ transition: 'margin-left 1s ease-in-out' }}>
                <h1 className={`relative w-full font-extrabold text-5xl text-yellow-400 `} style={{ transition: 'margin-left 1s ease-in-out' }}>
                  We
                  <span className="absolute animate-zoom-design md:ml-4 text-yellow-400" >Design</span>
                  <span className="absolute animate-zoom-develop md:ml-4 text-yellow-400" >Develop</span>
                  <span className="absolute animate-zoom-deliver md:ml-4 text-yellow-400" >Deliver</span>
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
    style={{ animationDelay: '0.5s' }} // First item appears after 0.5s
  >
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
    Latest scalable technologies for reliable solutions.
  </li>
  <li
    className="relative pl-4 mt-4 opacity-0 animate-fadeInRepeat text-white"
    style={{ animationDelay: '1.5s' }} // Second item appears after 1.5s
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
      50% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
    .animate-fadeInRepeat {
      animation: fadeInRepeat 20s infinite; // 20s duration, infinite loop
    }
  `}
</style>



            </div>
          </div>
        </div>
      </HeroSection>


      <div className="secondary-section">
        <div className="label text-center md:mb-10  mt-5 md:flex md:justify-center md:gap-3">


        </div>
        <SplitCard />
      </div>


      {/*/////////////////////////////////////////////////////////// */}
      <div className='w-[90%] h-auto' >
        <h1 className='text-center md:text-start md:ml-[9%] text-[var(--primary-color)]  text-[40px] font-bold m-[5px] font-montserrat md:mt-[40px] '>
          Industries we deal with
        </h1>
        <div className='grid grid-cols-1 place-content-center md:grid-cols-2 md:gap-2 md:ml-20 md:w-auto w-[100%]' >
          <div>
            <div className='m-7'>
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                className='p-2 bg-[#f9f9f9] border border-[#A9A9A9] border-spacing-4 hover:border-blue-600'
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
                  aria-controls='panel1-content'
                >
                  <div className='flex items-center justify-center gap-2'>
                    <img src={bank} className='md:h-12 image' alt='Banking' />
                    <div className='font-bold pt-1 text-lg'>
                      Banking, Financial Services and Insurance
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className='md:pl-5 list-disc leading-loose '>
                    <li>Expertise in secure and efficient software for the BFSI sector.</li>
                    <li>Financial transactions management solutions.</li>
                    <li>Risk assessment systems for informed decision-making.</li>
                    <li>Customer relationship management (CRM) solutions.</li>
                    <li>Regulatory compliance solutions to meet industry standards.</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className='mx-7'>
              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                className='p-2 bg-[#f9f9f9] border border-[#A9A9A9] hover:border-blue-600 border-spacing-4'
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
                  aria-controls='panel2-content'
                >
                  <div className='flex items-center justify-center gap-2'>
                    <img src={hospitality} className='md:h-12 image' alt='Hospitality' />
                    <div className='font-bold pt-1 text-lg'>Hospitality</div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className='list-disc leading-loose md:ml-8 '>
                    <li>Property Management Systems (PMS) for efficient hospitality operations.</li>
                    <li>Booking and reservation systems to streamline guest management.</li>
                    <li>CRM software to enhance customer service.</li>
                    <li>POS systems for optimized transaction handling.</li>
                    <li>Tailored solutions leveraging industry expertise and latest technologies.</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>

          <div>
            <div className='m-7'>
              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                className='p-2 bg-[#f9f9f9] border border-[#A9A9A9] hover:border-blue-600 border-spacing-4'
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
                  aria-controls='panel3-content'
                >
                  <div className='flex items-center justify-center gap-2'>
                    <img src={ecom} className='md:h-12 image' alt='E-Gov & E-Com' />
                    <div className='font-bold pt-1 text-lg'>E-Gov & E-Com</div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className='list-disc leading-loose md:ml-8 '>
                    <li>Comprehensive e-Governance and e-Commerce solutions.</li>
                    <li>Services include ticket booking, recharges, money transfers, and Aadhaar enrolments.</li>
                    <li>Supports Amazon orders, insurance purchases, and utility bill payments.</li>
                    <li>Features shopping cart integration and payment gateways.</li>
                    <li>Customer management and data analytics for seamless online transactions.</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className='mx-7'>
              <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
                className='p-2 bg-[#f9f9f9] border border-[#A9A9A9] hover:border-blue-600 border-spacing-4'
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
                    <img src={health} className='md:h-12 image' alt='HealthCare' />
                    <div className='font-bold pt-1 text-lg'>HealthCare</div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className='list-disc leading-loose md:ml-8 '>
                    <li>Wide range of healthcare IT solutions.</li>
                    <li>Electronic Health Records (EHR) systems for efficient patient data management.</li>
                    <li>Appointment scheduling software for streamlined bookings.</li>
                    <li>Telemedicine platforms for remote patient care.</li>
                    <li>Healthcare data analytics to improve patient care and operations.</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      {/* .......................................................... */}
      <div className='w-[90%] h-auto  md:mb-20 mb-5'>
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
      </div>






      <div className=" tech-footer">
        <Footer />
      </div>

    </div>
  );
}
