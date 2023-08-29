import React from 'react'

import './Input.css'

const Input = (props) => {
  return (
    <React.Fragment>
        <label htmlFor={props.inputId}>{props.labelText}</label>
        <input id={props.inputId} name={props.name} type={props.type || 'text'} value={props.value} onChange={props.handleChange}></input>
    </React.Fragment>
  )
}

export default Input
