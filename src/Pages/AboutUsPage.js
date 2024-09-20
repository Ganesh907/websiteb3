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
import ProfileImg from "../Assets/Images/ProfileImg.png";
import ITConsulting from "../Assets/Images/ITconsulting.jpg";

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


import mission from "../Assets/Images/mission.gif";
import vision from "../Assets/Images/vision.gif";

import AboutUsBgVideo from '../Assets/Videos/AboutUsBgVideo.mp4'
import Footer from "../Components/CommonComponents/Footer";
import HeroSection from "../Components/CommonComponents/HeroSection";


const AboutUsPage = () => {





  const textStyle = {
    background: 'linear-gradient(to bottom, var(--primary-color) 50%, var(--secondary-color) 50%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textTransform: "uppercase",
    fontFamily: " cursive",
    textAlign: "center",
    fontSize: "50px",
    letterSpacing: "1px",
  };




  const content = [
    {
      heading: "Transforming Ideas Into Digital Solutions",
      paragraph: [
        "From seamless software development to advanced data management, we deliver tech that works for you efficiently and effortlessly.",
        "We turn your vision into reality with custom IT solutions that drive business growth."
      ]
    },
    {
      heading: "Talent Finders, Career Builders",
      paragraph: [
        "Whether you're hiring or job hunting, our network and expertise make it happen.",
        "We connect the right people with the right opportunities.",
        "Let’s build your dream team or career together."
      ]
    }
  ];
  const highlightWords = ["Idea", "Talent", "Career"];

  const highlightText = (text) => {
    return text.split(" ").map((word, index) => {
      const lowerCaseWord = word.toLowerCase();
      const highlighted = highlightWords.some((highlight) =>
        lowerCaseWord.includes(highlight.toLowerCase())
      );
      return (
        <span
          key={index}
          className={highlighted ? "text-yellow-400" : "text-white"}
        >
          {word}{" "}
        </span>
      );
    });
  };

const [currentIndex, setCurrentIndex] = useState(0);
const [isHovered, setIsHovered] = useState(false);
useEffect(() => {
  let interval;
  if (!isHovered) {
    interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 3000); // Change quote every 5 seconds
  }
  return () => clearInterval(interval);
}, [isHovered, content.length]);

