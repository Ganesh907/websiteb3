import React, { useEffect, useState } from 'react'
import { Button, duration, IconButton, TextField, Tooltip } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// import Maps from '../Map/Maps';
import ContactUSBg2 from '../Assets/Images/ContctUsBg.gif'
import ContactUsHome from '../Assets/Images/ContactUsHome.jpg'
import ContactUSImg from '../Assets/Images/ContactUSImg.jpg'
// import ContactUSImg2 from '../Assets/Images/ContactUSImg2.png'
// import ContactUSImg3 from '../Assets/Images/ContactUSImg3.jpg'
import ContactUSImg3 from '../Assets/Images/ContactUSImg4.jpg'
import VideoForContact from '../Assets/Videos/VideoForContact.mp4'

import WaveBg from '../Assets/Images/WaveBG.jpg'
import { ContactForm } from '../Components/ContactUsPage/ContactForm';
import Footer from '../Components/CommonComponents/Footer';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import HeroSection from '../Components/CommonComponents/HeroSection';
import ContactUsVideo from '../Assets/Videos/ContactUsVideo.mp4'
import Map from '../Components/ContactUsComponents/Map';
import { ContactForm2 } from '../Components/ContactUsPage/ContactForm2';
import ContactMap from '../Components/ContactUsComponents/Map';



