import React from 'react'

import ThreadPostTeaser from './shared/elements/feed/ThreadPostTeaser'

const DUMMY_DATA = [
    {
        thread: "politika",
        author: "djoka33",
        title: "Vucic budala",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                              proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
        publishedDate: "12.09.2023",
        rating: 16
    },
    {
        thread: "droga",
        author: "nark0man",
        title: "E BURAZ",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                              proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
        publishedDate: "13.06.2023",
        rating: -100
    },
    {
        thread: "fudbal",
        author: "seksi_maradona",
        title: "Kakav fail!",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                              proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
        publishedDate: "13.01.2023",
        rating: 58
    },
    {
        thread: "tenkovi",
        author: "gavrilo7",
        title: "ja jako volim tenkove :)",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                              proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
        publishedDate: "99.04.2023",
        rating: 1852
    },
    {
        thread: "gatanje",
        author: "svetlanakovilovo",
        title: "1000din gledanje u dlan okolina kovilova",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                              proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
        publishedDate: "13.02.2023",
        rating: -5
    },
    {
        thread: "lopate",
        author: "m1ndor",
        title: "jel prodaje neko lopatu malu kasikastu za arheologiju. nudim 20din",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                              proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
        publishedDate: "1.02.2021",
        rating: -58996
    },
    {
        thread: "buvljak",
        author: "ekskalibur",
        title: "prodajem pepeo",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                              proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.",
        publishedDate: "420.02.2021",
        rating: 'infinite'
    },
]

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
