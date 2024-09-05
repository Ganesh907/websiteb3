import React, { useState, useEffect } from 'react';

const TypingText = ({word}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    if (!word) return; // Handle case when word is undefined or empty

    const typingSpeed = 150; // Speed of typing
    const erasingSpeed = 100; // Speed of erasing
    const pauseTime = 1000; // Pause time before erasing or typing again

    if (!isErasing && index < word.length) {
      // Typing logic
      const typingTimeout = setTimeout(() => {
        setDisplayedText(word.slice(0, index + 1));
        setIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimeout);
    } else if (isErasing && index > 0) {
      // Erasing logic
      const erasingTimeout = setTimeout(() => {
        setDisplayedText(word.slice(0, index - 1));
        setIndex((prevIndex) => prevIndex - 1);
      }, erasingSpeed);
      return () => clearTimeout(erasingTimeout);
    } else if (index === word.length) {
      // Pause before erasing
      const pauseBeforeErasing = setTimeout(() => {
        setIsErasing(true);
      }, pauseTime);
      return () => clearTimeout(pauseBeforeErasing);
    } else if (index === 0 && isErasing) {
      // Pause before typing again
      const pauseBeforeTyping = setTimeout(() => {
        setIsErasing(false);
      }, pauseTime);
      return () => clearTimeout(pauseBeforeTyping);
    }
  }, [index, isErasing, word]);

  return (
<>
      <span >{displayedText}</span>
      <span className="animate-blink">|</span>
      </>
  );
};

export default TypingText;
