import React from 'react'
import { Link } from 'react-router-dom'

import ProfilePicture from '../shared/elements/ProfilePicture'

import './SingleCommentMeta.css'

const SingleCommentMeta = (props) => {
    return (
        <div className="single-comment-meta">
            <ProfilePicture src={props.src} alt='profile-picture'/>
            <div className='single-comment-meta-author'>{props.name}</div>
        </div>
    )
}

export default SingleCommentMeta