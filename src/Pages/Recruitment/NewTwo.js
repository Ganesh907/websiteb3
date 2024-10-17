import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AlbumIcon from '@mui/icons-material/Album';
import { TechHomeData1 } from '../../utils/RecHomeData';
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

    
    // <span>
    //   {displayedText && (
    //     <>
    //       <AlbumIcon style={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '15px' }} />
    //       {displayedText}
    //     </>
    //   )}
    // </span>
  );
};

// Accordion Item Component
const AccordionItem = ({ item, index, expanded, handleMouseEnter, handleMouseLeave }) => {
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
      className={`bg-[#1a1a1a] border-[#0060b5] rounded-lg hover:border-[#00bfff] hover:border-2 shadow-md shadow-black border-2  transition-all duration-700 ease-in-out p-4 cursor-pointer ${expanded === index ? 'h-auto md:h-80' : 'h-24'}`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center text-white">

        
        <img src={item.img} alt='' className='h-14 w-14 bg-black shadow-lg shadow-black  border-[1px] border-white rounded-md p-1 mr-4'/>

        {/* <img src={item.img} alt='' className='h-14 w-14 mr-4'/> */}
       
        {/* <item.icon className="mr-2 text-[#008bff]" style={{ fontSize: '50px' }} /> */}
     

        <span className="font-bold text-xl md:text-2xl text-[#00bfff] drop-shadow-lg">{item.title}</span>
        {expanded === index ? 
          <ExpandLessIcon className='ml-auto transition-transform duration-300 animate-bounce' /> :
          <ExpandMoreIcon className='ml-auto transition-transform duration-300 animate-bounce' />
        }
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
  const [expanded, setExpanded] = useState(null);

  const handleMouseEnter = (index) => setExpanded(index);
  const handleMouseLeave = () => setExpanded(null);

  return (
    <div className="py-32">
 <h1 className="text-center uppercase md:text-center text-white text-xl md:text-5xl font-bold md:mt-10 md:mb-20"
                        style={{
                               
                              fontFamily: 'Goudy Old Style' ,
                                letterSpacing: '0.05em'}}>
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
