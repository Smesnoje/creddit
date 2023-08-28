import React from "react";
import Wrapper from "./components/shared/Wrapper";
import Home from "./pages/Home";
import Profile from "./pages/Profile"

import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </Wrapper>
      </Router>
    </React.Fragment>
  );
}

export default App;
