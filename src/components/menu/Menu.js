import React from 'react';
import './Menu.css';
import { Menu_img } from '../../Img';


const Menu = () => {
  return (
    <div className='menuWrapper'>
        <div className='container'>
        <h2>View Our Menu</h2>
            <div className='row'>
                {
                    Menu_img.map((item) => (
                        <div className='col-md-3'>
                          <div className='card mb-4'>
                          <img src={item.image} className='card-img-top w-100' alt='' />
                          <div className='card-body'>
                            <h4>{item.title}</h4>
                            <button id='menu-button'>Learn More</button>
                         </div>
                        </div>
                      </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Menu