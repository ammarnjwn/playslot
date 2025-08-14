import React, {useState} from 'react'
import '../styles/signup.css'
import logo from '../assets/PlaySlotLogo.png'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await res.json();
      console.log(data);

      if (data.success) {
        navigate('/')
      } else {
        alert(data.message);
      }
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className='full-cont'>
      <div className="details-cont">
        <div className="signup-box">
          <Link to='/'>
            <img className='logo-signup' src={logo}/>
          </Link>
          <div className="signup-input">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='email'>Email</label>
                <input type="email" id='email' name='email' value={form.email} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor='pass'>Password</label>
                <input type="password" id='pass' name='password' value={form.password} onChange={handleChange}/>
              </div>
              <button type='submit'>Login</button>
            </form>
          </div>
          <div className="login-link">
            <h6>Do not have an account yet? <span><Link to='/signup'>Sign up</Link></span></h6>
          </div>
        </div>
      </div>
      <div className="img-signup"></div>
    </div>
  )
}

export default Login