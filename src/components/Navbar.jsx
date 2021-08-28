import React  from 'react';
import { NavLink } from 'reactstrap';

const NavbarComp = (props) => {
  return (
    <div>
            <nav  className="nav ">
                <ul className="nav-list">
                <li>
                    <NavLink className="white" href="#welcome-section">About</NavLink>
                </li>
               
                <li>
                    <NavLink href="#skills">Skills</NavLink>
                </li>
                <li>
                    <NavLink href="#Projects">Work</NavLink>
                </li>
                <li>
                    <NavLink href="#contact">Contact</NavLink>
                </li>
                </ul> 
            </nav>
    </div>
  );
}

export default NavbarComp;