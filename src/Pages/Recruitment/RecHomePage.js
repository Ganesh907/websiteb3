import React, { useEffect, useState } from 'react';
// import '../../pages/Recruitment/Recruitment.scss';
// import Footer from '../../components/Footer/footer';
// import Header from '../../components/Header/header';
// import Canvas from '../../shared/Canvas';
// import $ from 'jquery';
// import RecruitmentSplitCard from '../../pages/Recruitment/RecruitmentSplitCard';
// import staff from '../../assets/images/staff.png';
// import PremanentPlacement from '../../assets/images/erp-development.png';
// import PremanentPlacement from '../../assets/images/premanent.png';
// import webdevelopment from '../../../assets/images/webdevelopment.png';
// import webdevelopment from '../../assets/images/contract-to-hire.png';
import AboutUs4 from '../../Assets/Images/AboutUs4.jpg';
import RecruitmentHomeBg from '../../Assets/Images/RecruitmentHomeBg.jpg';
// import RecruitmentHomeBg from '../../assets/images/RecruitmentHomeBg.jpg';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import { Button } from '@mui/material';
import { Padding } from '@mui/icons-material';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import TypingText from '../../Components/CommonComponents/TypingText';

// var target = $('canvas');
// var targetHeight = target.outerHeight();

// $(window).on("load scroll", function () {
//     var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
//     if (scrollPercent >= 0) {
//         target.css('opacity', 0.8);
//     }
// });



