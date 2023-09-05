import React from "react";
import { Left, Center, Right } from '../components/shared/Layout'
import SignupForm from "../components/Authentication/SignupForm";

import "./Signup.css";
const Signup = () => {
  return <div>
    
    <>
            <Left>
            </Left>
            <Center>
                <div className="signup-form_wrapper">
                    <SignupForm/> 
                </div>
            </Center>
            <Right>
            </Right>
        </>
  </div>;
};

export default Signup;
