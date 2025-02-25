import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../src/logo.png'
import './MobileNav.css';

const MobileNav = () => {
  return (
    <div className='Mobile-nav-wrapper'>
        <div className='mobile-logo'>
            <img src={logo} alt='' />
            <h4>Maila's Kitchen</h4>
        </div>
            <div className='mobile-nav-items'>
                  <Link>Home</Link>
                  <Link>Service</Link>
                  <Link>About</Link>
                  <Link>Menu</Link>
                  <Link>Contact us</Link>
                 <div className='mobile-nav-button'>
                   <button>Order Now</button>
                 </div>
            </div>
            <div className='others-content'>
              <select>
                <option>English</option>
                <option>Finish</option>
              </select>
            </div>
    </div>
  )
}

export default MobileNav