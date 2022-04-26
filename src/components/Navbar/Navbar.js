import React, { useState } from 'react';
import logo from '../../assets/logo1.jpg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'
import './Navbar.css'

const Navbar = () => {
    const [navbarState, setNavbarState] = useState(false)
    return (
        <div className='nav-container'>
           
                <div className="brand">
                    <div className="container">
                        <img src={logo} alt='' />Travel BD
                    </div>
                    <div className="toggle">
                        {navbarState ? (
                            <VscChromeClose onClick={() => setNavbarState(false)} />
                        ) : (
                            <GiHamburgerMenu onClick={() => setNavbarState(true)} />
                        )}
                    </div>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#recommend">Place</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>

                </ul>
                <button>Connect</button>
           
            <div state={navbarState} className='navbar-res'>
                <ul>
                    <li>
                        <a href="#home" onClick={() => setNavbarState(false)}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#services" onClick={() => setNavbarState(false)}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#recommend" onClick={() => setNavbarState(false)}>
                            Places
                        </a>
                    </li>
                    <li>
                        <a href="#testimonials" onClick={() => setNavbarState(false)}>
                            Testimonials
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

