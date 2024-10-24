import React, { useState, useEffect } from "react";

const TypingText = () => {
  const constantText = "We Offer"; // The constant part of the sentence
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
  const [isTyping, setIsTyping] = useState(true); // Track if we are typing or erasing
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
        setIsTyping(true); // Set typing mode to true
        if (charIndex < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(typePhrase, typingSpeed);
        } else {
          // Phrase fully typed, wait before erasing
          timeout = setTimeout(() => {
            erasing = true;
            setIsTyping(false); // Set typing mode to false when erasing
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

    typePhrase();

    return () => clearTimeout(timeout);
  }, [currentPhraseIndex]);

  return (
    <div className="flex flex-col mx-auto  mb-10 m relative lg:w-[50vw] w-[90vw]">
      <h1 className="text-[#0060b5] mr-2  text-5xl font-bold  absolute md:bottom-36 bottom-56">
        {constantText}
        <span
          className="absolute bottom-0 left-0 w-full border-b-2    pb-20 translate-y-5"
          style={{
            borderImage:
              "linear-gradient(to right, yellow, white, blue, black) 1",
            animation: "gradientShift 6s infinite", // Add animation here
          }}
        ></span>

        <style>
          {`
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
      </h1>
      <h2
        className={`absolute md:bottom-20 bottom-32 md:pr-0 pr-5   md:max-w-max w-[100vw] text-3xl font-semibold ${
          isTyping ? "text-white" : "text-yellow-300"
        } md:mt-20 `}
      >
        {displayedText}
      </h2>
  <div className="  md:w-[50vw] w-[100vw] text-white text-xl text-start font-semibold md:mt-10 mt-16 drop-shadow-xl pl-7 "> 
             <ul className='list-disc'>
            <li className="mb-2">We craft custom software for efficiency, security, and performance.</li>
            <li>Trust us for solutions that align with your business goals.</li>

            </ul>
            </div>
    </div>
  );
};

export default TypingText;