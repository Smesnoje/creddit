import React from 'react'

import ThreadPostTeaser from './shared/elements/post/ThreadPostTeaser'

import DUMMY_DATA from './DUMMY_DATA'

export const Feed = () => {
    return (
        <div id='feed-container'>
            {DUMMY_DATA.map((post, key) => {
                return <ThreadPostTeaser
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
