import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; 
import CloseIcon from "@mui/icons-material/Close"; 
import Logo from '../../Assets/Images/B3logo.png';

// Mocked menu items (you can replace these with actual imports if available)
const techitems = [
  { title: "Home", path: "technology" },
  { title: "Services", path: "technology-services" },
  // Add more items as needed
];

const recruitmentitems = [
  { title: "Home", path: "/recruitment" },
  { title: "Services", path: "/recruitment-services" },
  // Add more items as needed
];

// Reusable Dropdown component
function Dropdown({ items, scrolled }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={`${
        click ? "hidden" : `absolute w-[140px] bg-black list-none border-t-[1px] lg:border-t-0 border-white lg:p-2 text-start shadow-lg transition-opacity duration-300 ${scrolled ? "bg-opacity-100 lg:border-b-[1px] rounded-lg border-white" : "bg-opacity-20"}`
      }`}
    >
      {items.map((item, index) => (
        <li key={index} className="relative bg-black bg-opacity-20 lg:m-1 border-2 border-transparent hover:border-white rounded-lg overflow-hidden">
          <Link className="block text-white text-sm w-full h-full pl-2 p-3 no-underline" to={item.path} onClick={() => setClick(false)}>
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
      const triggerHeight = window.innerHeight * 0.05;

      setShowNavbar(currentScrollY < lastScrollY || currentScrollY <= triggerHeight);
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        className="flex items-center text-[#0060b5] font-bold text-2xl md:text-lg xl:text-2xl"
        onClick={closeMobileMenu}
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
          className="relative cursor-pointer mb-20 md:mb-0"
          onMouseEnter={onMouseEnter1}
          onMouseLeave={onMouseLeave1}
          onClick={toggleDropdown1}
        >
          <span
            className={`px-3 mx-1 py-1 text-lg flex items-center ${
              location.pathname === "/technology" || location.pathname === "/technology-services"
                ? "border-white border-2 rounded-md font-semibold text-[#facc15]"
                : "text-white"
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
            transition: "margin-top 0.5s ease",  // Adds smooth transition for marginTop
          }}
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
          onClick={toggleDropdown2}
        >
          <span
            className={`px-3 mx-1 py-1  text-lg flex items-center ${
              location.pathname === "/recruitment" || location.pathname === "/recruitment-services"
                ? "border-white border-2 rounded-md font-semibold text-[#facc15]"
                : "text-white"
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
            transition: "margin-top 0.5s ease",  // Adds smooth transition for marginTop
          }}
        >
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
        <li>
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
        <li>
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
        <li>
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
            Blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
