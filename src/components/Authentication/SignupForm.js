import React, { useState } from "react";
import database from "../database";

import Input from "../shared/elements/Input";

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
    <form onSubmit={signupSubmitHandler}>
      <Input
        type="text"
        placeholder="Your Username"
        value={username}
        handleChange={usernameChangeHandler}
      />
      <Input
        type="text"
        placeholder="Your Email"
        value={email}
        handleChange={emailChangeHandler}
      />
      <Input
        type="text"
        placeholder="Your Profile Picture URL"
        value={pictureURL}
        handleChange={pictureChangeHandler}
      />

      <Input
        type="password"
        handleChange={passwordChangeHandler}
        value={password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
