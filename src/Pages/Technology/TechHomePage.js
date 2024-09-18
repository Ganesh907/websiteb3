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
      setScrollHeading(scrollTop > 30 ? "ml-[30%]" : "ml-0");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle accordion expansion
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="techHomepageMain  ">
      <div className='z-50  top-[90%] fixed  flex justify-center items-center bg-[var(--primary-color)] text-[var(--background-color)] rounded-lg  font-montserrat text-[18px] font-bold h-[44px] leading-[24px] w-2/5 gap-[10px] md:p-0 md:w-[10%] md:ml-2'>
        <img src={letstalk} width='25px' />
        <a href="#">Let’s talk</a>
      </div>
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


              <div className={`label md:ml-3  w-full mt-2 md:flex md:justify-start  md:gap-3 `} style={{ transition: 'margin-left 1s ease-in-out' }}>
                <h1 className={`relative w-full font-extrabold text-5xl text-yellow-400 `} style={{ transition: 'margin-left 1s ease-in-out' }}>
                  We
                  <span className="absolute animate-zoom-design md:ml-4 text-yellow-400" >Design</span>
                  <span className="absolute animate-zoom-develop md:ml-4 text-yellow-400" >Develop</span>
                  <span className="absolute animate-zoom-deliver md:ml-4 text-yellow-400" >Deliver</span>
                </h1>
              </div>
              <ul className={`w-full md:mt-4 md:ml-3 font-montserrat text-[16px] leading-[28px] break-words text-white pr-[70px] z-50`}>
  <li
    className={`w-full transition-all duration-300   text-[17px] hover:text-[20px] hover:font-bold hover:text-yellow-500`}
    style={{ transition: 'margin-left 1s ease-in-out' }}
  >
    <span className="mr-2 font-extrabold text-yellow-600 bg-clip-text bg-gradient-to-r from-blue-900  bg-[length:100%_100%]  text-[24px]">
      {'>'}
    </span>
    Latest scalable technologies for reliable solutions.
  </li>
  <li
    className={` w-full transition-all duration-300  text-[17px] hover:text-[20px] hover:font-bold hover:text-yellow-500 `}
    style={{ transition: 'margin-left 1s ease-in-out' }}
  >
    <span className="  mr-2 text-[24px] font-extrabold bg-clip-text text-blue-900 bg-gradient-to-r from-blue-500 to-yellow-500 bg-[length:100%_100%] ">
      {'>'}
    </span>
    Expert custom website, app, and system development.
  </li>
