import React,{useState}from "react";
import database from "../database";

import Input from "../shared/elements/Input";

const LoginForm = () => {
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    database.login(username, password)
    setUsername('');
    setPassword('');

   
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameInputHandler = (event)=>{
    setUsername(event.target.value)
  }

  const passwordInputHandler = (event)=>{
    setPassword(event.target.value)
  }
  return (
    <form onSubmit={loginSubmitHandler}>
      <Input type="text" placeholder="Your Username" value={username} handleChange={usernameInputHandler}/>
      <Input type="password" handleChange={passwordInputHandler} value={password} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
