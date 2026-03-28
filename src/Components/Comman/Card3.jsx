import React from 'react';
import './Card3.css';

const Card3 = (props) => {
    return ( 
        <>
        <div className='card3'>
            <h3 className='card3_h3'>{props.title}</h3>
            <h3 className='card3_h3'>{props.subtitle}</h3>
        </div>
        </>
     );
}
 
export default Card3;