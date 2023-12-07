import React from 'react'
import './Header.css';
import Vector from '../assets/vector.svg'

function Header() {
  return (
    <header className='header'>
       <div className='logo-container'>
          <img src={Vector} alt="vector"/>
          <div className="ig-studio">IGSTUDIO</div>
       </div>
       <nav className="navigation">
          <ul>
            <li>Home</li>
            <li>Attorneys</li>
            <li>Practice Areas</li>
            <li>About Us</li>
          </ul>
       </nav>
       <button className='contact-button'>Contact Now</button>
    </header>
  )
}

export default Header