const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};

  return (
    <div>
<HeroSection
          videoUrl={AboutUsBgVideo}
          videoOpacity={20}
          MarginAnimtion={true}
        >

<div className=' w-[50vw] flex justify-end items-end '>
<div className="relative w-full h-52 overflow-hidden mr-2 cursor-pointer mb-16">
  <h1 className="text-[#0060b5] text-5xl font-bold drop-shadow-xl ">Who We Are</h1>
  <div
  className="absolute w-full h-full flex transition-transform duration-1000 "
  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  {content.map((item, index) => (
    <div
      key={index}
      className="w-full flex-shrink-0 bg-transparent text-white drop-shadow-xl "
    >
      <h3 className="text-2xl font-semibold inline-block border-b-4 border-[#0060b5] pb-1 my-4">
        {highlightText(item.heading)}
      </h3>
      <ul className="list-disc pl-5 space-y-2  ">
        {item.paragraph.map((point, idx) => (
          <li key={idx} className="text-white font-bold drop-shadow-xl">
            {point}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
</div>
</div>

          {/* <div className="h-[100vh] w-[98vw] flex justify-center items-center ">
          <div className="flex justify-end flex-col items-center  drop-shadow-2xl text-2xl sm:text-7xl h-[100vh] font-bold text-white transition-all duration-1000 ease-in-out">
        
        <div className="flex gap-2 text-center z-40  ">
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce" style={{ animationDuration: '2000ms', animationDelay: '100ms' }}>A</h1>
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce" style={{ animationDuration: '2000ms', animationDelay: '300ms' }}>B</h1>
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce" style={{ animationDuration: '2000ms', animationDelay: '500ms' }}>O</h1>
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce" style={{ animationDuration: '2000ms', animationDelay: '700ms' }}>U</h1>
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce me-8" style={{ animationDuration: '2000ms', animationDelay: '900ms' }}>T</h1>
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce" style={{ animationDuration: '2000ms', animationDelay: '1100ms' }}>U</h1>
          <h1 className="sm:w-[80px] sm:h-[80px] bg-gray shadow-lg rounded-full sm:border-2 border-white animate-bounce" style={{ animationDuration: '2000ms', animationDelay: '1300ms' }}>S</h1>
        </div>
        <div className="bg-white w-[48vw] h-1 animate-pulse  mb-32 sm:mb-32"></div>
      </div>
          </div> */}
        </HeroSection>

     

      <div>





        {/* 
<div className="h-[100vh] ">
<h1 className="w-[40vw] hover:scale-110  hover:bg-green-300 border-2 p-2 ms-[5vw] bg-[#0060b5] text-white shadow-lg my-1 rounded-lg"> BitByBit Solutions is a growing and young TECHNOLOGY solutions
              providing start up based out of commercial capital of India i.e.
              Mumbai.</h1>
            <h1 className="w-[45vw] hover:scale-110  hover:bg-green-300 border-2 p-2 ms-[20vw]  z-20 bg-white shadow-lg my-1 rounded-lg">  An India based technology services provider firm
              specialized in providing IT Solutions to reputed clients in 
              India and Indo-Pacific region. We started our operations in
              early 2018.</h1>
            <h1 className="w-[40vw] hover:scale-110  hover:bg-green-300 border-2 p-2  ms-[40vw] bg-[#0060b5] text-white  shadow-lg my-1 rounded-lg">  Our team offers high quality services which helps
              provide the best outcomes in the services we deliver to our
              clients.</h1>
            <h1 className="w-[35vw] hover:scale-110 hover:bg-green-300 border-2 p-2  ms-[60vw] bg-white shadow-lg my-1 rounded-lg"> Team comprises of people who are young, passionate and
              come Technology experience from a diverse set of business
              sectors.</h1>
              <h1 className="w-[50vw] hover:scale-110  hover:bg-green-300 border-2 p-2  ms-[40vw] bg-[#0060b5] text-white  shadow-lg my-1 rounded-lg"> Currently we are working with clients like IPS e
              Services P L, Remedo Advisor, Viteos Capital (acquired by
              ITG-Inter Trust Global), BRICSA Consulting, etc on their
              requirements of Software Application Development.</h1>
              <h1 className="w-[40vw] hover:scale-110  hover:bg-green-300 border-2 p-2  ms-[20vw] bg-white shadow-lg my-1 rounded-lg">  We have also
              worked for Aditya Birla Insurance (Aditya Birla Capital), Citius
              Tech, SS&C Globe-Op, Remedo Advisor, NumberTree Advisors, NSEiT,
              Concept Securities and more for their Tech resource
              requirements.</h1>
              <h1 className="w-[60vw] hover:scale-110 hover:bg-green-300 border-2 p-2  ms-[5vw] bg-[#0060b5] text-white shadow-lg my-1 rounded-lg"> Usually our Tech resources work from our premises,
              but in case if client requires on site tech delivery by making
              our tech resources sit at their office(s), we provide that
              service as well. We do this for our client VITEOS CAPITAL (now
              ITG) & Remedo Advisor for their Bangalore, Chennai & Mumbai
              locations.</h1>
          
</div> */}

        <div className="flex flex-row-reverse  h-[100vh] ">
          <div className="w-[50vw] flex justify-start">
            <div className="w-1  my-20  bg-gray-300 "></div>
            <div className="p-5 w-[70%] flex flex-col justify-center text-[var(--secondary-color)] items-center">
              <h1 className="shadow-lg p-2 border-2 my-2 rounded-lg w-full text-start border-l-4 border-l-[var(--primary-color)]">
                BitByBit Solutions is a growing and young TECHNOLOGY solutions
                providing start up based out of commercial capital of India i.e.
                Mumbai.
              </h1>
              <h1 className=" shadow-lg p-2 border-2 my-2 rounded-lg w-full text-start border-l-4 border-l-[var(--primary-color)]">
                An India based technology services provider firm
                specialized in providing IT Solutions to reputed clients in
                India and Indo-Pacific region. We started our operations in
                early 2018.
              </h1>
              <h1 className=" shadow-lg p-2 border-2 my-2 rounded-lg w-full text-start border-l-4 border-l-[var(--primary-color)]">
                Our team offers high quality services which helps
                provide the best outcomes in the services we deliver to our
                clients.
              </h1>
              <h1 className="shadow-lg p-2 border-2 my-2 border-l-4 border-l-[var(--primary-color)] rounded-lg w-full text-start">
                Team comprises of people who are young, passionate and
                come Technology experience from a diverse set of business
                sectors.
              </h1>

            </div>

          </div>
          <div className="w-[50%]  flex flex-col justify-center items-center text-[var(--primary-color)]">

            <img src={ProfileImg} className="h-96 w-auto" />
            <h1 className="text-xl font-bold "> FOUNDER NAME</h1>
            <h1 className="text-[var(--secondary-color)]">Founder & CEO</h1>
          </div>


        </div>

        {/* <div className=" flex justify-end">
          <div className="w-[50vw] p-5">
            <h1 className="bg-[#0060b5] text-white shadow-lg p-2 border-2 my-1 rounded-lg w-full text-start">
              Currently we are working with clients like IPS e
              Services P L, Remedo Advisor, Viteos Capital (acquired by
              ITG-Inter Trust Global), BRICSA Consulting, etc on their
              requirements of Software Application Development.
            </h1>
            <h1 className="shadow-lg p-2 border-2 my-1 rounded-lg w-full text-start">
              We have also
              worked for Aditya Birla Insurance (Aditya Birla Capital), Citius
              Tech, SS&C Globe-Op, Remedo Advisor, NumberTree Advisors, NSEiT,
              Concept Securities and more for their Tech resource
              requirements.
            </h1>
            <h1 className="bg-[#0060b5] text-white shadow-lg p-2 border-2 my-1 rounded-lg w-full text-start">
              Usually our Tech resources work from our premises,
              but in case if client requires on site tech delivery by making
              our tech resources sit at their office(s), we provide that
              service as well. We do this for our client VITEOS CAPITAL (now
              ITG) & Remedo Advisor for their Bangalore, Chennai & Mumbai
              locations.
            </h1>
          </div>
        </div> */}


        <div className="grid md:grid-cols-2 h-auto w-100vw]">

          {/* <div className="md:h-[60vh] w-full flex justify-center items-center md:p-10 p-5 break-words" data-aos="fade-left" data-aos-duration="700">
            <div className="relative h-full  w-full md:w-[80%] md:m-20 m-10 group p-4  rounded-lg  ">
              <div className="h-1/2 w-full  group-hover:h-0 group-hover:opacity-0 transition-all duration-500 ease-in-out"
                style={{
                  backgroundSize: '30%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundImage: `url(${mission})`
                }}>
              </div>
              <div class="w-full overflow-hidden   p-2 shadow-2xl text-black border-2 border-black z-10 rounded-lg transition-all duration-500 ease-in-out flex flex-col justify-between">
              <h1 className="text-center text-2xl font-bold">
                  OUR MISSION
                </h1>
                <h2 className="mt-4">
                  {
                    "We strive to provide a tailored, end to end services to our clients and establishing strong partnerships to ensure we understand each others goals and deadlines, without compromising our professional and ethical standards."
                  }
                </h2>
               
              </div>
            </div>

          </div> */}

          <div className="md:h-[50vh] w-full flex flex-col justify-center items-center  ">
            <div className="flex flex-col justify-between items-center  w-[75%] p-5">
              <img src={mission} className="h-32 w-32 bg-red-200" />
              <div>
                <h1 className="text-center text-2xl font-bold">
                  OUR MISSION
                </h1>
                <h2 className="mt-4 border-2 border-[#0060b5]  text-[var(--secondary-color)] rounded-lg p-3">
                  {
                    "We strive to provide a tailored, end to end services to our clients and establishing strong partnerships to ensure we understand each others goals and deadlines, without compromising our professional and ethical standards."
                  }
                </h2>
              </div>
            </div>
          </div>


          <div className="md:h-[50vh] w-full flex flex-col justify-center items-center  ">
            <div className="flex flex-col justify-between items-center  w-[70%] p-5">
              <img src={vision} className="h-32 w-32 bg-red-200" />
              <div>
                <h1 className="text-center text-2xl font-bold">
                  OUR VISION
                </h1>
                <h2 className="mt-4 border-2 border-[#0060b5] rounded-lg p-3  text-[var(--secondary-color)] ">
                  {
                    "To build trust by establishing a winning value chain system based on the ever changing surroundings, with the utmost focus on transforming lives and providing solutions."
                  }
                </h2>
              </div>
            </div>
          </div>

          {/* <ul className=" h-[50vh] flex flex-col justify-around p-10  list-disc" >
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
          </ul> */}


          {/* <div className=" md:h-[50vh] flex justify-center items-center md:p-10 p-5" data-aos="fade-right" data-aos-duration="700">
            <div className="relative h-full w-[80%] md:m-20 m-10  p-4 border-2 rounded-lg border-[#0060b5] shadow-2xl group">
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

          </div> */}


          {/* <ul className=" h-[50vh] flex flex-col justify-around p-10  list-disc" >
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

          </ul> */}

        </div>


        <div className=" mt-10">
          <h1
            style={textStyle}
            className="drop-shadow-xl  "
            data-aos="fade-up" data-aos-duration="300"
          >
            Our core values guide how we work
          </h1>
          <div className="px-20 sm:px-0 sm:h-[80vh] flex justify-center sm:flex-row flex-col item-center p-10 gap-10">

            <div className="sm:w-[20vw] hover:border-b-4  border-[var(--primary-color)] bg-gray-100  hover:bg-gray-200 p-5 hover:shadow-lg rounded-lg" data-aos="zoom-in" data-aos-duration="700">

              <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
                <img src={AboutUs1} alt=""  />
              </div>
              <div className="h-[50%] ">
                <h1 className="font-bold text-center my-2 text-xl  ">TRANSPARENCY</h1>
                <p className=" text-black">  We build trust & commitment through openness &
                  accountability within our team and with our clients.</p>
              </div>
            </div>

            <div className="sm:w-[20vw]  hover:border-b-4  border-[var(--primary-color)] bg-gray-100  hover:bg-gray-200 p-5 hover:shadow-lg rounded-lg" data-aos="zoom-in" data-aos-duration="700">
              <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
                <img src={AboutUs2} alt=""  />
              </div>
              <div className="h-[50%]">
                <h1 className="font-bold text-center my-2 text-xl">RESPONSIBILITY</h1>
                <p className=" text-black">    We are accountable for our actions, commitments and
                  results.</p>
              </div>
            </div>
            <div className="sm:w-[20vw]  hover:border-b-4  border-[var(--primary-color)] bg-gray-100  hover:bg-gray-200 p-5 hover:shadow-lg rounded-lg" data-aos="zoom-in" data-aos-duration="700">
              <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
                <img src={AboutUs3} alt=""  />
              </div>
              <div className="h-[50%]">
                <h1 className="font-bold text-center my-2 text-xl">ETHICS</h1>
                <p className=" text-black">   We have a strong Work Ethic.If we say we are going to do
                  it,we do it in a right way.</p>
              </div>
            </div>
            <div className="sm:w-[20vw]  hover:border-b-4  border-[var(--primary-color)] bg-gray-100  hover:bg-gray-200 p-5 hover:shadow-lg rounded-lg" data-aos="zoom-in" data-aos-duration="700">
              <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
                <img src={AboutUs4} alt=""  />
              </div>
              <div className="h-[50%]">
                <h1 className="font-bold text-center my-2 text-xl">TEAMWORK</h1>
                <p className=" text-black">    We work together across boundaries to meet the needs of
                  our clients & help in achieving company's goals.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <div className="h-[100vh]">
        CORE VALUES
        Intergrity
        Client First
        Trust
        Respect
        Accountability

      </div> */}

      <Footer />
    </div>
  );
};
export default AboutUsPage;


