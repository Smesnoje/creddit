import React from 'react'

import './Input.css'

const Input = (props) => {
  return (
    // U Input proslediti inputPlaceholder i type 
    <React.Fragment>
        {props.labelText && <label htmlFor={props.inputId}>{props.labelText}</label>}
        <input id={props.inputId} name={props.name} type={props.type || 'text'} value={props.value} onChange={props.handleChange} placeholder={props.placeholder}></input>
    </React.Fragment>
  )
}

export default Input
