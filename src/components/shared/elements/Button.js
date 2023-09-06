import React from 'react'

import './Button.css'

const Button = (props) => {
  return (
    <button disabled={props.disabled} type={props.type} className={`custom-button ${props.className}`}>{props.children}</button>
  )
}

export default Button