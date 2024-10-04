import React, { useState } from "react";
import { techitems } from "./menuitems";
import { recruitmentitems } from "./menuitems";
import { Link } from "react-router-dom";

function Dropdown1() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [isTech, setIsTech] = useState(true);

  return (
    <>
      <ul
        onClick={handleClick}
        className={`${
          click ? "hidden" : "absolute w-[140px] left-36 md:left-0 top-0 md:top-auto bg-black bg-opacity-20 list-none p-2 text-start shadow-lg"
        }`}
      >
        {techitems.map((item, index) => {
          return (
            <li
              key={index}
              className="relative bg-black bg-opacity-20 border-2 border-transparent hover:border-white rounded-md overflow-hidden"
            >
              <Link
                className="block text-white text-sm w-full h-full p-3 no-underline"
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

function Dropdown2() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={`${
          click ? "hidden" : "absolute w-[140px] left-36 md:left-0 top-0 md:top-auto bg-black bg-opacity-20 list-none p-2 text-start shadow-lg"
        }`}
      >
        {recruitmentitems.map((item, index) => {
          return (
            <li
              key={index}
              className="relative bg-black bg-opacity-20 border-2 border-transparent hover:border-white rounded-md overflow-hidden"
            >
              <Link
                className="block text-white text-sm w-full h-full p-3 no-underline"
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
