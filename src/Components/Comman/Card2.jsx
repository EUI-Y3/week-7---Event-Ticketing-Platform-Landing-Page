import React from 'react';
import './Card2.css'

const Card2 = (props) => {
    return ( 
        <div className='card2'>
            <img className='Card2_icon' src={props.icon} alt="" />
            <h5 className='Card2_h5'>{props.title}</h5>
            <h6 className='Card2_h6'>{props.subtitle}</h6>
        </div>
     );
}
 
export default Card2;