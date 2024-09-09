import React from 'react'
import aboutus from "../../Assets/Images/information.png";
import devprocess from "../../Assets/Images/agile.png";
import support from "../../Assets/Images/industrysupports.png";
import technology from "../../Assets/Images/technology.png";
import hamarakendra from "../../Assets/Images/hamarakendra.png";
import ips from "../../Assets/Images/IPS_e_Services.jpg";
import suntrap from "../../Assets/Images/suntrap.83df4c98.png" ;
//  import download from "../../Assets/Images/download(2)";
import credentials from "../../Assets/Images/certificate.png";
import price from "../../Assets/Images/tag.png";
import careers1 from "../../Assets/Images/careers1.png";
import Devsoft from "../../Assets/Images/cloud-computing.png";
import client from "../../Assets/Images/client.jpg";
import Footer from "../../Components/CommonComponents/Footer";

export const TechClientsPage = () => {
  return (
    <>
    <div>
    <img src={client} className='w-full h-[90vh]'/>

    </div>
    <div className="flex justify-center items-center h-full">
  {/* <h1 className="font-bold mt-8 text-5xl">Success <span className="hover:text-blue-800">Project</span> stories with <span className="hover:text-blue-800">Our</span> clients</h1> */}
   <h1 className="text-4xl font-bold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-blue-700 animate-shine">
   Success <span className="hover:text-blue-300">Project</span> Stories with Our Clients
 </h1>

   </div>
    <div className=" relative justify-center max-h-screen mt-40 flex flex-col items-center  w-[100%] bg-white gap-10 pb-40">
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

    <div className="absolute flex items-center justify-center bg-white">
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
  </div>

  
   <div className=" flex flex-row w-full h-[70vh] gap-4 mt-4">
    <img src={hamarakendra} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" />

   <img src={ips} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" />

   <img src={suntrap} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" />

   {/* <img src={download} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" /> */}

   

   </div>
  
  <div className="tech-footer">
        <Footer />
      </div>
  </>
  )
}

// import React from "react";
// import Client from "../../Assets/Images/client.jpg";
// import Footer from "../../Components/CommonComponents/Footer";
// import hamarakendra from "../../Assets/Images/hamarakendra.png";
// import ips from "../../Assets/Images/IPS_e_Services.jpg";

// export const TechClientsPage = () => {
//   return (
//     <>
//     <div className="bg-[#0060b5]">
//       <div
//         className="h-[80vh] w-full  opacity-40"
//         style={{
//           backgroundImage: `url(${Client})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       ></div>

//     </div>
//     <div className="flex justify-center items-center h-full">
//   {/* <h1 className="font-bold mt-8 text-5xl">Success <span className="hover:text-blue-800">Project</span> stories with <span className="hover:text-blue-800">Our</span> clients</h1> */}
//    <h1 className="text-4xl font-bold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-blue-700 animate-shine">
//    Success <span className="hover:text-blue-300">Project</span> Stories with Our Clients
//   </h1>

//    </div>

//    <div className=" flex flex-row w-full h-[70vh] gap-4 mt-4">
//    <img src={hamarakendra} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" />

//    <img src={ips} className=" h-40 w-30 ml-6 shadow-2xl rounded-sm" />
   

//    </div>

   

  //  <div className="tech-footer">
  //      <Footer /> 
  //     </div> 
  

