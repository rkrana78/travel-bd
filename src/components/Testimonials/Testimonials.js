import React from 'react';
import avatarImage from '../../assets/avatarImage.jpeg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className="testimonial-container">
            <div className="testimonial-title">
                <h2>Happy Customers</h2>
            </div>
            <div className="testimonials">
                <div className="testimonial">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur temporibus voluptates.</p>
                    <div className="info">
                        <img src={avatarImage} alt="" />
                        <div className="details">
                            <h4>Ganguli</h4>
                            <span>CEO - ABC Company</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur temporibus.</p>
                    <div className="info">
                        <img src={avatarImage} alt="" />
                        <div className="details">
                            <h4>Ganguli</h4>
                            <span>CEO - ABC Company</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur temporibus voluptates magnam.</p>
                    <div className="info">
                        <img src={avatarImage} alt="" />
                        <div className="details">
                            <h4>Ganguli</h4>
                            <span>CEO - ABC Company</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;