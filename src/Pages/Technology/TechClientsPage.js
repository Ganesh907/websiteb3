import React from 'react'
import aboutus from "../../Assets/Images/information.png";
import devprocess from "../../Assets/Images/agile.png";
import support from "../../Assets/Images/industrysupports.png";
import technology from "../../Assets/Images/technology.png";
import hamarakendra from "../../Assets/Images/hamarakendra.png";
import ips from "../../Assets/Images/IPS_e_Services.jpg";
import suntrap from "../../Assets/Images/suntrap.83df4c98.png" ;
//  import intertrust from "../../Assets/Images/intertrust.jpg";
import credentials from "../../Assets/Images/certificate.png";
import price from "../../Assets/Images/tag.png";
// import careers1 from "../../Assets/Images/careers1.png";
import Devsoft from "../../Assets/Images/cloud-computing.png";
import client from "../../Assets/Images/client.jpg";
import Footer from "../../Components/CommonComponents/Footer";
import Aos from 'aos';
// import 'aos/dist/aos.css';

export const TechClientsPage = () => {
  return (
    <>
    <div className='bg-white h-auto'>
    <div>
    <img src={client} className='w-full h-[90vh]'/>

    </div>
 

<div className="flex justify-center items-center h-full ">
  <h1 
    data-aos="zoom-in"
    data-aos-duration="3000"
    data-aos-delay="100" // Delay before animation starts
    data-aos-offset="100" // Offset from the top of the viewport
    className="text-5xl font-bold mt-8 text-black"
  >
    Success Project Stories with Our Clients
  </h1>
</div>



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


  


  <div className="tech-footer">
        <Footer />
      </div>
      </div>
  </>
  )
}



