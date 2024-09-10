import React, { useState, useEffect } from "react";

const TypingText = () => {
  const constantText = "BitByBit Delivers"; // The constant part of the sentence
  const phrases = [
    "Custom software solutions in e-Governance",
    "Ensuring quality and seamless service",
    "Innovative Fintech services",
    "Leading-edge Technology solutions",
    "Advanced Healthcare technology",
    "Cutting-edge solutions",
  ]; // Array of phrases to display
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0); // Track which phrase to show
  const [displayedText, setDisplayedText] = useState(""); // Text that appears on screen
  const typingSpeed = 50; // Speed of typing each letter (ms)
  const displayDuration = 1500; // Duration for which the entire phrase is displayed (ms)
  const eraseSpeed = 50; // Speed of erasing each letter (ms)

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[currentPhraseIndex];
    let charIndex = 0;
    let erasing = false;

    const typePhrase = () => {
      if (!erasing) {
        if (charIndex < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(typePhrase, typingSpeed);
        } else {
          // Phrase fully typed, wait before erasing
          timeout = setTimeout(() => {
            erasing = true;
            typePhrase();
          }, displayDuration);
        }
      } else {
        // Erase the phrase
        if (charIndex > 0) {
          setDisplayedText(currentPhrase.substring(0, charIndex - 1));
          charIndex--;
          timeout = setTimeout(typePhrase, eraseSpeed);
        } else {
          // Move to the next phrase
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
          erasing = false;
          timeout = setTimeout(typePhrase, typingSpeed);
        }
      }
    };

    typePhrase(); // Start typing/erasing

    return () => clearTimeout(timeout); // Clean up the timeout when component unmounts
  }, [currentPhraseIndex]);

  return (

    <div className="  flex flex-col mx-auto my-4  text-4xl font-bold mb-20  ms-10 gap-10 text-gray-800 ">
      <h1 className="  text-blue-500 mr-2 text-7xl ">{constantText}  </h1>
      <h2 className=" text-white bg-black max-w-max p-3 ">{displayedText}</h2>
    </div>
  );
};

export default TypingText;
