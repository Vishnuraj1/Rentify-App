import React from 'react'
import './Login.css'
import  { useNavigate } from 'react-router-dom'
import google from '../../assets/SocialIcons/googleLogo.webp'
function Login() {
  const Navigate = useNavigate()
  return (
    <div>
        <div>
      <div className="nav">
        <h1>RENTIFY</h1>
      </div>
      <div className="container">
        <div className="login-container">
          <h1>Login</h1><br />
          <form action="your-login-endpoint" method="post">
            <label htmlFor="Username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your phone number or email" required />
            <br /><br />
            <label htmlFor="password">Password</label><br />
            <input type="password" id="password" name="password" placeholder="Password" required />
            <br /><br />
            <button className="loginbutton" type="submit">Login</button> <br /> <br />
          </form>
          <div className="botom">
            <h5  onClick={()=>Navigate('/Signup')}> New here? <a href="">signup</a>  </h5>
            <h5>Forgot password ? <a href="reset.html">reset</a></h5>
          </div>
          <div className="or">
            <h>or</h>
          </div>
        <div className="signup-container">
          <button className="ggl">
            <img src={google} className="ggl-img c" alt="Google icon" />Continue with Google
          </button>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login