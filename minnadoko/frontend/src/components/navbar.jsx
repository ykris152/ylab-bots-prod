import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
 return (
  <div className="App">
    <header className="App-header">
      <nav className="navbar">
        <a href='/' className="logo">Minnadoko - YLab </a>
        <ul className="navMenu" >
          <li>
            <a href='/' className='navLink'>Home</a>
          </li>
          <li>
            <a href='/editmember' className='navLink'>Edit Member</a>
          </li>
          {/* <li>
            <a href='#home' className='navLink'>Contact</a>
          </li> */}
        </ul>
      </nav>
    </header>
  </div>
 );
}