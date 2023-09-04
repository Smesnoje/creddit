import React from "react";

import Wrapper from "./components/shared/Wrapper";
import Home from "./pages/Home";
import User from "./pages/User";
import Thread from "./pages/Thread";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound"
import Login from "./pages/Login";

import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/u/:username" element={<User />}></Route>
            <Route path="/t/:thread/" element={<Thread />}></Route>
            <Route path="/t/:thread/:postId" element={<Post />}></Route>
            <Route path="/login" element={<Login />}></Route>

            <Route path="/*" element={<NotFound />}></Route>

          </Routes>
        </Wrapper>
      </Router>
    </React.Fragment>
  );
}

export default App;
