import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../src/logo.png';
import './Navbar.css';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMobileItem = () => {
    setIsOpen(prevState => !prevState);
  }

  return (
    <div className='navbar-wrapper'>
        <div id='nav'>
             <div className='logo'>
               <img src={logo} alt=''/>
                <span>Maila's Kitchen</span>
             </div>
             <div className='nav-item'>
                <Link>Home</Link>
                <Link>Service</Link>
                <Link>About</Link>
                <Link>Menu</Link>
                <Link>Contact us</Link>
                <button>Restaurants</button>
             </div>
             <div className='transalte'>
                <select>
                    <option>English</option>
                    <option>Finish</option>
                </select>
             </div>
             <div className='menu-bar' onClick={showMobileItem}>
               <i class="fa-solid fa-bars fa-2x"></i>
             </div>
             <div id='mobile-nav' className={isOpen ? 'open' : ''}>
              <MobileNav />
             </div>
        </div>

        <div className='content'>
          <h2>We Love Delicious</h2>
          <div className='buttons'>
            <button id='button-2'>Restaurants</button>
            <button id='button-1'>Learn More</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar