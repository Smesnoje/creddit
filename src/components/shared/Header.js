import React from "react";

import Menu from "./navigation/Menu";
import Input from "./elements/Input";
import Search from "./navigation/Search";

import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <Menu />
      <Search />
    </header>
  );
};
export default Header;
