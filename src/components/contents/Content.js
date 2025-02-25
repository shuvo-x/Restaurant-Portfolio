import React from 'react';
import './Content.css';

const Content = () => {
  return (
    <div className='contentWrapper'>
        <div className='container' id='Child-Wrapper'>
            <div className='heading-info'>
                <h3>We Offer</h3>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> */}
            </div>
            <row style={{display: 'flex'}} id='main-content'>
                <div className='col-md-4 px-2'>
                    <span>Coffe</span>
                    <div className='sub-content'>
                      <i class="fa-solid fa-mug-hot fa-2x"></i>
                      <p>Lorem Ipsum is simply dummy text of the printing and 
                      typesetting industry. Lorem Ipsum has been the industry's
                       standard dummy text ever since the 1500s, when an unknown
                       printer took</p>
                    </div>
                </div>
                <div className='col-md-4 px-2'>
                    <span>Breakfast</span>
                    <div className='sub-content'>
                       <i class="fa-solid fa-bacon fa-2x"></i>
                       <p>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s,
                         when an unknown printer took</p>
                    </div>
                </div>
                <div className='col-md-4 px-2'>
                    <span>Lunch</span>
                    <div className='sub-content'>
                      <i class="fa-solid fa-utensils fa-2x"></i>
                      <p>Lorem Ipsum is simply dummy text of the printing and 
                      typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, when an unknown
                       printer took</p>
                    </div>
                </div>
            </row>
        </div>
    </div>
  )
}

export default Content