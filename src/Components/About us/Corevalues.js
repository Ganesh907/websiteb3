import React from 'react'
// import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import BalanceIcon from '@mui/icons-material/Balance';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import TypingText from '../CommonComponents/TypingText';

function Corevalues() {
  return (
    <div className=' flex flex-col justify-center items-center'>
      <h1 className='text-[#0060b5] text-3xl font-bold uppercase text-center mt-16 mb-5 border-y-2 py-2 px-5 border-white'> Core <span className='text-yellow-400'> Values</span></h1>
      <div className='text-white md:h-[80vh] w-[90vw] gap-y-10 px-5 md:px-0  flex flex-col md:flex-row justify-between items-center text-center mb-10 md:mb-0'>
        
        <div className='md:w-[18%] md:h-[67vh] flex flex-col justify-between items-center mt-5 md:mt-0 gap-x-[2%]'
          data-aos="fade-up"
           data-aos-duration="2000" data-aos-delay="100">
          <div className='h-28 w-28  scale-75 md:scale-100 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center '>
            <BalanceIcon sx={{ color: 'black', fontSize: '90px', border: '6px solid #0060b5', borderRadius: '50px', padding: '10px' }} />
          </div>
          <div className='h-36 w-1 bg-transparent hidden md:block border-l-2 border-dotted border-white'></div>
          <div className='h-10 w-10  justify-center hidden md:flex items-center rounded-full bg-[#0060b5] font-bold border-2 border-white shadow-sm shadow-black text-white animate-pulse'>1</div>
          <h1 className='white text-xl  uppercase my-2 font-semibold '>Integrity</h1>
          <p className='italic border-t-2  border-[#0060b5] rounded-2xl py-2'
            style={{backgroundColor:'rgb(0,0,0,0.3)'}}
            >
              We uphold the highest standards of honesty and transparency in all interaction.</p>
        </div>

       

        <div className='md:w-[18%] md:h-[70vh] flex flex-col justify-end items-center gap-x-[2%]'
          data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
          <div className='h-28 w-28 scale-75 md:scale-100  rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'>
            <PersonPinIcon sx={{ color: 'black', fontSize: '90px', border: '6px solid #facc15', borderRadius: '50px', padding: '10px' }} />
          </div>
          <div className='h-20 w-1 bg-transparent hidden md:block border-l-2 border-dotted border-white'></div>
          <div className='hidden md:flex h-10 w-10  justify-center items-center rounded-full  text-black bg-yellow-400 font-bold  border-2 border-white shadow-sm shadow-black animate-pulse'>2</div>
          <h1 className='text-xl uppercase my-2 font-semibold '>Client First</h1>
          <p className='italic border-t-2 border-yellow-400 rounded-2xl py-2'
            style={{backgroundColor:'rgb(0,0,0,0.3)'}}>Your success is our priority. we tailor our solutions to meet your unique needs.</p>
        </div>

        <div className='md:w-[18%] md:h-[67vh] flex flex-col justify-between items-center gap-x-[2%]'
          data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1100">
          <div className='h-28 w-28 scale-75 md:scale-100 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'>
            <VerifiedUserIcon sx={{ color: 'black', fontSize: '90px', border: '6px solid #0060b5', borderRadius: '50px', padding: '10px' }} />
          </div>
          <div className='h-36 w-1 bg-transparent hidden md:block border-l-2 border-dotted border-white'></div>
          <div className='h-10 w-10 hidden md:flex justify-center items-center rounded-full font-bold bg-[#0060b5] border-2 border-white shadow-sm shadow-black text-white animate-pulse'>3</div>
          <h1 className='text-xl uppercase my-2 font-semibold '>Trust</h1>
          <p className='italic border-t-2  border-[#0060b5] rounded-2xl px-2 py-2'
            style={{backgroundColor:'rgb(0,0,0,0.3)'}}>Building lasting relationships through reliability and consistent excellence.</p>
        </div>

        <div className='md:w-[18%] md:h-[70vh] flex flex-col justify-end items-center gap-x-[2%]'
          data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1600">
          <div className='h-28 w-28 scale-75 md:scale-100 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'>
            <HandshakeIcon sx={{ color: 'black', fontSize: '90px', border: '6px solid #facc15', borderRadius: '50px', padding: '10px' }} />
          </div>
          <div className='h-20 w-1 bg-transparent hidden md:block border-l-2 border-dotted border-white'></div>
          <div className='h-10 w-10 hidden md:flex justify-center items-center rounded-full  text-black bg-yellow-400 font-bold  border-2 border-white shadow-sm shadow-black animate-pulse'>4</div>
          <h1 className='text-xl uppercase my-2 font-semibold  '>Respect</h1>
          <p className='italic border-t-2  border-yellow-400 rounded-2xl py-2'
            style={{backgroundColor:'rgb(0,0,0,0.3)'}}>We value diverse perspectives and treat everyone with dignity and fairness.</p>
        </div>

        <div className='md:w-[18%] md:h-[67vh] flex flex-col justify-between items-center gap-x-[2%]'
          data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2100">
          <div className='h-28 w-28 scale-75 md:scale-100 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'>
            <AssignmentIndIcon sx={{ color: 'black', fontSize: '90px', border: '6px solid #0060b5', borderRadius: '50px', padding: '10px' }} />
          </div>
          <div className='h-36 w-1 bg-transparent hidden md:block border-l-2 border-dotted border-white'></div>
          <div className='h-10 w-10 hidden md:flex justify-center items-center font-bold rounded-full bg-[#0060b5] border-2 border-white shadow-sm shadow-black text-white animate-pulse '>5</div>
          <h1 className='text-xl uppercase my-2 font-semibold  '>Accountability</h1>
          <p className='italic border-t-2  border-[#0060b5] rounded-2xl py-2'
            style={{backgroundColor:'rgb(0,0,0,0.3)'}}>We take responsibility for our actions and deliver on our promises every time.</p>
        </div>

      </div>
    </div>
  )
}

export default Corevalues;
