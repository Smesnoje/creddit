import React from "react";
import { useParams } from "react-router-dom";

import NoComments from "./NoComments";
import database from "../database";
import Comment from './Comment.js'
import ThreadLineFactory from "../shared/elements/ThreadLineFactory";
import ThreadLine from "./ThreadLine";

import "./CommentSection.css";

const CommentSection = (props) => {

  const fetchedComments = database.getPostComments(useParams().postId)
  
  return (<div className="comment-section">
    {fetchedComments.length > 0 ? fetchedComments.map((comment, key) => {
      return <div className="comment-section-comment" key={key}>
          <ThreadLineFactory element={ThreadLine} n={comment.depth+1}/>
          <Comment comment={comment}/>
        </div>
    }) : <NoComments />}
  </div>
  )
};

export default CommentSection;
