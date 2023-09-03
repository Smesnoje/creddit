import React from "react";

import NoComments from "./NoComments";

import "./CommentSection.css";

const CommentSection = (props) => {
  return <div className="comment-section">
    {props.comments ? <>comments...</> : <NoComments />}
  </div>
};

export default CommentSection;
