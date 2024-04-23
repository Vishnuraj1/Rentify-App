import React from 'react'
import './Header.css'
import Cart from '../../assets/Header/Cart.svg'
import Search from '../../assets/Header/Search.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="navbar">

                <div className="leftSection">
                    <h1>RENTIFY</h1>
                </div>
                <div className="middleSection">
                    <div className='textConatainer'>
                        <img src={Search} alt="" id='imgSearch' />
                        <input type="text" placeholder='Search for any product,car,house...' className='productSearch' />
                    </div>
                </div>
                <div className="rightSection">
                   <a href="" id='cart'><span > <img src={Cart} id='cartIcon' alt="" /> Create Rent</span></a> 
                   <Link to="/login"><span id='login'>Login</span></Link>
                   <Link to="/signup"> <button id='btn'>Sign Up</button></Link>
                   
                </div>
            </div>
        </div>
    )
}

export default Header