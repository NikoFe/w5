import React from "react";
import "./../styles/Navbar.css";
import "./CircleDiv";
import SearchBar from "./SearchBar";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  TbLetterMSmall,
  TbGridDots,
  TbCircleLetterNFilled,
} from "react-icons/tb";

import { FaGear } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import CircleDiv from "./CircleDiv";

const Navbar = () => {
  return (
    <div className="navbar">
      <div
        className="navbar-left-left
            "
      >
        <div className="navbar-left">
          <CircleDiv>
            <GiHamburgerMenu className="i" />
          </CircleDiv>

          <TbLetterMSmall className="i" id="navbar-m" />

          <p>Gmail</p>
        </div>
        <SearchBar></SearchBar>
      </div>

      <div className="navbar-right">
        <FaRegQuestionCircle className="i"></FaRegQuestionCircle>
        <FaGear className="i"></FaGear>
        <TbGridDots className="i"></TbGridDots>
        <TbCircleLetterNFilled className="i"></TbCircleLetterNFilled>
      </div>
    </div>
  );
};

export default Navbar;
