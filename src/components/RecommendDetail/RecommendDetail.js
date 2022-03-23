import React from 'react';
import info1 from '../../assets/info1.png'
import info2 from '../../assets/info2.png'
import info3 from '../../assets/info3.png'
import './RecommendDetail.css'

const RecommendDetail = (props) => {
    const { title, image, subtitle, cost, duration } = props.destination
    return (
        <div className='destination'>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <div className="info">
                <div className="info-services">
                    <img src={info1} alt="info" />
                    <img src={info2} alt="info" />
                    <img src={info3} alt="info" />
                </div>
                <h4>{cost}</h4>
            </div>
            <div className="distance">
                <span>1000 kms </span>
                <span>{duration}</span>
            </div>
        </div>
    );
};

export default RecommendDetail;