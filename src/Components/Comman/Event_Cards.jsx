import React from 'react';
import './Event_Cards.css';
import Button from '../Comman/Button';
import Calender from '../../Assets/calender icon.svg';
import Clock from '../../Assets/clock icon.svg';
import Location from '../../Assets/location icon.svg';

const Event_cards = (props) => {
    return (
        <div className='event_card'>
            <div className='event_card_img_wrap'>
                <img className='event_card_img' src={props.img} alt="" />
                <span className='category_label'>{props.category}</span>
            </div>
            <div className='event_card_div1'>
                <div className='event_card_div2'>
                    <h3 className='event_card_h3'>{props.title}</h3>
                    <h4 className='event_card_h4'>{props.subtitle}</h4>
                </div>
                <div className='event_card_div2'>
                    <div className='event_card_div3'>
                        <img className='event_card_icon' src={Calender} alt="" />
                        <h6 className='event_card_h6'>{props.details1}</h6>
                    </div>
                    <div className='event_card_div3'>
                        <img className='event_card_icon' src={Clock} alt="" />
                        <h6 className='event_card_h6'>{props.details2}</h6>
                    </div>
                    <div className='event_card_div3'>
                        <img className='event_card_icon' src={Location} alt="" />
                        <h6 className='event_card_h6'>{props.details3}</h6>
                    </div>
                </div>
                <Button text="Book Now" />
            </div>
        </div>
    );
}

export default Event_cards;