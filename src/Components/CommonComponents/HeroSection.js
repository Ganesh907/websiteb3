import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'; // Ensure you have @mui/icons-material installed

const HeroSection = ({ videoUrl,videoOpacity,MarginAnimtion,children}) => {
        const [bottomRadius, setBottomRadius] = useState('0%');
        const [scrollHeading, setScrollHeading] = useState("");

        useEffect(() => {
                const handleScroll = () => {
                        const scrollTop = window.scrollY;
                        const maxScroll = 50; // Adjust this value for how quickly you want the border to round
                        const radius = Math.min(scrollTop / maxScroll * 50, 50); // Cap at 50% for a smooth transition
                        setBottomRadius(`${radius}%`);
                        if(MarginAnimtion){

                                setScrollHeading(scrollTop > 30 ? "ml-[30%]" : "ml-0");
                        }
                        else{
                                setScrollHeading("ml-0")   ;
                        }
                       
                };

                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
        }, []);


        return (
                <div
                        className="relative flex h-screen w-full shadow-xl bg-black transition-all duration-1000 ease-in-out"
                        style={{ borderRadius: `0 0 ${bottomRadius} ${bottomRadius}` }}
                >
                          <div className={`absolute z-20 
                        transition-all duration-300 ${scrollHeading} items-end `}  style={{ transition: 'margin-left 1s ease-in-out' }} >
                                {children}
                        </div>

                        <video
                                autoPlay
                                loop
                                muted
                                className={`absolute inset-0 w-full h-full object-cover opacity-${videoOpacity} transition-all duration-1000 ease-in-out`}
                                style={{ borderRadius: `0 0 ${bottomRadius} ${bottomRadius}` }}
                        >
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                        </video>
                        <div
                                className="absolute bottom-0 left-1/2 flex justify-center items-end transform -translate-x-1/2 w-14 h-14 text-[200px] text-white z-50 rounded-full animate-pulse"
                                style={{ animationDuration: "4000ms" }}
                        >
                                <KeyboardDoubleArrowDownIcon
                                        className="animate-bounce"
                                        style={{ fontSize: "50px", animationDuration: "400ms", animationDelay: "3000ms" }}
                                />
                        </div>
                      
                </div>
        );
};

// VideoBackgroundSection.propTypes = {
//   videoUrl: PropTypes.string.isRequired,
//   content: PropTypes.node.isRequired,
// };

export default HeroSection;
