import React from 'react'
import vission from "../../Assets/Images/vissionimg.jpg";
function Vission() {
  return (
    <>
      <div className='text-black '> {/* Updated: added h-screen */}
        <div className='flex min-w-[50%] justify-center items-center  gap-10 '> {/* Updated: added max-w-4xl */}
          <div className=''> {/* Updated: added text-center */}

          <h1 className='text-2xl font-bold italic mb-10 text-[#0060b5]'>
    <span className='border-b-2 border-b-[#0060b5] pb-1'>Our Vision</span>
      </h1>
          
            <p className='mb-4 w-[40vw]'> To build trust by establishing a winning value chain 
                                                    system based on the ever-changing surroundings, with the 
                                                     utmost focus on transforming lives and providing solutions.</p>
          </div>
          <div className='flex w-[50%] justify-center  '>
            <img src={vission} className='w-[70%] hover:-translate-y-3 shadow-lg shadow-white rounded-[10px] transform transition-all duration-500' alt="On Budget"  /> {/* Updated: added max-w-sm */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Vission