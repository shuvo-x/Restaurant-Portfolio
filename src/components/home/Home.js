import React from 'react';
import Slider from "react-slick";
import './Home.css';
import { data } from '../../Data';
import Content from '../contents/Content';
import Content2 from '../contents/Content2';

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return (
    <>
    {/* <Content2 /> */}
    <div className='Home-wrapper'>
      <div className='container'>
          <h2 style={{textAlign: 'center'}}>Our Menu</h2>
          <div className='w-3/4 m-auto'>
            <Slider {...settings}>
            {
              data.map((item, index) => {
                return(
                  <div key={index}>
                    <div>
                       <img src={item.image} alt='' className='w-100 object-contain' />
                    </div>
                    <div>
                      <p>{item.title}</p>
                    </div>
                  </div>
                )
              })
            }
            </Slider>
          </div>
      </div>
    </div>
    <div className='content-1'>
      <Content />
    </div>
  </>
  )
}

export default Home