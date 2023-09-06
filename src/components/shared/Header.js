import React from "react";

import Menu from "./navigation/Menu";
import Search from "./navigation/Search";
import LoginLogout from "./navigation/LoginLogout";

import "./Header.css";

const Header = () => {

  return (
    <header className="main-header">
      <Menu />
      <Search />
      <LoginLogout />
    </header>
  );
};
export default Header;