import React from 'react';
import './Content.css';
import { useTranslation } from "react-i18next";


const Content = () => {
  const { t } = useTranslation();

  return (
    <section className='contentWrapper'>
        <div className='container' id='Child-Wrapper'>
            <div className='heading-info'>
                <h2>{t("content_heading")}</h2>
            </div>
            <div id='main-content'>
                <div className='col-md-4 px-2'>
                    <h3>{t("sub_content_heading")}</h3>
                    <div className='sub-content'>
                      <i class="fa-solid fa-mug-hot fa-2x"></i>
                      <p>{t("sub_content_p")}</p>
                    </div>
                </div>
                <div className='col-md-4 px-2'>
                    <h3>{t("sub_content_heading_2")}</h3>
                    <div className='sub-content'>
                       <i class="fa-solid fa-bacon fa-2x"></i>
                       <p>{t("sub_content_p2")}</p>
                    </div>
                </div>
                <div className='col-md-4 px-2'>
                    <h3>{t("sub_content_heading3")}</h3>
                    <div className='sub-content'>
                      <i class="fa-solid fa-utensils fa-2x"></i>
                      <p>{t("sub_content_p3")}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content


