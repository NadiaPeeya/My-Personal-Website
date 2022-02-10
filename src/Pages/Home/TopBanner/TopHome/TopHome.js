import React from 'react';
import { Link } from 'react-router-dom';
import './TopHome.css'

const TopHome = () => {
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className='large-text'>
            <div className='topHome-text'>
            <h1  className="animate__animated animate__flash  animate__delay-1s" style={{fontSize: '62px', textColor: '#212529'}}>Nadia Rahman</h1>
            <hr className='horizontal-line' width="20%"/>
            <br />
           
            <h6 className="animate__animated animate__lightSpeedInRight animate__delay-2s" style={{fontSize: '18px', textColor: '#212529'}}>Creative Web Developer</h6> 
            <br />

            <Link to="/about"><button className='learn-more'> Learn More  </button></Link>
            
            </div>
           
        </div>
    );
};

export default TopHome;