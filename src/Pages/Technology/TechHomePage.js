import React, { useState } from 'react'
import letstalk from "../../Assets/Images/letstakeicon1.png"
import technologyhomeimg from "../../Assets/Images/technologyhomeimg.png"
import highquality from "../../Assets/Images/AboutUs1.jpg"
import onbudget from "../../Assets/Images/on budget.jpg"
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

export const TechHomePage = () => {
  const [expanded, setExpanded] = useState(false);

  // Toggle function to manage the accordion's state
  const handleChange = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="techHomepageMain  ">
      {/* <div className={`header-container ${showNavbar ? "" : "header-hidden"}`}> */}
        {/* {showNavbar && <Header />} */}
      {/* </div> */}
      {/* ............................................................. */}
      <div className="techpage md:mt-4     items-center ">
        <div className="techpage_main2   items-center md:flex md:flex-row md:w-full md:pl-10 pl-2 flex flex-col-reverse ">
          <div className=" md:w-3/6 md:bg-white md:flex md:flex-col md:justify-center md:items-start md:gap-2 md:mt-28 md:ml-8">
            <h1 className='home_h1 font-extrabold text-[45px] leading-[57px] text-[#0c0042] font-montserrat pb-4'>Your software <br /> development company!</h1>
            <p className='home_p font-montserrat text-[16px] leading-[28px] break-words text-[#0c0042] pr-[70px]'>At BitByBit Solutions, we offer high-quality development services designed to meet your unique needs. Our expert developers specialize in creating reliable and scalable software solutions, from custom websites and mobile apps to enterprise systems. We use the latest technologies to deliver projects on time , ensuring a smooth and satisfying user experience. Partner with us to bring your ideas to life and stay ahead in the digital world. </p>
            <div className='lets_talk flex justify-center items-center bg-[#002eff] rounded-lg text-white font-montserrat text-[18px] font-bold h-[44px] leading-[24px] w-2/5 gap-[10px] md:p-0 md:w-1/4'>
              <img src={letstalk} width='25px' />
              <a href="#">Let’s talk</a>
            </div>
          </div>
          <div className=" mt-6 md:w-3/6 md:flex md:justify-center md:items-center">
            <img src={technologyhomeimg} style={{}} width='90%' />
          </div>
        </div>

        {/* <div class='multi_box'> */}
        {/* <div className="boxes    md:w-[12%]  md:py-5" >
          <div className=" flex  justify-around items-center md:flex md:flex-row md:justify-around md:items-center">
            <p class='box_p1'>+50</p>
            <img src={contact} className=" h-6 md:h-6" />
          </div>
          <p className="box_p2 md:pl-5">EMPLOYEES ON BOARD</p>
        </div> */}
        {/* ................................................................ */}

        {/* <div className="boxes md:w-[12%]  md:py-5" >
          <div className="flex  justify-around items-center md:flex md:flex-row md:justify-around md:items-center">
            <p class='box_p1'>+6</p>
            <img src={dimond} className="h-6 md:h-6" />
          </div>
          <p className="box_p2 md:pl-5">YEARS ON THE MARKET</p>
        </div> */}
        {/* ................................................................ */}

        {/* <div className="boxes md:w-[12%]  md:py-5" >
          <div className="flex  justify-around items-center md:flex md:flex-row md:justify-around md:items-center">
            <p class='box_p1'>+50</p>
            <img src={contact} className="h-6 md:h-6" />
          </div>
          <p className="box_p2 md:pl-5">ACTIVE USERS OF OUR APPS</p>
        </div> */}
        {/* ................................................................ */}

        {/* <div className="boxes md:w-[12%]  md:py-5" >
          <div className="flex  justify-around items-center md:flex md:flex-row md:justify-around md:items-center">
            <p class='box_p1'>4.7</p>
            <img src={star} className="h-6 md:h-6" />
          </div>
          <p className="box_p2 md:pl-5">CLUTCH RATING</p>
        </div> */}
        {/* ................................................................ */}
        {/* </div> */}
        {/* ................................ */}
        {/* <div className="hero"> */}
        {/* <Canvas /> */}
        {/* <div class="content" id="techcontent">
            <h4>BitByBit Solutions</h4>
            <p>Development Services with cutting edge technology.</p>
          </div>
          <h1>From the cloud to customers, we bring all the answers</h1>
        </div> */}
      </div>
      <div className="secondary-section ">
        <div className="label text-center mb-10 mt-5">
          <h1 className="oneliner font-extrabold text-6xl">
            We <span style={{ color: "#0060b5" }}>design</span> We{" "}
            <span style={{ color: "#0060b5" }}>develop</span> We{" "}
            <span style={{ color: "#0060b5" }}>deliver</span>
          </h1>
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
<div className=' w-[90%] h-auto '>
<h1 className='mainh1 text-center md:text-start md:ml-[9%] text-[#0c0042] md:w-[52%] text-[40px] font-bold m-[5px] font-montserrat md:w-full md:mt-[40px]'> Industries we deal with</h1>
<div className='grid grid-cols-2 gap-2 md:ml-20'>
  <div>
  <div className='m-7'>
<Accordion className='p-2 bg-[#f9f9f9] border border-[#A9A9A9] border-spacing-4 hover:border-blue-600' >
        <AccordionSummary
         expandIcon={<ArrowDownwardIcon style={{ color: 'blue', fontWeight: 'bold', fontSize: '1.6rem', animation: 'bounce 1s infinite' }} />}
          aria-controls="panel1-content"
          // id="panel1-header"
        
        >
          <div className="flex items-center justify-center gap-2">
        <img src={bank} className="md:h-12 image" />
        <div className="font-bold pt-1 text-lg">Banking, Financial Services and Insurance</div>
      </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='md:pl-2'>
          We have extensive experience in developing secure and efficient software solutions for the BFSI sector. Our services include financial transactions management, risk assessment systems,
           customer relationship management, and regulatory compliance solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className='mx-7'>
      <Accordion className='p-2 bg-[#f9f9f9] border border-[#A9A9A9] hover:border-blue-600 border-spacing-4' >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon style={{ color: 'blue', fontWeight: 'bold', fontSize: '1.6rem', animation: 'bounce 1s infinite' }} />}
          aria-controls="panel1-content"
          // id="panel1-header"
        
        >
          <div className="flex items-center justify-center gap-2">
        <img src={hospitality} className="md:h-12 image" />
        <div className="font-bold pt-1 text-lg">Hospitality</div>
      </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our hospitality software solutions include property management systems (PMS), booking and reservation systems, CRM software, and POS systems to enhance customer service and optimize operations. We use our industry expertise to provide tailored solutions and stay updated
           on the latest trends and technologies to keep our clients ahead of the curve.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </div>

      <div >
      <div className='m-7'>
      <Accordion className='p-2 bg-[#f9f9f9] border border-[#A9A9A9] hover:border-blue-600 border-spacing-4' >
        <AccordionSummary
           expandIcon={<ArrowDownwardIcon style={{ color: 'blue', fontWeight: 'bold', fontSize: '1.6rem', animation: 'bounce 1s infinite' }} />}
          aria-controls="panel1-content"
          // id="panel1-header"
        
        >
          <div className="flex items-center justify-center gap-2">
        <img src={ecom} className="md:h-12 image" />
        <div className="font-bold pt-1 text-lg">E-Gov & E-Com</div>
      </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We offer comprehensive e-Governance and e-Commerce solutions, including ticket booking, recharges, money transfers, Aadhaar enrolments, Amazon orders, insurance purchases, utility bill payments, and more, with features like shopping cart integration, payment gateways, 
          customer management, and data analytics for seamless online transactions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className='mx-7'>
      <Accordion className='p-2 bg-[#f9f9f9] border border-[#A9A9A9] hover:border-blue-600 border-spacing-4' >
        <AccordionSummary
           expandIcon={<ArrowDownwardIcon style={{ color: 'blue', fontWeight: 'bold', fontSize: '1.6rem', animation: 'bounce 1s infinite' }} />}
          aria-controls="panel1-content"
          // id="panel1-header"
        
        >
          <div className="flex items-center justify-center gap-2">
        <img src={health} className="md:h-12 image" />
        <div className="font-bold pt-1 text-lg">HealthCare</div>
      </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We offer a wide range of healthcare IT solutions including electronic health records (EHR) systems, appointment scheduling software, telemedicine platforms, and healthcare data analytics. Our solutions 
          are designed to improve patient care and streamline healthcare operations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
    </div>
