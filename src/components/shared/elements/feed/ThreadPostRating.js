import React from 'react'

import './ThreadPostRating.css'

const ThreadPostRating = (props) => {
  return (
    <div className='thread-post-rating-wrapper'>
        {props.rating}
    </div>
  )
}

export default ThreadPostRating