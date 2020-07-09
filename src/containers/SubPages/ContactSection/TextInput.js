import React from "react";


const TextInput = ({label, name, value, placeholder, type, onChange, errors}) => {
        return (
            <div className='form-input'>
                {errors &&  <div className='contact-text'>{errors}</div>}
                <label htmlFor={name}>{label}</label>
                <input className={'input-item'}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />


            </div>
        )
    }
;

export default TextInput;
