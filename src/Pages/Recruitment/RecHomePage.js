import React, { useEffect, useState,useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AboutUs4 from '../../Assets/Images/AboutUs4.jpg';
import { Button } from '@mui/material';
import Footer from '../../Components/CommonComponents/Footer';
import jobinterview from '../../Assets/Videos/jobinterview.mp4'
import HeroSection from '../../Components/CommonComponents/HeroSection';

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
                <span key={index} className="hover:text-white hover:text-[35px] transition-opacity duration-300">
                  {letter}
                </span>
              ))}


              <span> </span>

              {"Perfect Fit".split("").map((letter, index) => (
                <span key={index} className="hover:text-[#0060b5] hover:text-[30px] transition-opacity duration-300 text-yellow-500 text-3xl">
                  {letter}
                </span>
              ))}

              <span> </span>

              {"for Your Company".split("").map((letter, index) => (
                <span key={index} className="hover:text-white hover:text-[30px] text-white transition-opacity duration-300">
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
        <h1 className='uppercase text-xl font-bold text-[var(--secondary-color)]'>for hiring</h1>
        <h1 className='text-7xl mt-10 drop-shadow-xl text-[var(--primary-color)]'>Our Working Process</h1>
        <p className='w-[50%] my-10 text-[var(--secondary-color)] text-center'>We understand that for you, it’s never just a job. It’s your business. Thats why we Possionate about not only finding you a quality employee. But also the perfect fit.</p>
        <Button variant="contained" size="large" sx={{ borderRadius: '20px', backgroundColor: 'var(--primary-color)' }}>
          Discover Jobs</Button>
      </div>

      <h2 className='text-center text-5xl font-semibold mt-10  text-[var(--primary-color)]'>Related Services</h2>
      <div className='my-10  flex justify-around'
      >
        <div className="sm:w-[20vw] border-2 shadow-md  border-white p-5 hover:translate-x-2 hover:shadow-lg rounded-lg" data-aos="zoom-in" data-aos-duration="700">

          <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
            <img src={AboutUs4} alt="" />
          </div>
          <div className="h-[50%] ">
            <h1 className="font-bold text-center my-2 text-xl text-[var(--primary-color)]"> Permanent Placement</h1>
            <p className='text-[var(--secondary-color)]'>  We help organisations hire expert full-time talent for middle,
              senior and top level positions across diverse sectors.</p>

          </div>
        </div>

        <div className="sm:w-[20vw] border-2 border-white shadow-md p-5 hover:translate-x-2 hover:shadow-lg rounded-lg" data-aos="zoom-in" data-aos-duration="700">

          <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
            <img src={AboutUs4} alt="" />
          </div>
          <div className="h-[50%] ">
            <h1 className="font-bold text-center my-2 text-xl text-[var(--primary-color)]"> Staffing Solutions</h1>
            <p className='text-[var(--secondary-color)]'>  Building an agile and flexible workforce requires an easy and fast
              access to expert talent, available on short notice. We offer a pool of pre-screened
              talent, hired on our rolls</p>

          </div>
        </div>
        <div className="sm:w-[20vw] border-2 border-white p-5 shadow-md hover:translate-x-2 hover:shadow-lg rounded-lg" data-aos="zoom-in" data-aos-duration="700">

          <div className="p-10 h-[50%] w-[80%] m-auto sm:w-auto">
            <img src={AboutUs4} alt="" />
          </div>
          <div className="h-[50%] ">
            <h1 className="font-bold text-center my-2 text-xl text-[var(--primary-color)]">Contract to Hire</h1>
            <p className='text-[var(--secondary-color)]'>  Our Temp-to-Hire services allow organisations the opportunity to
              evaluate a candidate over a period of time before on-boarding the candidate at the end of the
              contract period.</p>

          </div>
        </div>
      </div>




      <ul className='list-disc grid grid-cols-2 p-10 gap-3 '>
        <li>In a 24/7 economy, corporations have different needs.</li>
        <li>The way they work is changing and this also influences the skills and talent they need.</li>
        <li>Digital HR, new solutions, and tools are disrupting our market by drastically changing the way people connect to jobs and the role BitByBit plays in this space.</li>
        <li>Our approach embraces continuous innovation to stay ahead in a rapidly evolving job market, ensuring we meet emerging demands with agility and expertise.</li>
        <li>We have a team of young but highly knowledgeable and highly experienced professionals, which are well equipped to offer our clients the best HR solutions in the form of customized delivery.</li>
        <li>Clients and candidates expect to be served anywhere anytime and through various devices, in a way we never imagined it was possible earlier, ultimately influencing the way we work for our clients.</li>
      </ul>


      <div className='my-10 '>

<h1 className="font-bold text-xl text-center mt-10 text-[var(--primary-color)]" >
  B3 EXPERTISE IN IT RECRUITMENT
</h1>


<marquee
  className="w-full  p-5 text-black"
  behavior="scroll"
  direction="left"
  scrollamount="10"
  ref={marqueeRef}
  onMouseEnter={handleMouseEnter1}
  onMouseLeave={handleMouseLeave1}
>
  {jobRoles.map((role, index) => (
    <span key={index} className="inline-flex items-center mx-4 rounded-lg bg-white text-black drop-shadow-lg  border-2 border-[var(--primary-color)] p-3">
      {role}
      <ArrowBackIcon className="ml-2 text-[var(--primary-color)]" />
    </span>
  ))}
</marquee>


{/* <h1 className="font-bold text-xl text-center mt-10  uppercase text-[var(--primary-color)]">
  B3 Expertise into Contract Hiring
</h1>


<marquee
  className="w-full p-10 text-black"
  behavior="scroll"
  direction="right"
  scrollamount="10"
  ref={marqueeRef2}
  onMouseEnter={handleMouseEnter2}
  onMouseLeave={handleMouseLeave2}
>
  {jobRoles2.map((role, index) => (
    <span key={index} className="inline-flex items-center mx-4 rounded-lg bg-white drop-shadow-lg  text-black border-2 border-[var(--primary-color)] p-3">
      {role}
      <ArrowForwardIcon className="ml-2  text-[var(--primary-color)]" />
    </span>
  ))}
</marquee> */}
</div>

      <div className='recr-footer'>
        <Footer /></div>


    </div>

  );


}



export default RecHomePage;