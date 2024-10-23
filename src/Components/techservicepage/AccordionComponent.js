import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AlbumIcon from '@mui/icons-material/Album';
import { TechHomeData1 } from '../../data/TechHomeData';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// TypingEffect component to display lines one after another with a delay
const TypingEffect = ({ text = '', typingSpeed = 50, isOpen = false }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!isOpen || typeof text !== 'string') {
      setDisplayedText(''); // Reset if not open
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
      className={`border-black dark:bg-black/70 dark:border-[#0060b5]  dark:hover:border-[#00bfff]  bg-[#0060b5] rounded-lg hover:border-transparent hover:border-2 shadow-md shadow-black border-2 transition-all duration-700 ease-in-out p-4 cursor-pointer ${expanded === index ? 'h-auto md:h-80 dark:border-[#00bfff]' : 'h-24'}`}
      onMouseEnter={() => onHoverStart(index)}
      onMouseLeave={onHoverEnd}
    >
      <div className="flex items-center text-white">
        <img src={item.img} alt="" className="h-14 w-14 bg-white p-1 rounded-md mr-4" />
        <span className="text-xl md:text-3xl italic dark:text-[#00bfff] text-white drop-shadow-lg" style={{ fontFamily: 'Goudy Old Style', letterSpacing: '0.05em' }}>
          {item.title}
        </span>
        {expanded === index ? (
          <ExpandLessIcon className="ml-auto text-white transition-transform duration-300 animate-bounce" />
        ) : (
          <ExpandMoreIcon className="ml-auto text-white transition-transform duration-300 animate-bounce" />
        )}
      </div>
      <div className={`mt-4 overflow-hidden ${expanded === index ? 'block' : 'hidden'}`}>
        <ul className="text-white list-disc italic">
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
    setExpanded(0); // Reset to the first accordion item
  };

  return (
    <div className="py-32">
      <h1
        className="text-center uppercase md:text-center dark:text-white text-[#0060b5] text-xl md:text-5xl font-bold md:mt-10 md:mb-20"
        style={{ fontFamily: 'Goudy Old Style', letterSpacing: '0.05em' }}
      >
        Industry Specialization
      </h1>
      <div className="flex flex-wrap justify-center h-[80vh]">
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
