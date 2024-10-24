import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; 
import CloseIcon from "@mui/icons-material/Close"; 
import Logo from '../../Assets/Images/B3logo.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from "@mui/material";
import { useTheme } from './ThemeProvider';
import { Scale } from "@mui/icons-material";

const techitems = [
  { title: "Home", path: "/technology" },
  { title: "Services", path: "/technology-services" },
  // Add more items as needed
];

const recruitmentitems = [
  { title: "Home", path: "/recruitment" },
  { title: "Services", path: "/recruitment-services" },
  // Add more items as needed
];

function Dropdown({ items, scrolled }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


//   <ul
//   onClick={handleClick}
//   className={`${
//     click ? "hidden" : `absolute w-[140px] list-none border-t-[1px] border-[#0060b5] lg:border-b-2 rounded-b-lg lg:border-white lg:border-t-0 lg:p-2 text-start shadow-lg transition-opacity duration-300 ${scrolled ? "bg-opacity-100 lg:border-b-[2px] rounded-lg bg-blue-200" : "bg-opacity-20"}`
//   }`}
// >
//   {items.map((item, index) => (
//     <li key={index} className="relative text-center bg-gray-700 lg:m-1 border-2 border-transparent hover:border-black dark:hover:border-white rounded-lg overflow-hidden">
//       <Link className="block text-white text-sm w-full h-full pl-2 p-3 no-underline" to={item.path} onClick={() => setClick(false)}>
//         {item.title}
//       </Link>
//     </li>
//   ))}
// </ul>

  return (
    <ul
      onClick={handleClick}
      className={`${
        click ? "hidden" : 
        `absolute w-full dark:bg-black  bg-white list-none border-t-[1px] lg:border-b-[1px] rounded-b-lg lg:border-t-0 lg:p-2 text-start shadow-lg transition-opacity duration-300 
        ${scrolled ? "bg-opacity-100 dark:border-b-2 border-b-[3px] rounded-lg  border-[#0060b5]  dark:border-white " : "dark:bg-opacity-20 bg-opacity-20"}`


      }`}
    >


      {items.map((item, index) => (
        <li key={index} className="relative text-center dark:bg-opacity-20 lg:m-1 border-2 border-transparent hover:border-black dark:hover:border-white rounded-lg overflow-hidden">
          <Link className="block text-black dark:text-white text-sm w-full h-full  p-2 no-underline" to={item.path} onClick={() => setClick(false)}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();



  
  const location = useLocation();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
      const triggerHeight = window.innerHeight * 0.05;

      if (currentScrollY > lastScrollY && currentScrollY > triggerHeight) {
        // Scrolling down, hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up or near the top, show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

//   <nav
//   className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all px-5 duration-300 w-[100vw] flex justify-between items-center h-[65px] ${
//     scrolled ? "bg-blue-200 shadow-lg border-b-2  text-black font-semibold" : "bg-transparent border-b-[1px] border-transparent text-white"
//   } ${showNavbar ? "top-0" : "-top-[65px]"}`} // Adjust the negative top value to match navbar height
//   style={{ zIndex: 100 }}
// >

useEffect(() => {
  console.log("Current theme:", theme); // Check the current theme in the console
}, [theme]);

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all px-5 duration-300 w-[100vw] flex justify-between items-center h-[65px]
         ${
        scrolled ? "dark:bg-black font-semibold dark:font-normal bg-white text-black dark:text-white  shadow-lg border-b-2 dark:border-b-[1px] border-[#0060b5] dark:border-white" : "bg-transparent border-b-[1px] border-transparent"
      } ${showNavbar ? "top-0" : "-top-[65px]"}`} // Navbar hidden when scrolled down
      style={{ zIndex: 100 }}
    >
      {/* Logo */}
      <NavLink
        to="/"
        className="flex items-center text-white  font-bold text-2xl md:text-lg xl:text-2xl"
        onClick={closeMobileMenu}
        style={{
          color: theme === 'dark' ? 'white' : '#0060b5',
        }}
      >
        <img src={Logo} alt="logo" className="w-10 h-10" />
        &nbsp;BitByBit Solutions
      </NavLink>

      {/* Menu icon for mobile on the right side */}
      <div className="block lg:hidden ml-auto" onClick={handleClick}>
        {click ? <CloseIcon className="text-white text-3xl cursor-pointer" /> : <MenuIcon className="text-white text-3xl cursor-pointer" />}
      </div>

      {/* Navbar Links */}
      <ul
        className={`${
          click
            ? "flex flex-col items-center w-full h-screen fixed z-50 top-16 left-0 justify-start bg-black py-32 space-y-8"
            : "hidden lg:flex items-center"
        } transition-all duration-500`}
      >
        <li>
          <NavLink
            to="/aboutB3"
            className={({ isActive }) =>
              `nav-links px-3 mx-1 py-1 border-2  hover:border-black dark:hover:border-white rounded-md text-lg ${
                isActive ? "dark:border-[#0060b5] border-black text-white rounded-md font-semibold bg-[#0060b5] dark:bg-transparent  " : "border-transparent"
              }`
            }
            onClick={closeMobileMenu}
          >
            About B3
          </NavLink>
        </li>

        {/* Technology Dropdown */}
        <li
          className="relative cursor-pointer mb-20 md:mb-0"
          onMouseEnter={onMouseEnter1}
          onMouseLeave={onMouseLeave1}
          onClick={toggleDropdown1}
        >
          <span
            className={`px-3 mx-1 py-1 text-lg flex items-center ${
              location.pathname === "/technology" || location.pathname === "/technology-services"
                  ? "nav-links px-3 mx-1 py-1 border-2  hover:border-black dark:hover:border-white rounded-md text-lg  dark:border-[#0060b5] border-black text-white font-semibold bg-[#0060b5] dark:bg-transparent "
                : ""
            }`}
          >
            Technology
            <ArrowDropDownIcon 
              className={`transform ${dropdown1 ? '-rotate-180' : 'rotate-0'} transition-transform duration-300`} 
            />
          </span>
          {dropdown1 && <Dropdown items={techitems} scrolled={scrolled} />}
        </li>

        {/* Recruitment Dropdown */}
        <li
          className="relative cursor-pointer py-5"
          style={{
            marginTop: dropdown1 && window.innerWidth < 1024 ? "90px" : "0px",
            transition: "margin-top 0.5s ease",
          }}
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
          onClick={toggleDropdown2}
        >
          <span
            className={`px-3 mx-1 py-1 text-lg flex items-center ${
              location.pathname === "/recruitment" || location.pathname === "/recruitment-services"
                ? "nav-links px-3 mx-1 py-1 border-2  hover:border-black dark:hover:border-white rounded-md text-lg  dark:border-[#0060b5] border-black text-white font-semibold bg-[#0060b5] dark:bg-transparent "
                : ""
            }`}
          >
            Recruitment
            <ArrowDropDownIcon 
              className={`transform ${dropdown2 ? '-rotate-180' : 'rotate-0'} transition-transform duration-300`} 
            />
          </span>
          {dropdown2 && <Dropdown items={recruitmentitems} scrolled={scrolled} />}
        </li>

        <li
          style={{
            marginTop: dropdown2 && window.innerWidth < 1024 ? "90px" : "0px",
            transition: "margin-top 0.5s ease",
          }}
        >
          <NavLink
            to="/clients"
            className={({ isActive }) =>
               `nav-links px-3 mx-1 py-1 border-2  hover:border-black dark:hover:border-white rounded-md text-lg ${
                isActive ? "dark:border-[#0060b5] border-black text-white rounded-md font-semibold bg-[#0060b5] dark:bg-transparent  " : "border-transparent"
              }`
            }
            onClick={closeMobileMenu}
          >
            Clients
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `nav-links px-3 mx-1 py-1 border-2  hover:border-black dark:hover:border-white rounded-md text-lg ${
                isActive ? "dark:border-[#0060b5] border-black text-white rounded-md font-semibold bg-[#0060b5] dark:bg-transparent  " : "border-transparent"
              }`
            }
            onClick={closeMobileMenu}
          >
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-links px-3 mx-1 py-1 border-2  hover:border-black dark:hover:border-white rounded-md text-lg ${
                isActive ? "dark:border-[#0060b5] border-black text-white rounded-md font-semibold bg-[#0060b5] dark:bg-transparent  " : "border-transparent"
              }`
            }
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-white px-3 mx-1 py-1 italic text-xl font-semibold border-b-2 hover:border-black dark:hover:border-white hover:text-[#0060b5] hover:bg-transparent border-white hover:shadow-none ${
                isActive ? "bg-transparent text-[#0060b5]" : "bg-[#0060b5] drop-shadow-lg shadow-md shadow-black"
              }`
            }
            style={{ fontFamily: "Lucida Serif" }}
            onClick={closeMobileMenu}
          >
            Blogs
          </NavLink>
        </li>

<li>

<IconButton
  sx={{
    ml: 1,
    padding: '2px',
    borderRadius: '30px',
    backgroundColor: theme === 'dark' ? 'gray' : 'white',
    border: theme === 'dark' ? '2px solid white' : '2px solid black',
    "&:hover": {
      transform: "scale(1.1)", // Correct way to apply scaling on hover
      transition: "transform 0.3s ease-in-out", // Optional: Adds smooth transition effect
    },
  }}
  onClick={toggleTheme}
  color="primary"
>
  {theme === 'dark' ? (
    <LightModeIcon sx={{ color: 'yellow' }} />
  ) : (
    <DarkModeIcon sx={{ color: 'black' }} />
  )}
</IconButton>

        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
