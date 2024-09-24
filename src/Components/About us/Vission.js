import React from 'react'
import vission from "../../Assets/Images/vissionimg.jpg";
function Vission() {
  return (
    <>
      <div className=' h-screen'> {/* Updated: added h-screen */}
        <div className='flex w-full max-w-4xl justify-center items-center  gap-10 '> {/* Updated: added max-w-4xl */}
          <div className=''> {/* Updated: added text-center */}
            <h1 className='text-2xl font-bold mb-4 text-black'>Our Mission</h1> {/* Updated: font size and margin */}
            <p className='mb-4 text-black'>We consider our mission to modernize corporate information systems to create and maintain a competitive advantage</p>
            <p className='text-black'>Making your I.T. an asset and creating value is the sign of a true digital leader.</p>
          </div>
          <div className='flex  shadow-lg shadow-indigo-500/50 rounded-[10px] transform transition-all duration-500 hover:-translate-y-3'>
            <img src={vission} className='w-[100%] max-w-sm rounded-[10px]' alt="On Budget"  /> {/* Updated: added max-w-sm */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Vission