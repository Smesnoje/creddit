import React from 'react'

import ThreadPostTeaser from './post/ThreadPostTeaser'
import CommentTeaser from './comment/CommentTeaser'

import database from './database'

const UserFeed = (props) => {
    return (
        <div id='feed-container'>
            {[...database.posts.map((post, key) => {
                return post.author === props.author && <ThreadPostTeaser
                key={key}
                id={key} 
                parentThread={post.thread} 
                author={post.author} 
                date={post.publishedDate}
                title={post.title} 
                content={post.content}
                rating={post.rating}
                />
            }), 
            ...database.getUserComments(props.author).map((comment, key) => {
                return <CommentTeaser
                key={key}
                id={comment.id} 
                postId={comment.postId}
                parentThread={comment.thread} 
                author={comment.author} 
                title={comment.title} 
                content={comment.content}
                rating={comment.rating}
                />
            })]}
        </div>
    )
}

export default UserFeed