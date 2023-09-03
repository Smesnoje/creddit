import React from 'react'
import './CommentMeta.css'
import { Link } from 'react-router-dom'

const CommentMeta = (props) => {
    return (
        <div className="comment-meta">
            <span className='comment-item-wrapper'>
                <div className="comment-parent-thread post-meta-item">
                    <Link to={`/t/${props.parentThread}`} className='post-item-link'>{"t/" + props.parentThread}</Link>
                </div>
            </span>
            <span className='comment-item-wrapper'>
                <div className="comment-author comment-meta-item">
                    <Link to={`/u/${props.author}`} className='post-item-link'>{props.author}</Link>
                </div>
            </span>
            <span className='comment-item-wrapper'>
                <div className="comment-published-date comment-meta-item">{props.date}</div>
            </span>
            <span className='comment-item-wrapper'>
                <div className="comment-commented-on comment-meta-item">Commented on "{props.title}"</div>
            </span>
        </div>
    )
}

export default CommentMeta