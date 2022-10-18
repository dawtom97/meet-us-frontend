import React from 'react'
import { InputTypes } from './Input.inteface';
import './Input.css';

const Input = ({value,change,blur,label,id,name,placeholder,type}:InputTypes) => {
  return (
    <div className='input'>
        <input
          className='input__field'
          id={id}
          value={value}
          onChange={change}
          onBlur={blur}
          name={name}
          type={type}
          placeholder={placeholder}
        />
    </div>
  )
}

export default Input