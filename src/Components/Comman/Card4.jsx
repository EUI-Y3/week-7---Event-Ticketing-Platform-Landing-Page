import React from 'react';
import './Card4.css';
import Stars from '../../Assets/stars svg.svg';

const Card4 = (props) => {
    return (
        <div className='card4'>
            <div className='card4_div1'>
                <img className='card4_img' src={props.img} alt={props.name} />
                <div className='card4_div2'>
                    <h4 className='card4_h3'>{props.name}</h4>
                    <p className='card4_h5'>{props.title}</p>
                </div>
               
            </div>
             <img className='card4_stars' src={Stars} alt="rating" />
            <p className='card4_comment'>{props.comment}</p>
        </div>
    );
}

export default Card4;