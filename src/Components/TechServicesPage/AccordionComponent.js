import React, { useState, useEffect } from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AlbumIcon from '@mui/icons-material/Album';
import BusinessIcon from '@mui/icons-material/Business';
import { TechHomeData1 } from '../../utils/TechHomeData'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Import the icon from Material-UI


// TypingEffect component
const TypingEffect = ({ text = '', typingSpeed = 50, isOpen = false }) => {
        const [displayedText, setDisplayedText] = useState('');

        useEffect(() => {
                // Reset displayedText if accordion is not open or text is invalid
                if (!isOpen || typeof text !== 'string') {
                        setDisplayedText('');
                        return;
                }

                let currentCharIndex = 0; // Initialize character index
                const interval = setInterval(() => {
                        // Append character if index is within bounds
                        if (currentCharIndex < text.length) {
                                setDisplayedText((prev) => prev + text.charAt(currentCharIndex));
                                currentCharIndex++;
                        } else {
                                clearInterval(interval); // Stop when all characters are typed
                        }
                }, typingSpeed);

                return () => clearInterval(interval); // Cleanup on component unmount or text change
        }, [isOpen, text, typingSpeed]);

        return (
                <div className='flex'>
                        {/* Conditionally render the icon after the first character has been typed */}
                        <div>
                        {displayedText.length > 1 && (
                                <AlbumIcon style={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '15px' }} />
                        )}
                                </div>
                        <h1>{displayedText}
                                </h1>
                       
                        
                </div>
        );
};


export default function CustomAccordion() {


        const [expanded, setExpanded] = useState(null);

        // Mouse handlers
        const handleMouseEnter = (index) => setExpanded(index);
        const handleMouseLeave = () => setExpanded(null);

        return (
                <div className="py-32" >
                        {/* <h2 className="text-center text-3xl text-white font-bold mb-6"> */}
                        <h1 className="text-center md:text-center text-white text-5xl italic md:mt-10 md:mb-20">
                                Industry-Focused Innovation</h1>
                        {/* </h2> */}
                        <div className="flex flex-wrap justify-center ">
                                {/* Left Side Sections */}
                                <div className="w-full md:w-1/2 flex flex-col gap-y-10 p-5 ">
                                        {TechHomeData1.slice(0, 2).map((item, index) => (
                                                <AccordionItem
                                                        key={index}
                                                        item={item}
                                                        index={index}
                                                        expanded={expanded}
                                                        handleMouseEnter={handleMouseEnter}
                                                        handleMouseLeave={handleMouseLeave}
                                                />
                                        ))}
                                </div>

                                {/* Right Side Sections */}
                                <div className="w-full md:w-1/2 flex flex-col gap-y-10 p-5">
                                        {TechHomeData1.slice(2).map((item, index) => (
                                                <AccordionItem
                                                        key={index}
                                                        item={item}
                                                        index={index + 2}
                                                        expanded={expanded}
                                                        handleMouseEnter={handleMouseEnter}
                                                        handleMouseLeave={handleMouseLeave}
                                                />
                                        ))}
                                </div>
                        </div>
                </div>
        );
}

// Accordion Item Component
const AccordionItem = ({ item, index, expanded, handleMouseEnter, handleMouseLeave }) => {
        const [startTyping, setStartTyping] = useState(false);

        useEffect(() => {
                // Trigger the typing effect 1 second after expansion
                if (expanded === index) {
                        const timer = setTimeout(() => {
                                setStartTyping(true);
                        }, 400); // 1 second

                        return () => clearTimeout(timer); // Cleanup on unmount or when expanded changes
                } else {
                        setStartTyping(false); // Reset typing when not expanded
                }
        }, [expanded, index]);

        return (
                <div
                        className={` bg-[#1a1a1a] border-[#0060b5] hover:border-[#00bfff] hover:border-2  border-2 text-red-200   transition-all duration-700 ease-in-out p-4  cursor-pointer ${expanded === index ? 'md:h-64 h-80' : 'h-20'}`}
                        //     style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                >
                        <div className="flex items-center text-white">
                                <item.icon className="mr-2 text-[#008bff] " style={{ fontSize: '50px' }} />
                                <span className="font-bold text-md md:text-2xl text-[#00bfff]">{item.title}</span>
                                {
                                        expanded === index ? 
                                        <ExpandLessIcon
                                                        className='ml-auto transition-transform duration-300 animate-bounce'
                                                        style={{ animationDelay: '3000ms', animationDuration: '0.6s' }}
                                                />
                                                :
                                                <ExpandMoreIcon
                                                className='ml-auto transition-transform duration-300 animate-bounce'
                                                style={{ animationDelay: '1000ms', animationDuration: '0.6s' }}
                                        />
                                                
                                                }

                        </div>
                        <div className={`mt-2 overflow-hidden ${expanded === index ? 'block' : 'hidden'}`}>
                                <ul className="text-white list-disc italic text-sm md:text-base  ">
                                        {item.content.map((line, lineIndex) => (
                                                <li key={lineIndex} className="mb-2">

                                                        <TypingEffect text={line} typingSpeed={expanded === index ? 15 : 0} isOpen={startTyping} />
                                                </li>
                                        ))}
                                </ul>
                        </div>
                </div>
        );
}
