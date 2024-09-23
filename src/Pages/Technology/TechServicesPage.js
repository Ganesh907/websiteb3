import React, { useEffect, useState } from "react";
// import techsupport from "../../Assets/Images/technical-support (1).png";
// import contentchange from "../../Assets/Images/content-writing.png";
// import hosting from "../../Assets/Images/hosting.png";
// import websecurity from "../../Assets/Images/websecurity.png";
// import databackup from "../../Assets/Images/databackup.png";
// import webmonitor from "../../Assets/Images/webmonitor.png";
import techservice from "../../Assets/Images/techservice.png";
// import requirements from "../../Assets/Images/planning requirement.gif";
// import design from "../../Assets/Images/web-design.gif";
// import development1 from "../../Assets/Images/web-developer.gif";
// import testing from "../../Assets/Images/icons8-testing.gif";
// import deployment from "../../Assets/Images/deployementgif.gif";
// import maintenance from "../../Assets/Images/programmer.gif";
// import arrow from "../../Assets/Images/Loading-Arrow.png";
import workflowimage from "../../Assets/Images/workflow_img.jpg";
import ITConsulting from "../../Assets/Images/ITconsulting.jpg";
import androiddev from "../../Assets/Images/AndroidDev.jpg";
import itservice from "../../Assets/Images/it_service-2.jpeg";
import finance from "../../Assets/Images/Finance.jpg";
import api_integration from "../../Assets/Images/api_integration.jpeg";
import hardwaresoftware from "../../Assets/Images/Hardwaresoftware.jpg";
import cloudandinfra from "../../Assets/Images/cloud_infra.jpg";
import workflow from "../../Assets/Images/workflow_img.jpg";
import TechServicesVideo from "../../Assets/Videos/TechServicesVideo.mp4";
import "./TechServicesPage.css";
import HeroSection from "../../Components/CommonComponents/HeroSection";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// import "../../components/Services/TechnologyService.scss";
// import Header from "../Header/header";
import Footer from "../../Components/CommonComponents/Footer";
import TypingTextAnimation from "../../Components/CommonComponents/TypingTextAnimation";
import SplitCard from "../../Components/TechServicesPage/SplitCard";
// import techservice from "../../Assets/Images/techservice.png";

 const TechServicesPage = (props) => {
  return (
    <>
      <div className="service-div-main ">
        <HeroSection
          videoUrl={TechServicesVideo}
          videoOpacity={20}
          MarginAnimtion={true}
        >
          <div className=" flex flex-col justify-end items-end ">
            <TypingTextAnimation />
          </div>
        </HeroSection>

        <h1 className="techservice_heading  md:text-start  md:ml-10 text-center">
          Services we provide{" "}
        </h1>
        {/* <span className="w-[8%] h-[5px] ml-[3%] hidden md:block rounded-b-[5px]" style={{backgroundColor:'#002eff'}}></span>       */}
        <section className=" flex  justify-center items-center  w-full h-auto pt-2">
          <div className="techservice_bg w-full h-auto pb-4   flex  flex-col items-center ">
            {/* <div
              className="techservice_p md:w-[80%] md:mb-0 mb-4 md:pl-0 pl-2 text-black"
              // data-aos="fade-up"
              // data-aos-duration="4000"
            >
              At BitByBit Solutions, we engineer success by creating tailor-made
              software that meets your unique business needs. Our solutions
              drive efficiency and growth with a strong focus on reliability,
              security, and performance. Trust us to deliver the best software
              solutions, customized for your specific requirements.
            </div> */}

            <div className="techservice_bgcards md:grid md:grid-cols-4 md:w-[80%] md:gap-y-4 md:mt-4 md:py-2  grid grid-cols-1 gap-y-6 ">
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
                        to meet business goals
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
                      <h1 className="font-bold">Mobile Development</h1>
                      <p>
                        Engage users and drive growth with our tailored,
                        user-friendly Android apps.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="style_h1 text-center  w-full ">
                  Mobile Development
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
                      <h1 className="font-bold">Software Support</h1>
                      <p>
                        Ensure smooth operations with our expert 
                        software support services.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="style_h1 text-center  w-full ">
                    Software Support
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

    
        <SplitCard />

        {/* ////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////new section3///////////////////////////// */}
       

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

export default TechServicesPage;