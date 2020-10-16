import React from 'react';

import {  
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <div className="menu" >
    <ul>
        <li aria-label="Home Button"><Link to="/">Home</Link></li>
        <li aria-label="About Button"><Link to="about">About</Link></li>
        <li aria-label="Login Button"><Link to="login">Login</Link></li>
    </ul>
</div>
  );
}

export default Menu;
