import React from 'react'

import './TextArea.css'

const TextArea = (props) => {
  return (
    // U Input proslediti inputPlaceholder i type 
    <>
        {props.labelText && <label htmlFor={props.inputId}>{props.labelText}</label>}
        <textarea 
          className={props.className} 
          id={props.inputId} 
          name={props.name} 
          type={props.type || 'text'} 
          value={props.value} 
          onChange={props.handleChange} 
          placeholder={props.placeholder}
          rows={props.rows}
          cols={props.cols}
          >
        </textarea>
    </>
  )
}

export default TextArea
