import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import AuthenticationHandler from "./AuthenticationHandler";
import useHttpClient from "../../hooks/useHttp";

import Input from "../shared/elements/Input";
import Button from "../shared/elements/Button";

import "./LoginForm.css";

const LoginForm = () => {
  const { isLoading, error, sendRequest } = useHttpClient()
  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest('http://localhost:3001/api/user/login', 'POST', { username: username, password: password }, { 'Content-Type': 'application/json' })
      console.log(responseData)
    } catch (err) {
      console.log(err)
    } 
    
    setIsLoggedIn(true);
    setUsername("");
    setPassword("");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  const [loggedIn, setIsLoggedIn] = useState(false);

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
