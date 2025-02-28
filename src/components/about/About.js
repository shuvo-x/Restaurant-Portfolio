import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import aboutBgImg from '../../../src/gal-6.jpeg';
import aboutBgImg2 from '../../../src/bgx-3.jpg';
import aboutBgImg3 from '../../../src/gal-1.jpeg';
import './About.css';

const About = () => {
     const { t } = useTranslation();
  return (
    <div className='about'>
       <h1>{t("about_heading")}</h1>
       <div className='container' id='about-content-1'>
        <div className='col-md-6' id='image-section'>
            <img src={aboutBgImg} alt="Maila's Kitchen" className='about-image'/>
         </div>
         <div className='col-md-5' id='text-section-1'>
            <h3>{t("about_textSection_heading")}</h3>
            <p>{t("about_textSection_p1")}</p>
            <p>{t("about_textSection_p2")}</p>
        </div>
       </div>
       <div className='container' id='about-content-2'>
         <div className='col-md-6' id='image-section-2'>
            <img src={aboutBgImg2} alt="Maila's Kitchen" className='about-image-2'/>
         </div>
         <div className='col-md-5' id='text-section-2'>
            <h3>{t("about_textSection_heading2")}</h3>
            <p>{t("about_textSection_p")}</p>
            <button>{t("about_button")}</button>
         </div>
       </div>

       <div className='container' id='about-content-3'>
         <div className='col-md-5' id='text-section-3'>
            <h3>{t("about_textSection_heading2")}</h3>
            <p>{t("about_textSection_p")}</p>
            <button>{t("about_button")}</button>
         </div>
         <div className='col-md-6' id='image-section-3'>
            <img src={aboutBgImg3} alt="Maila's Kitchen" className='about-image-3'/>
         </div>
       </div>
    </div>
  )
}

export default About