import React from 'react';
import"./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navContainer">
          <span className="logo"><h2>Get Hotel's</h2></span>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      </div>
    )
  }
export default Navbar;


// 16 min 