import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

// import Sidebar from "./Sidebar";

import "./Wrapper.css";

const Wrapper = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
};

export default Wrapper;
