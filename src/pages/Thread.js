import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import database from "../components/database";

import ThreadFeed from "../components/ThreadFeed";
import CreatePostForm from "../components/post/CreatePostForm";
import { Left, Center, Right } from '../components/shared/Layout'
import Panel from "../components/shared/elements/Panel";
import ProfilePicture from '../components/shared/elements/ProfilePicture'

import "./Thread.css";

const Thread = () => {
  const [state, setState] = useState(true);
  function handleState() {
    setState(!state);
  }
  // CallBack function which updates the Thread

  const passedThread = useParams().thread;

  const threadInfo = database.getThread(passedThread)

  console.log(threadInfo)

  return (
    <>
      <Left>
        <Panel panelTitle="About thread">
          <ProfilePicture src='https://s.cdnmpro.com/465736621/p/l/7/lopata-kockasta-105-muta~5397.jpg'/>
          <div>
            Creator: {threadInfo.admin}
          </div>
          Members: {threadInfo.members.length}
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
