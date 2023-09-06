import React, { useState }from "react";
import database from "../database";

import Input from "../shared/elements/Input";
import Button from "../shared/elements/Button"

import './NewThreadForm.css'

const NewThreadForm = () => {
  const createThreadSubmitHandler = (event) => {
    event.preventDefault();
    database.createThread()
    setThreadName('');
  };

  const [threadName, setThreadName] = useState('');
  
  const newThreadInputHandler = (event)=>{
    setThreadName(event.target.value)
  }

  return (
    <form className="new-thread-form" onSubmit={createThreadSubmitHandler}>
      <Input className="new-thread-form-name" type="text" placeholder="Thread name" value={threadName} handleChange={newThreadInputHandler}/>
      <Button className="new-thread-form-submit-button" type="submit">Create thread</Button>
    </form>
  );
};

export default NewThreadForm;
