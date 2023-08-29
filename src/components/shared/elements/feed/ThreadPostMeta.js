import React from 'react'
import './ThreadPostMeta.css'
import { Link } from 'react-router-dom'


export const ThreadPostMeta = (props) => {
    return (
        <div className="post-meta">
            <span className='post-item-wrapper'>
                <span className="post-author-label">Author:</span>
                <div className="post-author post-meta-item">{props.author}</div>
                <Link to={`/users/${props.author}`}>{props.author}</Link>
            </span>
            <span className='post-item-wrapper'>
                <span className="post-parentThread-label">Thread:</span>
                <div className="post-parentThread post-meta-item">{props.parentThread}</div>
            </span>
            <span className='post-item-wrapper'>
                <span className="post-published-date-label">Posted on:</span>
                <div className="post-published-date post-meta-item">{props.date}</div>
            </span>
        </div>
    )
}