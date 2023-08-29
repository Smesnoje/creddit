import React from "react";

import "./ThreadPostTeaser.css";

const ThreadPostTeaser = (props) => {
  return;
  <div
    className={`single-post parent-thread-${props.parentThread}`}
    id={`post-${props.id}`}
  >
    <div className="post-meta">
      <div className="post-author">{props.author}</div>
      <div className="post-parentThread">{props.parentThread}</div>
      <div className="post-published-date">{props.date}</div>
    </div>
    <div className="post-title">{props.title}</div>

    <div className="post-content">{props.content}</div>
  </div>;
};

export default ThreadPost;
