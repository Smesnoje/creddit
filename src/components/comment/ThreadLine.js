import React from 'react'

import './ThreadLine.css'

const ThreadLine = (props) => {
  return (
    <div className={`thread-line ${props.className}`}>
        <div className='thread-line-body'></div>
        <div className='thread-line-margin'></div>
    </div>
  )
}

export default ThreadLine