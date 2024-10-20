
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import HeroSection from "../Components/CommonComponents/HeroSection";
import AboutUsBgVideo from '../Assets/Videos/AboutUsBgVideo.mp4';
import mission from "../Assets/Images/mission.gif";
import vision from "../Assets/Images/vision.gif";
import Corevalues from "../Components/About us/Corevalues"; 
import MissionVisionGif from "../Assets/Images/MissionVisionGif.gif"
import TypingText from "../Components/CommonComponents/TypingText";
import B3Banner from "../Assets/Images/B3Banner.jpg"
import B3Img from "../Assets/Images/1690.jpg"
import ContactUSImg4 from "../Assets/Images/ContactUSImg4.jpg"

const AboutUsPage = () => {
 

  const content = [
    {
      heading: "Turning Ideas Into Digital Solutions",
      paragraph: [
      
// "BitByBit Solutions is a dynamic and rapidly growing technology startup based in Mumbai, India’s commercial hub.",
// "Since our inception in 2018, we’ve specialized in delivering high-quality IT solutions to esteemed clients across India and the Indo-Pacific region.",
// "Our expertise spans custom software development, data management, and digital transformation.",
// "We are driven by a young and passionate team with diverse experience across multiple industries, enabling us to craft innovative solutions that meet the unique needs of each client.",

        "From seamless software development to advanced data management, we deliver tech that works for you efficiently and effortlessly.",
        "We bring your vision to life with IT solutions designed to drive results and keep you ahead in the digital world."
      ]
    },
    {
      heading: "Connecting Talent, Building Careers",
      paragraph: [
        "Whether you’re looking to hire or find your next job, we’ve got the network and know-how to make it happen",
        "We match the right people with the right opportunities.",
        // "Let’s build your dream team or career together."
      ]
    }
  ];
  const highlightWords = ["Idea", "Talent", "Career"];

  const highlightText = (text) => {
    return text.split(" ").map((word, index) => {
      const lowerCaseWord = word.toLowerCase();
      const highlighted = highlightWords.some((highlight) =>
        lowerCaseWord.includes(highlight.toLowerCase())
      );

      return (
        <span key={index} className={highlighted ? "text-yellow-400" : "text-white"}>
          {word}{" "}
        </span>
      );
    });
  };

  const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  const [value, setValue] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <div>
    
      <HeroSection videoUrl={AboutUsBgVideo} videoOpacity={20} MarginAnimtion={true}>
        <div className='lg:w-[50vw] w-[90vw] flex justify-end items-end'>
          <div className="relative w-full md:h-80 h-96  overflow-hidden mr-2 cursor-pointer mb-16">
            <h1 className="text-[#0060b5] text-3xl lg:text-5xl font-bold drop-shadow-xl">
              Who We Are
              <span
                className="absolute bottom-0 top-4 left-0 lg:w-[45vh]  w-[90vw] lg:border-b-2 border-b-4 my-9"
                style={{
                  borderImage: "linear-gradient(to right, yellow, white, blue, black) 1",
                  animation: "gradientShift 6s infinite",
                }}
              ></span>
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
              className="absolute w-full h-full flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {content.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 bg-transparent font-bold  pl-2 text-white drop-shadow-xl">
                  <h3 className="mt-10 md:mt-4 md:text-2xl text-xl font-semibold inline-block pb-1 my-4">
                    {highlightText(item.heading)}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-xl">
                    {item.paragraph.map((point, idx) => (
                      <li key={idx} className="text-white font-semibold text-xl drop-shadow-xl">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HeroSection>
 {/* <div className="relative h-[78vh] my-10 flex pb-2  justify-end items-center px-10">
  <div
    className="absolute inset-0 bg-black opacity-20 "
    style={{
      backgroundImage: `url(${B3Banner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      zIndex: '-1', 
    }}
  />
  <div className="h-[40vh] w-[82vw] m-10">
<img src={B3Img} alt="" className="rounded-lg shadow-2xl shadow-black"/>
  </div>
  
  <div className="relative z-2  flex flex-col border-l-2 border-white rounded-lg justify-center italic items-center drop-shadow-lg text-lg p-5 "
  style={{backgroundColor:"rgb(0,0,0,0.8)"}}>
    <h1 className="w-[50%] text-5xl drop-shadow-lg text-center mb-10  font-bold text-[#0060b5] pb-2 border-b-2 border-white "
    data-aos="fade-up" data-aos-duration="3000" 
    >Discover <span className="text-white">B3</span></h1>
  <p>

    "BitByBit Solutions is a dynamic and rapidly growing technology startup based in Mumbai, India’s commercial hub. Since our inception in 2018, we’ve specialized in delivering high-quality IT solutions to esteemed clients across India and the Indo-Pacific region.<br/><br/>
Our expertise spans custom software development, data management, and digital transformation. We are driven by a young and passionate team with diverse experience across multiple industries, enabling us to craft innovative solutions that meet the unique needs of each client.<br/><br/>
At BitByBit Solutions, we’re committed to excellence, ensuring that every project we deliver helps businesses streamline operations, enhance efficiency, and achieve their digital goals.” 

    </p>
  </div>
</div>  */}



<div className="lg:h-[100vh] w-full flex md:flex-row flex-col px-5 md:px-0 justify-between">
<div className="md:h-full  md:w-[45%] flex flex-col justify-center md:justify-start z-2 items-start  " 
  data-aos={window.innerWidth <= 768 ? "fade-up" : "fade-left"}
 data-aos-duration="3000" 
>
  <div className="flex flex-col justify-between items-center  w-full p-5"
  >
    <img src={mission} className="h-28 w-28 p-1  border-4 rounded-full border-[#0060b5] transition-all ease-in-out duration-600" />
    <div>

      <div className="text-center text-2xl text-[#0060b5] font-bold mt-10">
        OUR
        <TypingText word=" MISSION"/>
      
      </div>
      <h2 className="mt-4 rounded-2xl  p-3  text-[var(--secondary-color)] drop-shadow-xl border-b-0 italic border-t-4  border-[#0060b5]  "
       style={{backgroundColor:'rgb(0,0,0,0.3)'}}>
        {
          "We strive to provide a tailored, end to end services to our clients and establishing strong partnerships to ensure we understand each others goals and deadlines, without compromising our professional and ethical standards."
        }
      </h2>
    </div>
  </div>
</div>


<div className="flex justify-center md:w-[40%] items-center"
 data-aos="zoom-in" data-aos-duration="3000" >
  <img src={MissionVisionGif} alt="" className="md:scale-150 "/>
</div>

<div className="md:h-full md:w-[45%]  flex flex-col justify-end z-2   items-end  "
  data-aos={window.innerWidth <= 768 ? "fade-up" : "fade-right"}
 data-aos-duration="3000" 
>
  <div className="flex flex-col  justify-between items-center  w-full p-5">
    
    <img src={vision}className="h-28 w-28 p-1  border-4 rounded-full border-[#0060b5]"  />
    <div>
      <h1 className="text-center text-2xl mt-10 text-[#0060b5] font-bold">
        OUR   <TypingText word=" VISION"/>
      </h1>
      <h2 className="mt-4 rounded-2xl  p-3 drop-shadow-xl  border-t-4 italic  border-[#0060b5] "
       style={{backgroundColor:'rgb(0,0,0,0.3)'}}>
        {
          "To build trust by establishing a winning value chain system based on the ever changing surroundings, with the utmost focus on transforming lives and providing solutions."
        }
      </h2>
    </div>
  </div>
</div>
</div>

<Corevalues/>

    </div>
  );
};

export default AboutUsPage;
