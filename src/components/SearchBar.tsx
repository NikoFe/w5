import React from "react";
import { FaMagnifyingGlass, FaSliders } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <>
      <div className="navbar-search-bar">
        <div className="navbar-search-bar-left">
          <FaMagnifyingGlass></FaMagnifyingGlass>
          <p>Iščite po pošti</p>
        </div>
        <FaSliders></FaSliders>
      </div>
    </>
  );
};

export default SearchBar;
