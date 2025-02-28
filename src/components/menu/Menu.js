import React from 'react';
import {Link} from 'react-router-dom'
import './Menu.css';
import { MenuItems } from '../../MenuItems';


const Menu = () => {
  return (
    <div className='menuWrapper'>
        <div className='container'>
        <h2>View Our Menu</h2>
            <div className='row'>
                {
                    MenuItems.map((item) => (
                        <div className='col-md-3'>
                          <div className='card mb-4'>
                          <img src={item.image} className='card-img-top w-100' alt='' />
                          <div className='card-body'>
                            <h5>{item.title}</h5>
                            <Link to={`/menu/${item.title}`}>Learn More</Link>
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