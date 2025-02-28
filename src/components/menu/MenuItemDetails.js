import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import './MenuDetails.css';
import { MenuItems } from '../../MenuItems';

const MenuItemDetails = () => {
  const { details } = useParams();
  const [menuItem, setmenuItem] = useState([]);

  useEffect(() => {
    const Items = MenuItems.filter((item) => item.title === details);
    setmenuItem(Items);
  }, []);
  

  return (
    <div className='productWrapper'>
      <div className='back-button'>
         <Link to='/menu'>
           <i class="fa-solid fa-arrow-left"></i>
         </Link>
      </div>
       <div className='ProductContainer'>
          {
            menuItem.map((item) => (
              <div className='col-md-3' id='product'>
                  <img src={item.image} className='card-img-top w-100' alt='' />
                  <p id='title'>{item.title}</p>
                  <p id='desc'>{item.desc}</p>
                  <p id='price'>Price : {item.price}</p>
              </div>
            ))
          }
       </div>
    </div>
  )
}

export default MenuItemDetails;