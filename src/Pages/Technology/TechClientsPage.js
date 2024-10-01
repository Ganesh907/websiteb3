// import {useEffect}from "react";
// // import aboutus from "../../Assets/Images/information.png";
// // import devprocess from "../../Assets/Images/agile.png";
// // import support from "../../Assets/Images/industrysupports.png";
// // import technology from "../../Assets/Images/technology.png";
// import hamarakendra from "../../Assets/Images/hamarakendra.png";
// import ips from "../../Assets/Images/IPS_e_Services.jpg";
// import suntrap from "../../Assets/Images/suntrap.83df4c98.png" ;
// //  import intertrust from "../../Assets/Images/intertrust.jpg";
// import credentials from "../../Assets/Images/certificate.png";
// import price from "../../Assets/Images/tag.png";
// // import careers1 from "../../Assets/Images/careers1.png";
// import Devsoft from "../../Assets/Images/cloud-computing.png";
// // import client from "../../Assets/Images/client.jpg";
// // import suntrap from "../../Assets/Images/suntrap.83df4c98.png";
//  import intertrust from "../../Assets/Images/intertrust.jpg";
// // import credentials from "../../Assets/Images/certificate.png";
// // import price from "../../Assets/Images/tag.png";
// // import careers1 from "../../Assets/Images/careers1.png";
// // import Devsoft from "../../Assets/Images/cloud-computing.png";
// import client from "../../Assets/Images/clientpage.png";
// import Footer from "../../Components/CommonComponents/Footer";
// // import care from "../../Assets/Images/care.png";
// import qualityClient from "../../Assets/Images/qualityclient.png";
// import care from "../../Assets/Images/care.png";
// import support from "../../Assets/Images/support.png";
// import personnel from "../../Assets/Images/personnel.png";
// import innovation from "../../Assets/Images/innovation.png";
// import commitment from "../../Assets/Images/commitment.png";
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// import Aos from "aos";
// // import 'aos/dist/aos.css';
// import { useState } from "react";

// export const TechClientsPage = () => {

//   const [bottomRadius, setBottomRadius] = useState('0%');
//   const [scrollHeading, setScrollHeading] = useState("");

//     {/* <div className='bg-white '> */}
//    <marquee width="110%" direction="right" height="auto" scrollamount="20" >
// <div className='flex mt-10 gap-4 ' >

// {/* <img src={intertrust} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" /> */}

// <img src={suntrap} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" />

// <img src={ips} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" />

// <img src={hamarakendra} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" />

// </div>
// </marquee>

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const maxScroll = 50; // Adjust this value for how quickly you want the border to round
//       const radius = Math.min(scrollTop / maxScroll * 50, 50); // Cap at 50% for a smooth transition
//       setBottomRadius(`${radius}%`);
//       setScrollHeading(scrollTop > 30 ? "ml-[30%]" : "ml-0");
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//           <div className="bg-white h-auto">

//     <div className='h-[90vh] flex justify-start transition-all duration-1000 ease-in-out' style={{ borderRadius: `0 0 ${bottomRadius} ${bottomRadius}` }}>
//       <div className='h-14 flex justify-center animate-pulse items-end text-[200px] rounded-full w-14 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white z-50' style={{ animationDuration: "4000ms" }}>
//   <KeyboardDoubleArrowDownIcon className="animate-bounce" style={{ fontSize: "50px", animationDuration: "400ms", animationDelay: "3000ms" }} />
// </div>
//       {/* <div className="bg-white h-auto"> */}
//         <div>
//           {/* <img src={client} className="w-full h-auto" /> */}
//           <img
//           src={client}
//           className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out"
//           // style={{  }}
//           style={{ borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`}}  // Makes the entire image slightly transparent
//         />
//         </div>
//         {/* </div> */}
//         </div>

//         <div className=" flex items-center justify-center  mt-32 ">
//   <h1
//     data-aos="zoom-in"
//     data-aos-duration="1000"
//     data-aos-delay="100"
//     data-aos-offset="100"
//     className="heading2 text-black text-5xl  "
//   >
//     REDEFINE YOUR SUCCESS STORY WITH US
//   </h1>
//   </div>

