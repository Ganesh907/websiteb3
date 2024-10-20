import React, { useEffect, useState,useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AboutUs4 from '../../Assets/Images/AboutUs4.jpg';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Footer from '../../Components/CommonComponents/Footer';
import jobinterview from '../../Assets/Videos/jobinterview.mp4'
import HeroSection from '../../Components/CommonComponents/HeroSection';
import delivery from '../../Assets/Images/deliveryicon1.png'
import clienticon from '../../Assets/Images/clienticon2.png'
// import candidate from '../../Assets/Images/candidateicon1.png'
import rating from '../../Assets/Images/ratingicon.png'
import ITicon from '../../Assets/Images/information.png'
// import software from '../../Assets/Images/softwareicon.png'

import enterprise from '../../Assets/Images/enterpriseicon.png'
import CustomAccordion from './NewTwo';
import PromiseCardsContainer from '../../Components/RecHomePage/PromiseCards';
import NavbarDemo from '../NavbarDemo';
import HeroSection2 from './HeroSection2';
const RecHomePage = () => {
  const searchIconSvg = `data:image/svg+xml;base64,${btoa(`

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100"  fill="white" height="100" viewBox="0 0 24 24">
<path d="M 10 2 C 5.590603 2 2 5.5906063 2 10 C 2 14.409394 5.590603 18 10 18 C 11.929744 18 13.635779 17.22512 15.019531 16.082031 L 20.71875 21.78125 A 0.75130096 0.75130096 0 1 0 21.78125 20.71875 L 16.082031 15.019531 C 17.225119 13.635778 18 11.929742 18 10 C 18 5.5906063 14.409397 2 10 2 z M 10 3.5 C 13.598737 3.5 16.5 6.401265 16.5 10 C 16.5 13.598735 13.598737 16.5 10 16.5 C 6.4012627 16.5 3.5 13.598735 3.5 10 C 3.5 6.401265 6.4012627 3.5 10 3.5 z"></path>
</svg>

  `)}`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const quotes = [
    "Your success is our priority. With our deep industry knowledge and personalized approach, we match you with top talent that drives your business forward, creating long-term value beyond just filling a position.",

    "Your business deserves the best, and we’re here to deliver. We go beyond resumes to find candidates that align with your company’s values and goals, ensuring a perfect fit every time",
  ];

  const jobRoles = [
    "JAVA .NET .NET PHP Developers",
    "Android, Kotlin, Flutter - Developer",
    "SAP ABAP / Basis / FICO / MDG / CRM / BPC / Hana",
    "SAP ABAP",
    "Linux Admin / Network Engineer",
    "Microsoft Azure / Ms Dynamic 365",
    "Workday/ OracleES / EDM",
    "Devops / RSA ARCHER / PAAS",
    "C++ Programmer / Open Link",
    "Sales Force / RED HAT",
    "Mongo DB / Cloud contact center OPS",
    "Google Big Query / Pega System",
    "Service Desk / Service Now",
    "Manual / Automation tester",
    "B3 Angular Developer",
    "Business Analyst",
    "Data Scientist / Machine Learning"
  ];

  const marqueeRef = useRef(null); 
  const handleMouseEnter1 = () => {
    marqueeRef.current.stop(); 
  };

  const handleMouseLeave1 = () => {
    marqueeRef.current.start(); 
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 3000); 
    }
    return () => clearInterval(interval);
  }, [isHovered, quotes.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [expanded, setExpanded] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0); // Track how many lines are visible
  const [visibleItems, setVisibleItems] = useState({});
  const [hoverDelay, setHoverDelay] = useState(null);

  useEffect(() => {
    if (visibleSteps < 2) {
      const timer = setTimeout(() => {
        setVisibleSteps((prev) => prev + 1);
      }, 100); // Adjust the time for each step to appear
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [visibleSteps]);
  // const [expanded, setExpanded] = useState(false);

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setInView(true);
  //         observer.disconnect(); // Stop observing once it's in view
  //       }
  //     },
  //     { threshold: 0.3 } // Trigger when 30% of the section is in view
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);


  // const handleMouseEnter2 = (panel) => {
  //   setExpanded(panel); // Expand the accordion on hover
  // };

  // const handleMouseLeave2 = () => {
  //   setExpanded(false); // Collapse the accordion when the mouse leaves
  //   setVisibleLines(0); // Reset visible lines when closed
  // };
  // useEffect(() => {
  //   if (expanded) {
  //     let lineIndex = 0;
  //     let currentLines = []; // Declare currentLines here

  //     // Assign the correct lines based on the expanded panel
  //     if (expanded === "panel1") {
  //       currentLines = IT;
  //     } else if (expanded === "panel2") {
  //       currentLines = Software;
  //     } else if (expanded === "panel3") {
  //       currentLines = Cloud;
  //     } else if (expanded === "panel4") {
  //       currentLines = Enterprise;
  //     }

  //     const typingInterval = setInterval(() => {
  //       if (lineIndex < currentLines.length) {
  //         setVisibleLines((prev) => prev + 1); // Show next line
  //         lineIndex++;
  //       } else {
  //         clearInterval(typingInterval); // Clear interval when done
  //       }
  //     }, 300); // Adjust the speed of typing here (1000ms = 1 second)

  //     return () => clearInterval(typingInterval); // Cleanup
  //   }
  // }, [expanded, IT, Software, Cloud, Enterprise]);



  const [scrollReached, setScrollReached] = useState(false);
  
  // Scroll handler to detect when user scrolls past a specific height
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const targetHeight = 300; // Height after which state becomes true

    if (scrollTop >= targetHeight) {
      setScrollReached(true);
    } else {
      setScrollReached(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="recrHomepageMain bg-white" >
      <NavbarDemo/>

{/* <HeroSection videoUrl={Techclient} videoOpacity={20} MarginAnimtion={true}>
        <div className='lg:w-[50vw] w-[90vw] flex justify-end items-end'>
          <div className="relative w-full md:h-80 h-96  overflow-hidden mr-2 cursor-pointer mb-16">
            <h1 className="text-[#0060b5]  text-3xl lg:text-5xl font-bold drop-shadow-xl">
              Empower Your Journey
              <span
                className="absolute bottom-0 top-4 left-0 lg:w-[40vw] w-[90vw] lg:border-b-2 border-b-4 my-9"
                style={{
                  borderImage: "linear-gradient(to right, yellow, white, blue, black) 1",
                  animation: "gradientShift 6s infinite",
                }}
              ></span>
            </h1>

            <p className="md:text-2xl text-xl font-bold md:mt-4 mt-10 text-white" data-aos="fade-up">
              Redefine Your <span className="text-yellow-400">Success</span> With Innovation And Excellence.
            </p>

            <h1 className="text-2xl mt-14 italic ">
              <span className="p-3 border-white border-l-2" style={{ backgroundColor: 'rgb(0,0,0,0.5)' }}>
                Our Clients' Words
              </span>
            </h1> */}

<HeroSection2 videoUrl={jobinterview}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className="lg:w-[50vw] w-[90vw] md:h-80 h-auto font-bold drop-shadow-xl">
          <div className='' style={{ cursor: `url(${searchIconSvg}) 40 30, auto` }}>
          <div className="relative">
  <h1
    className=" text-[#0060b5] text-3xl lg:text-5xl font-bold drop-shadow-xl mr-2 "
    style={{ userSelect: 'none', WebkitUserSelect: 'none', MsUserSelect: 'none' }}
  >
    {"Top Talent Access".split("").map((letter, index) => (
      <span key={index} className="hover:text-white transition-opacity duration-300">
        {letter}
      </span>
    ))}
  </h1>

  <span
    className="absolute bottom-0 lg:top-5 top-2 left-0 lg:w-[30vw] w-[90vw] lg:border-b-2 border-b-4 my-9"
    style={{
      borderImage: "linear-gradient(to right, yellow, white, blue, black) 1",
      animation: "gradientShift 6s infinite",
    }}
  ></span>

  <style jsx>{`
    .relative {
      position: relative;
    }
    .absolute {
      position: absolute;
    }
    @keyframes gradientShift {
      0% {
        border-image-source: linear-gradient(to right, yellow, blue);
      }
      100% {
        border-image-source: linear-gradient(to right, blue, yellow);
      }
    }
  `}</style>
</div>

          <div className=" flex items-center">

            <h1 className="drop-shadow-lg  text-white md:text-3xl text-xl my-5 font-bold  pb-4"
              style={{ userSelect: 'none', WebkitUserSelect: 'none', MsUserSelect: 'none' }}
            >
              {"Let Us Find the ".split("").map((letter, index) => (
                <span key={index} className="hover:text-[#0060b5] md:hover:text-[35px] transition-opacity duration-300">
                  {letter}
                </span>
              ))}

           

              {"Perfect Fit ".split("").map((letter, index) => (
                <span key={index} className="hover:text-[#0060b5] md:hover:text-[35px] transition-opacity duration-300 text-[#0060b5]  md:text-4xl text-xl">
                  {letter}
                </span>
              ))}

             

              {"for Your Company".split("").map((letter, index) => (
                <span key={index} className="hover:text-[#0060b5]  md:hover:text-[35px] text-white transition-opacity duration-300">
                  {letter}
                </span>
              ))}
            </h1>

          </div>
          </div>

          <div className="relative w-full h-32 overflow-hidden  mr-2 cursor-pointer">
            <div
              className="absolute w-full h-full flex transition-transform duration-1000 "
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {quotes.map((quote, index) => (
                <div key={index} className="w-full font-semibold md:text-xl flex-shrink-0 bg-transparent text-white drop-shadow-xl">
                  <p>{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </HeroSection2>

      <CustomAccordion />

      {/* <div className='h-[80vh] w-full  flex flex-col justify-center items-center'>
        <h1 className='uppercase text-xl font-bold '>for hiring</h1>
        <h1 className='text-7xl mt-10 drop-shadow-xl text-[#0060b5]'>Our Working Process</h1>
        <p className='w-[50%] my-10 text-[var(--secondary-color)] text-center'>We understand that for you, it’s never just a job. It’s your business. Thats why we Possionate about not only finding you a quality employee. But also the perfect fit.</p> */}
        {/* <Button variant="contained" size="large" sx={{ borderRadius: '20px', backgroundColor: 'var(--primary-color)' }}>
          Discover Jobs</Button> */}
      {/* </div> */}

     



      {/* <ul className='list-disc grid grid-cols-2 p-10 gap-3 '>
        <li>In a 24/7 economy, corporations have different needs.</li>
        <li>The way they work is changing and this also influences the skills and talent they need.</li>
        <li>Digital HR, new solutions, and tools are disrupting our market by drastically changing the way people connect to jobs and the role BitByBit plays in this space.</li>
        <li>Our approach embraces continuous innovation to stay ahead in a rapidly evolving job market, ensuring we meet emerging demands with agility and expertise.</li>
        <li>We have a team of young but highly knowledgeable and highly experienced professionals, which are well equipped to offer our clients the best HR solutions in the form of customized delivery.</li>
        <li>Clients and candidates expect to be served anywhere anytime and through various devices, in a way we never imagined it was possible earlier, ultimately influencing the way we work for our clients.</li>
      </ul> */}

{/* ............................ */}

{/* ....................... */}
<div>

  <h1 className=" text-center h-[10vh] my-4 uppercase text-[#0060b5] font-bold  text-5xl  m-[5px] font-montserrat md:my-14"
style={{
  // textShadow: '0.8px 0.8px 0 #eec317, -0.8px -0.8px 0 white, 0.8px -0.8px 0 white, -0.8px 0.8px 0 #eec317',                 
  fontFamily: 'Goudy Old Style' ,
    letterSpacing: '0.05em'            
}}>
  Our Promise
</h1>

{/* <div className='h-[90vh]  gap-10 flex p-10'>
  <div className='w-full '>
    <div className='p-5'  data-aos="fade-down"
data-aos-easing="linear"
data-aos-duration="1500">
      <h1 className='text-md font-bold text-[var(--primary-color)] uppercase'>
        Full End to end Delivery
      </h1>

      <ul className='list-disc'>
        <li>Recruiters work closely with supervisors, handling end-to-end delivery.</li>
        <li>Standardized process improves candidate presentation.</li>
        <li>Responsibilities span from gathering requirements to candidate start date.</li>
        <li>Prevents miscommunication and ensures faster delivery.</li>
      </ul>

    </div>
    <div className='bg-green-200 h-1/3 w-full'  data-aos="fade-up"
data-aos-duration="3000">
      <img src={RecServiceBackground} alt="" /></div>
  </div>


  <div className='w-full'>
    <div className='bg-green-200 h-1/3 w-full'>
      <img src={RecServiceBackground} alt="" /></div>
    <div className='p-5'>
      <h1 className='text-md font-bold text-[var(--primary-color)] uppercase'>
        We assure a CLIENT to
      </h1>
      <ul className='list-disc'>
        <li>Know what they need before any action.</li>
        <li>Deploy right recruiters, right quantity for the right period.</li>
        <li>Maintain confidentiality in all dealings across the value chain.</li>
        <li>Meet their expectations perfectly.</li>
      </ul>
    </div>
  </div>



  <div className='w-full'>
    <div className='p-5'>
      <h1 className='text-md font-bold text-[var(--primary-color)] uppercase'>
        We assure a CANDIDATE to
      </h1>

      <ul className='list-disc '>
        <li>Take the time to understand your needs.</li>
        <li>Refer only to genuine positions that suit your qualifications and experience.</li>
        <li>Maintain confidentiality in all dealings.</li>
        <li>Provide tailored recommendations based on your profile.</li>
      </ul>
    </div>
    <div className='bg-green-200 h-1/3 w-full'>
      <img src={RecServiceBackground} alt="" /></div>
  </div>




  <div className='w-full'>
    <div className='bg-green-200 h-1/3 w-full'>
      <img src={RecServiceBackground} alt="" /></div>
    <div className='p-4'>
      <h1 className='text-md font-bold text-[var(--primary-color)] uppercase'>
        Competitive Rates & Delivery
      </h1>

      <ul className='list-disc'>
        <li>Fast, accurate delivery in technology and HR solutions.</li>
        <li>High standards with extra effort.</li>
        <li>Best industry rates and long-term client focus.</li>
        <li>Top value-for-money agency in a short time.</li>
      </ul>

    </div>

  </div>


</div> */}

{/* ....................... */}

<PromiseCardsContainer/>





</div>


{/* <p className='text-lg italic text-white text-center m-5 underline pb-2' style={{ textDecorationSkip: 'ink', textDecorationThickness: '0.1em', textDecorationColor: 'currentColor', textUnderlineOffset: '0.4em' }}>
          “At BitByBit, it’s all about YOU! Whether you’re hunting for a new full-time role or just need a temp role, our recruiters are here to help you out.”
        </p> */}
{/* .......................... */}
      {/* <div className='recr-footer'>
        <Footer /></div> */}

<p className='text-lg italic text-[#0060b5] text-semibold text-center mt-20 py-5  border-y-2 border-white'>
          “ At BitByBit, it’s all about YOU! Whether you’re hunting for a new full-time role or just need a temp role, our recruiters are here to help you out. ”
        </p>


<Footer/>

    </div>

  );

}


export default RecHomePage;











{/* <div className='md:grid md:grid-cols-2 gap-y-20  pb-20  gap-2 items-center place-items-center '>

<div className="border  scale-90 flex  rounded-[10px] border-black w-full  p-4 bg-[#0060b5] transform transition-all duration-500 hover:-translate-y-3 hover:shadow-lg group relative" style={{ perspective: '1000px' }}>
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



<div className="flex flex-col justify-between items-center mr-5 ">
<div className="relative w-[100px] h-[100px]">
<div className="absolute inset-0 rotate-y-360">
  <img src={delivery} className="w-24 h-24 object-cover " />
</div>
</div>

<h1
className="
  text-6xl font-bold text-[#0060B5]
  bg-clip-text
  text-transparent
  "
style={{
  WebkitTextStroke: '2px white',
}}
>
01
</h1>
</div>
</div>

<div>
<h1 className="my-2 text-white font-bold text-xl">Full End to end Delivery</h1>
<ul className="list-disc leading-loose text-white ml-4" style={{ '--tw-marker-color': 'blue' }}>
<li className="marker:text-white">Recruiters manage the entire end-to-end delivery process.</li>
<li className="marker:text-white">Standardized process ensures better candidate presentation.</li>
<li className="marker:text-white">Recruiters handle requirements gathering to candidate start date.</li>
<li className="marker:text-white">Workflow prevents information loss during translation.</li>
</ul>

</div>

<div className="absolute bottom-0 left-6 w-[80%] h-1 m-2 bg-transparent group-hover:bg-white transition-all duration-500"></div>
</div>
<div className="border flex rounded-[10px] border-black w-full scale-90   md:mt-0 mt-3 p-4 bg-white transform transition-all duration-500 hover:-translate-y-3 hover:shadow-lg group relative" style={{ perspective: '1000px' }}>
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
<div className="flex flex-col justify-between items-center mr-5 ">
<div className="relative w-[100px] h-[100px]">
<div className="absolute inset-0 rotate-y-360">
  <img src={clienticon} className="w-24 h-24 object-cover  " />
</div>
</div>

<h1
className="
  text-6xl font-bold text-white
  bg-clip-text
  text-transparent
  "
style={{
  WebkitTextStroke: '2px #0060B5',
}}
>
02
</h1>
</div>
</div>

<div>
<h1 className="my-2 text-black font-bold text-xl"> We assure a CLIENT to</h1>
<ul className="list-disc  leading-loose text-black ml-4" style={{ '--tw-marker-color': 'blue' }}>
<li className="marker:text-blue-500">Understand their requirements in detail before taking any action.</li>
<li className="marker:text-blue-500">Deploy the right recruiters, in the right quantity, for the right duration.</li>
<li className="marker:text-blue-500">Maintain confidentiality throughout all dealings across the value chain.</li>
<li className="marker:text-blue-500">Fulfill their requirements exactly as per their expectations.</li>

</ul>

</div>

<div className="absolute bottom-0 left-6 w-[80%] h-1 bg-transparent m-2 group-hover:bg-[#0060b5] transition-all duration-500"></div>
</div>
<div className="scale-90 flex border rounded-[10px] border-black w-full p-4 md:mt-0 mt-3 bg-white transform transition-all duration-500 hover:-translate-y-3 hover:shadow-lg group relative" style={{ perspective: '1000px' }}>
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
<div className="flex flex-col  justify-between items-center">
<div className="relative w-[100px] h-[100px]">
<div className="absolute inset-0 rotate-y-360">
  <img src={rating} className="w-24 h-24 object-cover  p-3" />
</div>
</div>

<h1
className="
  text-6xl font-bold text-white
  bg-clip-text
  text-transparent
  "
style={{
  WebkitTextStroke: '2px #0060B5',
}}
>
04
</h1>
</div>
</div>

<div>
<h1 className="my-2 text-black font-bold text-xl ">Competitive Rates & Delivery</h1>
<ul className="list-disc leading-loose text-black ml-4" style={{ '--tw-marker-color': 'blue' }}>
  <li className="marker:text-blue-500">A tech and HR solutions startup going the extra mile.</li>
  <li className="marker:text-blue-500">Fast, accurate delivery with uncompromised quality.</li>
  <li className="marker:text-blue-500">Best industry rates for cost-effective solutions.</li>
  <li className="marker:text-blue-500">Building long-term client relationships.</li>
</ul>


</div>

<div className="absolute bottom-0 left-6 w-[80%] h-1 m-1 bg-transparent group-hover:bg-blue-500 transition-all duration-500"></div>
</div>



<div className="border flex  rounded-[10px] border-black w-full scale-90 p-4 md:mt-0 mt-3 bg-[#0060b5] transform transition-all duration-500 hover:-translate-y-3 hover:shadow-lg group relative" style={{ perspective: '1000px' }}>
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
<div className="flex flex-col  mr-5 justify-between items-center">
<div className="relative w-[100px] h-[100px]">
<div className="absolute inset-0 rotate-y-360">
  <img src={candidate} className="w-24 h-24 object-cover   " />
</div>
</div>

<h1
className="
  text-6xl font-bold text-[#0060B5]
  bg-clip-text
  text-transparent
  "
style={{
  WebkitTextStroke: '2px white',
}}
>
03
</h1>
</div>
</div>

<div className='group-hover:text-white'>
<h1 className="my-2  font-bold text-white text-xl"> We assure a CANDIDATE to</h1>
<ul className="list-disc leading-loose  ml-4 text-white" style={{ '--tw-marker-color': 'blue' }}>
<li className="marker:text-white">Take the time to understand your unique needs and requirements.</li>
<li className="marker:text-white">Refer only genuine positions that match your qualifications.</li>
<li className="marker:text-white">Ensure that roles align with your experience and career goals.</li>
<li className="marker:text-white">Maintain complete confidentiality in all communications.</li>
</ul>
</div>


<div className="absolute bottom-0 left-6 w-[80%] h-1 m-2 bg-transparent group-hover:bg-white transition-all duration-500"></div>
</div>




</div> */}














// <div className="w-[90%] h-auto py-20">
//         <h1 className="text-center md:text-center md:ml-[9%] text-white text-5xl italic m-[5px]  md:mt-[40px] md:mb-10">
//         Industry Specialization
//         </h1>

//         <div className="grid grid-cols-1  bg-red-300 p-1 place-content-center md:grid-cols-2 md:gap-2 md:ml-20 md:w-auto w-[110%]">
//           <div className="m-7">
//             <Accordion
//               expanded={expanded === "panel1"}
//               onMouseEnter={() => handleMouseEnter2("panel1")}
//               onMouseLeave={handleMouseLeave2}
//               style={{ backgroundColor: "#1a1a1a" }}
//               className="p-2 border border-[#333] bg-red-500 border-spacing-4 hover:border-blue-600 shadow-lg transition-shadow duration-300"
//             >
         
//               <AccordionSummary
//                 expandIcon={
//                   <ArrowDownwardIcon
//                     style={{
//                       color: "white",
//                       fontWeight: "bold",
//                       fontSize: "1.6rem",
//                       animation: "bounce 1s infinite",
//                     }}
//                   />
//                 }
//                 aria-controls="panel1-content"
//               >
//                 <div className="flex items-center justify-center gap-2">
//                   <img src={ITicon} className="md:h-16" alt="IT" />
//                   <div className="font-bold pt-1  ml-4 text-2xl text-[#00bfff]">
//                   Technology Recruitment
//                   </div>
//                 </div>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <ul className="md:pl-5 list-disc leading-loose text-white">
//                   {IT.slice(0, visibleLines).map((line, index) => (
//                     <li key={index}>{line}</li>
//                   ))}
//                 </ul>
//               </AccordionDetails>
//             </Accordion>
//           </div>

//           <div className="m-7">
//             <Accordion
//               expanded={expanded === "panel2"}
//               onMouseEnter={() => handleMouseEnter2("panel2")}
//               onMouseLeave={handleMouseLeave2}
//               style={{ backgroundColor: "#1a1a1a" }}
//               className="p-2 bg-[#1a1a1a] border border-[#333] border-spacing-4 hover:border-blue-600 shadow-lg transition-shadow duration-300"
//             >
          

//               <AccordionSummary
//                 expandIcon={
//                   <ArrowDownwardIcon
//                     style={{
//                       color: "white",
//                       fontWeight: "bold",
//                       fontSize: "1.6rem",
//                       animation: "bounce 1s infinite",
//                     }}
//                  />
//                 }
//                 aria-controls="panel2-content"
//               >
//                 <div className="flex items-center justify-center gap-2">
                 
//                   <img
//                     src={software}
//                     className="md:h-16"
//                     alt="Software"
//                   />
//                   <div className="font-bold pt-1  ml-4 text-2xl  text-[#00bfff]">
//                   BFSI Recruitment
//                   </div>
//                 </div>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <ul className="md:pl-5 list-disc leading-loose text-white">
//                   {Software
//                     .slice(0, visibleLines)
//                     .map((line, index) => (
//                       <li key={index}>{line}</li>
//                     ))}
//                 </ul>
//               </AccordionDetails>
//             </Accordion>
//           </div>

//           <div className="m-7">
//             <Accordion
//               expanded={expanded === "panel3"}
//               onMouseEnter={() => handleMouseEnter2("panel3")}
//               onMouseLeave={handleMouseLeave2}
//               style={{ backgroundColor: "#1a1a1a" }}
//               className="p-2 bg-[#1a1a1a] border border-[#333] border-spacing-4 hover:border-blue-600 shadow-lg transition-shadow duration-300"
         

//               <AccordionSummary
//                 expandIcon={
//                   <ArrowDownwardIcon
//                     style={{
//                       color: "white",
//                       fontWeight: "bold",
//                       fontSize: "1.6rem",
//                       animation: "bounce 1s infinite",
//                     }}
//                   />
//                 }
//                 aria-controls="panel3-content"
//               >
//                 <div className="flex items-center justify-center gap-2">
//                   <img src={cloud} className="md:h-16" alt="E-Gov & E-Com" />
//                   <div className="font-bold pt-1  ml-4 text-2xl text-[#00bfff]">
//                   {/* Cloud Computing & Data Science */}
//                   Contract Hiring (Data needed)
//                   </div>
//                 </div>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <ul className="md:pl-5 list-disc leading-loose text-white">
//                   {Cloud.slice(0, visibleLines).map((line, index) => (
//                     <li key={index}>{line}</li>
//                   ))}
//                 </ul>
//               </AccordionDetails>
//             </Accordion>
//           </div>

//           <div className="m-7">
//             <Accordion
//               expanded={expanded === "panel4"}
//               onMouseEnter={() => handleMouseEnter2("panel4")}
//               onMouseLeave={handleMouseLeave2}
//               style={{ backgroundColor: "#1a1a1a" }}
//               className="p-2 bg-[#1a1a1a] border border-[#333] text-center border-spacing-4 hover:border-blue-600 shadow-lg transition-shadow duration-300"
//             >
//               <AccordionSummary
//                 expandIcon={
//                   <ArrowDownwardIcon
//                     style={{
//                       color: "white",
//                       fontWeight: "bold",
//                       fontSize: "1.6rem",
//                       animation: "bounce 1s infinite",
//                     }}
//                   />
//                 }
//                 aria-controls="panel4-content"
//               >
//                 <div className="flex items-center justify-center gap-2">
//                   <img src={enterprise} className="md:h-16" alt="HealthCare" />
//                   <div className="font-bold pt-1  ml-4 text-2xl text-[#00bfff] text-center">
              
//                   Client Partnerships
//                   </div>
//                 </div>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <ul className="md:pl-5 list-disc leading-loose text-white">
//                   {Enterprise.slice(0, visibleLines).map((line, index) => (
//                     <li key={index}>{line}</li>
//                   ))}
//                 </ul>
//               </AccordionDetails>
//             </Accordion>
//           </div>
//         </div>
      // </div>




// const IT = [

//   "We assist our clients in securing top-tier talent for a broad spectrum of IT roles.",
// "Including but not limited to Java, .NET, Android development, SAP, DevOps, machine learning, cloud services, and cybersecurity.", 
// "Our in-depth understanding of the tech industry enables us to identify candidates ",
// "With the right skills and expertise we drive success in today’s technology-driven landscape."

// ];
// const Software = [

//   "BitByBit Solutions offers comprehensive recruitment services for clients in the BFSI sector",
// "We source professionals for critical roles such as financial analysts, risk managers, compliance officers, investment bankers, and more",
// "Our focus is on finding candidates with the requisite industry knowledge and regulatory expertise",
// ];
// const Cloud = [
  // "Skilled in recruiting specialists for cloud infrastructure.",
  // "Expertise in AWS, Azure, and Google Cloud platforms.",
  // "Focus on hiring data scientists.",
  // "Experience in sourcing machine learning experts.",
  // "Supporting businesses in adopting data-driven strategies.",
// ];
// const Enterprise  = [


//   "BitByBit Solutions takes pride in working with a wide range of prominent organizations across various industries",
// "We have built lasting partnerships with leading companies such as InterTrust Group, Accenture, Capgemini, CitiusTech, AQM, IPS e-services, NSE, and many more",
// "Our ongoing collaboration with these clients is a testament to the quality of our recruitment services and our commitment to delivering the best talent solutions",
// "Whether it’s IT, or Non-IT sectors, our client-centric approach ensures that we understand and fulfill the specific recruitment needs of every business we serve",
// ];