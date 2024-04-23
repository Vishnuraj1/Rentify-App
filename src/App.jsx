import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css'
import Home from './Pages/Home'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router> 
      <Routes> 
        <Route path="/" element={<Home />} /> {/* Default route (home) */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} /> 
      </Routes>
    </Router>
     
    </>
  )
}

export default App
