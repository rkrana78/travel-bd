import React from 'react';
import './ServiceDetail.css'

const ServiceDetail = (props) => {
    const {icon, title, subtitle} = props.service
    return (
        <div className='service'>
            <div className="icon">
                <img src={icon} alt="icon" />
            </div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    );
};

export default ServiceDetail;