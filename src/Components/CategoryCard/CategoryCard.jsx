import React, { useState } from 'react';

import './CategoryCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBlender,
  faMobileScreenButton,
  faBars,
  faScrewdriverWrench,
  faComputer,
  faCar,
  faCouch,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import Post from '../Post/Post';

const CategoryCard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const icons = [
    { name: 'All Category', symbol: faBars },
    { name: 'Car', symbol: faCar },
    { name: 'House', symbol: faHouse },
    { name: 'Furniture', symbol: faCouch },
    { name: 'Appliances', symbol: faBlender },
    { name: 'PowerTools', symbol: faScrewdriverWrench },
    { name: 'Computers', symbol: faComputer },
    { name: 'Mobile Phones', symbol: faMobileScreenButton },
  ];

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="CategoryCardContainer">
        {icons.map((icon) => (
          <div
            key={icon.name}
            onClick={() => handleClick(icon.name)}
            className="category"
            style={{
              backgroundColor: selectedCategory === icon.name ? 'red' : 'black',
            }}
          >
            <FontAwesomeIcon icon={icon.symbol} size="2xl" style={{ color: '#e3e7ee' }} />
            <p id='cText'>{icon.name}</p>
          </div>
        ))}
      </div>
      <Post/>
    </div>
  );
};

export default CategoryCard;
