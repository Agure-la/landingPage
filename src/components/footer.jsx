import React from 'react';
import { Link } from "react-router-dom";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    const year =new Date().getFullYear()
  return (
    <div>
        <div className="location">

        </div>
        <div className="social-container">
            {/* <Link to="#">
                <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <Link> <span></span></Link>
            <Link>  <span></span></Link>
            <Link>  <span></span></Link> */}
        </div>
        <div className="footer-container">
            <span className='footerTxt'><span className="copyrightTxt">&copy; {year}</span><span className=''> Agure</span> All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer