import React from 'react';
import './Button.css'

interface ButtonTypes {
    type:'reset' | 'button' | 'submit',
    text:string,
    isPrimary?:boolean
}

const Button = ({type,text,isPrimary}:ButtonTypes) => {
  return (
    <button className={isPrimary ? 'btn btn-primary' : 'btn btn-secondary'} type={type}>
         {text}
    </button>
  )
}

export default Button