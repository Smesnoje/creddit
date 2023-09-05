import React from 'react'

import './Panel.css'

const Panel = (props) => {
  return (
    <div className='panel'>
        <div className='panel-title'>{props.panelTitle}</div>
        <div className='panel-content'>{props.children}</div>
    </div>
  )
}

export default Panel