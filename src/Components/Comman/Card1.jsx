import React from 'react';
import './Card1.css';

const Card1 = (props) => {
    return ( 
        <>
        <div className='card1_div'>
            <img className='card1_icon' src={props.img} alt="" />
            <h3 className='card1_h3'>{props.title}</h3>
        </div>
        </>
     );
}
 
export default Card1;