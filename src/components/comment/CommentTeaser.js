import React from "react";

import CommentMeta from "./CommentMeta";
import CommentRating from "./CommentRating";
import DivLink from "../shared/elements/DivLink";

import "./CommentTeaser.css";

const CommentTeaser = (props) => {
  console.log(props.postId)
  return <DivLink to={`/t/${props.parentThread}/${props.postId}`}>
    <div
      className={`single-comment parent-thread-${props.parentThread}`}
      id={`comment-${props.id}`}
    >
      <CommentMeta
        author={props.author} 
        parentThread={props.parentThread} 
        repplyTo={props.repplyTo} 
        date={props.date}
        title={props.title}
      />
      <div className="comment-container">
        <CommentRating rating={props.rating} />
          <div className="comment-content">{props.content.substring(0, 150) + "..."}</div>
      </div>
    </div>
  </DivLink>

};

export default CommentTeaser;
