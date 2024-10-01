import React, { useEffect, useState,useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AboutUs4 from '../../Assets/Images/AboutUs4.jpg';
import { Button } from '@mui/material';
import Footer from '../../Components/CommonComponents/Footer';
import jobinterview from '../../Assets/Videos/jobinterview.mp4'
import HeroSection from '../../Components/CommonComponents/HeroSection';
import delivery from '../../Assets/Images/deliveryicon.png'
import clienticon from '../../Assets/Images/clienticon1.png'
import candidate from '../../Assets/Images/candidateicon.png'
import rating from '../../Assets/Images/ratingicon.png'
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


  return (
    <div className="recrHomepageMain" >

<HeroSection videoUrl={jobinterview}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className="font-bold drop-shadow-xl">
          <div className='' style={{ cursor: `url(${searchIconSvg}) 40 30, auto` }}>
          <div className="relative">
  <h1
    className=" text-[#0060b5] text-5xl font-bold drop-shadow-xl mr-2 "
    style={{ userSelect: 'none', WebkitUserSelect: 'none', MsUserSelect: 'none' }}
  >
    {"Top Talent Access".split("").map((letter, index) => (
      <span key={index} className="hover:text-white transition-opacity duration-300">
        {letter}
      </span>
    ))}
  </h1>

  <span
    className="absolute bottom-0 top-7 left-0 w-[65vh] border-b-2 my-8"
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

            <h1 className="drop-shadow-lg  text-white text-3xl my-5 font-bold  pb-4"
              style={{ userSelect: 'none', WebkitUserSelect: 'none', MsUserSelect: 'none' }}
            >
              {"Let Us Find the ".split("").map((letter, index) => (
                <span key={index} className="hover:text-[#0060b5] hover:text-[35px] transition-opacity duration-300">
                  {letter}
                </span>
              ))}


              <span> </span>

              {"Perfect Fit".split("").map((letter, index) => (
                <span key={index} className="hover:text-[#0060b5] hover:text-[35px] transition-opacity duration-300 text-yellow-500 text-3xl">
                  {letter}
                </span>
              ))}

              <span> </span>

              {"for Your Company".split("").map((letter, index) => (
                <span key={index} className="hover:text-[#0060b5]  hover:text-[35px] text-white transition-opacity duration-300">
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
                <div key={index} className="w-full font-semibold text-xl flex-shrink-0 bg-transparent text-white drop-shadow-xl">
                  <p>{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


      </HeroSection>

      <div className='h-[80vh] w-full  flex flex-col justify-center items-center'>
        <h1 className='uppercase text-xl font-bold '>for hiring</h1>
        <h1 className='text-7xl mt-10 drop-shadow-xl text-[#0060b5]'>Our Working Process</h1>
        <p className='w-[50%] my-10 text-[var(--secondary-color)] text-center'>We understand that for you, it’s never just a job. It’s your business. Thats why we Possionate about not only finding you a quality employee. But also the perfect fit.</p>
        {/* <Button variant="contained" size="large" sx={{ borderRadius: '20px', backgroundColor: 'var(--primary-color)' }}>
          Discover Jobs</Button> */}
      </div>

     




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

<h1 className=" italic text-5xl mb-8 text-center h-[10vh] text-white">
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
<div className='md:flex md:justify-evenly md:flex-row md:gap-0 gap-2 md:p-0 p-2 flex flex-col justify-center items-center'>
<div className="border rounded-[10px] border-black w-full  md:w-[22%] h-[520px] p-4 bg-[#0060b5] transform transition-all duration-500 hover:-translate-y-3 hover:shadow-lg group relative" style={{ perspective: '1000px' }}>
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
  <img src={delivery} className="w-24 h-24 object-cover border-r-[50%] rounded" />
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
<h1 className="my-2 text-white font-bold">Full End to end Delivery</h1>
<ul className="list-disc leading-loose text-white ml-4" style={{ '--tw-marker-color': 'blue' }}>
<li className="marker:text-white">Recruiters manage the entire end-to-end delivery process.</li>
<li className="marker:text-white">Standardized process ensures better candidate presentation.</li>
<li className="marker:text-white">Recruiters handle requirements gathering to candidate start date.</li>
<li className="marker:text-white">Workflow prevents information loss during translation.</li>
<li className="marker:text-white">Streamlined process ensures faster delivery.</li>
</ul>

</div>

{/* Underline at the bottom of the card */}
<div className="absolute bottom-0 left-6 w-[80%] h-1 m-2 bg-transparent group-hover:bg-white transition-all duration-500"></div>
</div>
{/* .................................. */}
<div className="border rounded-[10px] border-black md:w-[22%] h-[520px] p-4 bg-white transform transition-all duration-500 hover:-translate-y-3 hover:shadow-lg group relative" style={{ perspective: '1000px' }}>
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
  <img src={clienticon} className="w-full h-full object-cover rounded-full " />
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
<h1 className="my-2 text-black font-bold"> We assure a CLIENT to</h1>
<ul className="list-disc leading-loose text-black ml-4" style={{ '--tw-marker-color': 'blue' }}>
<li className="marker:text-blue-500">Understand their requirements in detail before taking any action.</li>
<li className="marker:text-blue-500">Deploy the right recruiters, in the right quantity, for the right duration.</li>
<li className="marker:text-blue-500">Maintain confidentiality throughout all dealings across the value chain.</li>
<li className="marker:text-blue-500">Fulfill their requirements exactly as per their expectations.</li>

</ul>

</div>

{/* Underline at the bottom of the card */}
<div className="absolute bottom-0 left-6 w-[80%] h-1 bg-transparent m-2 group-hover:bg-[#0060b5] transition-all duration-500"></div>
</div>
{/* ........................... */}

<div className="border rounded-[10px] border-black md:w-[22%] h-[520px] p-4 bg-[#0060b5] transform transition-all duration-500 hover:-translate-y-3 hover:shadow-lg group relative" style={{ perspective: '1000px' }}>
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
  <img src={candidate} className="w-24 h-24 object-cover  rounded-full " />
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
<h1 className="my-2  font-bold text-white"> We assure a CANDIDATE to</h1>
<ul className="list-disc leading-loose  ml-4 text-white" style={{ '--tw-marker-color': 'blue' }}>
<li className="marker:text-white">Recruiters manage the entire end-to-end delivery process.</li>
<li className="marker:text-white">Standardized process ensures better candidate presentation.</li>
<li className="marker:text-white">Recruiters handle requirements gathering to candidate start date.</li>
<li className="marker:text-white">Workflow prevents information loss during translation.</li>
<li className="marker:text-white">Streamlined process ensures faster delivery.</li>
</ul>
</div>

{/* Underline at the bottom of the card */}
<div className="absolute bottom-0 left-6 w-[80%] h-1 m-2 bg-transparent group-hover:bg-white transition-all duration-500"></div>
</div>



{/* ................ */}

<div className="border rounded-[10px] border-black md:w-[22%] h-[520px] p-4 bg-white transform transition-all duration-500 hover:-translate-y-3 hover:shadow-lg group relative" style={{ perspective: '1000px' }}>
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
  <img src={rating} className="w-24 h-24 object-cover bg-[#0060b5] rounded-full p-3" />
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
<h1 className="my-2 text-black font-bold">Competitive Rates & Delivery</h1>
<ul className="list-disc leading-loose text-black ml-4" style={{ '--tw-marker-color': 'blue' }}>
<li className="marker:text-blue-500">We are a delivery-based TECHNOLOGY and HR solutions startup that goes the extra mile.</li>
<li className="marker:text-blue-500">Known for fast and accurate delivery without compromising quality standards.</li>
<li className="marker:text-blue-500">At BitByBit, we offer the best industry rates, ensuring cost-effectiveness.</li>
<li className="marker:text-blue-500">Committed to building long-term relationships with our clients.</li>
{/* <li className="marker:text-blue-500">Recognized as one of the best value-for-money TECHNOLOGY and HR agencies in a short span.</li> */}
</ul>

</div>

{/* Underline at the bottom of the card */}
<div className="absolute bottom-0 left-6 w-[80%] h-1 m-1 bg-transparent group-hover:bg-blue-500 transition-all duration-500"></div>
</div>
</div>




</div>

<p className='text-lg italic text-white text-[var(--primary-color)] text-center m-5 underline pb-2' style={{ textDecorationSkip: 'ink', textDecorationThickness: '0.1em', textDecorationColor: 'currentColor', textUnderlineOffset: '0.4em' }}>
          “At BitByBit, it’s all about YOU! Whether you’re hunting for a new full-time role or just need a temp role, our recruiters are here to help you out.”
        </p>
{/* .......................... */}
      <div className='recr-footer'>
        <Footer /></div>


    </div>

  );


}



export default RecHomePage;