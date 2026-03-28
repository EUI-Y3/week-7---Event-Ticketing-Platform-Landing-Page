import React from 'react';
import './Header.css';
import NavLinks from '../Comman/Nav';
import Logo from '../../Assets/Logo.svg';
import World from '../../Assets/world icon.svg';
 
const Header = () => {
    return ( 
        <>
         <header>
   <img src={Logo} alt="" />
   <nav className="nav">
  <ul className="nav__list">
  <NavLinks text="Home" to="/" />
  <NavLinks text="Events" to="" />
  <NavLinks text="About" to="" />
  <NavLinks text="Contact" to="" />
     </ul>
      </nav>
      <button className='header_button'>
    <img className='button_icon' src={World} alt="" />
    <h6 className='button_text'>Ar</h6>
      </button>
      </header>
        </>
     );
}
 
export default Header ;