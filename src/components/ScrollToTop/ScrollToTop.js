import React, { useState } from 'react';
import logo from '../../assets/logo1.jpg'
import './ScrollToTop.css'

const ScrollToTop = () => {
    
    return (
        <div className={'to-top'}>
            <img src={logo} alt="" />
        </div>
    );
};

export default ScrollToTop;