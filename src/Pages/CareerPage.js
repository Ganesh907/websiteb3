import React, { useEffect, useState } from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ContactUsHome from '../Assets/Images/career.jpg'
export const CareerPage = () => {
  
  const [bottomRadius, setBottomRadius] = useState('0%');

  useEffect(() => {
          const handleScroll = () => {
                  const scrollTop = window.scrollY;
                  const maxScroll = 50; // Adjust this value for how quickly you want the border to round
                  const radius = Math.min(scrollTop / maxScroll * 50, 50); // Cap at 50% for a smooth transition
                  setBottomRadius(`${radius}%`);
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (

    <div>
      {/* <div
        className="p-4 flex justify-center h-[100vh] flex-col items-center"
        style={{
          backgroundColor: "var(--background-color)",
          color: "var(--primary-color)",
        }}
      >
        <h1 className="text-3xl font-bold mb-4 text-[var(--primary-color)]" >Careers</h1>

        <br />
        <h1 className="text-xl font-bold mb-4" style={{ color: "var(--secondary-color)", }}>
          Work in progress.....
        </h1>

      </div> */}


<div
  className="relative h-[100vh] shadow-xl bg-[#0060b5] transition-all duration-1000 ease-in-out"
  style={{
    borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`, // Dynamic bottom border radius
    backgroundImage: `
      linear-gradient(rgba(0, 96, 181, 0.5), rgba(0, 96, 181, 0.5)), /* Blue gradient overlay */
      linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%), /* Black gradient overlay */
      url(${ContactUsHome}) /* Background image */
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  }}
>
<div className='text-center relative z-10  text-white opacity-90 flex flex-col justify-center px-9 lg:w-[50%] w-full h-full'
                                >
                                        <h1 className='md:text-[3vw] text-[7vw] drop-shadow-2xl mt-10  font-semibold font-serif '>
                                        Let's work together.
                                        </h1>
                                        <h2 className='md:text-[1.5vw]  text-[4vw] mt-4  drop-shadow-lg  font-semibold opacity-80'>Partner with Us to Build Powerful and Reliable Software</h2>
                                </div>

        <div className='h-14 flex justify-center animate-pulse items-end text-[200px] rounded-full w-14 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white z-50' style={{ animationDuration: "4000ms" }}>
          <KeyboardDoubleArrowDownIcon className="animate-bounce" style={{ fontSize: "50px", animationDuration: "400ms", animationDelay: "3000ms" }} />
        </div>
      </div>
    </div>
  )
}
