import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AlbumIcon from '@mui/icons-material/Album';
import { TechHomeData1 } from '../../utils/RecHomeData';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// TypingEffect component to display lines one after another with a delay
const TypingEffect = ({ text = '', delay = 500, isOpen = false }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setShowText(false); // Reset when accordion is closed
    }
  }, [isOpen, delay]);

  return (
    <span>
      {showText && (
        <>
          <AlbumIcon style={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '15px' }} />
          {text}
        </>
      )}
    </span>
  );
};

// Accordion Item Component
const AccordionItem = ({ item, index, expanded, handleMouseEnter, handleMouseLeave }) => {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (expanded === index) {
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setStartTyping(false);
    }
  }, [expanded, index]);

  return (
    <div
      className={`bg-[#1a1a1a] border-[#0060b5] hover:border-[#00bfff] hover:border-2 border-2 text-red-200 transition-all duration-700 ease-in-out p-4 cursor-pointer ${
        expanded === index ? 'h-80' : 'h-20'
      }`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center text-white">
        <item.icon className="mr-2 text-[#008bff]" style={{ fontSize: '50px' }} />
        <span className="font-bold text-2xl text-[#00bfff]">{item.title}</span>
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
        <ul className="text-white list-disc italic">
          {item.content.map((line, lineIndex) => (
            <li key={lineIndex} className="mb-2">
              <TypingEffect
                text={line}
                delay={lineIndex * 500} // Each line appears 500ms after the previous one
                isOpen={startTyping}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function CustomAccordion() {
  const [expanded, setExpanded] = useState(null);

  const handleMouseEnter = (index) => setExpanded(index);
  const handleMouseLeave = () => setExpanded(null);

  return (
    <div className="py-32">
      <h1 className="text-center md:text-center text-white text-5xl italic md:mt-10 md:mb-20">
      Industry Specialization
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 flex flex-col gap-y-10 p-5">
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
