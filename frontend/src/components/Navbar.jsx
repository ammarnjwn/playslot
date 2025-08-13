import React from 'react'
import '../styles/navbar.css'
import '../index.css'
import {Link} from 'react-router-dom'
import logo from '../assets/PlaySlotAlign.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <img className='logo-img' src={logo} alt="Logo" />
        </Link>
      </div>
      <div className='container-nav'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className='btn-container'>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login" className='login-btn'>Log In</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar