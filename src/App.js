import React from "react";
import Wrapper from "./components/shared/Wrapper";


import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Wrapper>
        <Router>
          <Routes>
            <Route path="/" ></Route>
            <Route path="/bla"></Route>
          </Routes>
        </Router>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
