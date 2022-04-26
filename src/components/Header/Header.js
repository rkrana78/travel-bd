import React from 'react';
import img from '../../assets/saint-martin1.jpg'
import './Header.css'

const Header = () => {
    return (
        <section id='header' className='header-section'>
            <div className="background">
                <img src={img} alt="travel" />
            </div>
            <div className="content">
                <div className="title">
                    <h1>Travel To Explore</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. debitis quidem repellendus suscipit obcaecati adipisci in.

                    </p>
                </div>
                <div className="search">
                    <div className="container">
                        <label htmlFor="">Where you want to go?</label>
                        <input type="text" placeholder='Search your location' />
                    </div>
                    <div className="container">
                        <label htmlFor="">Check-in</label>
                        <input type="date" />
                    </div>
                    <div className="container">
                        <label htmlFor="">Check-out</label>
                        <input type="date" />
                    </div>
                    <button>Explore Now</button>
                </div>
            </div>
        </section>
    );
};

export default Header;