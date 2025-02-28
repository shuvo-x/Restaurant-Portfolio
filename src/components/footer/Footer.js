import React from 'react';
import {Link} from 'react-router-dom';
import footerLogo from '../../../src/logo.png';
import './Footer.css';
import { useTranslation } from "react-i18next";



const Footer = () => {
    const { t } = useTranslation();
  
  return (
    <footer className='footer-wrapper'>
      <div className='container' id='container-div'>
      {/* Logo & Description */}
        <div className='footer-logo'>
          <img src={footerLogo} alt='Mailas Kitchen Logo' id='footer-img'/>
          <h4>{t("footer_logo_text1")} <br /> {t("footer_logo_text3")}</h4>
        </div>
         <div className='footer-text'>
           <p>{t("footer_text_p")}</p>
         </div>

         {/* Social Icons */}
      <div className='social-icons'>
        <a href="https://www.facebook.com/profile.php?id=61566781715998" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
           <i class="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
        </a>
      </div>

        {/* Navigation Links... */} 
        <nav className="footer-nav">
          <ul>
            <li><Link to="/recipes">{t("footer_nav_recepies")}</Link></li>
            <li><Link to="/learn-how-to">{t("footer_nav_learn")}</Link></li>
            <li><Link to="/seasonal-sensations">{t("footer_nav_sesonal")}</Link></li>
            <li><Link to="/shop">{t("footer_nav_shop")}</Link></li>
          </ul>
        </nav>
      </div>


      {/*Footer Bottom Section... */}
        <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {t("footer_nav_rules")}</p>
        <div className="footer-links">
          <Link to="/terms">{t("footer_links_condition")}</Link>
          <Link to="/privacy">{t("footer_links_privecy")}</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer






