import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    // console.log('1',handleChange)
    // console.log('2',label)
    // console.log('3',otherProps)
    return (
        <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>)
}



export default FormInput;