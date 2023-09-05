import React from "react";
import LoginForm from "../components/Authentication/LoginForm";
import { Left, Center, Right } from '../components/shared/Layout'


const Login = () => {

    return(
        <>
            <Left>
            </Left>
            <Center>
                <div className="login-form_wrapper">
                    <LoginForm/>
                </div>;
            </Center>
            <Right>
            </Right>
        </>
    )
};

export default Login;
