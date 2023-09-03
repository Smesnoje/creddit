import React from 'react'

import './Comment.css'

const Comment = (props) => {
  return (
    <div className='comment-container'>{props.content}</div>
  )
}

export default Comment
