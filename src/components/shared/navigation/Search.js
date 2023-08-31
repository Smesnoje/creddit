import React from "react";
import Input from "../elements/Input";

import "./Search.css";

const Search = () => {
  return (
    <div className="search-container">
      <Input type="text" placeholder="Search"></Input>
    </div>
  );
};

export default Search;
