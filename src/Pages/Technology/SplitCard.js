

import React, { Component } from "react";
// import "./SplitCard.scss";
import "tailwindcss/tailwind.css";
import Aos from "aos";
import webDevelopment from "../../Assets/Images/web development.png";
import javascript from "../../Assets/Images/javascript.png";
import reactlogo from "../../Assets/Images/reactjs.png";
import nodelogo from "../../Assets/Images/nodejs .png";
import javalogo from "../../Assets/Images/java1.png";
import kotline from "../../Assets/Images/Kotlin_Icon.png";
import flutter from "../../Assets/Images/flutter.png";
import enterpriselogo from "../../Assets/Images/computer.png";
import digital from "../../Assets/Images/digital (1).png";
import solution from "../../Assets/Images/solution1.png";
import WebDevelopment from "../../Assets/Images/TechWebDev.png";
import AndroidDevlopment from "../../Assets/Images/TechAppDev.png";
import EnterpriseSolution from "../../Assets/Images/TechEnterprise.png";
export default class SplitCard extends Component {
  render() {
    return (
      <div className="flex flex-col items-center min-h-screen mybg bg-[linear-gradient(135deg,_#0000_20.5%,_#ffffff_0_29.5%,_#0000_0)_0_50px,_linear-gradient(45deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%)_100px_0,_linear-gradient(135deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%,_#ffffff_0_67%,_#0000_0),_linear-gradient(45deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%,_#ffffff_0_67%,_#0000_0_83%,_#ffffff_0_92%,_#0000_0),_rgba(71,74,255,0.05)] bg-[200px_200px]">
        <h1 className="md:text-start text-center md:pr-80 heading1 font-bold text-[40px] md:mb-2 mb-10 md:ml-0 md:mt-12 mt-10">
          Our Professional Services Portfolio
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
          <div className="md:absolute hidden rounded-2xl md:left-10 md:top-10 md:z-10  bg-cover bg-center  md:text-2xl md:font-bold md:flex p-3  	 customborder border-[4px] border-transparent rounded-[10%] max-w-[23em] custom-border relative border-[4px] border-transparent rounded-[10%] max-w-[23em] custom-border md:justify-center   md:h-72 lg:h-72 md:w-72 lg:w-1/4 hover:-translate-y-6  md:transition-all md:duration-500">
            <img
              src={WebDevelopment}
              className="object-cover Imagescss rounded-[20px] shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)] "
              alt=""
            />
            <div className=" bg-opacity-75  rounded  "></div>
          </div>
          </div>
          <div className="bg-white m-2 md:border-none border-2 border-sky-600 rounded-2xl parentDiv md:w-[90%] shadow-xl parentDiv md:relative md:left-20 md:shadow-2xl  md:p-6 md:rounded-xl md:mb-5 md:transform md:transition-all  md:border ">
            <div className="md:flex  md:h-80 md:pl-72 md:flex-col md:items-center     ">
              <div className=" md:h-full  md:flex md:justify-between md:w-full ">

                <div className="md:pl-2 md:flex md:flex-col p-4 md:justify-between ">
                  <h4 className="heading font-bold text-[30px] smallcontaint my-3 ml-1">
                    Web Development
                  </h4>
                  <ul className="text-gray-700 list-disc md:font md:leading-loose ">
                    <li>Custom web design and development with responsive, user-friendly interfaces.</li>
                    <li>Secure and scalable architectures for robust, future-proof websites.</li>
                    <li>Regular updates and maintenance to ensure smooth operation.</li>
                    <li>Comprehensive testing for quality assurance.</li>
                  </ul>
                  <div className=" flex flex-row gap-4 mt-4  md:flex  md:justify-end md:items-end md:gap-3">
                  <img src={javascript} className="md:h-10 h-8 filter grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                  <img src={reactlogo} className="md:h-10 h-8 filter grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                  <img src={nodelogo} className="md:h-10 h-8 filter grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />

                  </div>
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
          <div className="md:absolute hidden rounded-2xl  md:right-[-1.75rem] md:top-10 md:z-10   bg-cover bg-center  md:text-2xl md:font-bold md:flex p-3  	 customborder  md:justify-center  md:h-72 lg:h-72 md:w-72 lg:w-1/4 hover:-translate-y-6  md:transition-all md:duration-500">
            <img
              src={AndroidDevlopment}
              className="Imagescss  object-cover rounded-[20px] shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)]"
              alt=""
            />
            <div className=" bg-opacity-75  rounded  "></div>
          </div>
          </div>

          <div className="bg-white m-2  parentDiv md:w-[90%] mt-2  md:relative md:left-20 border-sky-600 border-2 md:shadow-2xl md:p-6 rounded-2xl  md:transform md:transition-all  md:border-none ">
            <div className="md:flex md:flex-col md:h-80 md:items-start">
              <h4 className="heading font-bold text-[30px] smallcontaint my-3 ml-1 md:pl-6 ">
                Mobile App Development
              </h4>
              <ul className="text-gray-700 md:ml-8 list-disc leading-loose md:h-72 ml-1 font md:p-6 md:w-[74%] ">
                <li>Custom mobile app design and development with user-friendly interfaces and intuitive UX.</li>
                <li>Regular updates and maintenance to keep apps running smoothly.</li>
                <li>Cross-platform compatibility for broader reach.</li>
                <li>Robust security measures for data protection.</li>
                <li>Seamless integration with backend systems.</li>
              </ul>
              <div className=" flex flex-row gap-4 mt-4 mb-4 md:flex md:justify-end md:items-end md:gap-3 ">

                <img src={javalogo} className="md:h-10 h-8 filter grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                <img src={kotline} className="md:h-10 h-8 filter grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                <img src={flutter} className="md:h-10 h-8 filter grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />



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
            <img src={EnterpriseSolution} className="Imagescss rounded-[20px] shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)] " alt="" />
            <div className=" bg-opacity-75  rounded  "></div>
          </div>
          </div>

          <div className="bg-white m-2 mt-2 parentDiv md:w-[90%] border-sky-600 border-2 rounded-2xl md:h-96 md:relative md:left-20 md:shadow-2xl  md:p-3 md:rounded-xl md:mb-5 md:mt-5 md:transform md:transition-all  md:border-none ">
            <div className="md:flex md:flex-col md:items-end ">
              <div className="md:mb-10 ">

                <h4 className=" md:text-center heading font-bold text-[30px] smallcontaint ml-1  md:pl-60 md:pr-40 ">
                  Enterprise Application Solutions
                </h4>
                <div className="md:pl-2  md:flex md:justify-center   ">
                  <ul className="text-gray-700 list-disc leading-loose font md:h-72 md:p-6 md:pl-80 ml-1 md:w-[100%] md:line-break:anywhere">
                   <li>Implementation of innovative and scalable enterprise solutions.</li>
                   <li>Strategic consulting for enterprise application architecture.</li>
                   <li>Integrated DevOps for efficient and streamlined workflows.</li>
                   <li>Regular code reviews for quality and optimization.</li>
                   <li>Utilization of intuitive design frameworks.</li>
                  </ul>
                  <div className="flex ml-2 mt-4 mb-4 flex-row gap-4 md:flex md:justify-end md:items-end md:gap-3 ">

                  <img src={enterpriselogo} className="md:h-10 h-8 filter grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                  <img src={digital} className="md:h-10 h-8 filter grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                  <img src={solution} className="md:h-10 h-8 filter grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
