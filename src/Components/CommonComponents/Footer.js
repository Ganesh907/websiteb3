import React from "react";
import Imagelogo from "../../Assets/Images/B3logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
  return (
    <div
      className='relative h-[430px] '
      style={{ clipPath: "polygon(0% 0, 200% 0%, 200% 200%, 0 200%)" }}
    >
      <div className='relative h-[calc(100vh+430px)] -top-[100vh]'>
        <div className='h-[430px]  sticky top-[calc(154vh-800px)]'>

          <div className="pg-footer">
            <footer className="footer bg-blue-900 relative md:mt-0 mt-4">
              <div className="footer-content container md:mx-auto md:h-auto md:py-10">
                <div className="row md:flex md:flex-wrap">
                  <div className="footer-col md:w-full sm:w-1/2 lg:w-1/4 md:px-4 md:mt-10">
                    <div className="footer-logo md:mb-6">
                      <a className="footer-logo-link" href="/">
                        <img src={Imagelogo} alt="Imagelogo" className="md:w-20 w-10 h-10 md:h-20 md:pt-0 pt-2" />
                      </a>
                    </div>
                    <div className="footer-menu">
                      <h4 className="footer-menu-name text-xl text-white capitalize md:mb-8 relative font-medium">
                        Get Started
                        <span className="block w-12 h-0.5 bg-black absolute left-0 -bottom-2 mb-2 "></span>
                      </h4>
                      <ul className="footer-menu-list md:space-y-3 ">
                        <li>
                          <a href="/" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="/technology" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
                            Technology
                          </a>
                        </li>
                        <li>
                          <a href="/recruitment" className="text-base mt-4  hover:text-gray-400 text-white hover:pl-2 transition-all">
                            Recruitment
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-col md:w-full sm:w-1/2 lg:w-1/4 md:px-4 md:mt-20">
                    <div className="footer-menu">
                      <h4 className="footer-menu-name md:text-xl text-white capitalize md:mb-8 relative md:font-medium">
                        Company
                        <span className="block md:w-12 md:h-0.5 bg-black absolute left-0 -bottom-2 mb-2"></span>
                      </h4>
                      <ul className="footer-menu-list md:space-y-3">
                        <li>
                          <a href="/Contact" className="text-base mt-4  hover:text-gray-400 text-white hover:pl-2 transition-all">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a href="/Careers" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
                            Careers
                          </a>
                        </li>
                        <li>
                          <a href="/technology-clients" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
                            Technology Clients
                          </a>
                        </li>
                        <li>
                          <a href="/recruitment-clients" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
                            Recruitment Clients
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-col md:w-full sm:w-1/2 lg:w-1/4 md:px-4 md:mt-20">
                    <div className="footer-menu">
                      <h4 className="footer-menu-name text-xl  text-white capitalize md:mb-8 relative font-medium mb-2">
                        Quick Links
                        <span className="block w-12 h-0.5 bg-black absolute left-0 -bottom-2 mb-2"></span>
                      </h4>
                      <ul className="footer-menu-list md:space-y-3">
                        <li>
                          <a href="/technology-services" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
                            Technology Services
                          </a>
                        </li>
                        <li>
                          <a href="/recruitment-services" className="text-base mt-4 hover:text-gray-400 text-white hover:pl-2 transition-all">
                            Recruitment Services
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-col md:w-full sm:w-1/2 lg:w-1/4 md:px-4 md:mt-20">
                    <div className="footer-call-to-action">
                      <h4 className="footer-call-to-action-title text-xl text-white capitalize md:mb-4 relative font-medium">
                        You Call Us
                        <span className="block w-12 h-0.5 bg-black absolute left-0 -bottom-2 mb-2"></span>
                      </h4>
                      <p className="footer-call-to-action-link-wrapper">
                        <a href="tel:0124-64XXXX" className="text-base hover:text-gray-400 text-white hover:pl-2 transition-all">
                          (+91) 022 65510355
                        </a>
                      </p>
                    </div>
                    <div className="footer-call-to-action">
                      <h4 className="footer-call-to-action-title text-xl text-white capitalize md:mb-4 relative font-medium">
                        Address
                        <span className="block w-12 md:h-[3px] h-0.5 bg-black absolute left-0 -bottom-2 mb-2"></span>
                      </h4>
                      <p className="text-base text-white">
                        912 | 1st Floor | Building No 9 | Solitaire Corporate Park | Andheri Kurla Road | Chakala | Andheri (East) | Mumbai - 400 093
                      </p>
                    </div>
                    <div className="social-media md:flex flex md:gap-3 gap-2 mt-2 md:mt-2">
                      <a href="/facebook" className="social-links text-white hover:text-gray-900 bg-blue-500 rounded-full md:h-10 md:w-10 flex items-center justify-center transition-all">
                        <FacebookIcon className="md:text-xl" />
                      </a>
                      <a href="/instagram" className="social-links text-white hover:text-gray-900 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full md:h-10 md:w-10 flex items-center justify-center transition-all">
                        <InstagramIcon className="md:text-xl" />
                      </a>
                      <a href="/linkedin" className="social-links text-white hover:text-gray-900 bg-blue-500 rounded-full md:h-10 md:w-10 flex md:items-center md:justify-center items-end transition-all">
                        <LinkedInIcon className="md:text-xl" />
                      </a>
                      <a href="/twitter" className="social-links text-blue-500 hover:text-gray-900 bg-white rounded-full md:h-10 md:w-10 flex md:items-center md:justify-center  items-end transition-all">
                        <TwitterIcon className="md:text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-copyright bg-teal-700 text-white text-center py-4">
                <p className="text-sm">
                  ©2024. | BitByBit Solutions. | All rights reserved.
                </p>
              </div>
            </footer>
          </div>

        </div>

      </div>

    </div>

  );
};

export default Footer;

