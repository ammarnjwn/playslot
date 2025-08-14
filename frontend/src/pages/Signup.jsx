import React, { useState } from "react";
import "../styles/signup.css";
import logo from "../assets/PlaySlotLogo.png";
import { Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        alert("User registered successfully!");
      } else {
        alert(data.message);
      }
    } catch (e) {
      console.error("Error happen. User is not registered!!");
    }
  };

  return (
    <div className="full-cont">
      <div className="details-cont">
        <div className="signup-box">
          <Link to="/">
            <img className="logo-signup" src={logo} />
          </Link>
          <div className="signup-input">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
          <div className="login-link">
            <h6>
              Already have an account?{" "}
              <span>
                <Link to="/login">Sign in</Link>
              </span>
            </h6>
          </div>
        </div>
      </div>
      <div className="img-signup"></div>
    </div>
  );
}

export default Signup;
