import React from "react";

import ThreadPostMeta from "./ThreadPostMeta";
import ThreadPostRating from "./ThreadPostRating";
import DivLink from "../DivLink";

import "./ThreadPostTeaser.css";

const ThreadPostTeaser = (props) => {
  return <DivLink to={`/t/${props.parentThread}/${props.id}`}>
    <div
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

    </div>
  </DivLink>

};

export default ThreadPostTeaser;
