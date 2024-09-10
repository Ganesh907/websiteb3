import React, { useEffect, useState } from "react";
import techsupport from "../../Assets/Images/technical-support (1).png";
import contentchange from "../../Assets/Images/content-writing.png";
import hosting from "../../Assets/Images/hosting.png";
import websecurity from "../../Assets/Images/websecurity.png";
import databackup from "../../Assets/Images/databackup.png";
import webmonitor from "../../Assets/Images/webmonitor.png";
import techservice from "../../Assets/Images/techservice.png";
import requirements from "../../Assets/Images/planning requirement.gif";
import design from "../../Assets/Images/web-design.gif";
import development1 from "../../Assets/Images/web-developer.gif";
import testing from "../../Assets/Images/icons8-testing.gif";
import deployment from "../../Assets/Images/deployementgif.gif";
import maintenance from "../../Assets/Images/programmer.gif";
import arrow from "../../Assets/Images/Loading-Arrow.png";
import workflowimage from "../../Assets/Images/workflow_img.jpg";
import ITConsulting from "../../Assets/Images/ITconsulting.jpg";
import androiddev from "../../Assets/Images/AndroidDev.jpg";
import itservice from "../../Assets/Images/it_service-2.jpeg";
import finance from "../../Assets/Images/Finance.jpg";
import api_integration from "../../Assets/Images/api_integration.jpeg";
import hardwaresoftware from "../../Assets/Images/Hardwaresoftware.jpg";
import cloudandinfra from "../../Assets/Images/cloud_infra.jpg";
import workflow from "../../Assets/Images/workflow_img.jpg";
import "./TechServicesPage.css";

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
// import "../../components/Services/TechnologyService.scss";
// import Header from "../Header/header";
import Footer from "../../Components/CommonComponents/Footer";
import TypingTextAnimation from "../../Components/CommonComponents/TypingTextAnimation";
// import techservice from "../../Assets/Images/techservice.png";

