import React from 'react';
import './Chips.css';
 
const Chips = (props) => {
    return (
        <button className='card_chips'>{props.text}</button>
    );
}
 
export default Chips;