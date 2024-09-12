import {useEffect}from "react";
import aboutus from "../../Assets/Images/information.png";
import devprocess from "../../Assets/Images/agile.png";
import technology from "../../Assets/Images/technology.png";
import hamarakendra from "../../Assets/Images/hamarakendra.png";
import ips from "../../Assets/Images/IPS_e_Services.jpg";
import suntrap from "../../Assets/Images/suntrap.83df4c98.png" ;
import credentials from "../../Assets/Images/certificate.png";
import price from "../../Assets/Images/tag.png";
import Devsoft from "../../Assets/Images/cloud-computing.png";
 import intertrust from "../../Assets/Images/intertrust.jpg";
import client from "../../Assets/Images/clientpage.png";
import Footer from "../../Components/CommonComponents/Footer";
import qualityClient from "../../Assets/Images/qualityclient.png";
import care from "../../Assets/Images/care.png";
import support from "../../Assets/Images/support.png";
import personnel from "../../Assets/Images/personnel.png";
import innovation from "../../Assets/Images/innovation.png";
import commitment from "../../Assets/Images/commitment.png";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import { useState } from "react";

export const TechClientsPage = () => {


  const [bottomRadius, setBottomRadius] = useState('0%');
  const [scrollHeading, setScrollHeading] = useState("");


    {/* <div className='bg-white '> */}
   <marquee width="110%" direction="right" height="auto" scrollamount="20" >
<div className='flex mt-10 gap-4 ' >


{/* <img src={intertrust} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" /> */}

<img src={suntrap} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" />


<img src={ips} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" />


<img src={hamarakendra} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" />

</div>
</marquee>
 {/* </div> */}

    {/* <div className=" relative justify-center max-h-screen mt-44 flex flex-col items-center  w-[100%] gap-10 pb-40">
    <div className="flex justify-center items-center w-[80%]  gap-20">
      <div className=" flex items-center justify-start w-60 h-20  gap-10 ">
        <p className="">
          Our 4D development <div className="text-end">process</div>
        </p>
        <img src={devprocess} className=" h-10 w-10 " />
      </div>
      <div className="flex items-center justify-center w-60 h-20  gap-4 ">
        <img src={aboutus} className=" h-10 w-10 " />
        <p className="">About us</p>
      </div>
    </div>

    <div className="flex justify-center items-center w-[80%]  gap-80">
      <div className=" flex items-center justify-center w-60 h-20  gap-4">
        <p>
          Industry's <div className="text-center ">Best Support</div>
        </p>
        <img src={support} className=" h-10 w-10 ml-8" />
      </div>

      <div className=" flex items-center justify-end  w-60 h-20  gap-6">
        <img src={Devsoft} className=" h-10 w-10 " />
        <p className="pr-6">
          The Devsoft <div className="pl-1">Experience</div>
        </p>
      </div>
    </div>

    {/* <div className=" absolute flex items-center justify-center  bg-white">
   <h1 className="heading2">Wh<span className="">y</span> us</h1>
  </div> */}

    {/* <div className="absolute  flex items-center justify-center ">
      <h1  
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-delay="100" 
    data-aos-offset="100" 
    className="heading2">
        Wh<span className="under">y</span> us
      </h1>
    </div>

    <div className="flex justify-center items-center w-[80%]  gap-80">
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

  <div className="relative h-[500px] w-[500px] mt-44">
  {/* Central title */}
  {/* <div className="absolute inset-0 flex items-center justify-center">
    <h1  
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="100"
      data-aos-offset="100"
      className="heading2"
    >
      Wh<span className="under">y</span> us
    </h1>
  </div> */}

  {/* Circular items with rotation */}
  <div className="absolute h-[500px] w-[500px] rotate-container">
    {/* Top */}
    <div className="absolute top-0 left-[50%] transform -translate-x-1/2">
      <div className="flex items-center justify-center">
        <p className="text-center">Our 4D development process</p>
        <img src={devprocess} className="h-10 w-10 ml-2" />
      </div>
    </div>

    {/* Top-right */}
    <div className="absolute top-[15%] right-[15%]">
      <div className="flex items-center justify-center">
        <p className="text-center">About us</p>
        <img src={aboutus} className="h-10 w-10 ml-2" />
      </div>
    </div>

    {/* Right */}
    <div className="absolute top-[50%] right-0 transform -translate-y-1/2">
      <div className="flex items-center justify-center">
        <p className="text-center">Best Support</p>
        <img src={support} className="h-10 w-10 ml-2" />
      </div>
    </div>

    {/* Bottom-right */}
    <div className="absolute bottom-[15%] right-[15%]">
      <div className="flex items-center justify-center">
        <p className="text-center">The Devsoft Experience</p>
        <img src={Devsoft} className="h-10 w-10 ml-2" />
      </div>
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
    <h1  
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="100"
      data-aos-offset="100"
      className="heading2"
    >
      Wh<span className="under">y</span> us
    </h1>
  </div>

    {/* Bottom */}
    <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2">
      <div className="flex items-center justify-center">
        <p className="text-center">Our technology</p>
        <img src={technology} className="h-10 w-10 ml-2" />
      </div>
    </div>

    {/* Bottom-left */}
    <div className="absolute bottom-[15%] left-[15%]">
      <div className="flex items-center justify-center">
        <p className="text-center">Pricing Info</p>
        <img src={price} className="h-10 w-10 ml-2" />
      </div>
    </div>

    {/* Left */}
    <div className="absolute top-[50%] left-0 transform -translate-y-1/2">
      <div className="flex items-center justify-center">
        <p className="text-center">Our Credentials</p>
        <img src={credentials} className="h-10 w-10 ml-2" />
      </div>
    </div>

    {/* Top-left */}
    <div className="absolute top-[15%] left-[15%]">
      <div className="flex items-center justify-center">
        <p className="text-center">Careers</p>
        {/* <img src={careers1} className="h-10 w-10 ml-2" /> */}
      </div>
    </div>
  </div>
</div>

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 50; // Adjust this value for how quickly you want the border to round
      const radius = Math.min(scrollTop / maxScroll * 50, 50); // Cap at 50% for a smooth transition
      setBottomRadius(`${radius}%`);
      setScrollHeading(scrollTop > 30 ? "ml-[30%]" : "ml-0");
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <>
          <div className="bg-white h-auto">

    <div className='h-[90vh] flex justify-start transition-all duration-1000 ease-in-out' style={{ borderRadius: `0 0 ${bottomRadius} ${bottomRadius}` }}>
      <div className='h-14 flex justify-center animate-pulse items-end text-[200px] rounded-full w-14 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white z-50' style={{ animationDuration: "4000ms" }}>
  <KeyboardDoubleArrowDownIcon className="animate-bounce" style={{ fontSize: "50px", animationDuration: "400ms", animationDelay: "3000ms" }} />
</div>
      {/* <div className="bg-white h-auto"> */}
        <div>
          {/* <img src={client} className="w-full h-auto" /> */}
          <img
          src={client}
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out"
          // style={{  }}
          style={{ borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`}}  // Makes the entire image slightly transparent
        />
        </div>
        {/* </div> */}
        </div>

        <div className=" flex items-center justify-center  mt-32 ">
  <h1
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-delay="100"
    data-aos-offset="100"
    className="heading2 text-black text-5xl  "
  >
    REDEFINE YOUR SUCCESS STORY WITH US
  </h1>
  </div>

  <div className="flex  w-auto gap-10 justify-center ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  {[
    { src: qualityClient, title: 'Quality', description: "We ensure top-tier quality in everything we do, every step of the way.", number: '01', bgColor: 'bg-blue-700' },
    { src: care,   title: 'Client Focus', description: 'We strive to ensure there is Quality in everything we do.', number: '02', bgColor: 'bg-green-700' },
    { src: support, title: 'Support', description: 'We strive to ensure there is Quality in everything we do.', number: '03', bgColor: 'bg-red-700' },
    { src: personnel, title: 'ExpertTeam', description: 'Our team is composed of highly skilled professionals who are passionate about delivering exceptional results.', number: '04', bgColor: 'bg-yellow-700' },
    { src: innovation, title: 'Innovation', Description: 'We embrace the future with innovative solutions that lead the industry and deliver exceptional results.', number: '05', bgColor: 'bg-purple-700' },
    { src: commitment, title: 'Commitment', Description: 'Our unwavering dedication drives us to deliver superior quality in every project.', number: '06', bgColor: 'bg-orange-700' }
  ].map((item, index) => (
    <div key={index} className="relative flex flex-col gap-2 p-4 group transition-transform duration-300 transform hover:scale-105">
      {/* Image container */}
      <img src={item.src} className="w-full h-40 object-cover rounded-lg" alt={item.title} />

      {/* Text content */}
      <div className={`absolute inset-0 flex flex-col items-start justify-center p-6 rounded-lg ${item.bgColor} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        <span className="text-3xl font-bold">{item.number}</span>
        <h1 className="text-lg font-bold mt-2">{item.title}</h1>
        <p className="text-sm mt-2">{item.description}</p>
      </div>
    </div>
  ))}
</div>

  </div>
{/* // </div> */}

<div className="flex flex-col items-center justify-center h-full p-6">
  <h1

    className="text-2xl font-bold text-black mb-8"
  >
OUR PRESTIGIOUS ASSOCIATES
  </h1>

  <div className="relative overflow-hidden w-full">
    <div
      className="flex space-x-12 animate-marquee"
    >
      <img src={intertrust} className="h-14 w-auto" alt="Intertrust" />
      <img src={suntrap} className="h-14 w-auto" alt="Suntrap" />
      <img src={ips} className="h-14 w-auto" alt="IPS" />
      <img src={hamarakendra} className="h-14 w-auto" alt="Hamarakendra" />
    </div>
  </div>
</div>

<style jsx>{`
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  
  .animate-marquee {
    animation: marquee 10s linear infinite; /* Fast scrolling */
  }

  @keyframes blink {
    0%, 50%, 100% { opacity: 0; }
    25%, 75% { opacity: 1; }
  }

  .word-blink {
    display: inline-block;
    animation: blink 3.5s step-start infinite;
  }
`}</style>


        <div className="tech-footer">
          <Footer />
        </div>
      </div>

    </>
  );
};
