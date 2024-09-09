import React, { useEffect, useState } from 'react'
import { Button, duration, IconButton, TextField, Tooltip } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

// import Maps from '../Map/Maps';
import ContactUSBg2 from '../Assets/Images/ContctUsBg.gif'
import VideoForContact from '../Assets/Videos/VideoForContact.mp4'

import WaveBg from '../Assets/Images/WaveBG.jpg'
import { ContactForm } from '../Components/ContactUsPage/ContactForm';
import Footer from '../Components/CommonComponents/Footer';



export const ContactUsPage = () => {


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
                <div className=''>
                        <div
                                className="w-[100vw] relative h-[70vh] flex justify-center flex-col lg:flex-row-reverse items-center align-middle bg-[#0060b5] transition-all duration-1000 ease-in-out"
                                style={{
                                        borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                }}
                        >

                                {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[1] hidden md:block"
        
    >
        <source src={VideoForContact} type="video/mp4" />
        Your browser does not support the video tag.
    </video> */}
       <div className='flex justify-center h-full w-auto lg:w-[50%] rounded-lg p-2  align-middle'
                                        
                                        >
                                                <img src={ContactUSBg2} alt='' />

                                        </div>

                                <div className='text-center relative z-10  text-white opacity-90 flex flex-col justify-center px-9 lg:w-[50%] w-full h-full'
                                // data-aos="zoom-in" data-aos-duration="2000"
                                >
                                        <h1 className='md:text-[3vw] text-[7vw] drop-shadow-2xl mt-10  font-semibold font-serif '>
                                                Need a hand? <br />We're here to connect!
                                        </h1>
                                        <h2 className='md:text-[1.5vw]  text-[4vw] mt-4  drop-shadow-lg  font-semibold opacity-80'>Our friendly team is here to answer your questions and connect you with what you need.</h2>
                                </div>

                              

                        </div>

                        <div className=' w-[100vw] h-auto md:h-[100vh] flex justify-center  flex-col align-middle'>
                                <div className='w-[90%] rounded-lg p-3 lg:w-[80%] m-auto flex flex-col lg:flex-row'>
                                <div className='relative z-10 w-full lg:w-[51vw] h-full  md:mb-0 text-[#0060b5] flex justify-center items-center' data-aos="zoom-in" data-aos-duration="2000">
                                        <div className='h-full md:w-[20%] md:flex justify-center items-center  hidden '>
                                                <h1 className='ms-[100%] text-xl font-bold drop-shadow-lg z-50 border-2 border-[#0060b5] p-4 shadow-lg backdrop-blur-md' data-aos="fade-right" data-aos-duration="2000">

                                                        CONTACT
                                                </h1>
                                        </div>

                                        <div className="grid grid-cols-3 lg:mt-12 md:border-4 border-[#0060b5] text-[#0060b5]  md:rounded-full p-2 h-[80%] md:w-96 md:shadow-2xl md:h-96"
                                                style={{ animationDuration: '4000ms' }}
                                        // style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)'}} 
                                        >

                                                <div></div>
                                                <div className=' flex items-end justify-center' >
                                                        <Tooltip title='Follow us on Facebook' arrow placement="top">
                                                                <a href='/facebook' target="_blank" rel="noopener noreferrer"
                                                                        style={{ display: 'inline-block' }} >
                                                                        <FacebookIcon className='w-8 h-8 animate-pulse hover:scale-150 hover:animate-none  transition-transform duration-300 ease-in-out' />
                                                                </a>
                                                        </Tooltip>
                                                </div>
                                                <div></div>
                                                <div className='flex flex-col justify-between items-end mr-5 py-10 '>
                                                        <Tooltip title='(+91) 022 65510355' arrow placement="top">
                                                                <a href='/call' target="_blank" rel="noopener noreferrer"
                                                                        style={{ display: 'inline-block' }} >
                                                                        <PhoneIcon className='w-8 h-8 animate-pulse hover:scale-150 hover:animate-none  transition-transform duration-300 ease-in-out' />
                                                                </a>
                                                        </Tooltip>
                                                        <Tooltip title='Email Us' arrow>
                                                                <a href='/email' target="_blank" rel="noopener noreferrer"
                                                                        style={{ display: 'inline-block' }} >
                                                                        <EmailIcon className='w-6 h-8 animate-pulse hover:scale-150 hover:animate-none  transition-transform duration-300 ' />
                                                                </a>
                                                        </Tooltip>
                                                </div>
                                                <div className='flex items-center justify-center' >
                                                        <div className='bg-[#0060b5] rounded-full shadow-2xl text-white' >
                                                                <h1 className=' drop-shadow-2xl text-3xl font-bold m-10 '>B3</h1>
                                                        </div>

                                                </div>
                                                <div className='flex flex-col justify-between items-start ml-5 py-10'>
                                                        <Tooltip title='Follow us on Instagram' arrow placement="top">
                                                                <a href='/instagram' target="_blank" rel="noopener noreferrer"
                                                                        style={{ display: 'inline-block' }} >
                                                                        <InstagramIcon className='w-8 h-8 animate-pulse hover:scale-150 hover:animate-none  transition-transform duration-300 ease-in-out' />
                                                                </a>
                                                        </Tooltip>
                                                        <Tooltip title='Follow us on Linkedin' arrow>
                                                                <a href='/linkedin' target="_blank" rel="noopener noreferrer"
                                                                        style={{ display: 'inline-block' }} >
                                                                        <LinkedInIcon className='w-8 h-8 animate-pulse hover:scale-150 hover:animate-none  transition-transform duration-300 ease-in-out' />
                                                                </a>
                                                        </Tooltip>
                                                </div>
                                                <div></div>
                                                <div className=' m-1 flex items-start justify-center'>
                                                        <Tooltip title='Follow us on Twitter' arrow>
                                                                <a href='/twitter' target="_blank" rel="noopener noreferrer"
                                                                        style={{ display: 'inline-block' }} >
                                                                        <TwitterIcon className='w-8 h-8 animate-pulse hover:scale-150 hover:animate-none  transition-transform duration-300 ease-in-out' />
                                                                </a>
                                                        </Tooltip>
                                                </div>
                                                <div></div>
                                        </div>
                                        
                                        <div className='  h-full md:w-[20%] md:flex justify-center items-center hidden '>
                                                <h1 className='me-[100%] text-xl font-bold drop-shadow-lg z-50  shadow-lg   p-4 backdrop-blur-md border-2 border-[#0060b5] text-[#0060b5]' data-aos="fade-left" data-aos-duration="2000">BITBYBIT
                                                </h1>
                                        </div>
                                </div>

                                        <ContactForm />
                                </div>

                        </div>
                        {/* <div className='flex justify-center items-center h-[100vh] bg-[#0060b5]'>
                                <div className='bg-white w-[80%] shadow-2xl h-auto rounded-lg p-3 flex flex-col lg:flex-row'>

                                        <div className='lg:w-[38%] p-3' data-aos="fade-up" data-aos-duration="2000">
                                                <h1 className='text-2xl font-bold mb-4'>Reach Out to Us!</h1>
                                                <p className="mb-8">feel free to reach out using the contact details below.</p>

                                                <div className='flex mb-8 '>
                                                        <PhoneIcon />
                                                        &nbsp;&nbsp;(+91) 022 65510355
                                                </div>
                                                <div className='flex mb-8 '>
                                                        <EmailIcon /> &nbsp;&nbsp;contact@bitbybitsolutions.co.in
                                                </div>
                                                <div className='flex mb-8 '>
                                                        <i class="fa"><LocationOnIcon /></i>
                                                        <span>&nbsp;912 | 1st Floor | Building No 9 | Solitaire Corporate Park | Andheri Kurla Road | Chakala | Andheri (East) | Mumbai - 400 093</span>
                                                </div>
                                                <div className='flex justify-evenly mb-8 '>
                                                        <a href='/facebook' >
                                                                <FacebookIcon className="w-7 h-7 hover:text-black text-[#0060b5]" />
                                                        </a>
                                                        <a href='/instagram'>
                                                                <InstagramIcon className="w-7 h-7 hover:text-black text-[#0060b5]" />
                                                        </a>
                                                        <a href='/linkedin'>
                                                                <LinkedInIcon className="w-7 h-7 hover:text-black text-[#0060b5]" />
                                                        </a>
                                                        <a href='/twitter'>
                                                                <TwitterIcon className="w-7 h-7 hover:text-black text-[#0060b5]" />
                                                        </a>
                                                </div>
                                        </div>
                                        <div className='lg:w-[63%] h-[100%] p-2'>

                                                <Maps />

                                        </div>
                                </div>
                        </div> */}
                        
                        <Footer />
                </div>
        )
}


{/* <img src={ContactUSBg} alt='' className='w-24 shadow-xl bg-white hover:scale-110 hover:animate-none  h-24 p-1 rounded-full object-cover ' /> */ }
{/* <div className='  border-2 h-[130px] w-[150px] animate-spin flex items-start justify-start  rounded-full border-white   '
                                                style={{animationDuration:'3000ms'}}>
                                                        <div className=' border-2  w-[100px]  h-[100px]  border-white flex items-start justify-start  rounded-full  ' >
                                                        <div className=' border-2 w-[50px]  h-[50px]  border-white  rounded-full ' >  
                                                        <div className=' border-2 w-[20px]  h-[20px] flex justify-center items-center bg-white animate-ping rounded-full '
                                                        style={{animationDuration:'500ms'}} >  
                                                               
                                                               </div>
                                                 </div> 
                                                  </div>
                                               
                                                 </div> */}