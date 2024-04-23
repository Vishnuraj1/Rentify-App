import React from 'react'
import './Login.css'
import  { useNavigate } from 'react-router-dom'
import google from '../../assets/SocialIcons/googleLogo.webp'
import { Link } from 'react-router-dom';

function Login() {
  const handleLogin = (e)=>{
    e.preventDefault()
  
}
  return (
    <div>
        <div>
      <div className="nav">
        <h1>RENTIFY</h1>
      </div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" ></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            // value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            // value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
       <Link to="/signUp">
        <a>Signup</a>
       </Link>
      </div>
    </div>
    </div>
  )
}

export default Login