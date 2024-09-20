import React, { useState, useEffect } from "react";
import { Dropdown1, Dropdown2 } from "./Dropdown";
import { NavLink } from "react-router-dom"; // Import NavLink
import "../../CSS_Files/Navbar.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY < lastScrollY || currentScrollY === 0);
    setLastScrollY(currentScrollY);
    setScrolled(window.scrollY > window.innerHeight / 2);
  };

  return (
    <>
      <nav className={`header-navbar ${scrolled ? "scrolled" : ""} ${showNavbar ? "show" : "hide"}`} style={{ zIndex: 100 }}>
        <NavLink to="/" className="navbar-logo  flex justify-center items-center" onClick={closeMobileMenu}>
        <div className="h-10 w-10 text-[#0060b5] bg-white  text-md flex items-center justify-center">
  B<sup>3</sup>
</div>

           &nbsp;BitByBit Solutions
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink 
              to="/aboutB3" 
              className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`} 
              onClick={closeMobileMenu}
            >
              About B3
            </NavLink>
          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
  <span className="nav-links cursor-pointer hover:border-transparent">
    Technology <ArrowDropDownIcon />
  </span>
  {dropdown1 && <Dropdown1 />}
</li>

<li className="nav-item" onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
  <span className="nav-links cursor-pointer hover:border-transparent">
    Recruitment <ArrowDropDownIcon />
  </span>
  {dropdown2 && <Dropdown2 />}
</li>

          <li className="nav-item">
            <NavLink 
              to="/contactus" 
              className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`} 
              onClick={closeMobileMenu}
            >
              Contact 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/careers" 
              className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`} 
              onClick={closeMobileMenu}
            >
              Careers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/partners" 
              className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`} 
              onClick={closeMobileMenu}
            >
              Partners
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/blogs" 
              className={({ isActive }) => `text-black nav-links rounded-md border-2 ${isActive ? 'bg-yellow-600' : 'bg-yellow-400'}  hover:bg-transparent border-white hover:border-yellow-400 hover:text-yellow-400`} 
              onClick={closeMobileMenu}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .nav-links {
          position: relative;
          display: inline-block;
          transition: all 0.3s ease; /* Smooth transition for hover effects */
        }
        .nav-links.active {
          // font-weight: bold;
          color:#facc15;
          border:2px solid white;
          border-radius:6px;
        }
        .nav-links:after {
          content: "";
          position: absolute;
          transform: scaleX(0);
          height: 3px;
          bottom: 0;
          left: 0;
          background-color: #0060b5;
          transform-origin: bottom right;
          transition: transform 250ms ease-in-out;
        }
        .nav-links:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .header-navbar {
          transition: top 0.3s;
          position: fixed;
          top: 0;
          z-index: 10;
        }
        .header-navbar.hide {
          top: -100px; /* Adjust this value based on your navbar height */
        }
        .header-navbar.show {
          top: 0;
        }
      `}</style>
    </>
  );
}

export default Header;
