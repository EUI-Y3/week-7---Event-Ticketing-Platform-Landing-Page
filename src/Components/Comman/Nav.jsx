import React from 'react';
import './Nav.css';

const NavLinks = (props) => {
  return ( 
    <li className={props.className}>
      <a className="nav__link" href={props.to}>{props.text}</a>
    </li>
  );
}
export default NavLinks;