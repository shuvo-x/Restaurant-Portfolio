import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../src/logo.png';
import './Navbar.css';
import MobileNav from './MobileNav';
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const showMobileItem = () => {
    setIsOpen(prevState => !prevState);
  }

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };


  return (
    <div className='navbar-wrapper'>
        <div id='nav'>
             <div className='logo'>
               <img src={logo} alt='Mailas logo'/>
                <span to ='/'>Maila's Kitchen</span>
             </div>
             <div className='nav-item'>
                <Link to='/'>{t("home")}</Link>
                <Link to='/about'>{t("about")}</Link>
                <Link to='/menu'>{t("menu")}</Link>
                <Link to='/contact'>{t("contactUs")}</Link>
                <button>{t("nav_button")}</button>
             </div>
             <div className='transalte'>
                <select onChange={changeLanguage} value={i18n.language}>
                    <option value='en'>English</option>
                    <option value='fi'>Finish</option>
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
          <h2>{t("nav_content_heading")}</h2>
          <div className='buttons'>
            <button id='button-2'>{t("nav_content_button1")}</button>
            <button id='button-1'>{t("nav_content_button2")}</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar