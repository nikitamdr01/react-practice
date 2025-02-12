import React from 'react'

//Reusable input field
const Input=({label, ...props})=> {
  return (
    <div>
        <label htmlFor={props.id}>{label}</label>
        <input className='border-blue-700' {...props}></input>
    </div>
  );
};

export default Input