import React, { useState } from 'react';
import { techitems } from './menuitems';
import { recruitmentitems } from './menuitems';
import '../../CSS_Files/Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown1() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [isTech, setIsTech] = useState(true);



  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menuu clicked' : 'dropdown-menuu'}>

        {

          techitems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          }
          )


        }

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
        className={click ? 'dropdown-menuu clicked' : 'dropdown-menuu'}>

        {
          recruitmentitems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })


        }

      </ul>
    </>
  );

}

export {
  Dropdown1,
  Dropdown2,
}
