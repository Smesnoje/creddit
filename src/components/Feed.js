import React from 'react'

import ThreadPostTeaser from './post/ThreadPostTeaser'

import database from './database'

import './Feed.css'

export const Feed = () => {
    return (
        <div id='feed-container'>
            {database.posts.map((post, key) => {
                return <ThreadPostTeaser
                    key={key}
                    id={post.id} 
                    parentThread={post.thread} 
                    author={post.author} 
                    date={post.publishedDate}
                    title={post.title} 
                    content={post.content}
                    rating={post.rating}
                    />
            })}
        </div>
    )
}
