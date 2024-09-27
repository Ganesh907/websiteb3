import React from 'react'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import TypingText from '../CommonComponents/TypingText';

function Corevalues() {
  return (
    <div className=' flex flex-col justify-center items-center'>
      <h1 className='text-[#0060b5] text-3xl font-bold uppercase text-center my-10'> COre <span className='text-yellow-400'> Values</span></h1>
      <div className='text-white h-[70vh] w-[80vw]  flex justify-between items-center text-center'>
        
        <div className='w-[18%] h-[50vh]  flex flex-col justify-start items-center gap-[1%]'
          data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
          <div className='h-28 w-28 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center '>
            <SecurityOutlinedIcon sx={{ color: 'black', fontSize: '90px', border: '6px solid #0060b5', borderRadius: '50px', padding: '10px' }} />
          </div>
          <div className='h-32 w-1 bg-transparent border-l-2 border-dotted border-white'></div>
          <div className='h-10 w-10 flex justify-center items-center rounded-full bg-[#0060b5] font-bold border-2 border-white shadow-sm shadow-black text-white animate-pulse'>1</div>
          <h1 className='white text-xl  uppercase mt-2 font-semibold '>Integrity</h1>
        </div>

        <div className='w-[18%] h-[50vh] flex flex-col justify-end items-center gap-[1%]'
          data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
          <div className='h-28 w-28 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'>
            <SecurityOutlinedIcon sx={{ color: 'black', fontSize: '90px', border: '6px solid #facc15', borderRadius: '50px', padding: '10px' }} />
          </div>
          <div className='h-20 w-1 bg-transparent border-l-2 border-dotted border-white'></div>
          <div className='h-10 w-10 flex justify-center items-center rounded-full  text-black bg-yellow-400 font-bold  border-2 border-white shadow-sm shadow-black animate-pulse'>2</div>
          <h1 className='text-xl uppercase mt-2 font-semibold '>Client First</h1>
        </div>

        <div className='w-[18%] h-[50vh] flex flex-col justify-between items-center gap-[1%]'
          data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1100">
          <div className='h-28 w-28 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'>
            <SecurityOutlinedIcon sx={{ color: 'black', fontSize: '90px', border: '6px solid #0060b5', borderRadius: '50px', padding: '10px' }} />
          </div>
          <div className='h-32 w-1 bg-transparent border-l-2 border-dotted border-white'></div>
          <div className='h-10 w-10 flex justify-center items-center rounded-full font-bold bg-[#0060b5] border-2 border-white shadow-sm shadow-black text-white animate-pulse'>3</div>
          <h1 className='text-xl uppercase mt-2 font-semibold '>Trust</h1>
        </div>

        <div className='w-[18%] h-[50vh] flex flex-col justify-end items-center gap-[1%]'
          data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1600">
          <div className='h-28 w-28 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'>
            <SecurityOutlinedIcon sx={{ color: 'black', fontSize: '90px', border: '6px solid #facc15', borderRadius: '50px', padding: '10px' }} />
          </div>
          <div className='h-20 w-1 bg-transparent border-l-2 border-dotted border-white'></div>
          <div className='h-10 w-10 flex justify-center items-center rounded-full  text-black bg-yellow-400 font-bold  border-2 border-white shadow-sm shadow-black animate-pulse'>4</div>
          <h1 className='text-xl uppercase mt-2 font-semibold  '>Respect</h1>
        </div>

        <div className='w-[18%] h-[50vh] flex flex-col justify-between items-center gap-[1%]'
          data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2100">
          <div className='h-28 w-28 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'>
            <SecurityOutlinedIcon sx={{ color: 'black', fontSize: '90px', border: '6px solid #0060b5', borderRadius: '50px', padding: '10px' }} />
          </div>
          <div className='h-32 w-1 bg-transparent border-l-2 border-dotted border-white'></div>
          <div className='h-10 w-10 flex justify-center items-center font-bold rounded-full bg-[#0060b5] border-2 border-white shadow-sm shadow-black text-white animate-pulse '>5</div>
          <h1 className='text-xl uppercase mt-2 font-semibold  '>Accountability</h1>
        </div>

      </div>
    </div>
  )
}

export default Corevalues;
