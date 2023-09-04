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

    database.posts.push({
      id: "42",
      thread: currentThread,
      author: "ekskalibur",
      title: postTitle,
      content: postContent,
      publishedDate: "420.02.2021",
      rating: "infinite",
    });

    console.log(props);
    props.change();
    setPostTitle('');
    setPostContent('');
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
<<<<<<< HEAD
        <Input className="post-form-title-input" placeholder="Title" handleChange={inputValueHandler} />
        <TextArea
          className="post-form-content-input"
=======
        <Input placeholder="Title" handleChange={inputValueHandler} value={postTitle} />
        <Input
>>>>>>> origin/main
          placeholder="Content"
          type="textarea"
          handleChange={textareaValueHandler}
          value={postContent}
        />

        <Button className="post-form-submit" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CreatePostForm;