const RecHomePage = () => {

  const [bottomRadius, setBottomRadius] = useState('0%');
  const [scrollHeading, setScrollHeading] = useState("");

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



  const [currentIndex, setCurrentIndex] = useState(0);

  const quotes = [
    " Elevate your career with our platform, Where opportunities meet ambition. Explore endless job possibilities, And find the perfect role for you.",
    "Your dream job is closer than you think, With tailored matches and expert guidance. Discover roles that align with your goals, And take the next step in your career.",
    "Navigate your career journey with ease, Connect with top recruiters and opportunities. Find roles that match your skills and passions, And unlock the path to your professional success.",
    "Your next career adventure starts here, With personalized job matches and support. Discover roles that align with your aspirations, And step into a role that suits your skills."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000); // Change quote every 3 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);


  return (
    <div className="recrHomepageMain" >
      {/* <Header ></Header> */}




      <div className='h-[100vh] flex justify-start bg-[#0060b5]' style={{ borderRadius: `0 0 ${bottomRadius} ${bottomRadius}` }}>
        <div className='h-14 flex justify-center animate-pulse  items-end text-[200px] rounded-full  w-14 absolute bottom-0 left-[50%] text-white z-50 ' style={{ animationDuration: "4000ms" }}>
          <KeyboardDoubleArrowDownIcon className="animate-bounce" style={{ fontSize: "50px", animationDuration: "400ms",animationDelay:"3000ms" }} />
        </div>


      

        <div className={`z-10 w-[50vw] h-[100vh] flex justify-end transition-all duration-300 ${scrollHeading} items-end`}  style={{ transition: 'margin-left 1s ease-in-out' }} >
          <div className=" w-full font-bold mx-10  my-20 drop-shadow-xl">
            <div className=" flex items-center">
              <h1 className="text-[#0060b5] text-5xl font-bold  mr-2 ">
                Find Your Job
              </h1>
              <SearchIcon className="text-black bg-white scale-75" sx={{ fontSize: '60px' }} />
            </div>



            <div className=" flex items-center">
              <h1 className="drop-shadow-lg text-white text-5xl my-10 font-bold border-b-8 border-[#0060b5] pb-1">
                Build Your <TypingText word="CAREER"/>
              </h1>
              
              {/* <h1 className="drop-shadow-lg text-white text-6xl my-10 font-bold pb-2 mr-3 relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-2 before:bg-[#0060b5] before:w-0 before:transition-all before:duration-500 hover:before:w-full">
  Build Your Career
</h1> */}

              <TrendingUpOutlinedIcon className="text-yellow-300 animate-pulse" sx={{ fontSize: '70px' }} />
            </div>

            <div className="relative w-full h-32 overflow-hidden">
              <div
                className="absolute w-full h-full flex transition-transform duration-1000"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {quotes.map((quote, index) => (
                  <div key={index} className="w-full flex-shrink-0  bg-transparent text-white drop-shadow-xl">
                    <p>{quote}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* <img
                    src={RecruitmentHomeBg}
                    className="absolute top-10 left-0 w-full h-full object-cover"
                />
                <div
                    className="absolute top-10 left-0 w-full h-full"
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%)',
                        filter: 'blur(5px)',
                        pointerEvents: 'none',
                    }}
                ></div> */}






        <img
          src={RecruitmentHomeBg}
          className="absolute top-0 left-0 w-full h-full object-cover"
          // style={{  }}
          style={{ borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`}}  // Makes the entire image slightly transparent
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundColor: 'rgba(0, 96, 181, 0.5)',
            borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`
            // Transparent blue overlay
          }}
        ></div>
        <div
          className="absolute top-0 -left-2 w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%)',
            borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`,
            filter: 'blur(5px)',
            pointerEvents: 'none',
          }}
        ></div>

      </div>









      <div className='h-[100vh] w-full  flex flex-col justify-center items-center'>
        <h1 className='uppercase text-xl font-bold'>for Job seekers</h1>
        <h1 className='text-7xl mt-10 drop-shadow-xl' data-aos="zoom-in" data-aos-duration="1000">Our Seeking Process</h1>
        <p className='w-[50%] my-10'>Find jobs by checking job vacancy and recruitment websites, social media, professional and industry journals, and by going to career expos or promoting yourself at industry networking events.</p>
        <Button variant="contained" size="large" sx={{ borderRadius: '20px' }}>
          Discover Jobs</Button>
      </div>


      <div className='bg-red-200 '>

        <div className="third-section">
          <div className="row">
            <h2>Related Services</h2>
            <div className="icon-card__container small-12">
              <div className="small-12 medium-4 columns icon-card icon-card--large">
                <div className="card-content">
                  <div className="icon-border-bottom">
                    <img src={AboutUs4} alt="" className='h-36 w-36'></img>
                    <div className="icon-card__description">
                      <h4 className="icon-card__title icon-card__title--expanded">
                        Permanent Placement
                      </h4>
                      <p className="small text-center">We help organisations hire expert full-time talent for middle,
                        senior and top level positions across diverse sectors.
                      </p>


                    </div>
                  </div>
                </div>
              </div>
              <div className="small-12 medium-4 columns icon-card icon-card--large">
                <div className="card-content-blue">
                  <div className="icon-border-bottom">
                    <img src={AboutUs4} alt="" className='h-36 w-36'></img>
                    <div className="icon-card__description">
                      <h4 className="icon-card__title icon-card__title--expanded">
                        Staffing Solutions

                      </h4>
                      <p className="small text-center">Building an agile and flexible workforce requires an easy and fast
                        access to expert talent, available on short notice. We offer a pool of pre-screened
                        talent, hired on our rolls.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="small-12 medium-4 columns icon-card icon-card--large">
                <div className="card-content">
                  <div className="icon-border-bottom">
                    <img src={AboutUs4} alt="" className='h-36 w-36'></img>
                    <div className="icon-card__description">
                      <h4 className="icon-card__title icon-card__title--expanded">
                        Contract to Hire
                      </h4>
                      <p className="small text-center">Our Temp-to-Hire services allow organisations the opportunity to
                        evaluate a candidate over a period of time before on-boarding the candidate at the end of the
                        contract period.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 
            <div className='recr-footer'>
                <Footer /></div> */}
    </div>

  );


}



export default RecHomePage;