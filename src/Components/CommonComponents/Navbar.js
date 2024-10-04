import React, { useState, useEffect } from "react";
import { Dropdown1, Dropdown2 } from "./Dropdown";
import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; // Import MUI Menu Icon
import CloseIcon from "@mui/icons-material/Close"; // Import MUI Close Icon
import { useLocation } from "react-router-dom";
import Logo from '../../Assets/Images/B3logo.png';

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Toggle dropdowns on click for mobile screens
  const toggleDropdown1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(!dropdown1);
    }
  };

  const toggleDropdown2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(!dropdown2);
    }
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth >= 960) {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => setDropdown1(false);

  const onMouseEnter2 = () => {
    if (window.innerWidth >= 960) {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => setDropdown2(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const triggerHeight = window.innerHeight * 0.05; // 5vh

      // Show navbar when user scrolls up or hasn't scrolled past 5vh
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY <= triggerHeight);

      // Save the current scroll position to compare on the next scroll
      setLastScrollY(currentScrollY);

      // Set the "scrolled" state if the user scrolls more than 5vh
      setScrolled(currentScrollY > triggerHeight);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all px-5 duration-300 w-[100vw] flex justify-between items-center h-[65px] ${
        scrolled ? "bg-black shadow-lg border-b-[1px] border-white" : "bg-transparent border-b-[1px] border-transparent"
      } ${showNavbar ? "top-0" : "-top-[100px]"}`}
      style={{ zIndex: 100 }}
    >
      {/* Logo */}
      <NavLink
        to="/"
        className="flex items-center text-[#0060b5] font-bold text-2xl"
        onClick={closeMobileMenu}
      >
        <img src={Logo} alt="logo" className="w-10 h-10" />
        &nbsp;BitByBit Solutions
      </NavLink>

      {/* Menu icon for mobile on the right side */}
      <div className="block md:hidden ml-auto" onClick={handleClick}>
        {click ? (
          <CloseIcon className="text-white text-3xl cursor-pointer" />
        ) : (
          <MenuIcon className="text-white text-3xl cursor-pointer" />
        )}
      </div>

      {/* Navbar Links */}
      <ul
  className={`${
    click
      ? "flex flex-col items-center w-full h-screen fixed z-50 top-16 left-0 justify-start bg-black py-32 space-y-8"
      : "hidden md:flex items-center"
  } transition-all duration-500`}
>
        <li className="">
          <NavLink
            to="/aboutB3"
            className={({ isActive }) =>
              `nav-links px-3 mx-1 py-1 text-lg border-2 border-transparent hover:border-white rounded-md ${
                isActive ? "border-white rounded-md font-semibold text-[#facc15]" : "text-white"
              }`
            }
            onClick={closeMobileMenu}
          >
            About B3
          </NavLink>
        </li>

        {/* Technology Dropdown */}
        <li
          className="relative cursor-pointer mb-20 md:mb-0  "
          onMouseEnter={onMouseEnter1}
          onMouseLeave={onMouseLeave1}
          onClick={toggleDropdown1} // Open on click in mobile
        >
          <span
            className={`px-3 mx-1 py-1 text-lg   flex items-center ${
              location.pathname === "/technology" || location.pathname === "/technology-services"
                ? "border-white border-2 rounded-md font-semibold text-[#facc15]"
                : "text-white"
            }`}
          >
            Technology
            
            <ArrowDropDownIcon  />
          </span>
          {dropdown1 && <Dropdown1 />}
        </li>

        {/* Recruitment Dropdown */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
          onClick={toggleDropdown2} // Open on click in mobile
        >
          <span
            className={`px-3 mx-1 py-1 text-lg flex items-center ${
              location.pathname === "/recruitment" || location.pathname === "/recruitment-services"
                ? "border-white border-2 rounded-md font-semibold text-[#facc15]"
                : "text-white"
            }`}
          >
            Recruitment <ArrowDropDownIcon />
          </span>
          {dropdown2 && <Dropdown2 />}
        </li>

        <li className="">
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `nav-links px-3 mx-1 py-1 text-lg border-2 border-transparent hover:border-white rounded-md ${
                isActive ? "border-white rounded-md font-semibold text-[#facc15]" : "text-white"
              }`
            }
            onClick={closeMobileMenu}
          >
            Clients
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `nav-links px-3 mx-1 py-1 text-lg border-2 border-transparent hover:border-white rounded-md ${
                isActive ? "border-white rounded-md font-semibold text-[#facc15]" : "text-white"
              }`
            }
            onClick={closeMobileMenu}
          >
            Careers
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `nav-links px-3 mx-1 py-1 border-2 border-transparent hover:border-white rounded-md text-lg ${
                isActive ? "border-white rounded-md font-semibold text-[#facc15]" : "text-white"
              }`
            }
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-black px-3 mx-1 py-1 italic text-2xl font-semibold border-b-2 border-transparent hover:border-white hover:text-yellow-400 hover:bg-transparent border-white hover:shadow-none ${
                isActive ? "bg-transparent text-yellow-400" : "bg-yellow-400 drop-shadow-lg shadow-md shadow-black"
              }`
            }
            style={{ fontFamily: "Lucida Serif" }}
            onClick={closeMobileMenu}
          >
            blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
