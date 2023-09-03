import React from "react";

// import ThreadPostMeta from "./ThreadPostMeta";
// import ThreadPostRating from "./ThreadPostRating";
import DivLink from "../DivLink";

import "./CommentTeaser.css";

const CommentTeaser = (props) => {
  return <DivLink to={`t/${props.parentThread}/${props.id}`}>
    <div
      className={`single-comment parent-thread-${props.parentThread}`}
      id={`comment-${props.id}`}
    >
      <CommentMeta author={props.author} parentThread={props.parentThread} repplyTo={props.repplyTo} date={props.date} />
      <div className="comment-container">
        <ThreadPostRating rating={props.rating} />
          <div className="comment-content">{props.content.substring(0, 150) + "..."}</div>
      </div>
    </div>
  </DivLink>

};

export default CommentTeaser;
