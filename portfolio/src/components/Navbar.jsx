// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
//import menu_open from '../assets/menu-icon.svg'

export default function Navbar() {
  return (
    <div className='navbar'>
        <h4 className='logo'>Bilha<span>.</span></h4>
        {/* <img src={menu_open} alt="icon_menu" /> */}
        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>Expertise</li>
            <li>Projects</li>
        </ul>
        <div className="nav-btn">Contact Me</div>
    </div>
  )
}