export const TechServicesPage = (props) => {

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
          className="absolute top-0 -left-2 w-full z-10 h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%)',
            borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`,
            filter: 'blur(5px)',
            pointerEvents: 'none',
          }}
        ></div>
       <div className='h-14 flex justify-center animate-pulse items-end text-[200px] rounded-full w-14 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white z-50' style={{ animationDuration: "4000ms" }}>
  <KeyboardDoubleArrowDownIcon className="animate-bounce" style={{ fontSize: "50px", animationDuration: "400ms", animationDelay: "3000ms" }} />
</div>


      <div className="service-div-main">
        

                <div className="w-full relative">
  <img src={workflowimage} className="w-full h-[100vh]"   style={{
          borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`,
  }} />
  <div className=" w-[100vw] z-20 absolute flex justify-start items-center top-0 h-[100vh] "  style={{
          borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`,
  }}>
    <h1>
      <TypingTextAnimation />
    </h1>
  </div>
</div>


                
        {/* /////////////////////////////////////////////////////////// */}
       

        <h1
          className="techservice_heading  md:text-start  md:ml-10 text-center"

        >
          Services we provide{" "}
        </h1>
        {/* <span className="w-[8%] h-[5px] ml-[3%] hidden md:block rounded-b-[5px]" style={{backgroundColor:'#002eff'}}></span>       */}
        <section className=" flex  justify-center items-center  w-full h-auto pt-2">
          <div className="techservice_bg w-full h-auto pb-4   flex  flex-col items-center ">
            <div
              className="techservice_p md:w-[80%] md:mb-0 mb-4 md:pl-0 pl-2 text-black"
              // data-aos="fade-up"
              // data-aos-duration="4000"
            >
              At BitByBit Solutions, we engineer success by creating tailor-made
              software that meets your unique business needs. Our solutions
              drive efficiency and growth with a strong focus on reliability,
              security, and performance. Trust us to deliver the best software
              solutions, customized for your specific requirements.
            </div>

            <div className="techservice_bgcards md:grid md:grid-cols-4 md:w-[80%] md:gap-y-4 md:mt-4 md:py-2 md:pl-2  grid grid-cols-1 gap-y-6 ">
              <div
                className="techservice_box md:w-[90%] md:h-46 md:m-0 md:flex md:flex-col md:justify-start md:items-start
            flex flex-col justify-center items-center  "
              >


                <div class="wrapper">
                  <div class="card">
                    <img src={ITConsulting} />
                    <div class="info">
                      <h1 className="font-bold">IT Consultation</h1>
                      <p>
                        Expert IT consultants guiding your technology decisions
                        to meet business goals.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="style_h1 text-center  w-full ">
                  IT Consultation
                </h1>
              </div>

              {/* ........................1........................................... */}
              <div
                className="techservice_box md:w-[90%] md:h-46 md:m-0 md:flex md:flex-col md:justify-start md:items-start
            flex flex-col justify-center items-center  "
              >


                <div class="wrapper">
                  <div class="card">
                    <img src={androiddev} />
                    <div class="info">
                      <h1 className="font-bold">Android Development</h1>
                      <p>
                        Engage users and drive growth with our tailored,
                        user-friendly Android apps.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="style_h1 text-center  w-full ">
                  Android Development
                </h1>
              </div>

              {/* ..........................2......................................... */}
              <div
                className="techservice_box md:w-[90%] md:h-46 md:m-0 md:flex md:flex-col md:justify-start md:items-start
            flex flex-col justify-center items-center  "
              >

                <div class="wrapper">
                  <div class="card">
                    <img src={itservice} />
                    <div class="info">
                      <h1 className="font-bold">Managed IT Services</h1>
                      <p>
                        Focus on your core business as our managed IT services
                        handle all your technology needs.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="style_h1 text-center  w-full ">
                  Managed IT Services
                </h1>
              </div>
              {/* ..........................3......................................... */}

              {/* ..........................4......................................... */}
              <div
                className="techservice_box md:w-[90%] md:h-46 md:m-0 md:flex md:flex-col md:justify-start md:items-start
            flex flex-col justify-center items-center   "
              >
                {/* <img src={transactions} width='27%' className="md:h-12 md:ml-1"/>
            <h3 className="techservice_title md:m-2 md:text-left text-center">Financial Transactions Management</h3>
            <p className="techservice_content md:ml-2">Streamline financial transactions with our secure solutions, from payment integration to data management.</p> */}

                <div class="wrapper">
                  <div class="card">
                    <img src={finance} />
                    <div class="info">
                      <h1 className="font-bold">
                        Financial Transactions Management
                      </h1>
                      <p>
                        Streamline financial transactions with our secure
                        solutions, from payment integration to data management.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="style_h1 text-center  w-full ">
                  Financial Transactions Management
                </h1>
              </div>

              {/* ..........................5......................................... */}
              <div
                className="techservice_box md:w-[90%] md:h-46 md:m-0 md:flex md:flex-col md:justify-start md:items-start
            flex flex-col justify-center items-center"
              >
                {/* <img src={api} width='25%' className="md:h-12 md:ml-1"/>
            <h3 className="techservice_title md:m-2">Third Party API Integration</h3>
            <p className="techservice_content md:ml-2">Enhance your systems with our third-party API integrations for payments, social media, Google services, and more.</p> */}

                <div class="wrapper">
                  <div class="card">
                    <img src={api_integration} />
                    <div class="info">
                      <h1 className="font-bold">Third Party API Integration</h1>
                      <p>
                        Enhance your systems with our third-party API
                        integrations for payments, social media, Google
                        services, and more.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="style_h1 text-center  w-full ">
                  Third Party API Integration
                </h1>
              </div>
              {/* ...........................6................................... */}
              <div
                className="techservice_box md:w-[90%] md:h-46 md:m-0 md:flex md:flex-col md:justify-start md:items-start
            flex flex-col justify-center items-center "
              >
                {/* <img src={hardwaresoftwaresupport} width='25%' className="md:h-12 md:ml-1"/>
            <h3 className="techservice_title md:m-2">Hardware/Software Support</h3>
            <p className="techservice_content md:ml-2 md:pr-2">Ensure smooth operations with our expert hardware and software support services.</p> */}

                <div class="wrapper">
                  <div class="card">
                    <img src={hardwaresoftware} />
                    <div class="info">
                      <h1 className="font-bold">Hardware/Software Support</h1>
                      <p>
                        Ensure smooth operations with our expert hardware and
                        software support services.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="style_h1 text-center  w-full ">
                  Hardware/Software Support
                </h1>
              </div>
              {/* ...........................7........................... */}

              {/* ...........................8................................ */}
              <div
                className="techservice_box md:w-[90%] md:h-46 md:m-0 md:flex md:flex-col md:justify-start md:items-start
            flex flex-col justify-center items-center"
              >
                {/* <img src={cloud} width='25%' className="md:h-12 md:ml-1"/>
            <h3 className="techservice_title md:m-2 md:text-left text-center">Cloud & Infrastructure as a Service (IaaS)</h3>
            <p className="techservice_content md:ml-2">Skyrocket your business with our IaaS solutions, offering consulting, migration, and managed services for AWS, Google Cloud, and Azure.</p> */}

                <div class="wrapper">
                  <div class="card">
                    <img src={cloudandinfra} />
                    <div class="info">
                      <h1 className="font-bold">
                        Cloud & Infrastructure as a Service (IaaS)
                      </h1>
                      <p>
                        Skyrocket your business with our IaaS solutions,
                        offering consulting, migration, and managed services for
                        AWS, Google Cloud, and Azure.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="style_h1 text-center  w-full ">
                  Cloud & Infrastructure as a Service
                </h1>
              </div>
              {/* ...........................9............................ */}

              {/* ...........................10.......................... */}
              <div
                className="techservice_box md:w-[90%] md:h-46 md:m-0 md:flex md:flex-col md:justify-start md:items-start
            flex flex-col justify-center items-center  "
              >
                {/* <img src={workflowmanagement} width='25%' className="md:h-12 md:ml-1"/>
            <h3 className="techservice_title md:m-2  md:text-left text-center">Workflow Management System</h3>
            <p className="techservice_content md:ml-2">Boost productivity with our workflow management systems, streamlining business processes for greater efficiency.</p> */}

                <div class="wrapper">
                  <div class="card">
                    <img src={workflow} />
                    <div class="info">
                      <h1 className="font-bold">Workflow Management System</h1>
                      <p>
                        Boost productivity with our workflow management systems,
                        streamlining business processes for greater efficiency.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="style_h1 text-center  w-full ">
                  Workflow Management System
                </h1>
              </div>
              {/* ..........................11.............................. */}
            </div>
          </div>
        </section>

        {/* ////////////////////////////////////////section2//////////////////////////// */}

        <div className=" w-full  bg-white mt-20 h-screen justify-start ">
          <div>
            <h1 className="text-black heading2 ml-10  ">
              Process & Methodology
            </h1>
            {/* <span className="w-[8%] h-[5px] ml-[3%] block rounded-b-[5px]" style={{backgroundColor:'#002eff'}}></span>  */}
          </div>

          <div className="flex justify-between items-center  h-[80vh] mt-4 ">
            <ol className="flex relative  bottom-16 text-gray-500  w-full border-gray-400  dark:border-gray-700 dark:text-gray-400">
              <li className="flex-1 mr-10 ml-10 ">
                <span className=" absolute flex items-center justify-center w-24 h-10 bg-gray-100 rounded top-0 -mt-4  ring-blue-400 dark:ring-gray-900 dark:bg-gray-700">
                  <img src={requirements} className="h-20 w-40" />
                </span>
                <div className="ml-[96px] -mt-[25px] w-80">
                  <h3 className="font-xl font-bold text-black leading-tight">
                    Planning and Requirement Analysis
                  </h3>
                  <p className="text-sm pt-1 leading-normal">
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
                  <h3 className="font-xl font-bold text-black leading-tight">
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
                  <h3 className="font-xl font-bold text-black leading-tight">
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
                    <h3 className="font-xl font-bold text-black leading-tight">
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
                    <h3 className="font-xl font-bold text-black leading-tight">
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
                    <h3 className="font-xl font-bold text-black leading-tight">
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
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////new section3///////////////////////////// */}
        <section className=" w-full md:h-screen bg-red-40 flex flex-col items-center justify-center py-4">
          <div className=" text-center w-[90%] bg-green-30 mb-10">
            <p className="techservice_heading2">
              Let our experts take care of your website,
              <br />
              so that you can focus on your business
            </p>
          </div>

          <div className="md:w-[90%] md:flex md:flex-row md:justify-around flex flex-col  ">
            <div className=" md:w-[40%] bg-yellow-40">
              <p className="techservice_paraghap md:pl-1 p-2">
                Five Online is a top website maintenance services company,
                helping businesses across the globe improve the performance and
                security of their websites. Whether you're looking for a
                monthly, hourly, or after-hours website maintenance plan, Five
                Online provides the experience and expertise your company
                demands.
              </p>

              <h1 className="techservice_heading3 mt-6 mb-1 md:pl-1 p">
                Professional Website Management{" "}
              </h1>
              <h1 className="techservice_heading3 bg-blue-500 text-white md:pl-1">
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
              <div className="techservice_sec2box flex items-center  gap-8 md:p-3">
                <img src={techsupport} width="20%" className=" md:h-12" />
                <p className="techservice_sec2paraghap md:pr-2">
                  Unlimited Technical Support
                </p>
              </div>
              {/* ............................................... */}
              <div className="techservice_sec2box flex items-center  gap-8 md:p-3 ">
                <img src={contentchange} width="20%" className=" md:h-12" />
                <p>Content Changes</p>
              </div>
              {/* ............................................... */}
              <div className="techservice_sec2box flex items-center  gap-8 md:p-3">
                <img src={hosting} width="20%" className=" md:h-12" />
                <p>Hosting Support</p>
              </div>
              {/* ............................................... */}
              <div className="techservice_sec2box flex items-center  gap-8 md:p-3">
                <img src={websecurity} width="20%" className=" md:h-12" />
                <p>Website Security</p>
              </div>
              {/* ............................................... */}
              <div className="techservice_sec2box flex items-center  gap-8 md:p-3">
                <img src={databackup} width="20%" className=" md:h-12" />
                <p>Regular Backup</p>
              </div>
              {/* ............................................... */}
            </div>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////////////section4/////////////////////////////////////// */}

        {/* <div className=" relative justify-center max-h-screen  flex flex-col items-center  w-[100%] bg-white gap-10 pb-40">
          <div className="flex justify-center items-center w-[80%] bg-white gap-20">
            <div className=" flex items-center justify-start w-60 h-20 bg-white gap-10 ">
              <p className="">
                Our 4D development <div className="text-end">process</div>
              </p>
              <img src={devprocess} className=" h-10 w-10 " />
            </div>
            <div className="flex items-center justify-center w-60 h-20 bg-white gap-4 ">
              <img src={aboutus} className=" h-10 w-10 " />
              <p className="">About us</p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[80%] bg-white gap-80">
            <div className=" flex items-center justify-center w-60 h-20 bg-white gap-4">
              <p>
                Industry's <div className="text-center ">Best Support</div>
              </p>
              <img src={support} className=" h-10 w-10 ml-8" />
            </div>

            <div className=" flex items-center justify-end  w-60 h-20 bg-white gap-6">
              <img src={Devsoft} className=" h-10 w-10 " />
              <p className="pr-6">
                The Devsoft <div className="pl-1">Experience</div>
              </p>
            </div>
          </div>

          {/* <div className=" absolute flex items-center justify-center  bg-white">
         <h1 className="heading2">Wh<span className="">y</span> us</h1>
        </div> */}

          {/* <div className="absolute flex items-center justify-center bg-white">
            <h1 className="heading2">
              Wh<span className="under">y</span> us
            </h1>
          </div>

          <div className="flex justify-center items-center w-[80%] bg-white gap-80">
            <div className=" flex items-center justify-center w-60 h-20 bg-white">
              <p className="pr-10">Our technology</p>
              <img src={technology} className=" h-10 w-10 ml-6" />
            </div>
            <div className=" flex items-center justify-center w-60 h-20 bg-white gap-6">
              <img src={price} className=" text-start h-10 w-10 " />
              <p className="">Pricing Info</p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[80%] bg-white gap-20">
            <div className=" flex items-center justify-center w-60 h-20 bg-white">
              <p className="pr-10">Our Credentials</p>
              <img src={credentials} className=" h-10 w-10 ml-6 " />
            </div>
            <div className=" flex items-center justify-center w-60 h-20 bg-white gap-6">
              <img src={careers1} className=" h-10 w-10 " />
              <p className="">Careers</p>
            </div>
          </div>
        </div>  */}

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}

        {/* <section className="service-section">
        {/* <div className="service-div"> */}
        {/* <div style={{ 
  width: '100%', 
  textAlign: 'center', 
  lineHeight: '1.8', 
  fontFamily: 'Arial, sans-serif', 
  fontSize: '2.5rem', 
  fontWeight: 'bold',
  // color: '#fff', 
  padding: '30px',
  // backgroundColor: '#007BFF', 
  margin: '20px 0',
  // boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', 
  borderRadius: '8px', 
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' 
}}>
<TypingText word= "BitByBit delivers cutting-edge, custom software solutions in e-Governance, Fintech, Healthcare, and Technology, ensuring quality and seamless service."
/> */}
        {/* BitByBit delivers cutting-edge, custom software solutions in e-Governance, Fintech, Healthcare, and Technology, ensuring quality and seamless service. */}
      </div>

      {/* </div> */}
      {/* </section>  */}

      {/* </div> */}

      <div className="tech-footer">
        <Footer />
      </div>
    </>
  );
};
