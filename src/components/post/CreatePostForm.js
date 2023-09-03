import React from "react";
import Input from "../shared/elements/Input";
import { useState } from "react";
import { useParams } from "react-router-dom";

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
      <form className="post-form" id="post-form" onSubmit={PostSubmitHandler}>
        <Input placeholder="Title" handleChange={inputValueHandler} />
        <Input
          placeholder="Content"
          type="textarea"
          handleChange={textareaValueHandler}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
