import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../shared/elements/Input";
import TextArea from "../shared/elements/TextArea";
import Button from "../shared/elements/Button";
import database from "../database";

import "./CreatePostForm.css";

const CreatePostForm = (props) => {

  const currentThread = useParams().thread;

  const PostSubmitHandler = (event) => {
    event.preventDefault();

    database.createPost('djokica', currentThread, postTitle, postContent)

    setPostTitle('')
    setPostContent('')
    props.change();
  };

  const inputValueHandler = (event) => {
    setPostTitle(event.target.value);
  };

  const textareaValueHandler = (event) => {
    setPostContent(event.target.value);
  };

  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  return (
    <div className="post-form__wrapper">
      <div className="post-form-heading">Create a new post:</div>
      <form className="post-form" id="post-form" onSubmit={PostSubmitHandler}>
        <Input className="post-form-title-input" placeholder="Title" handleChange={inputValueHandler} value={postTitle}/>
        <TextArea
          value={postContent}
          className="post-form-content-input"
          placeholder="Content"
          type="textarea"
          handleChange={textareaValueHandler}
        />

        <Button className="post-form-submit" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CreatePostForm;
