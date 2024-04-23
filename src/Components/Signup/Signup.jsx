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
    <div className="signupParentDiv">
        <img width="200px" height="200px" ></img>
        <form onSubmit={handlesubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            // value={Username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            // value={Email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            
          />
          <br />
            
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            // value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
           
            />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            // value={Password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
           
            />
          <br />
          <br />
            {/* {error && <span className="errMessage">{error}</span>} */}
            <br />
          <button >Signup</button>
        </form>
        <Link to="/login">
          <a>Login</a>
        </Link>

      </div>
    </>
  )
}

export default Signup;