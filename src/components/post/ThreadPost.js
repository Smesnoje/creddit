import React from "react";

import ThreadPostMeta from "./ThreadPostMeta";
import ThreadPostRating from "./ThreadPostRating";
import CommentSection from "../comment/CommentSection";

import database from "../database";

import "./ThreadPost.css";

const ThreadPost = (props) => {

  const fetchedPost = database.posts.filter((post) => {return post.id === props.id})[0]

  return <div className="thread-post-container">
    <div className="thread-post-border">
      <div
        className={`thread-post parent-thread-${fetchedPost.parentThread}`}
        id={`post-${fetchedPost.id}`}
      >
        <ThreadPostMeta author={fetchedPost.author} parentThread={fetchedPost.thread} date={props.date} />
        <div className="post-container">
          <ThreadPostRating rating={fetchedPost.rating} />
          <div className="post-title-content">
            <div className="post-title">{fetchedPost.title}</div>
            <div className="post-content">{fetchedPost.content}</div>
          </div>
        </div>
      </div>
      <CommentSection postTitle={fetchedPost.title} />
    </div>
  </div>

};

export default ThreadPost;
