import React, { useEffect, useState } from "react";
// import $ from "jquery";
// import Footer from "../../components/Footer/footer";
// import WebDesign from "../../assets/images/webdesign.jpg";
// import AboutUsBg from "../../assets/images/AboutUSBg.jpg";
// import AboutUsBg2 from "../../assets/images/AboutUSBg2.jpg";
import AboutUs1 from "../Assets/Images/AboutUs1.jpg";
import AboutUs2 from "../Assets/Images/AboutUs2.png";
import AboutUs3 from "../Assets/Images/AboutUs3.png";
import AboutUs4 from "../Assets/Images/AboutUs4.jpg";


import mission from "../Assets/Images/mission.png";
import vision from "../Assets/Images/vision.png";

import AboutUsBgVideo from '../Assets/Videos/AboutUsBgVideo.mp4'


const AboutUsPage = () => {

  const [showFirstImage, setShowFirstImage] = useState(true);



  const textStyle = {
    background: 'linear-gradient(to bottom, #0060b5 50%, black 50%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textTransform: "uppercase",
    fontFamily: " cursive",
    textAlign: "center",
    fontSize: "50px",
    letterSpacing: "1px",
  };


  return (
    <div >



      <div className="flex justify-end flex-col items-center  drop-shadow-2xl text-2xl sm:text-7xl h-[100vh]  bg-[#0060b5] font-bold text-white">

        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
        >
          <source src={AboutUsBgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex gap-2 text-center z-40 ">
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce" style={{ animationDuration: '2000ms', animationDelay: '100ms' }}>A</h1>
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce" style={{ animationDuration: '2000ms', animationDelay: '300ms' }}>B</h1>
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce" style={{ animationDuration: '2000ms', animationDelay: '500ms' }}>O</h1>
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce" style={{ animationDuration: '2000ms', animationDelay: '700ms' }}>U</h1>
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce me-8" style={{ animationDuration: '2000ms', animationDelay: '900ms' }}>T</h1>
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce" style={{ animationDuration: '2000ms', animationDelay: '1100ms' }}>U</h1>
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce" style={{ animationDuration: '2000ms', animationDelay: '1300ms' }}>S</h1>
        </div>
        <div className="bg-white w-[48vw] h-1 animate-pulse  mb-32 sm:mb-10"></div>
      </div>
      <div>

        <div className="grid md:grid-cols-2 h-auto w-100vw]">
          <ul className=" h-[50vh] flex flex-col justify-around p-10  list-disc" >
            <li> BitByBit Solutions is a growing and young TECHNOLOGY solutions
              providing start up based out of commercial capital of India i.e.
              Mumbai.</li>
            <li> An India based technology services provider firm
              specialized in providing IT Solutions to reputed clients in
              India and Indo-Pacific region. We started our operations in
              early 2018.</li>
            <li>  Our team offers high quality services which helps
              provide the best outcomes in the services we deliver to our
              clients.</li>
            <li> Team comprises of people who are young, passionate and
              come Technology experience from a diverse set of business
              sectors.</li>
          </ul>

          <div className="h-[50vh] w-full flex justify-center items-center md:p-10 p-5 break-words" data-aos="fade-left" data-aos-duration="700">
            <div className="relative h-full  w-full md:w-[80%] md:m-20 m-10 bg-white p-4 border-2 rounded-lg border-[#0060b5] shadow-2xl group">
              <div className="h-1/2 w-full  group-hover:h-0 group-hover:opacity-0 transition-all duration-500 ease-in-out"
                style={{
                  backgroundSize: '50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundImage: `url(${mission})`
                }}>
              </div>
              <div class="h-1/2 w-full overflow-hidden bg-[#0060b5] p-2 shadow-2xl text-white rounded-lg  group-hover:h-full transition-all duration-500 ease-in-out flex flex-col justify-between">
                <h2 className="mb-20">
                  {
                    "We strive to provide a tailored, end to end services to our clients and establishing strong partnerships to ensure we understand each others goals and deadlines, without compromising our professional and ethical standards."
                  }
                </h2>
                <h1 className="text-center text-2xl font-bold">
                  OUR MISSION
                </h1>
              </div>
            </div>

          </div>
          <div className=" h-[50vh] flex justify-center items-center md:p-10 p-5" data-aos="fade-right" data-aos-duration="700">
            <div className="relative h-full w-[80%] md:m-20 m-10 bg-white p-4 border-2 rounded-lg border-[#0060b5] shadow-2xl group">
              <div className="h-1/2 w-full  group-hover:h-0 group-hover:opacity-0 transition-all duration-500 ease-in-out"
                style={{
                  backgroundSize: '50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundImage: `url(${vision})`
                }}>
              </div>
              <div class="h-1/2 w-full overflow-hidden bg-[#0060b5] p-2 shadow-2xl text-white rounded-lg  group-hover:h-full transition-all duration-500 ease-in-out flex justify-between flex-col">
                <h2 className="mb-20">
                  {
                    "To build trust by establishing a winning value chain system based on the ever changing surroundings, with the utmost focus on transforming lives and providing solutions."
                  }
                </h2>
                <h1 className="text-center text-2xl font-bold">
                  OUR VISION
                </h1>
              </div>
            </div>

          </div>


          <ul className=" h-[50vh] flex flex-col justify-around p-10  list-disc" >
            <li>Currently we are working with clients like IPS e
              Services P L, Remedo Advisor, Viteos Capital (acquired by
              ITG-Inter Trust Global), BRICSA Consulting, etc on their
              requirements of Software Application Development.</li>
            <li> We have also
              worked for Aditya Birla Insurance (Aditya Birla Capital), Citius
              Tech, SS&C Globe-Op, Remedo Advisor, NumberTree Advisors, NSEiT,
              Concept Securities and more for their Tech resource
              requirements. </li>
            <li> Usually our Tech resources work from our premises,
              but in case if client requires on site tech delivery by making
              our tech resources sit at their office(s), we provide that
              service as well. We do this for our client VITEOS CAPITAL (now
              ITG) & Remedo Advisor for their Bangalore, Chennai & Mumbai
              locations.</li>

          </ul>

        </div>

        <div className=" mt-10">
          <h1
            style={textStyle}
            className="drop-shadow-xl "
            data-aos="fade-up" data-aos-duration="700"
          >
            Our core values guide how we work
          </h1>
          <div className="px-20 sm:px-0 sm:h-[80vh] flex justify-center sm:flex-row flex-col item-center p-10 gap-10">

            <div className="sm:w-[20vw]" data-aos="zoom-in" data-aos-duration="700">
              <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto hover:scale-110">
                <img src={AboutUs1} alt="" className="hover:shadow-xl" />
              </div>
              <div className="h-[50%]">
                <h1 className="font-bold text-center my-2 text-xl">TRANSPARENCY</h1>
                <p>  We build trust & commitment through openness &
                  accountability within our team and with our clients.</p>
              </div>
            </div>

            <div className="sm:w-[20vw]" data-aos="zoom-in" data-aos-duration="700">
              <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
                <img src={AboutUs2} alt="" className="hover:drop-shadow-xl" />
              </div>
              <div className="h-[50%]">
                <h1 className="font-bold text-center my-2 text-xl">RESPONSIBILITY</h1>
                <p>    We are accountable for our actions, commitments and
                  results.</p>
              </div>
            </div>
            <div className="sm:w-[20vw]" data-aos="zoom-in" data-aos-duration="700">
              <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
                <img src={AboutUs3} alt="" className="hover:drop-shadow-xl" />
              </div>
              <div className="h-[50%]">
                <h1 className="font-bold text-center my-2 text-xl">ETHICS</h1>
                <p>   We have a strong Work Ethic.If we say we are going to do
                  it,we do it in a right way.</p>
              </div>
            </div>
            <div className="sm:w-[20vw]" data-aos="zoom-in" data-aos-duration="700">
              <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
                <img src={AboutUs4} alt="" className="hover:shadow-xl" />
              </div>
              <div className="h-[50%]">
                <h1 className="font-bold text-center my-2 text-xl">TEAMWORK</h1>
                <p>    We work together across boundaries to meet the needs of
                  our clients & help in achieving company's goals.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <Footer /> */}
    </div>
  );
};
export default AboutUsPage;


