import React from 'react'
import './Header.css'
import Cart from '../../assets/Header/Cart.svg'
import Search from '../../assets/Header/Search.svg'

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
                   <a href="" id='cart'><span > <img src={Cart} id='cartIcon' alt="" /> Cart</span></a> 
                   <a href=""><span id='login'>Login</span></a> 
                    <button id='btn'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Header