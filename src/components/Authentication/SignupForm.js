import React, { useState } from "react";
import database from "../database";

import Input from "../shared/elements/Input";
import Button from "../shared/elements/Button"

import "./SignupForm.css"

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [pictureURL, setPictureURL] = useState(
    "https://www.021.rs//images/4acb552b73bac3e8297b40d0e35b20ea/Aleksandar_Vucic_otvaranje_kuce_bana_jelacica_16102020_(99).jpg"
  );

  const signupSubmitHandler = (event) => {
    event.preventDefault();
    database.createUser(username,password,email,pictureURL)
    setUsername('');
    setEmail('');
    setPassword('');
    setPictureURL('')
    console.log(database.users)
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  };
  const pictureChangeHandler = (event) => {
    setPictureURL(event.target.value)
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  };

  return (
    <form className="signup-form" onSubmit={signupSubmitHandler}>
      <Input
        className="signup-username"
        type="text"
        placeholder="Your Username"
        value={username}
        handleChange={usernameChangeHandler}
      />
      <Input
        className="signup-email"
        type="text"
        placeholder="Your Email"
        value={email}
        handleChange={emailChangeHandler}
      />
      <Input
        className="signup-profile-picture"
        type="text"
        placeholder="Your Profile Picture URL"
        value={pictureURL}
        handleChange={pictureChangeHandler}
      />

      <Input
        className="signup-password"
        type="password"
        handleChange={passwordChangeHandler}
        value={password}
      />
      <Button className="signup-submit-button" type="submit">Submit</Button>
    </form>
  );
};

export default SignupForm;
