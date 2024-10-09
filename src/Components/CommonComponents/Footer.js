// import React from "react";
// import Imagelogo from "../../Assets/Images/B3logo.png";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';


// const Footer = () => {
//   return (
//     <div
//       className='relative h-[430px] '
//       style={{ clipPath: "polygon(0% 0, 200% 0%, 200% 200%, 0 200%)" }}
//     >
//       <div className='relative h-[calc(100vh+430px)] -top-[100vh]'>
//         <div className='h-[430px]  sticky top-[calc(154vh-800px)]'>

//           <div className="pg-footer">
//             <footer className="footer bg-blue-900 relative md:mt-0 mt-4">
//               <div className="footer-content container md:mx-auto md:h-auto md:py-10">
//                 <div className="row md:flex md:flex-wrap">
//                   <div className="footer-col md:w-full sm:w-1/2 lg:w-1/4 md:px-4 md:mt-10">
//                     <div className="footer-logo md:mb-6">
//                       <a className="footer-logo-link" href="/">
//                         <img src={Imagelogo} alt="Imagelogo" className="md:w-20 w-10 h-10 md:h-20 md:pt-0 pt-2" />
//                       </a>
//                     </div>
//                     <div className="footer-menu">
//                       <h4 className="footer-menu-name text-xl text-white capitalize md:mb-8 relative font-medium">
//                         Get Started
//                         {/* <span className="block w-12 h-0.5 bg-black absolute left-0 -bottom-2 mb-2 "></span> */}
//                       </h4>
//                       <ul className="footer-menu-list md:space-y-3 ">
//                         <li>
//                           <a href="/" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
//                             Home
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/technology" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
//                             Technology
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/recruitment" className="text-base mt-4  hover:text-gray-400 text-white hover:pl-2 transition-all">
//                             Recruitment
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="footer-col md:w-full sm:w-1/2 lg:w-1/4 md:px-4 md:mt-20">
//                     <div className="footer-menu">
//                       <h4 className="footer-menu-name md:text-xl text-white capitalize md:mb-8 relative md:font-medium">
//                         Company
//                         {/* <span className="block md:w-12 md:h-0.5 bg-black absolute left-0 -bottom-2 mb-2"></span> */}
//                       </h4>
//                       <ul className="footer-menu-list md:space-y-3">
//                         <li>
//                           <a href="/Contact" className="text-base mt-4  hover:text-gray-400 text-white hover:pl-2 transition-all">
//                             Contact
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/Careers" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
//                             Careers
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/technology-clients" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
//                             Technology Clients
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/recruitment-clients" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
//                             Recruitment Clients
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="footer-col md:w-full sm:w-1/2 lg:w-1/4 md:px-4 md:mt-20">
//                     <div className="footer-menu">
//                       <h4 className="footer-menu-name text-xl  text-white capitalize md:mb-8 relative font-medium mb-2">
//                         Quick Links
//                         {/* <span className="block w-12 h-0.5 bg-black absolute left-0 -bottom-2 mb-2"></span> */}
//                       </h4>
//                       <ul className="footer-menu-list md:space-y-3">
//                         <li>
//                           <a href="/technology-services" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
//                             Technology Services
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/recruitment-services" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
//                             Recruitment Services
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="footer-col md:w-full sm:w-1/2 lg:w-1/4 md:px-4 md:mt-20">
//                     <div className="footer-call-to-action">
//                       <h4 className="footer-call-to-action-title text-xl text-white capitalize md:mb-4 relative font-medium">
//                         You Call Us
//                         {/* <span className="block w-12 h-0.5 bg-black absolute left-0 -bottom-2 mb-2"></span> */}
//                       </h4>
//                       <p className="footer-call-to-action-link-wrapper">
//                         <a href="tel:0124-64XXXX" className="text-base hover:text-gray-400 text-white hover:pl-2 transition-all">
//                           (+91) 022 65510355
//                         </a>
//                       </p>
//                     </div>
//                     <div className="footer-call-to-action">
//                       <h4 className="footer-call-to-action-title text-xl text-white capitalize md:mb-4 relative font-medium">
//                         Address
//                         {/* <span className="block w-12 md:h-[3px] h-0.5 bg-black absolute left-0 -bottom-2 mb-2"></span> */}
//                       </h4>
//                       <p className="text-base text-white">
//                         912 | 1st Floor | Building No 9 | Solitaire Corporate Park | Andheri Kurla Road | Chakala | Andheri (East) | Mumbai - 400 093
//                       </p>
//                     </div>
//                     <div className="social-media md:flex flex md:gap-3 gap-2 mt-2 md:mt-2">
//                       <a href="/facebook" className="social-links text-white hover:text-gray-900 bg-blue-500 rounded-full md:h-10 md:w-10 flex items-center justify-center transition-all">
//                         <FacebookIcon className="md:text-xl" />
//                       </a>
//                       <a href="/instagram" className="social-links text-white hover:text-gray-900 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full md:h-10 md:w-10 flex items-center justify-center transition-all">
//                         <InstagramIcon className="md:text-xl" />
//                       </a>
//                       <a href="/linkedin" className="social-links text-white hover:text-gray-900 bg-blue-500 rounded-full md:h-10 md:w-10 flex md:items-center md:justify-center items-end transition-all">
//                         <LinkedInIcon className="md:text-xl" />
//                       </a>
//                       <a href="/twitter" className="social-links text-blue-500 hover:text-gray-900 bg-white rounded-full md:h-10 md:w-10 flex md:items-center md:justify-center  items-end transition-all">
//                         <TwitterIcon className="md:text-xl" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="footer-copyright bg-teal-700 text-white text-center py-4">
//                 <p className="text-sm">
//                   ©2024. | BitByBit Solutions. | All rights reserved.
//                 </p>
//               </div>
//             </footer>
//           </div>

