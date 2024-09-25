import React from 'react'
import HandshakeIcon from '@mui/icons-material/Handshake';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
function Corevalues() {
  return (
    <div className='text-white h-full  flex w-[70vw] justify-between items-center text-center'>

      <div className='w-[18%] h-[50vh]  flex flex-col justify-start items-center gap-[1%]  '>
        <div className='h-28 w-28 rounded-full bg-white shadow-xl shadow-black flex justify-center items-center'><SecurityOutlinedIcon sx={{ color: 'black', fontSize: '90px',border:'6px solid #0060b5', borderRadius:'50px',padding:'10px'}} /></div>
        <div className='h-32 w-1 bg-transparent border-l-2 border-dotted border-white'></div>
        <div className='h-10 w-10 flex justify-center items-center rounded-full bg-[#0060b5] font-bold text-white border-2 border-white shadow-2xl shadow-black'>1</div>
        {/* <ArrowDropDownOutlinedIcon sx={{fontSize:'80px',color:'#0060b5'}}/> */}
        <h1 className='white text-xl  text-white uppercase mt-2 font-semibold'>Integrity</h1>
      </div>

      <div className='w-[18%] h-[50vh] flex flex-col justify-end items-center gap-[1%]  '>
        <div className='h-28 w-28 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'><SecurityOutlinedIcon sx={{ color: 'black',  fontSize: '90px',border:'6px solid #facc15', borderRadius:'50px',padding:'10px' }} /></div>
        <div className='h-20 w-1 bg-transparent border-l-2 border-dotted border-white'></div>
        <div className='h-10 w-10 flex justify-center items-center rounded-full  text-black bg-yellow-400 font-bold  border-2 border-white shadow-2xl shadow-black '>2</div>
        <h1 className='text-white text-xl uppercase mt-2 font-semibold'>Client First</h1>
      </div>

      <div className='w-[18%] h-[50vh] flex flex-col justify-between items-center gap-[1%]  '>
        <div className='h-28 w-28 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'><SecurityOutlinedIcon sx={{ color: 'black',  fontSize: '90px',border:'6px solid #0060b5', borderRadius:'50px',padding:'10px' }} /></div>
        <div className='h-32 w-1 bg-transparent border-l-2 border-dotted border-white'></div>
        <div className='h-10 w-10 flex justify-center items-center rounded-full font-bold bg-[#0060b5] text-white border-2 border-white shadow-2xl shadow-black '>3</div>
        <h1 className='text-white text-xl uppercase mt-2 font-semibold'>Trust</h1>
      </div>

      <div className='w-[18%] h-[50vh] flex flex-col justify-end items-center gap-[1%]   '>
        <div className='h-28 w-28 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'><SecurityOutlinedIcon sx={{ color: 'black',  fontSize: '90px',border:'6px solid #facc15', borderRadius:'50px',padding:'10px' }} /></div>
        <div className='h-20 w-1 bg-transparent border-l-2 border-dotted border-white'></div>
        <div className='h-10 w-10 flex justify-center items-center rounded-full  text-black bg-yellow-400 font-bold  border-2 border-white '>4</div>
        <h1 className='text-white text-xl uppercase mt-2 font-semibold '>Respect</h1>
      </div>

      <div className='w-[18%] h-[50vh] flex flex-col justify-between items-center gap-[1%]  '>
        <div className='h-28 w-28 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'><SecurityOutlinedIcon sx={{ color: 'black',  fontSize: '90px',border:'6px solid #0060b5', borderRadius:'50px',padding:'10px' }} /></div>
        <div className='h-32 w-1 bg-transparent border-l-2 border-dotted border-white'></div>
        <div className='h-10 w-10 flex justify-center items-center font-bold rounded-full bg-[#0060b5] text-white border-2 border-white shadow-2xl shadow-black '>5</div>
        <h1 className='text-white text-xl uppercase mt-2 font-semibold '>Accountability</h1>
      </div>




    </div>
  )
}

export default Corevalues