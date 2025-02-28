import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../src/logo.png'
import './MobileNav.css';
import { useTranslation } from "react-i18next";


const MobileNav = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (event) => {
      i18n.changeLanguage(event.target.value);
    };
  
  
  return (
    <div className='Mobile-nav-wrapper'>
        <div className='mobile-logo'>
            <h4>{t("mobile_nav_logo_title")}</h4>
        </div>
            <div className='mobile-nav-items'>
                  <Link to='/'>{t("home")}</Link>
                  <Link to='/about'>{t("about")}</Link>
                  <Link to='/menu'>{t("menu")}</Link>
                  <Link to='/contact'>{t("contact")}</Link>                 
                 <div className='mobile-nav-button'>
                   <button>{t("nav_content_button1")}</button>
                 </div>
            </div>
            <div className='others-content'>
              <select onChange={changeLanguage} value={i18n.language}>
                <option value='en'>English</option>
                <option value='fi'>Finish</option>
              </select>
            </div>
    </div>
  )
}

export default MobileNav