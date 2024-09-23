import React, { useState, useEffect } from "react";
import { Dropdown1, Dropdown2 } from "./Dropdown";
import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; // Import MUI Menu Icon
import CloseIcon from "@mui/icons-material/Close"; // Import MUI Close Icon

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY === 0);
      setLastScrollY(currentScrollY);
      setScrolled(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all px-10 duration-300 w-[85%] flex justify-between items-center h-[65px] ${
        scrolled ? "bg-black shadow-lg rounded-lg" : "bg-transparent"
      } ${showNavbar ? "top-0" : "-top-[100px]"}`}
      style={{ zIndex: 100 }}
    >
      {/* Logo */}
      <NavLink
        to="/"
        className="flex items-center text-[#0060b5] font-bold text-xl"
        onClick={closeMobileMenu}
      >
        <div className="h-10 w-10 text-[#0060b5] bg-white rounded-md  flex items-center justify-center font-semibold">
          B<sup>3</sup>
        </div>
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
            ? "flex flex-col items-start w-full h-screen absolute top-16 left-0 bg-black p-4 z-40"
            : "hidden md:flex items-center"
        } transition-all duration-500`}
      >
        <li className="">
          <NavLink
            to="/aboutB3"
            className={({ isActive }) =>
              `nav-links text-white px-3 mx-1 py-1 text-lg border-2 border-transparent hover:border-white rounded-md  ${
                isActive ? "border-white rounded-md  font-semibold text-[#facc15] " : ""
              }`
            }
            onClick={closeMobileMenu}
          >
            About B3
          </NavLink>
        </li>
        <li
          className="  relative cursor-pointer"
          onMouseEnter={onMouseEnter1}
          onMouseLeave={onMouseLeave1}
        >
          <span className="text-white px-3 mx-1 py-1 text-lg flex items-center hover:border-transparent">
            Technology <ArrowDropDownIcon />
          </span>
          {dropdown1 && <Dropdown1 />}
        </li>
        <li
          className="  relative cursor-pointer"
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
        >
          <span className="text-white px-3 mx-1 py-1 text-lg flex items-center hover:border-transparent">
            Recruitment <ArrowDropDownIcon />
          </span>
          {dropdown2 && <Dropdown2 />}
        </li>
        <li className=" ">
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `nav-links text-white px-3 mx-1 py-1 border-2 border-transparent hover:border-white rounded-md text-lg ${
                isActive ? "border-white rounded-md  font-semibold text-[#facc15]" : ""
              }`
            }
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
        <li className=" ">
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `nav-links text-white px-3 mx-1 py-1 text-lg border-2 border-transparent hover:border-white rounded-md  ${
                isActive ? "border-white rounded-md  font-semibold text-[#facc15]" : ""
              }`
            }
            onClick={closeMobileMenu}
          >
            Careers
          </NavLink>
        </li>
        <li className=" ">
          <NavLink
            to="/partners"
            className={({ isActive }) =>
              `nav-links text-white px-3 mx-1 py-1 text-lg border-2 border-transparent hover:border-white rounded-md  ${
                isActive ? "border-white rounded-md  font-semibold text-[#facc15]" : ""
              }`
            }
            onClick={closeMobileMenu}
          >
            Partners
          </NavLink>
        </li>
        <li className=" ">
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-black bg-yellow-400 hover:bg-transparent hover:border-yellow-400 hover:text-yellow-400 rounded-md border-2 border-white px-3 mx-1 py-1 ${
                isActive ? "bg-yellow-600" : ""
              }`
            }
            onClick={closeMobileMenu}
          >
            Blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
