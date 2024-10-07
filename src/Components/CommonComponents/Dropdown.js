import React, { useState } from "react";
import { techitems } from "./menuitems";
import { recruitmentitems } from "./menuitems";
import { Link } from "react-router-dom";

function Dropdown1({scrolled}) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [isTech, setIsTech] = useState(true);

  return (
    <>
       <ul
      onClick={handleClick}
      className={`${
        click ? "hidden" : `absolute w-[140px] left-40 lg:left-0 top-3 lg:top-auto bg-black list-none lg:p-2 text-start shadow-lg transition-opacity duration-300 border-l-[1px]  lg:border-l-0  ${scrolled ? "bg-opacity-100 lg:border-b-[1px] rounded-lg border-white" : "bg-opacity-20"}`
      }`}
    >
        {techitems.map((item, index) => {
          return (
            <li
              key={index}
              className="relative bg-black bg-opacity-20 lg:m-1 border-2 border-transparent hover:border-white rounded-lg overflow-hidden"
            >
              <Link
                className="block text-white text-sm w-full h-full pl-2   p-1 lg:p-3 no-underline"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Dropdown2({scrolled}) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
       <ul
      onClick={handleClick}
      className={`${
        click ? "hidden" : `absolute w-[140px] left-40 lg:left-0 top-3 lg:top-auto bg-black list-none lg:p-2 text-start shadow-lg transition-opacity duration-300 border-l-[1px]  lg:border-l-0  ${scrolled ? "bg-opacity-100 lg:border-b-[1px] rounded-lg border-white" : "bg-opacity-20"}`
      }`}
    >
        {recruitmentitems.map((item, index) => {
          return (
            <li
              key={index}
              className="relative bg-black bg-opacity-20 border-2  lg:m-1 border-transparent hover:border-white rounded-lg overflow-hidden"
            >
              <Link
                className="block text-white text-sm w-full h-full  p-1 lg:p-3 pl-2    no-underline"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export { Dropdown1, Dropdown2 };