//   <div className="flex  w-auto gap-10 justify-center ">
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//   {[
//     { src: qualityClient, title: 'Quality', description: "We ensure top-tier quality in everything we do, every step of the way.", number: '01', bgColor: 'bg-blue-700' },
//     { src: care,   title: 'Client Focus', description: 'We strive to ensure there is Quality in everything we do.', number: '02', bgColor: 'bg-green-700' },
//     { src: support, title: 'Support', description: 'We strive to ensure there is Quality in everything we do.', number: '03', bgColor: 'bg-red-700' },
//     { src: personnel, title: 'ExpertTeam', description: 'Our team is composed of highly skilled professionals who are passionate about delivering exceptional results.', number: '04', bgColor: 'bg-yellow-700' },
//     { src: innovation, title: 'Innovation', description: 'We embrace the future with innovative solutions that lead the industry and deliver exceptional results.', number: '05', bgColor: 'bg-purple-700' },
//     { src: commitment, title: 'Commitment', description: 'Our unwavering dedication drives us to deliver superior quality in every project.', number: '06', bgColor: 'bg-orange-700' }
//   ].map((item, index) => (
//     <div key={index} className="relative flex flex-col gap-2 p-4 group transition-transform duration-300 transform hover:scale-105">
//       {/* Image container */}
//       <img src={item.src} className="w-full h-40 object-cover rounded-lg" alt={item.title} />

//       {/* Text content */}
//       <div className={`absolute inset-0 flex flex-col items-start justify-center p-6 rounded-lg ${item.bgColor} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
//         <span className="text-3xl font-bold">{item.number}</span>
//         <h1 className="text-lg font-bold mt-2">{item.title}</h1>
//         <p className="text-sm mt-2">{item.description}</p>
//       </div>
//     </div>
//   ))}
// </div>

//   </div>
// {/* // </div> */}

// <div className="flex flex-col items-center justify-center h-full p-6">
//   <h1

//     className="text-2xl font-bold text-black mb-8"
//   >
// OUR PRESTIGIOUS ASSOCIATES
//   </h1>

//   {/* <div className="w-full"> */}
//     {/* <div
//       className="flex justify-evenly w-full"
//     >
//       <img src={intertrust} className="h-20 w-auto" alt="Intertrust" />
//       <img src={suntrap} className="h-20 w-auto" alt="Suntrap" />
//       <img src={ips} className="h-20 w-auto" alt="IPS" />
//       <img src={hamarakendra} className="h-20 w-auto" alt="Hamarakendra" />
//     </div>
//   {/* </div> */}
//  {/* </div>  */}

//  <div className="flex justify-evenly w-full">
//   <img
//     src={intertrust}
//     className="h-20 w-auto grayscale hover:grayscale-0 hover:scale-150 transition-all duration-300 ease-in-out"
//     alt="Intertrust"
//   />
//   <img
//     src={suntrap}
//     className="h-20 w-auto grayscale hover:grayscale-0 hover:scale-150 transition-all duration-300 ease-in-out"
//     alt="Suntrap"
//   />
//   <img
//     src={ips}
//     className="h-20 w-auto grayscale hover:grayscale-0 hover:scale-150 transition-all duration-300 ease-in-out"
//     alt="IPS"
//   />
//   <img
//     src={hamarakendra}
//     className="h-20 w-auto grayscale hover:grayscale-0 hover:scale-150 transition-all duration-300 ease-in-out"
//     alt="Hamarakendra"
//   />
// </div>
// </div>

//         <div className="tech-footer">
//           <Footer />
//         </div>
//       </div>

//     </>
//   );
// };

import { useEffect, useState } from "react";
import hamarakendra from "../../Assets/Images/hamarakendra.png";
import ips from "../../Assets/Images/IPS_e_Services.jpg";
import suntrap from "../../Assets/Images/suntrap.83df4c98.png";
import publicis from "../../Assets/Images/publicis-sapient.jpg";
import accenture from "../../Assets/Images/Accenture.png";
import capgemini from "../../Assets/Images/Client 3.png";
import intertrust from "../../Assets/Images/intertrust.jpg";
import client from "../../Assets/Images/clientpage.png";
import qualityClient from "../../Assets/Images/qualityclient.png";
import care from "../../Assets/Images/care.png";
import support from "../../Assets/Images/support.png";
import personnel from "../../Assets/Images/personnel.png";
import innovation from "../../Assets/Images/innovation.png";
import commitment from "../../Assets/Images/commitment.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Aos from "aos";
import Footer from "../../Components/CommonComponents/Footer";
import HeroSection from "../../Components/CommonComponents/HeroSection";
import Techclient from "../../Assets/Videos/techclient.mp4";
import highquality from "../../Assets/Images/highquality3.jpeg"
import onbudget from "../../Assets/Images/ontime.jpeg"
import B3Banner from "../../Assets/Images/B3Banner.jpg"
import CitiusTech from "../../Assets/Images/CitiusTech.webp"
import AQM from "../../Assets/Images/AQM.png"
import greenland from "../../Assets/Images/greenland.jpg"
import NSE from "../../Assets/Images/NSE.jpg"
import SSC from "../../Assets/Images/SSandC.png"