//         </div>

//       </div>

//     </div>

//   );
// };

// export default Footer;

// import React from "react";
// import Imagelogo from "../../Assets/Images/B3logo.png";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import '../../CSS_Files/NotFoundPage.css'; 




// const Footer = () => {

//   const dots = Array.from({ length: 3 }, (_, index) => (
//     <div
//       key={index}
//       className="h-5 w-5 bg-white rounded-md mx-1 animate-spin"
//     />
//   ));

//   return (
//     <footer className="bg-gray-900 flex justify-center items-center text-white py-5 ">
//       <div className="container ">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-2 p-10 mx-10 rounded-md border-2 shadow-lg shadow-black border-[#0060b5]">
//           <div>

//             <a href="/" className="flex items-center mb-4">
//               <img src={Imagelogo} alt="Imagelogo" className="w-24 h-24" />
//             </a>

//         <div className='p-2 flex flex-col items-start '>
//           <div className="animate-bounce  flex duration-1000 justify-center items-end h-24 w-24">
//             <div
//               className="bg-white rounded-md p-5 animate-alternate-colors"
//               style={{ boxShadow: "0 4px 0 rgba(0, 0, 0, 0.2)" }}
//             >
//               <h1 className='font-bold text-alternate-colors text-4xl '>B<sup>3</sup></h1>
//             </div>
//           </div>

//           <div className='h-10 flex justify-center items-center '>
//             {dots}
//           </div>
//         </div>




//             <ul className="space-y-2 mt-2">
//               <li><a href="/technology" className="hover:text-teal-400 transition-colors duration-300 ">Technology Home &rarr;</a></li>
//               <li><a href="/recruitment" className="hover:text-teal-400 transition-colors duration-300">Recruitment Home &rarr;</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Company </h4>
//             <ul className="space-y-2">



//               <li>
//       <a
//         href="/contactus"
//         className="group relative inline-flex items-center overflow-hidden px-2 py-2 transition-colors duration-300 border-l-2 border-white "
//       >
//         <span className="relative z-10 transition-colors duration-300 group-hover:text-white  ">
//           Contact
//         </span>
//         <span className="ml-2 relative z-10 transition-transform  duration-300 group-hover:translate-x-1">
//           &rarr;
//         </span>
//         <span className="absolute inset-y-0 left-0 w-full bg-[#0060b5] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
//       </a>
//     </li>



