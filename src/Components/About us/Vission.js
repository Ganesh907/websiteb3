import React from 'react'
import vission from "../../Assets/Images/vissionimg.jpg";
function Vission() {
  return (
    <>
      <div className='text-black '> {/* Updated: added h-screen */}
        <div className='flex min-w-[50%] justify-center items-center  gap-10 '> {/* Updated: added max-w-4xl */}
          <div className=''> {/* Updated: added text-center */}
            <h1 className='text-2xl font-bold mb-4'>Our Mission</h1> {/* Updated: font size and margin */}
            <p className='mb-4'>We consider our mission to modernize corporate information systems to create and maintain a competitive advantage</p>
            <p>Making your I.T. an asset and creating value is the sign of a true digital leader.</p>
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