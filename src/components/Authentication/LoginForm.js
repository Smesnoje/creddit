import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import database from "../database";
import AuthenticationHandler from "./AuthenticationHandler";

import Input from "../shared/elements/Input";
import Button from "../shared/elements/Button";

import "./LoginForm.css";

const LoginForm = () => {
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    database.login(username, password);
    setUsername("");
    setPassword("");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    setAllChecked(usernameValid && passwordValid);
  }, [usernameValid, passwordValid]);

  const usernameInputHandler = (event) => {
    let kurcina = AuthenticationHandler("username", event.target.value);
    setUsernameValid(kurcina);
    setUsername(event.target.value);
  };

  const passwordInputHandler = (event) => {
    let kurcina = AuthenticationHandler("password", event.target.value);
    setPasswordValid(kurcina);
    setPassword(event.target.value);
  };

  return (
    <>
      <form className="login-form" onSubmit={loginSubmitHandler}>
        <Input
          className="login-username"
          type="text"
          placeholder="Your Username"
          value={username}
          handleChange={usernameInputHandler}
        />
        <Input
          className="login-password"
          type="password"
          handleChange={passwordInputHandler}
          value={password}
        />
        <Button
          className="login-submit-button"
          type="submit"
          disabled={!allChecked}
        >
          Login
        </Button>
        <NavLink className="signup-instead" to="/signup">
          No Account? Signup instead.
        </NavLink>
      </form>
    </>
  );
};

export default LoginForm;