import React from 'react';
import contentImg from '../../../src/bgx-4.jpg'
import './Content2.css';

const Content2 = () => {
  return (
    <div className='Content2Wrapper'>
       <div className='container' id='content-part'>
         <row className='d-flex align-items-center justify-content-end'>
         <div className='col-md-5 px-5'>
          <span style={{fontWeight: '600', fontSize:'18px', color: 'red'}}>Maila's Kitchen</span>
             <h2 style={{ fontWeight: '600'}}>Welecome To</h2>
             <p style={{fontSize: '17px'}}>Lorem Ipsum is simply dummy text of the printing and 
                 typesetting industry. Lorem Ipsum
                 has been the industry's standard dummy text ever
                 since the 1500s more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>  
          <div className='col-md-5'>
             <img src={contentImg} alt='' style={{borderRadius: '15px', width: '330px'}}/>
          </div>
         </row>
       </div>
    </div>
  )
}

export default Content2