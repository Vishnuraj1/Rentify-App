import React,{ useState } from 'react'

import './CategoryCard.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlender,faMobileScreenButton,faBars,faScrewdriverWrench,faComputer, faCar, faCouch, faHouse } from '@fortawesome/free-solid-svg-icons';



const CategoryCard = () => {
    const [bgColor, setBgColor]=useState("black")

    const [icon,setIcon] = useState([])

    const icons =[ 
        {   name:"Car", symbol:faCar},
        {   name:"House", symbol:faHouse}, 
        {   name:"Furniture", symbol:faCouch},
        {   name:"Appliances", symbol:faBlender}, 
        {   name:"PowerTools", symbol:faScrewdriverWrench}, 
        {   name:"Computers", symbol:faComputer}, 
        {   name:"Mobile Phones", symbol:faMobileScreenButton}, 
        {   name:"All Category", symbol:faBars} 
    ]
const handleclick = (icons)=>{
//   let newIcons = icons.map((icon)=>{
//     icons == icon ? icon.backgroundColor="green" :icon.backgroundColor="black"
//    })
//    setIcon(newIcons)
//    console.log(icon);
}
  return (
    <div>
         <div className="CategoryContainer">
        {icons.map((icons)=>(

            <div key={icons} onClick={()=>{handleclick(icons)}} className="category"  style ={bgColor ==="red"?{backgroundColor:"red"}:{backgroundColor:"black"}} >
            <FontAwesomeIcon icon={icons.symbol} size="2xl" style={{color: "#e3e7ee",}} />
            <p>{icons.name}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default CategoryCard