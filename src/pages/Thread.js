import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import database from "../components/database";

import ThreadFeed from "../components/ThreadFeed";
import CreatePostForm from "../components/post/CreatePostForm";
import { Left, Center, Right } from '../components/shared/Layout'
import Panel from "../components/shared/elements/Panel";

import "./Thread.css";

const Thread = () => {
  const [state, setState] = useState(true);
  function handleState() {
    setState(!state);
  }
  // CallBack function which updates the Thread

  const passedThread = useParams().thread;

  return (
    <>
      <Left>
        <Panel panelTitle="About thread">
          govance
        </Panel>
      </Left>
      <Center>
        <div className="thread-container">
          <h1>{passedThread}</h1>
          <CreatePostForm change={handleState} thread=""></CreatePostForm>
          <ThreadFeed thread={passedThread} />
        </div>

      </Center>
      <Right></Right>
    </>
  );
};

export default Thread;
