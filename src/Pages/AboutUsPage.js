import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Footer from "../Components/CommonComponents/Footer";
import HeroSection from "../Components/CommonComponents/HeroSection";
import AboutUsBgVideo from '../Assets/Videos/AboutUsBgVideo.mp4';
import Overview from "../Components/About us/Overview";
import Mission from "../Components/About us/Mission";
import Vission from "../Components/About us/Vission";
import Corevalues from "../Components/About us/Corevalues";
import Partner from "../Components/About us/Partner";
import Family from "../Components/About us/Family";
import Candidate from "../Components/About us/Candidate";

const AboutUsPage = () => {
  const textStyle = {
    background: 'linear-gradient(to bottom, var(--primary-color) 50%, var(--secondary-color) 50%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textTransform: "uppercase",
    fontFamily: "cursive",
    textAlign: "center",
    fontSize: "50px",
    letterSpacing: "1px",
  };

  const content = [
    {
      heading: "Transforming Ideas Into Digital Solutions",
      paragraph: [
        "From seamless software development to advanced data management, we deliver tech that works for you efficiently and effortlessly.",
        "We turn your vision into reality with custom IT solutions that drive business growth."
      ]
    },
    {
      heading: "Talent Finders, Career Builders",
      paragraph: [
        "Whether you're hiring or job hunting, our network and expertise make it happen.",
        "We connect the right people with the right opportunities.",
        "Let’s build your dream team or career together."
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
        <div className='w-[50vw] flex justify-end items-end'>
          <div className="relative w-full h-52 overflow-hidden mr-2 cursor-pointer mb-16">
            <h1 className="text-[#0060b5] text-5xl font-bold drop-shadow-xl">
              Who We Are
              <span
                className="absolute bottom-0 top-4 left-0 w-[45vh] border-b-2 my-9"
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
                <div key={index} className="w-full flex-shrink-0 bg-transparent font-bold text-3xl pl-2 text-white drop-shadow-xl">
                  <h3 className="text-2xl font-semibold inline-block pb-1 my-4">
                    {highlightText(item.heading)}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
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

      <section className=" h-auto min-h-screen">
  <h1 className="text-yellow-400 h-[10vh] text-5xl font-bold text-center pt-10 mb-6">About B3</h1>
  
  <Box sx={{ width: '100%' ,height:'90vh'}} className="flex flex-col justify-start items-center">
    <Box sx={{ borderBottom: 2,paddingBottom:'3px', borderColor: 'white',width:'100vw', }} className=" w-full max-w-4xl">
      <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="basic tabs example" 
        className="flex justify-center"
        TabIndicatorProps={{ sx: { backgroundColor: '#3b82f6' } }} // Custom indicator color
      >
        <Tab 
          label="Overview" 
          {...a11yProps(0)} 
          className={`tabStyle ${value === 0 ? 'tabActive' : ''}`} 
        />
        <Tab 
          label="Mission" 
          {...a11yProps(1)} 
          className={`tabStyle ${value === 1 ? 'tabActive' : ''}`} 
        />
        <Tab 
          label="Vision" 
          {...a11yProps(2)} 
          className={`tabStyle ${value === 2 ? 'tabActive' : ''}`} 
        />
        <Tab 
          label="Core Values" 
          {...a11yProps(3)} 
          className={`tabStyle ${value === 3 ? 'tabActive' : ''}`} 
        />
        <Tab 
          label="Candidate" 
          {...a11yProps(4)} 
          className={`tabStyle ${value === 4 ? 'tabActive' : ''}`} 
        />
        <Tab 
          label="Partner" 
          {...a11yProps(5)} 
          className={`tabStyle ${value === 5 ? 'tabActive' : ''}`} 
        />
        <Tab 
          label="B3 Family" 
          {...a11yProps(6)} 
          className={`tabStyle ${value === 6 ? 'tabActive' : ''}`} 
        />
      </Tabs>
    </Box>

    {/* Tab Content Panels */}
    <CustomTabPanel value={value} index={0}>
      <Overview />
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1} className="text-blue-600">
      <Mission />
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2} className="text-blue-600">
      <Vission/>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={3} className="text-blue-600">
      <Corevalues/>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={4} className="text-blue-600">
      <Candidate />
    </CustomTabPanel>
    <CustomTabPanel value={value} index={5} className="text-blue-600">
      <Partner />
    </CustomTabPanel>
    <CustomTabPanel value={value} index={6} className="text-blue-600">
      <Family />
    </CustomTabPanel>
  </Box>

  <style jsx>{`
  .tabStyle {
    font-size: 1.125rem; /* text-lg */
    font-weight: 500; /* font-medium */
    color: white;
  }

  .tabStyle.tabActive {
    color: #facc15 !important;
    border-bottom: 2px solid #2563eb !important;
    // background-color: white !important;
  }
`}</style>
</section>


      <Footer />
    </div>
  );
};

export default AboutUsPage;
