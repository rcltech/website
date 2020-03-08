import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return(
        <div className="topnav" id="myTopnav">
            <a href="#" className="btn btn-primary hvr-grow">Home</a>
            <a href="#Team" className="btn btn-primary hvr-grow">Our Team</a>
            <a href="#Projects" className="btn btn-primary hvr-grow">Projects</a>
        </div>
    );
}
export default NavBar;