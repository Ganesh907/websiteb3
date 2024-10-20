import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AlbumIcon from '@mui/icons-material/Album';
import { TechHomeData1 } from '../../utils/TechHomeData';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const TypingEffect = ({ text = '', typingSpeed = 50, isOpen = false }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!isOpen || typeof text !== 'string') {
      setDisplayedText(''); 
      return;
    }

    let currentCharIndex = 0;
    const interval = setInterval(() => {
      if (currentCharIndex < text.length) {
        setDisplayedText((prev) => prev + text.charAt(currentCharIndex));
        currentCharIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [isOpen, text, typingSpeed]);

  return (
    <div className="flex">
      <div>
        {displayedText.length > 1 && (
          <AlbumIcon style={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '15px' }} />
        )}
      </div>
      <h1>{displayedText}</h1>
    </div>
  );
};

// Accordion Item Component
const AccordionItem = ({ item, index, expanded, onHoverStart, onHoverEnd }) => {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (expanded === index) {
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, 500); // Delay before starting typing effect

      return () => clearTimeout(timer);
    } else {
      setStartTyping(false);
    }
  }, [expanded, index]);

  return (
    <div
      className={`bg-[#1a1a1a] border-[#0060b5] rounded-lg shadow-xl shadow-black hover:border-[#00bfff] hover:border-2 border-2 text-red-200 transition-all duration-700 ease-in-out p-4 cursor-pointer ${expanded === index ? 'md:h-80 h-auto' : 'h-24'}`}
      onMouseEnter={() => onHoverStart(index)}
      onMouseLeave={onHoverEnd}
    >
      <div className="flex items-center text-white">
        <img src={item.img} alt="" className="h-14 w-14 p-2 bg-black shadow-lg shadow-black border-[1px] border-white rounded-md mr-4" />
        <span
          className="text-md md:text-3xl text-[#00bfff] italic"
          style={{ fontFamily: 'Goudy Old Style', letterSpacing: '0.05em' }}
        >
          {item.title}
        </span>
        {expanded === index ? (
          <ExpandLessIcon className="ml-auto transition-transform duration-300 animate-bounce" style={{ animationDelay: '3000ms', animationDuration: '0.6s' }} />
        ) : (
          <ExpandMoreIcon className="ml-auto transition-transform duration-300 animate-bounce" style={{ animationDelay: '1000ms', animationDuration: '0.6s' }} />
        )}
      </div>
      <div className={`mt-2 overflow-hidden ${expanded === index ? 'block' : 'hidden'}`}>
        <ul className="text-white list-disc italic text-sm md:text-base">
          {item.content.map((line, lineIndex) => (
            <li key={lineIndex} className="mb-2">
              <TypingEffect text={line} typingSpeed={expanded === index ? 15 : 0} isOpen={startTyping} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function CustomAccordion() {
  const [expanded, setExpanded] = useState(0); // Start at the first accordion
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  useEffect(() => {
    let interval;
    if (!isHovered) {
      // Auto-expand only when not hovered
      const cycleAccordion = () => {
        setExpanded((prevExpanded) => (prevExpanded + 1) % TechHomeData1.length); // Reset to 0 when reaching the last item
      };

      interval = setInterval(cycleAccordion, 5000); // Change every 5 seconds
    }

    return () => clearInterval(interval); // Cleanup interval on unmount or hover state change
  }, [isHovered]);

  const handleHoverStart = (index) => {
    setIsHovered(true); // Stop auto-expand on hover
    setExpanded(index); // Expand the hovered item
  };

  const handleHoverEnd = () => {
    setIsHovered(false); // Resume auto-expand when hover ends
    setExpanded(0); // Immediately expand the first item
  };

  return (
    <div className="h-[100vh]">
      <h1
        className="text-center uppercase md:text-center text-white text-xl md:text-5xl font-bold py-10"
        style={{ fontFamily: 'Goudy Old Style', letterSpacing: '0.05em' }}
      >
        Industry-Focused Innovation
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 flex flex-col gap-y-10 p-5">
          {TechHomeData1.slice(0, 2).map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              expanded={expanded}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
            />
          ))}
        </div> 

        <div className="w-full md:w-1/2 flex flex-col gap-y-10 p-5">
          {TechHomeData1.slice(2).map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index + 2}
              expanded={expanded}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
