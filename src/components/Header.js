import React from 'react';
import './Header.css';

const Header = () => {
    return (
    
        <div>
           <img className="header-image" src={require('./Images/ClubLogo.png')}/>
            <div className="header-text">
                <h1>RC Tech Club</h1>
            </div>
        </div>
    );
}

export default Header;