</ul>



            </div>
          </div>
        </div>
      </HeroSection>


      <div className="secondary-section">
        <div className="label text-center md:mb-10  mt-5 md:flex md:justify-center md:gap-3">


        </div>
        <SplitCard />
      </div>


      {/* <h1 className='mainh1 text-center md:text-start md:ml-[9%] text-[#0c0042] md:w-[52%] text-[40px] font-bold m-[5px] font-montserrat md:w-full md:mt-[40px]'> Industries we deal with</h1>
      <span className="hidden relative lg:w-[8%] lg:h-[5px] lg:ml-[9%] lg:block lg:rounded-b-[5px]" style={{ backgroundColor: '#002eff' }}></span>
      <div className="lg:flex  lg:w-full lg:h-auto lg:p-10 mybg bg-[linear-gradient(135deg,_#0000_20.5%,_#ffffff_0_29.5%,_#0000_0)_0_50px,_linear-gradient(45deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%)_100px_0,_linear-gradient(135deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%,_#ffffff_0_67%,_#0000_0),_linear-gradient(45deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%,_#ffffff_0_67%,_#0000_0_83%,_#ffffff_0_92%,_#0000_0),_rgba(71,74,255,0.05)] bg-[200px_200px]">
        <div className=" lg:flex lg:flex-col   lg:w-auto lg:h-auto ">
          <div className="lg:flex lg:gap-5 lg:justify-center lg:mr-[20%] "  >
            <div className="d1 d11 bg-[#002eff] hover:bg-[#ff3b3e] hover:shadow-none transition-all duration-300 ease-in-out lg:w-[40%] bg-[#002eff] text-white lg:m-5 rounded-lg p-2 font-montserrat text-[16px] h-[95%] scale-y-[0.9] shadow-[5px_5px_rgba(255,0,0,0.4),10px_10px_rgba(247,54,54,0.3),15px_15px_rgba(248,78,78,0.2),20px_20px_rgba(221,30,30,0.1),25px_25px_rgba(218,26,26,0.05)] md:ml-[6px] md:mr-[6px]">
              <h1 className="titleh1 text-[16px] font-bold lg:text-center lg:m-3 lg:pl-4 text-[24px] font-bold font-montserrat">Banking, Financial Services and Insurance (BFSI)</h1>
              <div className="lg:flex lg:h-auto lg:gap-2 ">
                <img src={bank} width='30%'  className="h-20 ml-2" />
                <p >We have extensive experience in developing secure and efficient software solutions for the BFSI sector. Our services include financial transactions management, risk assessment systems, customer relationship management, and regulatory compliance solutions.</p>
              </div>
            </div>

            <div className="d1 d12 bg-white hover:bg-[#ffde83] hover:shadow-none transition-all duration-300 ease-in-out lg:w-[40%] bg-white text-[#020202]  lg:m-5 rounded-lg p-2 font-montserrat text-[16px] h-[95%] scale-y-[0.9] shadow-[5px_5px_rgba(255,0,0,0.4),10px_10px_rgba(247,54,54,0.3),15px_15px_rgba(248,78,78,0.2),20px_20px_rgba(221,30,30,0.1),25px_25px_rgba(218,26,26,0.05)] md:ml-[6px] md:mr-[6px]">
              <h1 className="titleh1 text-[16px] font-bold lg:text-center lg:m-3 lg:pl-4 text-[24px] font-bold font-montserrat">E-Gov & E-Com</h1>
              <div className="lg:flex lg:h-auto lg:gap-3">
                <img src={ecom} width='150%' className="lg:h-24 lg:ml-1" />
                <p >We offer comprehensive e-Governance and e-Commerce solutions, including ticket booking, recharges, money transfers, Aadhaar enrolments, Amazon orders, insurance purchases, utility bill payments, and more, with features like shopping cart integration, payment gateways, customer management, and data analytics for seamless online transactions.</p>
              </div>
            </div>
          </div>
          {/* ........................................................ */}
      {/* <div className="lg:flex lg:gap-5 lg:justify-end lg:mr-[10%]  "  >
            <div className="d1 d13 bg-white hover:bg-[#136d93] hover:shadow-none transition-all duration-300 ease-in-out lg:w-[35%] bg-white text-[#020202] lg:m-5 rounded-lg p-2 font-montserrat text-[16px] h-[95%] scale-y-[0.9] shadow-[5px_5px_rgba(255,0,0,0.4),10px_10px_rgba(247,54,54,0.3),15px_15px_rgba(248,78,78,0.2),20px_20px_rgba(221,30,30,0.1),25px_25px_rgba(218,26,26,0.05)] md:ml-[6px] md:mr-[6px]">
              <h1 className="titleh1 text-[16px] font-bold lg:text-center lg:m-3 lg:pl-4 text-[24px] font-bold font-montserrat">HealthCare</h1>
              <div className="lg:flex lg:h-auto lg:gap-3">
                <img src={healthcare} className="lg:h-11 lg:ml-1" />
                <p >We offer a wide range of healthcare IT solutions including electronic health records (EHR) systems, appointment scheduling software, telemedicine platforms, and healthcare data analytics. Our solutions are designed to improve patient care and streamline healthcare operations. </p>

              </div>
            </div>

            <div className="d1 d14 bg-[#002eff] hover:bg-[#ffbf00] hover:shadow-none transition-all duration-300 ease-in-out lg:w-[35%] bg-[#002eff] text-black  lg:m-5 rounded-lg p-2 font-montserrat text-[16px] h-[95%] scale-y-[0.9] shadow-[5px_5px_rgba(255,0,0,0.4),10px_10px_rgba(247,54,54,0.3),15px_15px_rgba(248,78,78,0.2),20px_20px_rgba(221,30,30,0.1),25px_25px_rgba(218,26,26,0.05)] md:ml-[6px] md:mr-[6px]">
              <h1 className="titleh1 text-[16px] font-bold lg:text-center lg:m-3 lg:pl-4 text-[24px] font-bold font-montserrat">Hospitality</h1>
              <div className="lg:flex lg:h-auto lg:gap-3">
                <img src={Hospitality} className="lg:h-11 lg:ml-1" />
                <p >Our hospitality software solutions include property management systems (PMS), booking and reservation systems, CRM software, and POS systems to enhance customer service and optimize operations. We use our industry expertise to provide tailored solutions and stay updated on the latest trends and technologies to keep our clients ahead of the curve.</p>
              </div>
            </div>
          </div>
        </div>
      </div>  */}
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
            {/* <p className='leading-8  md:ml-0 ml-4'>
    Clients value us for our dedication to exceptional quality, superior craftsmanship, and innovative technologies that make our products stand out. Rigorous quality control
    ensures reliability and long-term value in every product.
  </p> */}
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
            {/* <p className='leading-8 md:ml-0 ml-4'>
  Our commitment to on-time and budget-conscious project delivery sets us apart. We meet agreed specifications through clear planning, efficient management, and proactive
   communication, ensuring reliability and peace of mind for our clients.
  </p> */}
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
