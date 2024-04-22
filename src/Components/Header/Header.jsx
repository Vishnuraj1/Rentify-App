import React from 'react'
import './Header.css'
import Cart from '../../assets/Cart.svg'
import Search from '../../assets/Search.svg'

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
                    {/* <img src={cartImage} alt="" /> */}
                    <span id='cart'><img src={Cart} alt="" /> Cart</span>
                    <span id='login'>Login</span>
                    <button id='btn'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Header