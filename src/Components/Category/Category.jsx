import React from 'react'
import './Category.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlender,faMobileScreenButton,faBars,faScrewdriverWrench,faComputer, faCar, faCouch, faHouse } from '@fortawesome/free-solid-svg-icons';


const Category = () => {
  return (
    <div>
              
              <div className="heading">
          <span id='CategoryHeading'>Category</span>
          <span>View more</span>
        </div>

        <div className="CategoryContainer">
            <div className="category" >
            <FontAwesomeIcon icon={faCar} size="2xl" style={{color: "#e3e7ee",}} />
            <p>Car</p>
            </div>
            <div className="category">
            <FontAwesomeIcon icon={faHouse} size="2xl" style={{color: "#e3e7ee",}} />
            <p>Home</p>
            </div>
            <div className="category">
            <FontAwesomeIcon icon={faCouch} size="2xl" style={{color: "#e3e7ee",}} />
            <p>Furniture</p>
            </div>
            <div className="category">
            <FontAwesomeIcon icon={faBlender} size="2xl" style={{color: "#e3e7ee",}} />
            <p>Appliances</p>
            </div>
            <div className="category">
            <FontAwesomeIcon icon={faScrewdriverWrench} size="2xl" style={{color: "#e3e7ee",}} />
            <p>PowerTools</p>
            </div>
            <div className="category">
            <FontAwesomeIcon icon={faComputer} size="2xl" style={{color: "#e3e7ee",}} />
            <p>Computers</p>
            </div>
            <div className="category">
            <FontAwesomeIcon icon={faMobileScreenButton} size="2xl" style={{color: "#e3e7ee",}} />
            <p>Mobile Phones</p>
            </div>
            <div className="category">
            <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#e3e7ee",}} />
            <p>All Category</p>
            </div>
        </div>

    </div>
  )
}

export default Category