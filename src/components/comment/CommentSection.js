import React from "react";

import NoComments from "./NoComments";
import database from "../database";
import Comment from './Comment.js'
import RepeatElements from "../shared/elements/RepeatElements";
import ThreadLine from "./ThreadLine";

import "./CommentSection.css";

const CommentSection = (props) => {
  const fetchedComments = database.getPostComments(props.postTitle)
  
  return (<div className="comment-section">
    {fetchedComments.length > 0 ? fetchedComments.map((comment, key) => {
      return <div key={key}>
          <RepeatElements element={ThreadLine} n={comment.depth+1}/>
          <Comment content={comment.content}/>
        </div>
    }) : <NoComments />}
  </div>
  )
};

export default CommentSection;
