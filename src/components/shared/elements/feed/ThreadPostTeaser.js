import React from "react";

import ThreadPostMeta from "./ThreadPostMeta";
import ThreadPostRating from "./ThreadPostRating";

import "./ThreadPostTeaser.css";

const ThreadPostTeaser = (props) => {
  return <div
    className={`single-post parent-thread-${props.parentThread}`}
    id={`post-${props.id}`}
  >
    <ThreadPostMeta author={props.author} parentThread={props.parentThread} date={props.date} />
    <div className="post-container">
      <ThreadPostRating rating={props.rating} />
      <div className="post-title-content">
        <div className="post-title">{props.title}</div>
        <div className="post-content">{props.content.substring(0, 250) + "..."}</div>
      </div>
    </div>

  </div>;
};

export default ThreadPostTeaser;