//               <li><a href="/Careers" className="hover:text-teal-400 transition-colors duration-300">Careers &rarr;</a></li>
//               <li><a href="/clients" className="hover:text-teal-400 transition-colors duration-300">Clients &rarr;</a></li>
         
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="/technology-services" className="hover:text-teal-400 transition-colors duration-300">Technology Services &rarr;</a></li>
//               <li><a href="/recruitment-services" className="hover:text-teal-400 transition-colors duration-300">Recruitment Services &rarr;</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h4>
//             <p className="mb-4">(+91) 022 65510355</p>
//             <p className="mb-4">
//               912 | 1st Floor | Building No 9 | Solitaire Corporate Park | Andheri Kurla Road | Chakala | Andheri (East) | Mumbai - 400 093
//             </p>
//             <div className="flex space-x-4 items-end mt-8 animate-pulse">
//      <div className="relative group">
//     <a href="/facebook" className="text-blue-600 hover:text-blue-400 transition-colors duration-300">
//       <FacebookIcon />
//     </a>
//     <span className="absolute bottom-full mb-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-white transition-opacity duration-300">
//       Facebook
//     </span>
//   </div>

//   <div className="relative group ">
//     <a href="/instagram" className="text-pink-500 hover:text-pink-400 transition-colors duration-300">
//       <InstagramIcon />
//     </a>
//     <span className="absolute bottom-full mb-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-white transition-opacity duration-300">
//       Instagram
//     </span>
//   </div>

//   <div className="relative group">
//     <a href="/linkedin" className="text-blue-700 hover:text-blue-500 transition-colors duration-300">
//       <LinkedInIcon />
//     </a>
//     <span className="absolute bottom-full mb-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-white transition-opacity duration-300">
//       LinkedIn
//     </span>
//   </div>

//   <div className="relative group">
//     <a href="/twitter" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
//       <TwitterIcon />
//     </a>
//     <span className="absolute bottom-full mb-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-white-700 transition-opacity duration-300">
//       Twitter
//     </span>
//   </div>
// </div>

//           </div>
//         </div>
     
//       </div>
//     </footer>
//   );
// };













import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../../CSS_Files/NotFoundPage.css'; // Import custom CSS
import Imagelogo from "../../Assets/Images/B3logo.png";
import Logo from '../../Assets/Images/B3logo.png'

