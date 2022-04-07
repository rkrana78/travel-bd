import React from 'react';
import { BsLinkedin, BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-nav">

                <ul className="links">
                    <li>
                        <a href="#header">Home</a>
                    </li>
                    <li>
                        <a href="#services">About</a>
                    </li>
                    <li>
                        <a href="#recommend">Places</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                </ul>
                <ul className="social__links">
                    <li>
                        <BsFacebook />
                    </li>
                    <li>
                        <AiFillInstagram />
                    </li>
                    <li>
                        <BsLinkedin />
                    </li>
                </ul>
            </div>
            <div className="copyright">
                <small>Copyright &copy; 2022 Travel BD. All rights reserved</small>
            </div>
        </div>
    );
};

export default Footer;