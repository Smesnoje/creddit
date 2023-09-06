import React from "react";
import { Left, Center, Right } from '../components/shared/Layout'
import NewThreadForm from "../components/thread/NewThreadForm";

import "./NewThread.css";
const NewThread = () => {
    return <>
        <Left>
        </Left>
        <Center>
            <div className="newthread-form-wrapper">
                <NewThreadForm />
            </div>
        </Center>
        <Right>
        </Right>
    </>
};

export default NewThread;
