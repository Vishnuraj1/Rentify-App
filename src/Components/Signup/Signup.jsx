import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom';

// import { createUserWithEmailAndPassword,getAuth} from 'firebase/auth';
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handlesubmit = async (e) => {
    e.preventDefault()
    //  const auth= getAuth()
    //  createUserWithEmailAndPassword(auth,email,password
    //   .then((userCredentioal)=>{
    //     const user=userCredentioal.user
    //    }))
    
  }


  return (
    <>
    <div class="nav">
        <h1>RENTIFY</h1>
    </div>
    <div>
           <div className="container">
      <div className="login-container" onSubmit={handlesubmit}>
        <h1>Sign Up</h1>
        <form action="" method="post">
          <label htmlFor="username">Username</label>
          <input
            type="text" onChange={(e) => setEmail(e.target.value)}
            id="username"
            name="username"
            placeholder="Enter your phone number or email"
            required
          /> <br/> <br/>
          <label htmlFor="password">Password</label>
          <input
            type="password" onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="Password"
            required
          /> <br/> <br/>
          <button className="loginbutton" type="submit">
            Sign Up
          </button>
          <div className="botom">
            <h5>
              Already a user? 
              <Link to="/login"> Sign in</Link>
            </h5>
            <h5>
              Forgot password ? 
              <a href="reset.html"  >reset</a>
            </h5>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Signup;