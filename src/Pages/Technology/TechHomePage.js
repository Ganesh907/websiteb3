import React, { useEffect, useState, useRef } from "react";
import letstalk from "../../Assets/Images/letstakeicon1.png";
import technology from "../../Assets/Videos/Technology6.mp4";

import bank from "../../Assets/Images/bankingicon.png";
import ecom from "../../Assets/Images/egovandecomicon.png";
import health from "../../Assets/Images/healthcare.png";
import hospitality from "../../Assets/Images/hospitality.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Footer from "../../Components/CommonComponents/Footer";
import HeroSection from "../../Components/CommonComponents/HeroSection";
import "./TechServicesPage.css";
import delivery from "../../Assets/Images/delivery.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import innovative from "../../Assets/Images/innovative.png";
import transperency from "../../Assets/Images/trans (2).png";
import customization from "../../Assets/Images/customization.png";
import ontimedelivery from "../../Assets/Images/timing.png";
import Quality from "../../Assets/Images/quality.png";
import scalable from "../../Assets/Images/scalable.png";
import "./TechServicesPage.css";
import "./Section2.css";
import CustomAccordion from "./NewOne";

const TechHomePage = () => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(null); // Track hovered Accordion
  const [visibleLines, setVisibleLines] = useState(0);
  const [scrollHeading, setScrollHeading] = useState("");
  const [hoveredGroup, setHoveredGroup] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 50;
      const radius = Math.min((scrollTop / maxScroll) * 50, 50);
      setScrollHeading(scrollTop > 30 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const linesBank = [
    "Expertise in secure and efficient software for the BFSI sector.",
    "Financial transactions management solutions.",
    "Risk assessment systems for informed decision-making.",
    "Customer relationship management (CRM) solutions.",
    "Regulatory compliance solutions to meet industry standards.",
  ];
  const linesHospitality = [
    // "Property Management Systems (PMS) for efficient hospitality operations.",
    // "Booking and reservation systems to streamline guest management.",
    // "CRM software to enhance customer service.",
    // "POS systems for optimized transaction handling.",
    // "Tailored solutions leveraging industry expertise and latest technologies.",
    "Our approach to work order management is centered around one core objective: meeting our clients’ goals with precision and efficiency.",
"By thoroughly understanding your business priorities, we create customized processes that guarantee each task or project is handled with the utmost care and focus.",
"We recognize that every client has unique requirements, and our team is dedicated to ensuring that each work order aligns seamlessly with those needs.",
"From initiation to execution, we manage every detail, allowing you to focus on your core business activities while knowing your operational goals are being met efficiently and effectively."
  ];
  const linesGov = [
    "Comprehensive e-Governance and e-Commerce solutions.",
    "Services include ticket booking, recharges, money transfers, and Aadhaar enrolments.",
    "Supports Amazon orders, insurance purchases, and utility bill payments.",
    "Features shopping cart integration and payment gateways.",
    "Customer management and data analytics for seamless online transactions.",
  ];
  const linesHealth = [
    "Wide range of healthcare IT solutions.",
    "Electronic Health Records (EHR) systems for efficient patient data management.",
    "Appointment scheduling software for streamlined bookings.",
    "Telemedicine platforms for remote patient care.",
    "Healthcare data analytics to improve patient care and operations.",
  ];

  // Handle mouse enter
  const handleMouseEnter = (panel) => {
    // setHovered(panel);
    setExpanded(panel);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    // setHovered(null);
    setExpanded(false);
    setVisibleLines(0);
  };

  // Handle typing effect for visible lines
  useEffect(() => {
    if (expanded) {
      let lineIndex = 0;
      let currentLines = [];
      if (expanded === "panel1") {
        currentLines = linesBank;
      } else if (expanded === "panel2") {
        currentLines = linesHospitality;
      } else if (expanded === "panel3") {
        currentLines = linesGov;
      } else if (expanded === "panel4") {
        currentLines = linesHealth;
      }

      const typingInterval = setInterval(() => {
        if (lineIndex < currentLines.length) {
          setVisibleLines((prev) => prev + 1);
          lineIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 300);

      return () => clearInterval(typingInterval);
    }
  }, [expanded, linesBank, linesHospitality, linesGov, linesHealth]);
  return (
    <div className="techHomepageMain  ">
      {scrollHeading ? (
        <div
          className="z-50 bg-blue-800 text-white fixed flex justify-center items-center rounded-lg font-montserrat text-[18px] font-bold h-[44px] leading-[24px] w-2/5 gap-[10px] md:p-0 md:w-[10%] md:ml-2"
          style={{ bottom: "10px", right: "10px" }}
        >
          {" "}
          {/* Adjusted top position */}
          <img src={letstalk} width="25px" alt="Let's talk" />
          <a href="#" onClick={(e) => e.preventDefault()}>
            Let’s talk
          </a>
        </div>
      ) : null}

      <HeroSection
        videoUrl={technology}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className="lg:w-[50vw] w-[90vw] md:flex md:flex-col md:justify-end  md:gap-2  ">
          <h1
            className={`md:w-full font-bold  text-5xl  font-montserrat pb-4 z-50 text-[#0060b5] `}
            style={{ transition: "margin-left 1s ease-in-out" }}
          >
            Your <span className="text-[#0060b5]">Solution</span>
          </h1>
          <span
            className="absolute md:bottom-[182px] bottom-[230px] left-50 w-[145%] md:w-[48%] border-b-2 border-dotted translate-y-5"
            style={{
              borderImage: "linear-gradient(to right, yellow, white, blue) 1",
              animation: "gradientShift 3s infinite", // Increase duration to slow down the speed
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

          <div
            className={`label   w-full mt-2 md:flex md:justify-start  md:gap-3  `}
            style={{ transition: "margin-left 1s ease-in-out" }}
          >
            <h1
              className={`relative w-full font-bold text-5xl text-white md:mt-0 md:top-0 top-3`}
              style={{ transition: "margin-left 1s ease-in-out" }}
            >
              We
              <span className="absolute animate-zoom-design ml-4 text-yellow-400">
                Design
              </span>
              <span className="absolute animate-zoom-develop ml-4 text-yellow-400">
                Develop
              </span>
              <span className="absolute animate-zoom-deliver ml-4 text-yellow-400">
                Deliver
              </span>
            </h1>
          </div>

          <ul className="list-none space-y-4 text-xl font-semibold md:mt-1 ">
            <li
              className="relative pl-4 md:mt-2 mt-8  opacity-0 animate-fadeInRepeat text-white"
              style={{ animationDelay: "0.5s" }} // First item appears after 0.5s
            >
              <div className="absolute left-0 md:top-1/2 top-[28%] transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
              Latest scalable technologies for reliable solutions.
            </li>
            <li
              className="relative pl-4 mt-4 opacity-0 animate-fadeInRepeat text-white"
              style={{ animationDelay: "1.5s" }} // Second item appears after 1.5s
            >
              <div className="absolute left-0 md:top-1/2 top-[28%] transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
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
        </div>
      </HeroSection>

     

      <CustomAccordion/>
      <div className="flex-col ">
        <h1 className=" text-center h-[10vh] my-4 text-white text-5xl italic m-[5px] font-montserrat md:my-20">
          Our Promise
        </h1>

        {/* ....................... */}
        <div className="md:flex md:flex-row flex flex-col gap-4 md:gap-0 md:p-0 p-2  justify-evenly">
          <div
            className="border-2 rounded-[10px] hover:rounded-none border-white md:w-[25%] md:h-[520px] h-[510px] p-4 bg-[#0060b5] transform transition-all duration-500 hover:scale-100 hover:shadow-lg group relative hover:border-x-transparent   hover:border-t-transparent scale-90 "
            style={{ perspective: "1000px" }}
          >
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
                <div className="relative w-[100px] h-[100px]">
                  <div className="absolute inset-0 rotate-y-360">
                    <img
                      src={innovative}
                      className="w-full h-full p-2 object-cover border-r-[50%] "
                    />
                  </div>
                </div>

                <h1
                  className="
  text-6xl font-bold 
  bg-clip-text
  text-transparent
  "
                  style={{
                    WebkitTextStroke: "2px white",
                  }}
                >
                  01
                </h1>
              </div>
            </div>

            <div>
              <h1 className="my-2 text-white font-bold border-b-2 border-white text-xl">
                {" "}
                Innovative Solutions
              </h1>
              <ul
                className="list-disc leading-loose text-white ml-4"
                style={{ "--tw-marker-color": "blue" }}
              >
                <li className="marker:text-white">
                  We infuse innovation into every project we undertake.
                </li>
                <li className="marker:text-white">
                  {" "}
                  Our software is designed to meet today’s needs and tomorrow’s
                  challenges.
                </li>
                <li className="marker:text-white">
                  Solutions that evolve with your business in a rapidly changing
                  digital world.
                </li>
                <li className="marker:text-white">
                  Stay ahead of the competition with cutting-edge technology and
                  forward-thinking approaches.
                </li>
                {/* <li className="marker:text-black">Streamlined process ensures faster delivery.</li> */}
              </ul>
            </div>

            {/* Underline at the bottom of the card */}
            {/* <div className="absolute bottom-0 left-0 w-[100%] h-[2px] bg-transparent group-hover:bg-white transition-all duration-500"></div> */}
          </div>
          {/* .................................. */}
          <div
            className="border-2 rounded-[10px] hover:rounded-none bg-white md:w-[25%] md:h-[520px] h-[510px] p-4 border-[#0060b5] transform transition-all duration-500 hover:scale-100 hover:shadow-lg group relative hover:border-x-transparent   hover:border-t-transparent scale-90 "
            style={{ perspective: "1000px" }}
          >



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
                    <img
                      src={transperency}
                      className="w-24 h-24 p-2 mt-1 object-cover border-r-[50%] "
                    />
                  </div>
                </div>

                <h1
                  className="
  text-6xl font-bold text-white
  bg-clip-text
  text-transparent
  "
                  style={{
                    WebkitTextStroke: "2px #0060b5",
                  }}
                >
                  02
                </h1>
              </div>
            </div>

            <div>
            <h1 className="my-2 text-black font-bold border-b-2 border-black text-lg">
                Transparency and Communication
              </h1>
              <ul
                className="list-disc leading-loose text-black ml-4"
                style={{ "--tw-marker-color": "blue" }}
              >
                <li className="marker:text-black">
                  Transparent and timely updates throughout the process.
                </li>
                <li className="marker:text-black">
                  We ensure open, honest communication at every step.
                </li>
                <li className="marker:text-black">
                  You'll be kept in the loop at every stage of development.
                </li>
                <li className="marker:text-black">
                  Your input is essential, and we actively seek and value it.
                </li>
                <li className="marker:text-black">
                  A strong partnership through reliable and consistent
                  collaboration.
                </li>
              </ul>
            </div>

            {/* Underline at the bottom of the card */}
            {/* <div className="absolute bottom-0 m-2 left-6 w-[80%] h-1 bg-transparent group-hover:bg-[#0060b5] transition-all duration-500"></div> */}
          </div>
          {/* ........................... */}

          <div
            className="border-2 rounded-[10px] hover:rounded-none border-white md:w-[25%] md:h-[520px] h-[510px] p-4 bg-[#0060b5] transform transition-all duration-500 hover:scale-100 hover:shadow-lg group relative hover:border-x-transparent   hover:border-t-transparent scale-90 "
            style={{ perspective: "1000px" }}
          >
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
                    <img
                      src={customization}
                      className="w-24 h-24 p-2 mt-1  object-cover border-r-[50%] rounded-full"
                    />
                  </div>
                </div>

                <h1
                  className="
  text-6xl font-bold 
  bg-clip-text
  text-transparent
  "
                  style={{
                    WebkitTextStroke: "2px white",
                  }}
                >
                  03
                </h1>
              </div>
            </div>

            <div>
            <h1 className="my-2 text-white font-bold border-b-2 border-white text-md">
                Customization as per Your Needs
              </h1>
              <ul
                className="list-disc leading-loose text-white ml-4"
                style={{ "--tw-marker-color": "blue" }}
              >
                <li className="text-white">
                  We tailor software to fit the unique needs of your business.
                </li>
                <li className="text-white">
                  We invest time in understanding your specific requirements.
                </li>
                <li className="text-white">
                  {" "}
                  Delivering personalized software that aligns perfectly with
                  your goals.
                </li>
                <li className="text-white">
                  Ensuring solutions that drive the highest efficiency in your
                  operations.
                </li>
                {/* <li className="text-white">Streamlined process ensures faster delivery.</li> */}
              </ul>
            </div>

            {/* Underline at the bottom of the card */}
            {/* <div className="absolute bottom-0 left-6 w-[80%] h-1 m-2 bg-transparent group-hover:bg-white transition-all duration-500"></div> */}
          </div>

          {/* ................ */}
        </div>

        <div className="md:flex md:flex-row flex flex-col gap-4 md:gap-0 md:p-0 p-2 justify-evenly md:my-8 my-0">
        <div
            className="border-2 rounded-[10px] hover:rounded-none bg-white md:w-[25%] md:h-[520px] h-[510px] p-4 border-[#0060b5] transform transition-all duration-500 hover:scale-100 hover:shadow-lg group relative hover:border-x-transparent   hover:border-t-transparent scale-90 "
            style={{ perspective: "1000px" }}
          >
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
                    <img
                      src={ontimedelivery}
                      className="w-24 h-24 p-2 mt-1  object-cover border-r-[50%] "
                    />
                  </div>
                </div>

                <h1
                  className="
  text-6xl font-bold text-white
  bg-clip-text
  text-transparent
  "
                  style={{
                    WebkitTextStroke: "2px #0060b5",
                  }}
                >
                  04
                </h1>
              </div>
            </div>

            <div>
            <h1 className="my-2 text-black font-bold border-b-2 border-black text-xl">On-Time Delivery</h1>
              <ul
                className="list-disc leading-loose text-black ml-4"
                style={{ "--tw-marker-color": "blue" }}
              >
                <li className="marker:text-black">
                  We value your time and make it a priority.
                </li>
                <li className="marker:text-black">
                  {" "}
                  Projects completed on schedule without sacrificing quality.
                </li>
                <li className="marker:text-black">
                  We ensure top-tier results while meeting deadlines.
                </li>
                <li className="marker:text-black">
                  {" "}
                  Timely delivery to help your business stay on course.
                </li>
                <li className="marker:text-black">
                  {" "}
                  Our focus is on delivering high-quality solutions, fast and
                  efficiently.
                </li>
              </ul>
            </div>

            {/* <div className="absolute bottom-0 left-6 w-[80%] h-1 m-2 bg-transparent group-hover:bg-blue-500  transition-all duration-500"></div> */}
          </div>

          <div
            className="border-2 rounded-[10px] hover:rounded-none border-white md:w-[25%] md:h-[520px] h-[510px] p-4 bg-[#0060b5] transform transition-all duration-500 hover:scale-100 hover:shadow-lg group relative hover:border-x-transparent   hover:border-t-transparent scale-90 "
            style={{ perspective: "1000px" }}
          >
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
                <div className="relative w-[100px] h-[100px]">
                  <div className="absolute inset-0 rotate-y-360">
                    <img
                      src={Quality}
                      className="w-24 h-24 p-2 mt-1 object-cover border-r-[50%] rounded-full"
                    />
                  </div>
                </div>

                <h1
                  className="
  text-6xl font-bold 
  bg-clip-text
  text-transparent
  "
                  style={{
                    WebkitTextStroke: "2px white",
                  }}
                >
                  05
                </h1>
              </div>
            </div>

            <div>
            <h1 className="my-2 text-black font-bold border-b-2 border-black text-xl">Quality Assurance</h1>
              <ul
                className="list-disc leading-loose text-white ml-4"
                style={{ "--tw-marker-color": "blue" }}
              >
                <li className="text-white">
                  We put your needs at the heart of everything we do.
                </li>
                <li className="text-white">
                  Rigorous quality assurance to ensure robust performance.
                </li>
                <li className="text-white">
                  Delivering software that is dependable and flawless.
                </li>
                <li className="text-white">
                  We measure our success by your achievements.
                </li>
                <li className="text-white">
                  Committed to evolving our processes for even better results.
                </li>
              </ul>
            </div>
{/* 
            <div className="absolute bottom-0 left-6 w-[80%] h-1 m-2 bg-transparent group-hover:bg-white transition-all duration-500"></div> */}
          </div>

          <div
            className="border-2 rounded-[10px] hover:rounded-none bg-white md:w-[25%] md:h-[520px] h-[510px] p-4 border-[#0060b5] transform transition-all duration-500 hover:scale-100 hover:shadow-lg group relative hover:border-x-transparent   hover:border-t-transparent scale-90 "
            style={{ perspective: "1000px" }}
          >
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
                <div className="relative w-[100px] h-[100px]">
                  <div className="absolute inset-0 rotate-y-360">
                    <img
                      src={scalable}
                      className="w-22 h-22 p-2 mt-1 object-cover border-r-[50%]  "
                    />
                  </div>
                </div>

                <h1
                  className="
  text-6xl font-bold text-white
  bg-clip-text
  text-transparent
  "
                  style={{
                    WebkitTextStroke: "2px #0060b5",
                  }}
                >
                  06
                </h1>
              </div>
            </div>

            <div>
            <h1 className="my-2 text-black font-bold border-b-2 border-black text-lg">
                Scalability and Future-Proofing
              </h1>
              <ul
                className="list-disc leading-loose text-black ml-4"
                style={{ "--tw-marker-color": "blue" }}
              >
                <li className="marker:text-black">
                  Our software seamlessly adapts as your business grows.
                </li>
                <li className="marker:text-black">
                  {" "}
                  Scalable systems designed to expand with your needs.
                </li>
                <li className="marker:text-black">
                  Stay ahead with technology that embraces innovation.
                </li>
                <li className="marker:text-black">
                  {" "}
                  Protect your investment with adaptable, forward-thinking
                  solutions.
                </li>
              </ul>
            </div>

            {/* <div className="absolute bottom-0 left-6 w-[80%] h-1 m-2 bg-transparent group-hover:bg-blue-500 transition-all duration-500"></div> */}
          </div>
        </div>
      </div>



      <div className=" tech-footer">
        <Footer />
      </div>
    </div>
  );
};

export default TechHomePage;




{/* <div className="w-[90%] h-auto py-20">
<h1 className="text-center md:text-center md:ml-[9%] text-white text-5xl italic m-[5px] md:mt-[40px] md:mb-10">
  Industry-Focused Innovation
</h1>

<div className="grid grid-cols-1 p-8 place-content-center md:grid-cols-2 md:gap-20 md:ml-20 md:w-auto w-[110%]">

  <div
    className="relative group "
    expanded={expanded === "panel1"}
    onMouseEnter={() => handleMouseEnter("panel1")}
    onMouseLeave={handleMouseLeave}
  >
    <div className="transition-shadow duration-300 p-2">
      {" "}
    
      <Accordion
      
        expanded={expanded === "panel1"}
        onMouseEnter={() => handleMouseEnter("panel1")}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: "#1a1a1a" ,
           '&:hover': {
padding: '200px',
},
        }}
        className={`p-2 border border-[#333] hover:border-blue-600 shadow-lg`}
      >
        <AccordionSummary
          expandIcon={
            <ArrowDownwardIcon
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.6rem",
                animation: "bounce 1s infinite",
              }}
            />
          }
          aria-controls="panel1-content"
        >
          <div className="flex items-center justify-center gap-4">
            <img src={bank} className="md:h-18" alt="Banking" />
            <div className="font-bold pt-1 ml-4 text-xl text-[#00bfff]">
              Banking, Financial Services and Insurance
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="md:pl-5 list-disc leading-loose text-white">
            {linesBank.slice(0, visibleLines).map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion
expanded={expanded === "panel2"}
onMouseEnter={() => handleMouseEnter("panel2")}
onMouseLeave={handleMouseLeave}
style={{ backgroundColor: "#1a1a1a" }}
className="relative p-2 border-[1px] border-[#333] hover:border-[1px] hover:border-blue-600 shadow-lg hover:shadow-lg"
>
<AccordionSummary
expandIcon={
<ArrowDownwardIcon
style={{
  color: "white",
  fontWeight: "bold",
  fontSize: "1.6rem",
  animation: "bounce 1s infinite",
}}
/>
}
aria-controls="panel2-content"
>
<div className="flex items-center justify-center gap-4">
<img
src={hospitality}
className="md:h-18"
alt="Hospitality"
/>
<div className="font-bold  ml-4 text-2xl text-[#00bfff]">
Work Order Management
</div>
</div>
</AccordionSummary>
<AccordionDetails>
<ul className="md:pl-5 list-disc leading-loose text-white">
{linesHospitality
.slice(0, visibleLines)
.map((line, index) => (
  <li key={index}>{line}</li>
))}
</ul>
</AccordionDetails>
</Accordion>

    </div>
  </div>


  <div
    className="relative group md:mt-0 mt-8"
    expanded={expanded === "panel1"}
    onMouseEnter={() => handleMouseEnter("panel1")}
    onMouseLeave={handleMouseLeave}
  >
    <div className="transition-shadow duration-300">
      {" "}
          <Accordion
        expanded={expanded === "panel3"}
        onMouseEnter={() => handleMouseEnter("panel3")}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: "#1a1a1a" }}
        className={`p-2 border border-[#333] hover:border-blue-600 shadow-lg ${
          expanded === "panel3" ? "relative" : ""
        }`}
      >
        <AccordionSummary
          expandIcon={
            <ArrowDownwardIcon
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.6rem",
                animation: "bounce 1s infinite",
              }}
            />
          }
          aria-controls="panel3-content"
        >
          <div className="flex items-center justify-center gap-4">
            <img src={ecom} className="md:h-18" alt="E-Gov & E-Com" />
            <div className="font-bold pt-1 ml-4 text-2xl text-[#00bfff]">
              E-Gov & E-Com
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="md:pl-5 list-disc leading-loose text-white">
            {linesGov.slice(0, visibleLines).map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion
        expanded={expanded === "panel4"}
        onMouseEnter={() => handleMouseEnter("panel4")}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: "#1a1a1a" }}
        className={`p-2 border border-[#333] hover:border-blue-600 shadow-lg ${
          expanded === "panel4" ? "relative" : ""
        }`}
      >
        <AccordionSummary
          expandIcon={
            <ArrowDownwardIcon
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.6rem",
                animation: "bounce 1s infinite",
              }}
            />
          }
          aria-controls="panel4-content"
        >
          <div className="flex items-center justify-center gap-4">
            <img src={health} className="md:h-16" alt="Healthcare" />
            <div className="font-bold pt-1 ml-4 text-2xl text-[#00bfff]">
              Healthcare
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="md:pl-5 list-disc leading-loose text-white">
            {linesHealth.slice(0, visibleLines).map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  </div>
</div>
</div> */}