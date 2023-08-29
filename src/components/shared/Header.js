import React from "react";

import Menu from "./navigation/Menu";
import Input from "./elements/Input";
import Search from "./navigation/Search";

import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <Menu />
      <div className="header-search" id="header-search">
        <Search />
      </div>
    </header>
  );
};
export default Header;
