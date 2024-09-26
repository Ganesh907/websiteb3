import React from 'react';
import onbudget from "../../Assets/Images/onbudget.png";
import mission from "../../Assets/Images/missionimg.jpg";
function Mission() {
  return (
    <>
       <div className='text-black '> {/* Updated: added h-screen */}
        <div className='flex min-w-[50%] justify-center items-center  gap-10 '> {/* Updated: added max-w-4xl */}
          <div className=''> {/* Updated: added text-center */}
          <h1 className='text-2xl font-bold italic mb-10 text-[#0060b5]'>
    <span className='border-b-2 border-b-[#0060b5] pb-1'>Our Mission</span>
      </h1>
            <p className='mb-4 w-[40vw]'>
            We strive to provide tailored, end-to-end services to our clients and establishing strong partnerships to ensure we understand each other's goals and deadlines, without compromising our professional and ethical standards.
            </p>
          </div>
          <div className='flex w-[50%] justify-center  '>
            <img src={mission} className='w-[70%] hover:-translate-y-3 shadow-lg shadow-white rounded-[10px] transform transition-all duration-500' alt="On Budget"  /> {/* Updated: added max-w-sm */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
