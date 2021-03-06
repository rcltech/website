import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="topnav" id="myTopnav">
      {/*eslint-disable-next-line*/}
      <a style={{ float: 'left' }} href="">
        <img
          className="logo"
          alt="logo"
          src={require('./Images/ClubLogo.png')}
        />
      </a>
      {/*eslint-disable-next-line*/}
      <a style={{ float: 'left' }} href="">
        R.C. Tech Club
      </a>
      <div className="links">
        <a href="#Team" className="btn btn-primary hvr-grow">
          Our Team
        </a>
        <a href="#Projects" className="btn btn-primary hvr-grow">
          Applications
        </a>
      </div>
    </div>
  );
};
export default NavBar;
