import React from 'react'

import './ThreadPostRating.css'

const ThreadPostRating = (props) => {
  return (
    <div className='thread-post-rating-wrapper'>
        <div className='thread-post-rating-display'>
          {props.rating}
        </div>
    </div>
  )
}

export default ThreadPostRating