const Footer = () => {

  const currentYear = new Date().getFullYear(); 
  const dots = Array.from({ length: 3 }, (_, index) => (
    <div key={index} className="h-5 w-5 bg-white  mx-2 rounded-sm animate-spin " style={{animationDuration:'2000ms'}} />  ));

  // Reusable class for animated links
  const linkClass = "group relative inline-flex items-center overflow-hidden px-2 py-2 transition-colors duration-300 ";

  // Reusable content for animated hover effect
  const AnimatedLink = ({ href, text }) => (
    <a 
      href={href} 
      className={`group relative border-l-2 border-transparent hover:border-white transition-all duration-300 ${linkClass}`}
    >
      <span className="relative z-10 group-hover:text-white ">{text}</span>
      <span className="ml-2 hidden relative md:block z-10 transition-transform group-hover:translate-x-1">&rarr;</span>
      <span className="absolute inset-y-0 -left-1 w-full bg-[#0060b5] translate-x-[-100%] group-hover:translate-x-1 transition-transform duration-500 ease-in-out"></span>
    </a>
  );

  return (
    <footer className=" flex justify-center items-center bg-gray-900 text-white py-5">
       {/* <div className=" bg-blue-950 mx-10 rounded-md border-2 shadow-lg shadow-black border-[#0060b5]"></div> */}
      <div className="  mx-10 rounded-md border-2 shadow-lg shadow-black border-[#0060b5]">
        <div className="grid grid-cols-1  md:grid-cols-4 gap-x-8 md:px-10 px-5 pt-10 relative overflow-hidden">
          {/* Letter A as a background element */}
          {/* <span className="absolute text-9xl animate-backgroundLetter">
          <div className="rounded-md p-5  scale-150 opacity-60 bg-[#0060b5] animate-spin  " style={{ boxShadow: "0 4px 0 rgba(0, 0, 0, 0.2)" }}>
                <h1 className="font-bold  text-4xl text-white ">B<sup>3</sup></h1>
              </div>
          </span> */}


          <div className="flex flex-col items-center">
            <div className="animate-bounce flex duration-1000 justify-center items-end h-24 w-24 ">
              <div className="bg-white  animate-alternate-colors" style={{ boxShadow: "0 4px 0 rgba(0, 0, 0, 0.2)" }}>
                {/* <h1 className="font-bold text-alternate-colors text-4xl">B<sup>3</sup></h1> */}
                <img src={Logo} alt="" className="h-16 w-16"/>
              </div>
            </div>
 {/* <a href="/" className="flex items-center mb-4 z-10">
              <img src={Imagelogo} alt="Imagelogo" className="w-24 h-24" />
            </a> */}
            <div className="h-10 flex justify-center items-center ">{dots}</div>
            {/* <h1 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">BitByBit Solutions</h1> */}
            <div className=" w-full">
            <h4 className="text-2xl  font-semibold md:mb-4 border-y-2 text-white w-full  border-white md:py-1 py-2 text-center mt-5">BitByBit Solutions</h4>
            {/* <ul className="">
              <li><AnimatedLink href="/technology" text="Technology Home" />&nbsp;</li>
              <li><AnimatedLink href="/recruitment" text="Recruitment Home" /></li>
            </ul> */}
            </div>
          </div>
         

          <div>
            <h4 className="md:text-lg  text-xl text-center md:text-left font-semibold mb-4 border-b border-gray-700 pb-2 mt-10 md:mt-0">Company</h4>
            <ul className=" space-y-[2px]">
              <li><AnimatedLink href="/aboutB3" text="About B3" /></li>
              <li><AnimatedLink href="/contactus" text="Contact" /></li>
              <li><AnimatedLink href="/Careers" text="Careers" /></li>
              <li><AnimatedLink href="/clients" text="Clients" /></li>
            </ul>
          </div>

          <div>
            <h4 className="md:text-lg  text-xl text-center md:text-left   font-semibold mb-4 border-b border-gray-700 pb-2  mt-4 md:mt-0">Quick Links</h4>
            <ul className="space-y-[2px]">
            <li><AnimatedLink href="/technology" text="Technology Home" />&nbsp;</li>
              <li><AnimatedLink href="/technology-services" text="Technology Services" /></li>
            <li><AnimatedLink href="/recruitment" text="Recruitment Home" /></li>
              <li><AnimatedLink href="/recruitment-services" text="Recruitment Services" /></li>
            </ul>
          </div>

          <div> 
            <h4 className="md:text-lg  text-xl text-center md:text-left   font-semibold mb-4 border-b border-gray-700 pb-2  mt-4 md:mt-0">Contact Us</h4>
            <div className="md:space-y-2">
            <p className="mb-4">(+91) 022 65510355</p>
            <div>

            
            <p className=" text-base">912 | 1st Floor | Building No 9 | Solitaire Corporate Park | Andheri Kurla Road | Chakala | Andheri (East) | Mumbai - 400 093</p>
            <div className="flex space-x-4 items-end md:mt-8 mt-2 animate-pulse">
              {[
                { href: "/facebook", icon: <FacebookIcon />, color: "text-blue-600" },
                { href: "/instagram", icon: <InstagramIcon />, color: "text-pink-500" },
                { href: "/linkedin", icon: <LinkedInIcon />, color: "text-blue-700" },
                { href: "/twitter", icon: <TwitterIcon />, color: "text-blue-400" }
              ].map(({ href, icon, color }, index) => (
                <div key={index} className="relative group">
                  <a href={href} className={`${color} hover:${color.replace('-600', '-400')} transition-colors duration-300`}>
                    {icon}
                  </a>
                  <span className="absolute bottom-full mb-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-white transition-opacity duration-300">
                    {href.replace("/", "").charAt(0).toUpperCase() + href.replace("/", "").slice(1)}
                  </span>
                </div>
              ))}
            </div>
            </div>
            </div>
          </div>




         


         

        </div>

        <div className="footer-copyright w-[100%] text-center my-2 ">
                 <p className="text-sm">

          
                   © {currentYear}.  |  BitByBit Solutions.  |  All rights reserved.
                 </p>
               </div>
             
      </div>
    </footer>
  );
};

export default Footer;
