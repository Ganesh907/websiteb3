import React, { useEffect, useState, useRef } from "react";
import letstalk from "../../Assets/Images/letstakeicon1.png";
// import technology from "../../Assets/Videos/Technology6.mp4";
import technology from "../../Assets/Videos/Technology3y.mp4";

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
import Footer from "../../Components/commoncomponents/Footer";
import HeroSection from "../../Components/commoncomponents/HeroSection";
import "./TechServicesPage.css";
import delivery from "../../Assets/Images/delivery.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import innovative from "../../Assets/Images/innovative.png";
// import transperency from "../../Assets/Images/trans (2).png";
import customization from "../../Assets/Images/customization.png";
import ontimedelivery from "../../Assets/Images/timing.png";
import Quality from "../../Assets/Images/quality.png";
import scalable from "../../Assets/Images/scalable.png";
import "./TechServicesPage.css";
import "./Section2.css";
import CustomAccordion from "../../Components/techservicepage/AccordionComponent";
import { useNavigate } from "react-router-dom";
import { promises } from "../../data/TechHomePromises";
// import PromiseCards from "../../Components/techhomepage/PromiseCards";
import PromiseCardsContainer from "../../Components/techhomepage/PromiseCards";

const TechHomePage = () => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(null); // Track hovered Accordion
  const [visibleLines, setVisibleLines] = useState(0);
  const [scrollHeading, setScrollHeading] = useState("");
  const [hoveredGroup, setHoveredGroup] = useState(null);

    
    
  const navigate = useNavigate();
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
    <div className="  ">
       {scrollHeading ? (
        <div
          className="z-50 bg-blue-800 text-white fixed flex justify-center items-center rounded-lg font-montserrat text-[18px] font-bold h-[44px] leading-[24px] w-2/5 gap-[10px] md:p-0 md:w-[10%] md:ml-2 cursor-pointer"
          style={{ bottom: "10px", right: "10px" }}
          onClick={() => navigate('/contact')}  // Use the navigate function here
        >
          {/* Adjusted top position */}
          <img src={letstalk} width="25px" alt="Let's talk" />
          <span>Let’s talk</span>
        </div>
      ) : null}

      <HeroSection
        videoUrl={technology}
        videoOpacity={100}
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


<PromiseCardsContainer/>


    </div>
  );
};

export default TechHomePage;






