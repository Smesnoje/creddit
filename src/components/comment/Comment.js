import React from 'react'

import SingleCommentMeta from './SingleCommentMeta'

import './Comment.css'

const Comment = (props) => {
  return (
    <div className='single-comment-container'>
      <SingleCommentMeta name={props.comment.author} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'/>
      <div className='single-comment-content'>{props.comment.content}</div>
    </div>
  )
}

export default Comment
