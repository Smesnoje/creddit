import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// import Sidebar from "./Sidebar";

import "./Wrapper.css";

const Wrapper = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Wrapper;
