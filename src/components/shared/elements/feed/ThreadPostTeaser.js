import React from "react";

import { ThreadPostMeta } from "./ThreadPostMeta";

import "./ThreadPostTeaser.css";

const ThreadPostTeaser = (props) => {
  return <div
    className={`single-post parent-thread-${props.parentThread}`}
    id={`post-${props.id}`}
  >
    <ThreadPostMeta author={props.author} parentThread={props.parentThread} date={props.date} />
    <div className="post-title">{props.title}</div>

    <div className="post-content">{props.content}</div>
    <hr />
  </div>;
};

export default ThreadPostTeaser;
