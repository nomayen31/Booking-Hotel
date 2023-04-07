import React from 'react';
import"./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navContainer">
          <Link to="/"><span className="logo"><h2>Get Hotel's</h2></span></Link>
          {/* <span className="logo"><h2>Get Hotel's</h2></span> */}
          <div className="navItems">
            {/* <button className="navButton">Register</button>
            <button className="navButton">Login</button> */}
            <button className="btn btn-success">Register</button>
            <button className="btn btn-success ml-10">Login</button>
          </div>
        </div>
      </div>
    )
  }
export default Navbar;


// 16 min 