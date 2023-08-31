import React from 'react'
import './ThreadPostMeta.css'
import { Link } from 'react-router-dom'

const ThreadPostMeta = (props) => {
    return (
        <div className="post-meta">
            <span className='post-item-wrapper'>
                <div className="post-parent-thread post-meta-item">
                    <Link to={`/t/${props.parentThread}`} className='post-item-link'>{"t/" + props.parentThread}</Link>
                </div>
            </span>
            <span className='post-item-wrapper'>
                <div className="post-author post-meta-item">
                    <Link to={`/u/${props.author}`} className='post-item-link'>{props.author}</Link>
                </div>
            </span>
            <span className='post-item-wrapper'>
                <div className="post-published-date post-meta-item">{props.date}</div>
            </span>
        </div>
    )
}

export default ThreadPostMeta