import React from 'react';
import './Form_input.css';

const Form_input = (props) => {
    return (
        <div className='input_form'>
            <h6 className='input_form_label'>{props.title}</h6>
            <div className='input_form_div'>
                <img className='input_form_icon' src={props.icon} alt="" />
                <input
                    type="text"
                    className='input_form_field'
                    placeholder={props.text}
                />
            </div>
        </div>
    );
}

export default Form_input;