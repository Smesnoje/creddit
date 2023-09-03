import React from 'react'

import './CommentRating.css'

const CommentRating = (props) => {
  return (
    <div className='comment-post-rating-wrapper'>
        <div className='comment-post-rating-display'>
          {props.rating}
        </div>
    </div>
  )
}

export default CommentRating