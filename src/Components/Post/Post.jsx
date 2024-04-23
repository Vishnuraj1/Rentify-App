import React from 'react'
import './Post.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlender,faMobileScreenButton,faBars,faScrewdriverWrench,faComputer, faCar, faCouch, faHouse } from '@fortawesome/free-solid-svg-icons';

import Photo from '../../assets/Banner/CAR.png'
import Heart from '../../assets/Post/Heart';


const Post = () => {
  return (
    <div>
        <div className="PostContainer">
      
         <div className="heading">
          <span id='CategoryHeading'>Category</span>
          <span>View more</span>
        </div>

        <div className="CategoryContainer">
            <div className="category">
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

        <div className="cards">

          {/* {Products.filter((product)=>{
            if(searchTerm == ""){
            return product;
             }else if(product.Name.toLowerCase().includes(searchTerm.toLowerCase())){
              return product;
             }
          }).map((product,index) => {

       return     */}
        <div
    //    key={index}
              className="card"
            //   onClick={()=>{
            //     setPostDetails(product)
            //     navigate('./view')
            //   }}
            >
              <div className="favorite">
              <Heart></Heart>
              </div>
              <div className="image">
                <img src={Photo} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; 5656</p>
                <p className="kilometer">  Computer</p> 
                <span className="name">Category: Electronics</span>
              </div>
              <div className="date">
                <span>19/02/20024</span>
              </div>
            </div>

          {/* })

          } */}

        </div>
        </div>
    </div>
  )
}

export default Post