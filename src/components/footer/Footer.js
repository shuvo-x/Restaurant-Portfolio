import React from 'react'
import footerLogo from '../../../src/logo.png';
import './Footer.css';


const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='container' id='container-div'>
        <div className='footer-logo'>
          <img src={footerLogo} alt='' id='footer-img'/>
          <h4>Maila's <br /> Kitchen</h4>
        </div>
        <div className='footer-text'>
          <p>Lorem Ipsum is simply dummy text of 
          the printing and typesetting industry.
          </p>
        </div>
        <div className='social-icons'>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-instagram"></i>
        </div>
        <div className='others'>
          <li>Receipes</li>
          <li>Learn/how-to</li>
          <li>Seasonal Sensations</li>
          <li>Shop</li>
        </div>
      </div>
      <div className='last-content'>
          <div className='last-c-1'>
            <p>@Copyright 2025</p>
          </div>
          <div className='last-c-2'>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
        </div>
    </div>
  )
}

export default Footer