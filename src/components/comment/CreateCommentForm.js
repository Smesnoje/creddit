import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../shared/elements/Input";
import TextArea from "../shared/elements/TextArea";
import Button from "../shared/elements/Button";
import database from "../database";

import "./CreateCommentForm.css";

const CreateCommentForm = (props) => {

  const postId = useParams().postId;

  const PostSubmitHandler = (event) => {
    event.preventDefault();

    database.createComment(postId, 'djolerina', postComment)

    console.log(postComment);
    props.change();
  };

  const textareaValueHandler = (event) => {
    setPostComment(event.target.value);
  };

  const [postComment, setPostComment] = useState("");

  return (
    <div className="comment-form__wrapper">
      <div className="comment-form-heading">Write a comment:</div>
      <form className="comment-form" id="comment-form" onSubmit={PostSubmitHandler}>
        <TextArea
          className="comment-form-input"
          placeholder="Type here..."
          type="textarea"
          handleChange={textareaValueHandler}
        />

        <Button className="comment-form-submit" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CreateCommentForm;
