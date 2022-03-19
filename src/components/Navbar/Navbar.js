import React from 'react';
import logo from '../../assets/logo1.jpg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="brand">
                <div className="container">
                    <img src={logo} alt=''/>Travel BD
                </div>
                <div className="toggle"></div>
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Place</a></li>
                <li><a href="">Testimonials</a></li>
                
            </ul>
            <button>Connect</button>
        </div>
    );
};

export default Navbar;

