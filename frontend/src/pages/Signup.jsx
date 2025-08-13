import React from 'react'
import '../styles/signup.css'
import logo from '../assets/PlaySlotLogo.png'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='full-cont'>
      <div className="details-cont">
        <div className="signup-box">
          <Link to='/'>
            <img className='logo-signup' src={logo}/>
          </Link>
          <div className="signup-input">
            <form>
              <div>
                <label htmlFor='name'>Name</label>
                <input type="text" id='name'/>
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input type="email" id='email'/>
              </div>
              <div>
                <label htmlFor='pass'>Password</label>
                <input type="password" id='pass'/>
              </div>
            </form>
          </div>
          <div className="login-link">
            <h6>Already have an account? <span><Link to='/login'>Sign in</Link></span></h6>
          </div>
        </div>
      </div>
      <div className="img-signup"></div>
    </div>
  )
}

export default Signup