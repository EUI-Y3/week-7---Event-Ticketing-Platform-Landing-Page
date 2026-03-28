import React from 'react';
import './Card3.css';

const Card3 = (props) => {
    return (
        <div className='card3'>
            <h3 className='card3_title'>{props.title}</h3>
            <p className='card3_subtitle'>{props.subtitle}</p>
        </div>
    );
}

export default Card3;