const TechClientsPage = () => {
  const [bottomRadius, setBottomRadius] = useState("0%");
  const [scrollHeading, setScrollHeading] = useState("");
  const [value, setValue] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 50;
      const radius = Math.min((scrollTop / maxScroll) * 50, 50);
      setBottomRadius(`${radius}%`);
      setScrollHeading(scrollTop > 30 ? "ml-[30%]" : "ml-0");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const content = [
    {
      review: "Partnering with them has significantly improved our project efficiency.",
      client: "- Hamarakendra"
    },
    {
      review: "Their dedication to quality is unmatched. Highly recommended!",
      client: "- IPS_e_Services"
    },
    {
      review: "They deliver on time, with excellent support throughout.",
      client: "- SunTrap"
    }
  ]




  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      }, 3000);
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
    <>
      {/* <HeroSection
        videoUrl={Techclient}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className="">
          <div className="relative h-[90vh]">
          
            
            <div className="absolute inset-0 flex flex-col justify-center items-start text-[#0060b5]">
              <h1 className="text-5xl font-extrabold" data-aos="fade-down">
                Empower Your Journey
              </h1>
              <p className="text-2xl font-bold mt-4 text-yellow-500" data-aos="fade-up">
                Redefine Your Success With Innovation And Excellence.
              </p>
           
            </div>
          </div>

          
        </div>
      </HeroSection> */}

      <HeroSection videoUrl={Techclient} videoOpacity={20} MarginAnimtion={true}>
        <div className='w-[50vw] flex justify-end items-end'>
          <div className="relative w-full h-72 overflow-hidden mr-2 cursor-pointer mb-16">
            <h1 className="text-[#0060b5] text-5xl font-bold drop-shadow-xl">
              Empower Your Journey
              <span
                className="absolute bottom-0 top-4 left-0 w-[40vw] border-b-2 my-9"
                style={{
                  borderImage: "linear-gradient(to right, yellow, white, blue, black) 1",
                  animation: "gradientShift 6s infinite",
                }}
              ></span>
            </h1>

            <p className="text-2xl font-bold mt-4 text-white" data-aos="fade-up">
              Redefine Your <span className="text-yellow-400">Success</span> With Innovation And Excellence.
            </p>

            <h1 className="text-2xl mt-14 italic ">
              <span className="p-3 border-white border-l-2" style={{ backgroundColor: 'rgb(0,0,0,0.5)' }}>
                Our Clients' Words
              </span>
            </h1>

            <style>
              {`
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
              `}
            </style>



            <div
              className="absolute w-full h-full flex transition-transform duration-1000 italic"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {content.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 bg-transparent  pl-2 text-white drop-shadow-xl">


                  <p className="text-xl font-semibold mt-5">{item.review}</p>

                  <h3 className="text-xl font-semibold mt-1 text-yellow-400">
                    {item.client}
                  </h3>

                  {/* <ul className="list-disc pl-5 space-y-2">
                    {item.client.map((point, idx) => (
                      <li key={idx} className="text-white font-semibold text-xl drop-shadow-xl">
                        {point}
                      </li>
                    ))}
                  </ul> */}
                </div>
              ))}
            </div>

          </div>
        </div>
      </HeroSection>


    



      <div className="flex flex-col items-center justify-center py-10">
  <h2 className="text-white text-5xl italic my-6 drop-shadow-lg">
    Our Reputed Client
  </h2>
  <p className="text-[#0060b5] italic text-lg mb-8 text-center">
    We partner with leading organizations to deliver world-class solutions and
    support. <br />
    <span className="text-yellow-400 text-xl">
      " Join us in shaping the future together "
    </span>
  </p>

  <div className="flex items-center justify-center bg-white p-10 rounded-md shadow-inner w-[95vw]">
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-12 w-11/12 max-w-4xl">
      {/* Wrap each img in a div and apply hover:scale on the div */}
      <div className="transition-all duration-700 ease-in-out hover:scale-110">
        <img
          src={ips}
          className="h-20 w-auto"
          alt="IPS"
          data-aos="fade-left"
          data-aos-delay=""
          data-aos-duration="1500"
        />
      </div>
      
      <div className="transition-all duration-700 ease-in-out hover:scale-110">
        <img
          src={capgemini}
          className="h-20 w-auto"
          alt="Capgemini"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1500"
        />
      </div>
      
      <div className="transition-all duration-700 ease-in-out hover:scale-110">
        <img
          src={accenture}
          className="h-20 w-auto"
          alt="Accenture"
          data-aos="fade-left"
          data-aos-delay="800"
          data-aos-duration="1500"
        />
      </div>
      
      <div className="transition-all duration-700 ease-in-out hover:scale-110">
        <img
          src={hamarakendra}
          className="h-20 w-auto"
          alt="Hamarakendra"
          data-aos="fade-left"
          data-aos-delay="1200"
          data-aos-duration="1500"
        />
      </div>
      
      <div className="transition-all duration-700 ease-in-out hover:scale-110">
        <img
          src={NSE}
          className="h-28 w-auto"
          alt="NSE"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1500"
        />
      </div>
      
      <div className="transition-all duration-700 ease-in-out hover:scale-110">
        <img
          src={intertrust}
          className="h-20 w-auto"
          alt="Intertrust"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1500"
        />
      </div>
      
      <div className="transition-all duration-700 ease-in-out hover:scale-110">
        <img
          src={suntrap}
          className="h-20 w-auto"
          alt="Suntrap"
          data-aos="fade-left"
          data-aos-delay="900"
          data-aos-duration="1500"
        />
      </div>
      
      <div className="transition-all duration-700 ease-in-out hover:scale-110">
        <img
          src={publicis}
          className="h-20 w-auto"
          alt="Publicis"
          data-aos="fade-left"
          data-aos-delay="1300"
          data-aos-duration="1500"
        />
      </div>
      
      <div className="transition-all duration-700 ease-in-out hover:scale-110">
        <img
          src={AQM}
          className="h-28 w-auto"
          alt="AQM"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1500"
        />
      </div>
      
      <div className="transition-all duration-700 ease-in-out hover:scale-110">
        <img
          src={SSC}
          className="h-20 w-auto"
          alt="SSC"
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="1500"
        />
      </div>
      
      <div className="transition-all duration-700 ease-in-out hover:scale-110">
        <img
          src={CitiusTech}
          className="h-20 w-auto"
          alt="CitiusTech"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="1500"
        />
      </div>
      
      <div className="transition-all duration-700 ease-in-out hover:scale-110">
        <img
          src={greenland}
          className="h-14 w-auto"
          alt="Greenland"
          data-aos="fade-left"
          data-aos-delay="1400"
          data-aos-duration="1500"
        />
      </div>
    </div>
  </div>