</div>





      <>
        {/* <div className="g1 md:flex h-[1040px] md:w-full min-h-screen  w-full md:h-[100vh]   md:pt-48 pt-10 md:pb-[30%]  pb-20 md:pl-[20px]  md:relative    my-background md:bg-cover md:bg-right-bottom md:bg-no-repeat bg-cover bg-right-bottom bg-no-repeat bg-white bg-[calc(0px)]" style={{ backgroundImage: `url(${backgroundImage})` }}  > */}




          <div className="md:w-[30%] w-full md:h-96 h-56 md:flex md:items-center  md:justify-center">

            <h4 className="md:w-[230px] titlehead md:text-[40px] md:font-bold text-[40px] font-[10] w-[307px] md:text-center text-center md:mt-10  md:mb-20 md:ml-10 ml-16 md:pr-0 pr-2">
              Why do our <span className="text-[#0000ff] ">clients</span> value us?
            </h4>

          </div>


          <div className="  flex flex-col justify-center items-center  md:w-[50%] md:h-96 md:gap-16 gap-2 md:mt-10  " >

            <div className="md:flex md:w-[100%] md:h-[50%] md:gap-14  md:justify-center mb-4">


              <div className=" md:w-[35%] h-[180px] w-[270px] md:h-[110%] mb-4  bg-blue-500    boxShadow shadow-[10px_10px_0px_rgb(0,0,0)] transition-all duration-300 ease-in-out hover:shadow-[20px_20px_0px_rgb(0,0,0)] shadow-[10px_10px_0px_rgb(0,0,0)] rounded-2xl">
                <h1 className="text-center md:my-2 text-white md:font-semibold    title33 md:text-[20px] font-[10px] text-[5px] md:px-1 p-2">High-quality products </h1>
                <div className="flex h-auto   md:gap-5  md:pl-2 text-white md:leading-6 md:mt-5 mt-2 pl-2 text-center leading-normal ">
                  <p className="md:pt-0 pt-6">We create professional, bug-free, and optimized apps using modern technology for long-term use.</p>

                </div>
              </div>
              <div className=" h-[180px] w-[270px] md:w-[35%] md:h-[110%] boxShadow shadow-[10px_10px_0px_rgb(0,0,0)]  transition-all duration-300 ease-in-out hover:shadow-[20px_20px_0px_rgb(0,0,0)] bg-gray-200 rounded-2xl shadow-[10px_10px_0px_rgb(0,0,0)]">
                <img src={highquality} className="md:h-full rounded-2xl" />
              </div>
            </div>

            <div className="md:flex md:w-[100%] md:h-[50%] h-[180px] w-[270px] md:mb-40 md:justify-start md:ml-12 md:gap-14  ">
              <div className=" md:w-[35%] md:h-[110%] bg-gray-200 rounded-2xl boxShadow shadow-[10px_10px_0px_rgb(0,0,0)]  transition-all duration-300 ease-in-out hover:shadow-[20px_20px_0px_rgb(0,0,0)]">
                <img src={onbudget} className="md:h-full rounded-2xl" />
              </div>
              <div className=" md:w-[35%]  md:h-[110%] h-[180px] w-[270px] md:mt-1 mt-6  bg-blue-500 rounded-2xl boxShadow shadow-[10px_10px_0px_rgb(0,0,0)]  transition-all duration-300 ease-in-out hover:shadow-[20px_20px_0px_rgb(0,0,0)] ">
                <h1 className="text-center md:m-2 text-white title33 md:text-[20px] font-[10px] text-[5px] md:font-semibold md:pt-0 pt-3 "> On budget, on-time</h1>
                <div className="md:flex md:h-auto md:gap-5  text-white md:leading-6 md:mt-5   leading-normal md:justify-center md:items-center   flex justify-center mt-4 h-full">
                  <p className="md:p-0  p-4  md:ml-1 md:text-center">Consistently delivering projects on time, within budget, and as per specifications.</p>



                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </>


      <div className=" tech-footer">
        {/* <Footer /> */}
      </div>

    </div>
  );
}
