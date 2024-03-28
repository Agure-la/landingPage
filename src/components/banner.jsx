import React from 'react'
import psImage from '../assets/ps.jpg';
import hrImage from '../assets/hr.jpg';

function Banner() {
  return (
    <div>
        <div className="banner-container">
            <div className="banner-Txt">
                <h1>Welcome Back Sytem.  </h1>
                <p>This is the landing page of the System</p>
            </div>
        </div>
        {/* <div className="ps-container">
            <img src={psImage} alt="PS Image" className="bannerImg"/>
        </div> */}
    </div>
  )
}

export default Banner;