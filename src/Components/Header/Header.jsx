import React from 'react'
import './Header.css'
// import Cart from '../../assets/Header/Cart.svg'
import Search from '../../assets/Header/Search.svg'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div className="navbar">

                <div className="leftSection">
                 <h1 >RENTIFY</h1>
                </div>
                <div className="middleSection">
                    <div className='textConatainer'>
                        <img src={Search} alt="" id='imgSearch' />
                        <input type="text" placeholder='Search for any product,car,house...' className='productSearch' />
                    </div>
                </div>
                <div className="rightSection">
                    <Link to="/create"> <button id='plus' >  <FontAwesomeIcon icon={faPlus} /> Rent</button></Link>
                  
                   <Link to="/login"><span id='login'>Login</span></Link>
                  
                   <FontAwesomeIcon icon={faUser} />
                   
                </div>
            </div>
        </div>
    )
}

export default Header