const ContactUsPage = () => {




        return (
                <div>

                        {/* <div
                                className="relative h-[100vh] shadow-xl bg-[#0060b5] transition-all duration-1000 ease-in-out"
                                style={{
                                        borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`, 
                                        backgroundImage: `
      linear-gradient(rgba(0, 96, 181, 0.5), rgba(0, 96, 181, 0.5)),
      linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%), 
      url(${ContactUsHome}) 
    `,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',

                                }}
                        >
                                <div className='text-center relative z-10  text-white opacity-90 flex flex-col justify-center px-9 lg:w-[50%] w-full h-full'
                                >
                                        <h1 className='md:text-[3vw] text-[7vw] drop-shadow-2xl mt-10  font-semibold font-serif '>
                                                Need a hand? <br />We're here to connect!
                                        </h1>
                                        <h2 className='md:text-[1.5vw]  text-[4vw] mt-4  drop-shadow-lg  font-semibold opacity-80'>Our friendly team is here to answer your questions and connect you with what you need.</h2>
                                </div>

                                <div className='h-14 flex justify-center animate-pulse items-end text-[200px] rounded-full w-14 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white z-50' style={{ animationDuration: "4000ms" }}>
                                        <KeyboardDoubleArrowDownIcon className="animate-bounce" style={{ fontSize: "50px", animationDuration: "400ms", animationDelay: "3000ms" }} />
                                </div>
                        </div> */}

                        {/* <HeroSection
                                videoUrl={ContactUsVideo}
                                videoOpacity={20}
                                MarginAnimtion={true}>

                                <div className='z-10 flex flex-col justify-end items-start '
                                >
                                        <div className=''>
                                                <div className=" relative ">
                                                        <h1 className=' text-5xl drop-shadow-2xl   text-[#0060b5] font-bold'>
                                                                Need Assistance ?

                                                        </h1>

                                                        <span
                                                                className="absolute bottom-0 top-6 left-0 w-[62vh] border-b-2  my-8 "
                                                                style={{
                                                                        borderImage: "linear-gradient(to right, yellow, white, blue, black) 1",
                                                                        animation: "gradientShift 6s infinite", // Adjust duration as needed
                                                                }}
                                                        ></span>

                                                        <style>
                                                                {`
      .relative {
        position: relative;
      }
      .absolute {
        position: absolute;
      }
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
                                                </div>


                                                <h2 className='text-white  text-3xl font-bold inline-block   pb-1 my-2'>
                                                        We're here to <span className='text-yellow-500'>connect</span> and <span className='text-yellow-500'>assist</span>!
                                                </h2>



                                                <ul className="list-none space-y-4 text-xl font-semibold mb-10">
                                                        <li
                                                                className="relative pl-4 my-2 opacity-0 animate-fadeInRepeat"
                                                                style={{ animationDelay: '0.5s' }}
                                                        >
                                                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
                                                                Our friendly team is here to answer your questions.
                                                        </li>
                                                        <li
                                                                className="relative pl-4 my-2 opacity-0 animate-fadeInRepeat"
                                                                style={{ animationDelay: '1.5s' }}
                                                        >
                                                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
                                                                We’re dedicated to connecting you with exactly what you need.  </li>
                                                        <li
                                                                className="relative pl-4 my-2 opacity-0 animate-fadeInRepeat"
                                                                style={{ animationDelay: '2s' }} // Third item appears after 1.5s
                                                        >
                                                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
                                                                Feel free to reach out for personalized assistance and support.  </li>
                                                </ul>

                                                <style>
                                                        {`
    @keyframes fadeInRepeat {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      30% {
        opacity: 1;
        transform: translateY(0);
      }
      70% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
    .animate-fadeInRepeat {
      animation: fadeInRepeat 15s infinite; // Long duration, stops on screen for a long time
    }
  `}
                                                </style>

                                        </div>

                                </div>

                        </HeroSection> */}





                        <div className=' flex justify-center items-end md:h-screen w-[99vw] bg-black/50  mx-auto'
                            style={{

                                backgroundImage: `
url(${ContactUSImg3}) 
`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundBlendMode: 'overlay',
                        }}>
                                <div className=' md:h-[90vh] w-[100vw] mt-20 bg-red-200 md:mt-0 flex justify-center flex-col md:flex-row  items-center p-4 md:p-20  bg-transparent '>


                                        <div className=' rounded-lg w-full md:w-[40%]  flex  flex-col justify-center '
                                        data-aos="fade-up" data-aos-duration="1000"
                                        
                                        style={{
                                                // backgroundColor:'rgba(0,0,0,0.)'
                                        }}>


                                                <ContactForm2 />
                                                {/* <div className='w-full scale-90 flex justify-around mb-5 text-white'>
                                                <a href='/facebook' target="_blank" rel="noopener noreferrer"
                                                                                style={{ display: 'inline-block' }} >
                                                                                <FacebookIcon className='w-8 h-8 animate-pulse hover:scale-150 hover:animate-none  transition-transform duration-300 ease-in-out' />
                                                                        </a>
                                                                        <a href='/facebook' target="_blank" rel="noopener noreferrer"
                                                                                style={{ display: 'inline-block' }} >
                                                                                <InstagramIcon className='w-8 h-8 animate-pulse hover:scale-150 hover:animate-none  transition-transform duration-300 ease-in-out' />
                                                                        </a>
                                                                        <a href='/facebook' target="_blank" rel="noopener noreferrer"
                                                                                style={{ display: 'inline-block' }} >
                                                                                <TwitterIcon className='w-8 h-8 animate-pulse hover:scale-150 hover:animate-none  transition-transform duration-300 ease-in-out' />
                                                                        </a>
                                                                        <a href='/facebook' target="_blank" rel="noopener noreferrer"
                                                                                style={{ display: 'inline-block' }} >
                                                                                <LinkedInIcon className='w-8 h-8 animate-pulse hover:scale-150 hover:animate-none  transition-transform duration-300 ease-in-out' />
                                                                        </a>
                                                </div> */}

                                              
                                        </div>

                                        <div className='md:w-[60%] w-[98%] mt-10 md:mt-0 p-4 md:ms-5 rounded-r-lg'  data-aos="zoom-in" data-aos-duration="1000"
                                        style={{
                                                backgroundColor:'rgb(0,0,0,0.4)'
                                        }}>
                                             
                                                {/* <Map /> */}
                                                <ContactMap/>
                                                      {/* <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531864!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577fb68b55c2a0!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1631012902936!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe> */}
                                        </div>
                                </div>
                        </div>





                        
                        {/* <div className='h-auto md:h-[100vh] mt-20 flex justify-center  flex-col align-middle'
                                style={{

                                        backgroundImage: `
url(${ContactUSImg}) 
`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                }}>
                                <div className='w-[90%] rounded-lg p-3 lg:w-[95%] m-auto flex  flex-col lg:flex-row'>
                                        <div className='relative z-10 w-full lg:w-[50vw] h-full  md:mb-0 text-yellow-400 flex justify-center items-center' data-aos="zoom-in" data-aos-duration="2000">
                                                <div className='h-full md:w-[20%] md:flex justify-center items-center  hidden '>
                                                        <h1 className='ms-[100%] text-xl font-bold drop-shadow-lg z-50 border-2 border-yellow-400 p-4 shadow-lg backdrop-blur-md' data-aos="fade-right" data-aos-duration="2000">

                                                                CONTACT
                                                        </h1>
                                                </div>

                                                <div className="grid grid-cols-3 lg:mt-12 md:border-4 border-yellow-400 text-[#0060b5] md:rounded-full p-2 h-[80%] md:w-96 md:shadow-2xl md:h-96"
                                                        style={{ animationDuration: '4000ms' }}

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
                                                                <Tooltip title='Contact us through WhatsApp' arrow placement="top">
                                                                        <a href='/call' target="_blank" rel="noopener noreferrer"
                                                                                style={{ display: 'inline-block' }} >
                                                                                <WhatsAppIcon className='w-8 h-8 animate-pulse hover:scale-150 hover:animate-none  transition-transform duration-300 ease-in-out' />
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
                                                                <div className='text-[#0060b5] rounded-full  border-2 border-yellow-400 shadow-2xl bg-white' >
                                                                        <h1 className=' drop-shadow-2xl text-5xl font-bold m-5 '>B<sup>3</sup></h1>
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
                                                        <h1 className='me-[100%] text-xl font-bold drop-shadow-lg z-50  shadow-lg   p-4 backdrop-blur-md border-2 border-yellow-400 text-yellow-400' data-aos="fade-left" data-aos-duration="2000">BITBYBIT
                                                        </h1>
                                                </div>
                                        </div>

                                        <ContactForm />
                                </div>

                        </div> */}




                        
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

export default ContactUsPage;


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



                                                    {/* <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531864!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577fb68b55c2a0!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1631012902936!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe> */}