</div>




      


      <div className="flex items-center justify-center mt-12">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="100"
          className=" text-white text-5xl italic "
        >
          REDEFINE YOUR SUCCESS STORY WITH US
        </h1>
      </div>

      <div className="flex w-auto gap-10 justify-center mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {[
            {
              src: qualityClient,
              title: "Client Satisfaction",
              description: "Clients appreciate us for our commitment to excellence and their satisfaction.",
              number: "01",
              bgColor: "bg-blue-700",
            },
            {
              src: care,
              title: "Client Focus",
              description: "We prioritize client needs.",
              number: "02",
              bgColor: "bg-green-700",
            },
            {
              src: support,
              title: "Support",
              description: "Continuous support for our clients.",
              number: "03",
              bgColor: "bg-red-700",
            },
            {
              src: personnel,
              title: "Expert Team",
              description: "Highly skilled professionals.",
              number: "04",
              bgColor: "bg-yellow-700",
            },
            {
              src: innovation,
              title: "Innovation",
              description: "Innovative solutions leading the industry.",
              number: "05",
              bgColor: "bg-purple-700",
            },
            {
              src: commitment,
              title: "Commitment",
              description: "Unwavering dedication to quality.",
              number: "06",
              bgColor: "bg-orange-700",
            },
            {
              src: highquality,
              title: "High-Quality Products",
              description: "Our clients value us for consistently delivering high-quality products.",
              number: "07",
              bgColor: "bg-orange-700",
            },
            {
              src: onbudget,
              title: "On Budget, On-Time",
              description: "Clients trust us for our reliability in delivering on time and within budget.",
              number: "08",
              bgColor: "bg-orange-700",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col shadow-lg gap-2 p-4 group transition-transform duration-300 transform hover:scale-110 rounded-lg "
            >
              <div>
                <img
                  src={item.src}
                  className="w-full h-[185px] border-b-2 border-yellow-400 object-cover rounded-lg  p-0 m-0 shadow-none opacity-70"
                  alt={item.title}

                />
                <div
                  className={`absolute inset-0 flex flex-col items-start justify-end p-6 rounded-lg  text-white  `}

                >
                  {/* <span className="text-3xl font-bold">{item.number}</span> */}
                  <div className="w-full p-2 rounded-md " data-aos="fade-up" data-aos-duration="3000" style={{ backgroundColor: "rgb(0,0,0,0.7)" }}>

                    <h1 className="text-xl font-bold  text-yellow-400 drop-shadow-xl">{item.title}</h1>
                    <p className="text-sm  italic drop-shadow-lg">{item.description}</p>
                  </div>
                </div>
              </div>
              {/* <div
                className={`absolute inset-0 flex flex-col items-start justify-center p-6 rounded-lg ${item.bgColor} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <span className="text-3xl font-bold">{item.number}</span>
                <h1 className="text-lg font-bold mt-2">{item.title}</h1>
                <p className="text-sm mt-2">{item.description}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>


      {/* New Section: What Clients Say */}




      {/* <div className="flex flex-col items-center justify-center bg-white py-16 mt-20">
        <h2 className="text-black text-4xl font-bold mb-6">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          <div className="bg-yellow-700 p-6 rounded-lg shadow-lg text-bold text-xl">
            <p className="text-white  mb-4">
              "Partnering with them has significantly improved our project
              efficiency."
            </p>
            <span className="text-white">- Hamarakendra</span>
          </div>
          <div className="bg-green-700 p-6 rounded-lg shadow-lg text-bold text-xl">
            <p className="text-white  mb-4">
              "Their dedication to quality is unmatched. Highly recommended!"
            </p>
            <span className="text-white">- IPS_e_Services</span>
          </div>
          <div className="bg-orange-700 p-6 rounded-lg shadow-lg text-bold text-xl">
            <p className="text-white  mb-4">
              "They deliver on time, with excellent support throughout."
            </p>
            <span className="text-white">- SunTrap</span>
          </div>
        </div>
      </div> */}

      {/* <div className=" py-20">
        <div className="flex justify-around text-black items-center">
          {[
            //    { number: "500+", text: "Successful Projects" },
            { number: "18+", text: "Skilled Experts" },
            { number: "6+", text: "Years in Business" },
            { number: "95%", text: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={`${index * 200}`}
            >
              <h3 className="text-6xl font-bold text-black">{stat.number}</h3>
              <p className="text-xl font-semibold mt-4">{stat.text}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className='w-[90%] h-auto  md:mb-20 mb-5'>
        <h1 className='mb-3  text-center md:text-start md:ml-[9%] text-[var(--primary-color)]  text-[40px] font-bold m-[5px] font-montserrat md:w-full md:mt-[40px] mt-5'>
          Why do our clients value us?
        </h1>
        <div className='md:flex md:flex-row md:justify-evenly md:ml-6  flex flex-col-reverse '>
          <div className='md:w-[50%]  space-y-4 text-[var(--secondary-color)]'>
            <h1 className='font-extrabold text-2xl bg-red-3 md:text-start text-center'>High-Quality Products</h1>
          
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
          
            <ul className='list-disc pl-5 space-y-2 md:ml-0 ml-4'>
              <li>Consistent on-time delivery.</li>
              <li>Projects stay within budget.</li>
              <li>Effective planning minimizes risks.</li>
              <li>Proactive communication keeps clients updated at every stage.</li>
            </ul>
          </div>


        </div>
      </div> */}


      <div className="tech-footer mt-20">
        <Footer />
      </div>
    </>
  );
};

export default TechClientsPage;