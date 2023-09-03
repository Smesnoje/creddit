import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DUMMY_DATA from "../components/DUMMY_DATA";

import ThreadFeed from "../components/ThreadFeed";
import CreatePostForm from "../components/post/CreatePostForm";

import "./Thread.css";

const Thread = () => {
  const [state, setState] = useState(true);
  function handleState() {
    setState(!state);
  }
  // CallBack function which updates the Thread

  const passedThread = useParams().thread;

  return (
    <div className="thread-container">
      <h1>{passedThread}</h1>
      <CreatePostForm change={handleState} thread=""></CreatePostForm>
      <ThreadFeed thread={passedThread} />
    </div>
  );
};

export default Thread;
