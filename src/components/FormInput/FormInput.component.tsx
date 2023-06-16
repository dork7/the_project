import React from 'react'
import './form-input.style.scss'
const FormInput = ({ label, ...rest }: any) => {
    console.log('rest.value.length', rest.value.length)
    return (
        <div className='group'>
            <input class='form-input' {...rest} />
            {
                label && <label className={`${rest.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            }
        </div>
    )
}

export default FormInput