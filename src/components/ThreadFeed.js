import React from 'react'

import ThreadPostTeaser from './post/ThreadPostTeaser'

import DUMMY_DATA from './DUMMY_DATA'

const ThreadFeed = (props) => {
    return (
        <div id='feed-container'>
            {DUMMY_DATA.map((post, key) => {
                return post.thread == props.thread &&
                <ThreadPostTeaser
                key={key}
                id={key} 
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

export default ThreadFeed